const joi = require("joi");

const createSchool = {
  body: joi.object().keys({
    name: joi.string().required().trim(),
    location: joi.string().required().trim(),
    foundedYear: joi.string().required().trim(),
    studentCount: joi.number().required(),
    teachersCount: joi.number().required(),
    website: joi.string().required().trim(),
    Email: joi.string().required().trim(),
    phoneNumber: joi.number().required(),
  }),
};

module.exports = { createSchool };
