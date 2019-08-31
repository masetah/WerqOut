const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  category: String,
  name: String,
  equipment:[String],
  duration: Number,
  direction: String,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Exercise', ExerciseSchema);