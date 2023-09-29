const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      trim: true,
    },
    orderStatus: {
      type: Boolean,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
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

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
