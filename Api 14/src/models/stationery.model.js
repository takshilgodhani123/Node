const mongoose = require("mongoose");

const stationerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    book:{
      type:mongoose.Types.ObjectId,
      ref:"Book"
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Stationery = mongoose.model("Stationery", stationerySchema);

module.exports = Stationery;
