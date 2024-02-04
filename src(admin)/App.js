import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Admin from "./components/admin";
import CreateAdminProfile from "./components/createProfile/CreateAdminProfile";
import CreateTrainerProfile from "./components/createProfile/CreateTrainerProfile";
import CreateStudentsProfile from "./components/createProfile/CreateStudentsProfile";
import AdminDetails from "./components/Details/AdminDetails";
import StudentDetails from "./components/Details/StudentDetails";
import TraineeDetails from "./components/Details/TraineeDetails";
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Details from './components/Details/details';
import Admin from './components/admin';
import ClockHome from './components/hameCard/clock';
import { FirstHome } from './components/hameCard/homeCars';
import StudentAttendance from './components/attendance/attendance';
import Batch from './components/AddBatch/AddBatch';
import MilestoneTable from './components/Mileston/Mileston';
import SideBar from './components/nav/sidbar';
import Profile from './components/MyProfile/myProfile';
import Mode from './components/model/Mode';
import Branch from './components/Branch/Branch';
import Category from './components/category/category';
import DashNavbar from './components/nav/nav';
import { AdStu_dashboardCreate, Ad_dashboardCreate, Ad_dashboard_AdDetails, Ad_dashboard_Batch, Ad_dashboard_Category, Ad_dashboard_Details, Ad_dashboard_Mode, Ad_dashboard_StDetails, Ad_dashboard_TrDetails, Ad_dashboardhome, Attendance_dashboardCreate } from './components/ad_dashboard/ad_dashboard';



function App() {
  return (
   
      <BrowserRouter>
  <Routes>
    <Route path="/" element={[<Ad_dashboardhome/>]}></Route>
    <Route path="/createtrainer" element={[<Ad_dashboardhome/>]}></Route>
    <Route path="/AddTrainee" element={[<Ad_dashboardCreate/>]}></Route>
    <Route path="/AddStudent" element={[<AdStu_dashboardCreate/>]}></Route>
    <Route path="/AdminAttendance" element={[<Attendance_dashboardCreate/>]}></Route>
    <Route path="/AdminDetails" element={[<Ad_dashboard_AdDetails/>]}></Route>
    <Route path="/TraineeDetails" element={[<Ad_dashboard_TrDetails/>]}></Route>
    <Route path="/StudentDetails" element={[<Ad_dashboard_StDetails/>]}></Route>
    <Route path="/Batch" element={[<Ad_dashboard_Batch/>]}></Route>
    <Route path="/Details" element={[<Ad_dashboard_Batch/>]}></Route>
    <Route path="/AllDetails" element={[<Ad_dashboard_Details/>]}></Route>
    <Route path="/AdminMode" element={[<Ad_dashboard_Mode/>]}></Route>
    <Route path="/AdminCategory" element={[<Ad_dashboard_Category/>]}></Route>
  </Routes>
  </BrowserRouter>





   
  );
}

export default App;
