const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  trainer: {type: String, required: true},
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  about: String,
});


module.exports = mongoose.model('User', UserSchema);