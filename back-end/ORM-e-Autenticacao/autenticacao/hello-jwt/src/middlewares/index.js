const error = require('./error');
const schema = require('./schemas');
const validateBody = require('./validateBody');
const auth = require('./auth');
const isAdmin = require('./isAdmin');

module.exports = {
  error,
  schema,
  validateBody,
  auth,
  isAdmin,
};
