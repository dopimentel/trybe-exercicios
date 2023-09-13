const jwt = require('jsonwebtoken');
const validateBody = require('../middlewares/validateBody');
// const { User } = require('../models');
const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const error = validateBody({ username, password });
  if (error) {
    return next(error);
  }
  // const user = await User.findOne({ where: { email } });
  // if (!user || !bcrypt.compareSync(password, user.password)) {
    // return res.status(401).json({
      // error: { message: 'Invalid fields' },
    // });
  // }
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { 
    username,
    admin: false,
   } }, JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = login;