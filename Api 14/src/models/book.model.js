const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      trim: true,
    },
    book_author: {
      type: String,
      trim: true,
    },
    book_title:{
        type:String,
        trim:true,
    },
    book_desc:{
        type: String,
        trim:true,
    },
    book_price:{
        type: Number,
        trim:true,
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

const Book = mongoose.model("Book",bookSchema)

module.exports = Book