const express=require("express")
const getStudentProfileRoute=express.Router()
const {UserModule}=require("../Modules/UserModule")

getStudentProfileRoute.get('/', async (req, res) => {
    try {
      const userId = req.user;
      console.log(userId)
      const user = await UserModule.findById(userId).select('-password');
      if (!user) {
       res.send({ message: "User not found" });
     }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.send({ message: "Server Error" });
    }
  });
  
  // Update student profile
  getStudentProfileRoute.put('/editProfile', async (req, res) => {
    try {
      const userId = req.user.id;
      const { username, email } = req.body;
      const user = await UserModule.findById(userId);
      if (!user) {
        res.send({ message: "User not found" });
      }
      user.username = username || user.username;
      user.email = email || user.email;
      await user.save();
      res.json({ message: "Profile updated successfully" });
    } catch (error) {
      console.error(error);
     res.send({ message: "Server Error" });
    }
  });
  module.exports={getStudentProfileRoute}