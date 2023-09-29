const { Hotel } = require("../models");

const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

const getHotelslist = async (req, res) => {
  return Hotel.find({$or:[{is_active:true}]});
};

const getHotelById = async (hotelId) => {
  return Hotel.findById(hotelId);
};

const updateDetails = async (hotelId, updateBody) => {
  return Hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
};

const deleteHotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId);
};

module.exports = {
  createHotel,
  getHotelslist,
  getHotelById,
  updateDetails,
  deleteHotel,
};
