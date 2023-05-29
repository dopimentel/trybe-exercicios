const express = require('express');
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');
const teams = require('../utils/teams');
const postTeamPermission = require('../middlewares/postTeamPermission');

let nextId = 3;

const router = express.Router();

router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials); 

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

router.use(postTeamPermission);

router.post('/', validateTeam, (req, res) => {
  if (teams.some((t) => t.sigla === req.body.sigla)
  ) {
    return res.status(422).json({ message: 'The team alredy exists' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

module.exports = router;