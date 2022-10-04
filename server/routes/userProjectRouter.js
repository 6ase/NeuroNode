/* eslint-disable max-len */
const express = require('express');
const {
  Project, Node, Connection, Statistic,
} = require('../db/models');

const router = express.Router();

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, img } = req.body;
    const editedProject = await Project.findByPk(id);
    await editedProject.update({ name, desc, img });
    res.json(editedProject);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByPk(id, {
    include: [{ model: Node, include: [{ model: Connection }] }],
  });

  res.json(project);
});
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const project = await Project.findByPk(id, {
//     include:
//       [{
//         model: Statistic, include: [{ model: Connection, include: [{ model: Node }] }],
//       }],
//   });
//   res.json(project);
// });
router.post('/', async (req, res) => {
  // console.log('REQBODY:', req.body);
  const { id } = req.body;
  console.log('ID-------------------------------------------->', id);
  const projects = await Project.findAll({
    where: { user_id: id },
    include:
      [{
        model: Statistic, include: [{ model: Connection, include: [{ model: Node }] }],
      }],
  });
  res.json(projects);
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;