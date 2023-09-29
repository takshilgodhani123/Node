const { Category } = require("../models");

//  Create category
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

//  Get category list
const getCategoryList = async (req, res) => {
  return Category.find({$or:[{is_active:true}]})
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

// delete category
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};


module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateDetails,
  deleteCategory
};