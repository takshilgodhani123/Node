const { Book } = require("../models");

//  Create category
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

//  Get category list
const getBookList = async (req, res) => {
  return Book.find({$or:[{is_active:true}]})
};

const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

const updateDetails = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
};

// delete category
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};


module.exports = {
    createBook,
  getBookList,
  getBookById,
  updateDetails,
  deleteBook
};