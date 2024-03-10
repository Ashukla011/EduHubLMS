const express=require("express");
const studentRoute=express.Router();
const {UserModule}=require("../Modules/UserModule");
const {lectureModule}=require("../Modules/LectureModule");

studentRoute.put('/courses', async (req, res) => {
    try {
      const { courses } = req.body;
      const userId = req.user.id;
      const user = await UserModule.findById(userId);
      if (!user) {
        res.send({ message: "User not found" });
      }
      user.courses = courses;
      await user.save();
      res.json({ message: "Course selection updated successfully" });
    } catch (error) {
      console.error(error);
     res.send({ message: "Server Error" });
    }
  });

  // Get lectures for the courses a student has selected
  studentRoute.get('/lectures', async (req, res) => {
    try {
      const userId = req.user.id;
      console.log(userId)
      const user = await UserModule.findById(userId).populate('courses');
      if (!user) {
        res.send({ message: "User not found" });
      }

      
      const lectures = await lectureModule.find({ courseId: { $in: user.courses } });
      res.json(lectures);
    } catch (error) {
      console.error(error);
      res.send({ message: "Server Error" });
    }
  });

  module.exports={studentRoute}