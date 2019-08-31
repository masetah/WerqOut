const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  category: String,
  name: String,
  equipment:[String],
  duration: Number,
  directions: String,
});

module.exports = mongoose.model('Exercise', ExerciseSchema);