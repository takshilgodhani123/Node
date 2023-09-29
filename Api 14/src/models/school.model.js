const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  foundedYear: {
    type: Number,
    trim: true
  },
  studentCount: {
    type: Number,
    trim: true
  },
  teachersCount: {
      type: String,
    trim: true
},
  website: {
    type:String,
    trim: true
  },

  Email:{
    type : String ,
    trim: true
  },
  phoneNumber:{
    type:Number,
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

const School = mongoose.model('School', schoolSchema);

module.exports = School;
