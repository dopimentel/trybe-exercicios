const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = existingId;
