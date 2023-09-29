const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      trim: true,
    },
    bus_name: {
      type: String,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    seatingCapacity: {
      type: Number,
    },
    manufacturer: {
      type: String,
      trim: true,
    },
    yearOfManufacture: {
      type: Number,
    },
    driverName: {
      type: String,
      trim: true,
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

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
