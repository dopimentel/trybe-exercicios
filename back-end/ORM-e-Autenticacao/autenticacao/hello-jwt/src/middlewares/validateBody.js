const { bodySchema } = require('./schemas');

const validateBody = (body) => {
  console.log(body);
  const { error } = bodySchema.validate(body);
  console.log(error);
  return error;
};

module.exports = validateBody;
