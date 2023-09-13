const error = require('./error');
const schema = require('./schemas');
const validateBody = require('./validateBody');
const auth = require('./auth');

module.exports = {
  error,
  schema,
  validateBody,
  auth,
};
