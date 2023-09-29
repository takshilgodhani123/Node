const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  quantity: {
    type: Number,
    trim: true
  },
  category:{
    type:mongoose.Types.ObjectId,
    ref:"Category"
  },
  is_active: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;
