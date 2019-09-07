const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  trainer: String,
  username: {type: String, unique:true},
  password: String,
  confpassword: String,
  about: String,
});


module.exports = mongoose.model('User', UserSchema);