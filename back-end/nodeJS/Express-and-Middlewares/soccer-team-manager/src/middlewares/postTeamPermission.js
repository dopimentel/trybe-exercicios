const teamPermission = (req, res, next) => {
  const hasPermission = req.teams.teams.includes(req.body.sigla);
  if (!hasPermission) return next({ status: 403, message: 'Permission denied' });
  next();
  };
module.exports = teamPermission;
