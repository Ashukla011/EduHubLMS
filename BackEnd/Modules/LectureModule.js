const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: String,
  startTime: Date,
  endTime: Date,
  description: String,
  link: String
});
const lectureModule= mongoose.model('Lecture', lectureSchema);
module.exports ={
    lectureModule
}