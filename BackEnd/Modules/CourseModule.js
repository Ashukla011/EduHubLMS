const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: String,
  description: String,
  prerequisites: [String]
});

 const courseModule = mongoose.model('Course', courseSchema);

 module.exports={courseModule}