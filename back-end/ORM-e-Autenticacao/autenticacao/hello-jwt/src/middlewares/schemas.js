const Joi = require('joi');

const bodySchema = Joi.object({
  username: Joi.string().min(5).required().alphanum()
    .messages({
      'string.min': '"username" length must be at least 5 characters long',
      'string.required': '"username" is required',
      'string.alphanum': '"username" must only contain alpha-numeric characters',
  }),
  password: Joi.string().min(5).required().messages({
    'string.min': '"password" length must be 6 characters long',
    'string.required': '"password" is required',
  }),
});

module.exports = {
  bodySchema,
};
