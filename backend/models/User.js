// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date },
  education: [
    {
      institute: String,
      cpi: String,
      year: Number,
    },
  ],
  experience: [
    {
      jobDescription: String,
      years: String,
      startDate: Date,
    },
  ],
  projects: [
    {
      description: String,
      link: String,
    },
  ],
  resume: {
    data: Buffer,        
    contentType: String,
  },
});

module.exports = mongoose.model('User', userSchema);
