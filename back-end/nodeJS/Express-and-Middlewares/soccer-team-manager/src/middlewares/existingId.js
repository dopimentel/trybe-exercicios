const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some(t => t.id === id);
  if (!team) return res.status(404).json({ message: 'Time não encontrado' });
    next();
};

module.exports = existingId;
