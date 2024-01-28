const jwt = require('jsonwebtoken');
const validateBody = require('../middlewares/validateBody');

const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const error = validateBody({ username, password });
  if (error) return next(error);
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Incorrect username or password');
    err.statusCode = 401;
    return next(err);
  }
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
  const token = jwt.sign({ data: { 
    username,
    admin,
   } }, JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = login;