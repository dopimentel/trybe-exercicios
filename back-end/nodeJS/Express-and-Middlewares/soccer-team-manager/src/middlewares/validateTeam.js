const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return next({ status: 400, message: 'The nome field is required' });
  if (!sigla) return next({ status: 400, message: 'The sigla field is required' });
  next();
};

module.exports = validateTeam;
