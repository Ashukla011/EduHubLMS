const express = require("express")
const {lectureModule} = require("../Modules/LectureModule")
const lectrueRoute = express.Router()


lectrueRoute.post('/createlecture', async (req, res) => {
  try {
    const payload = req.body;
    const lecture = new lectureModule(payload);
    await lecture.save();
    res.json(lecture);
  } catch (error) {
    console.error(error);
    res.send({ message: "Server Error" });
  }
});

// Get all lectures for a course
lectrueRoute.get('/lectures/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const lectures = await lectureModule.find({ courseId });
    res.json(lectures);
  } catch (error) {
    console.error(error);
    res.send({ message: "Server Error" });
  }
});

module.exports={lectrueRoute}