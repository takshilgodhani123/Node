const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  destination: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date,
    trim: true
  },
  endDate: {
    type: Date,
    trim: true
  },
  budget: {
    type: Number,
    trim: true
  },
  travelers: {
    type: Number,
    trim: true
  },
  bus:{
    type:mongoose.Types.ObjectId,
    ref:"Bus"
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

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
