const mongoose = require('mongoose');

const jewelrySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location :{
    type: String,
    trim: true
  },
  material: {
    type: String,
    trim: true
  },
  gemstone: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
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

const Jewelry = mongoose.model('Jewelry', jewelrySchema);

module.exports = Jewelry;
