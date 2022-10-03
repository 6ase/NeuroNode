const express = require('express');
const { Node, Connection } = require('../db/models');

const router = express.Router();

router.get('/first/:id', async (req, res) => {
  const { id } = req.params;
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id, isFirst: true },
  });
  res.json(firstNode);
});

router.get('/allinproject/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id);
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: node.project_id },
  });
  res.json(firstNode);
});

router.get('/byid/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id, {
    include:
      [{ model: Connection }],
  });
  res.json(node);
});

router.post('/new', async (req, res) => {
  const { name, content } = req.body;
  const newNode = await Node.create({ name, content });
  res.json(newNode);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, isFirst } = req.body;
    const editedNode = await Node.findByPk(id);
    await editedNode.update({ name, content, isFirst });
    res.json(editedNode);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
