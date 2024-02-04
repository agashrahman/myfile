import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {HomePage} from './components/home_page/home_page';
import Streamline from './components/streamline_content/streamline';
import ManageTeam from './components/manageTeam_content/manageteam';
import Signup from './components/SignUpPage/SignUp';
import LoginDetails from './components/SignUpPage/Login';
import { MyTimer } from './components/timer/timer';
import Password from './components/SignUpPage/ForgotPassword';
import GraphComponent from './components/Reports/graphComponent';
import ForgotPassword from './components/SignUpPage/ForgotPassword';
import Features from './components/home_page/features';
import Project from './components/sidenavContents/project';
import MyCalendar from './components/calendar/calander.js'
import AboutUs from './components/AboutUs/Aboutus.js';
import MainComponent from './components/InnerHome/Modal.js';
import StudentAttendance from './components/attendance/Attendance.js';
import { Attendancedashboard, Homedashboard, MilestoneDashboard, Reportsdashboard, Timerdashboard, Tododashboard } from './components/InnerHome/dashboard.js';
import { FirstHome } from './components/firsthome/firsthome.js';
import DashNavbar from './components/navbar/navbar.js';
import Whyticktraq from './components/whyTicktraq/whyTicktraq.js';
import Industry from './components/whyTicktraq/industries.js';
import Report from './components/whyTicktraq/report.js';
import Scheduling from './components/whyTicktraq/scheduling.js';
import Timekeep from './components/whyTicktraq/timekeep.js';
import MilestoneTable from './components/milestone/milestone.js';





const App = () => {
  return (
    <>
    {/* <MainComponent/> */}
    {/* <AboutUs/>  */}
    {/* <DashNavbar/> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginDetails/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/manageteam" element={<ManageTeam />}/>
          <Route path="/streamline" element={<Streamline />}/>
          <Route path='/mainComponent' element={<Homedashboard/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/timetracker' element={<MyTimer/>}/>
          <Route path='/reports' element={<Reportsdashboard/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/calendar' element={<MyCalendar/>}/>
          <Route path='/manageteam' element={<ManageTeam/>}/>        
          <Route path='/home' element={<Homedashboard/>}></Route>
          <Route path='/timer' element={<Timerdashboard/>}></Route>
          <Route path='/attendance' element={<Attendancedashboard/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/todolist' element={<Tododashboard/>}/>
          <Route path='/whyticktraq' element={<Whyticktraq/>}/>
          <Route path='/industries' element={<Industry/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/scheduling' element={<Scheduling/>}/>
          <Route path='/timekeep' element={<Timekeep/>}/>
          <Route path='/milestoneprogress' element={<MilestoneDashboard/>}/>
        </Routes>
      </BrowserRouter>
      {/* <StudentAttendance/> */}
      {/* <Signup/> */}
    </>
  );
}

export default App;
