const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_desc: {
      type: String,
      trim: true,
    },
    price:{
        type:Number,
        trim:true,
    },
    quantity:{
        type: String,
        trim:true,
    },
    status:{
      type : Boolean ,
      default : false
    },
    is_active: {
      type: Boolean,
    default: true,
    },
    category:{
      type:mongoose.Types.ObjectId,
      ref:"Category"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product",productSchema)

module.exports = Product