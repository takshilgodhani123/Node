const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    trim: true,
  },
  operatingHours: {
    type: String,
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

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;
