const express = require('express');
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');
const teams = require('../utils/teams');

let nextId = 3;

const router = express.Router();

router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials); 

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

router.post('/', validateTeam, (req, res) => {
  const hasPermission = req.teams.teams.includes(req.body.sigla);
  if (
    !hasPermission
    || teams.some((t) => t.sigla === req.body.sigla)
  ) {
    return res.status(422).json({ message: !hasPermission ? 'Sem Permissão'
     : 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
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

module.exports = router;