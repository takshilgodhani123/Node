const Joi = require("joi");

/** create book */
const createBook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_author: Joi.string().required().trim(),
    book_title: Joi.string().required().trim(),
    book_desc: Joi.string().required().trim(),
    book_price: Joi.string().required().trim()
  }),
};
module.exports = {
    createBook,
};