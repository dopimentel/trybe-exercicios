const { bodySchema } = require('./schemas');

const validateBody = (body) => {
  const { error } = bodySchema.validate(body);
  return error;
};

module.exports = validateBody;
