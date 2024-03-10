
const express = require("express")
const courseRouter = express.Router()
const {courseModule} = require("../Modules/CourseModule")


courseRouter.post('/createcourse', async (req, res) => {
  try {
    const { courseName, description, prerequisites } = req.body;
    const course = new courseModule({ courseName, description, prerequisites });
    await course.save();
    res.json(course);
  } catch (error) {
    console.error(error);
    res.send({ message: "Server Error" });
  }
});
// Get all courses
courseRouter.get('/', async (req, res) => {
  try {
    const courses = await courseModule.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.send({ message: "Server Error" });
  }
});


module.exports={courseRouter}