const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId')
const teams = require('./utils/teams');
const apiCredentials = require('./middlewares/apiCredentials');
require('express-async-errors'); 
const morgan = require('morgan');

let nextId = 3;

const app = express();
app.use(morgan('dev'));


app.use(express.json());

app.use(apiCredentials); 


app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});


app.post('/teams', validateTeam, (req, res) => {
  const hasPermission = req.teams.teams.includes(req.body.sigla)
  if (
    !hasPermission
    || teams.some((t) => t.sigla === req.body.sigla)
  ) {
    return res.status(422).json({ message: !hasPermission ? 'Sem Permissão' : 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;