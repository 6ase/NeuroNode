require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const {
  User, Project, Node, Connection, Category, Statistic,
} = require('./db/models');

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'no_secure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/logout', async (req, res) => {
  res.clearCookie('mega-cookie'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

app.post('/login', async (req, res) => {
  const databaseUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (databaseUser && await bcrypt.compare(req.body.password, databaseUser.password)) {
    const sessionData = {
      name: databaseUser.name,
      email: databaseUser.email,
      id: databaseUser.id,
    };
    req.session.userSession = sessionData;
    res.json(sessionData);
  } else res.sendStatus(401);
});

app.post('/signup', async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      password,
      name: req.body.name,
      email: req.body.email,
    },
  });
  const sessionData = {
    name: currentUser.name,
    email: currentUser.email,
    id: currentUser.id,
  };
  req.session.userSession = sessionData;
  if (!created) res.sendStatus(405);
  else res.json({ name: currentUser.name, email: currentUser.email, id: currentUser.id });
});

app.get('/projects', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

app.get('/allcategories', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

app.post('/addproject', async (req, res) => {
  const {
    name, desc, img, category_id,
  } = req.body;
  const newProject = await Project.create({
    name, desc, img, category_id,
  });
  res.json(newProject);
});

app.post('/addstat', async (req, res) => {
  const { id, nodeId } = req.body;
  const newStat = await Statistic.create({
    project_id: id, connection_id: nodeId,
  });
  res.json(newStat);
});

app.get('/getstat', async (req, res) => {
  const stats = await Statistic.findAll({
    include:
    [{ model: Connection, include: [{ model: Node }] }],
  });
  res.json(stats);
});

app.get('/getstat/:id', async (req, res) => {
  const { id } = req.params;
  const projectStat = await Project.findByPk(id, {
    include:
        [{ model: Statistic, include: [{ model: Connection, include: [{ model: Node }] }] }],
  });
  res.json(projectStat);
});

app.get('/firstnode/:id', async (req, res) => {
  const { id } = req.params;
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id, isFirst: true },
  });
  res.json(firstNode);
});

app.get('/project/:id', async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByPk(id, { include: [{ model: Category }] });
  res.json(project);
});

app.get('/projectbycategory/:id', async (req, res) => {
  const { id } = req.params;
  const projectsInCategory = await Project.findAll({
    include: [{ model: Category }],
    where: { category_id: id },
  });
  res.json(projectsInCategory);
});

app.get('/node/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id, {
    include:
    [{ model: Connection }],
  });
  res.json(node);
});

app.get('/categories', async (req, res) => {
  const allCategories = await Category.findAll({ include: [{ model: Project }] });
  res.json(allCategories);
});

app.get('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const projects = await Project.findAll({ where: { category_id: id } });
  res.json(projects);
});

// app.get('/cards', async (req, res) => {
//   const firstCard = await Project.findAll();
//   res.json(firstCard);
// });

app.listen(process.env.PORT, () => {
  console.log('Server start: ', process.env.PORT);
});
