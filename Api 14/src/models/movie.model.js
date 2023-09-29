const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  director: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  show: {
    type: Number,
    trim: true
  },
  seat: {
    type: String,
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  music:{
    type:mongoose.Types.ObjectId,
    ref: "Music",
  },
},
{
  timestamps: true,
  versionKey: false,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
