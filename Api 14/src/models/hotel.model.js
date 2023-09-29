const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
    },
    table: {
      type: Number,
    },
    room: {
      type: Number,
    },
    location: {
      type: String,
      trim: true,
    },
    travel:{
      type:mongoose.Types.ObjectId,
      ref:"Treavel"
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
