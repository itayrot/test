// backend/src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastName: {
    type: String,
    require: true,
  },
  level: {
    type: Number,
    require: true
  },
  job: {
    type: String,
    require: true
  },
  senurity: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('User', UserSchema);
