const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some((t) => t.id === id);
  if (!team) return next({ status: 404, message: 'ID not found' });
    next();
};

module.exports = existingId;
