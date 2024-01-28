const jwt = require('jsonwebtoken');

const extractToken = (authorization) => authorization.split(' ')[1];

const auth = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }
  try {
    const token = extractToken(authorization);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.data;
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
  next();
};

module.exports = auth;