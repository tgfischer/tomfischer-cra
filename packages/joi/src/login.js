const Joi = require("joi");

module.exports.loginSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required()
});

module.exports.resetTemporaryPasswordSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  session: Joi.string().required()
});
