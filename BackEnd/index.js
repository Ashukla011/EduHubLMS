const express=require("express")
const {authRoutes}=require("./Routes/authRoutes");
const {connection}=require("./config/db");
const { studentRoute } = require("./Routes/studentCourse");
const { getStudentProfileRoute } = require("./Routes/getStudentProfile");
const {courseRouter} = require("./Routes/CourseRouter");
const { lectrueRoute } = require("./Routes/LectureRoutes");

const app=express();
          
         require("dotenv").config();     
        app.use(express.json());
 
    
        app.use("/auth",authRoutes);
        app.use("/student",studentRoute)
        app.use("/profile",getStudentProfileRoute)
       app.use("/courses" ,courseRouter )
       app.use("/lectures",lectrueRoute)

   
        

        const PORT =process.env.PORT || 5000;
        app.listen(PORT, async()=>{
            try{
                await connection ;
                console.log(`Server started on port ${PORT}`);
            }catch(err){
             console.log(err);
            }
        });