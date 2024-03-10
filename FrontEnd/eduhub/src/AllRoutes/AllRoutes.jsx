
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import detailsOfCourse from '../Pages/detailsOfCourse'
import StudentCourse from '../Pages/StudentCourse'
import StudentLecture from '../Pages/StudentLecture'
import CreateCourse from '../Pages/CreateCourse'
import CreateLecture from '../Pages/CreateLecture'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/singup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/StudentCourse" element={<StudentCourse />} />
    <Route path="/StudentLecture" element={<StudentLecture />} />
    
    <Route path="/CreateCourse" element={<CreateCourse />} />
    <Route path="/CrateLecture" element={<CreateLecture />} />
    <Route path="/detailsOfCourse" element={<detailsOfCourse />} />
    
  </Routes>
  )
}

export default AllRoutes