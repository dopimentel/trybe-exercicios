const generateToken = require("../utils/generateToken");

const signupRouter = express.Router();

signupRouter.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }
  const token = generateToken();
  const newUser = { email, password, firstName, phone, token };
  res.status(200).json({ token });
});

module.exports = signupRouter;
