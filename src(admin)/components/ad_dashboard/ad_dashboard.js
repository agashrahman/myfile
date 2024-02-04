import Batch from "../AddBatch/AddBatch";
import AdminDetails from "../Details/AdminDetails";
import StudentDetails from "../Details/StudentDetails";
import TraineeDetails from "../Details/TraineeDetails";
import StudentAttendance from "../attendance/attendance";
import CreateStudent from "../createProfile/CreateStudentsProfile";
import CreateTrainer from "../createProfile/CreateTrainerProfile";
import CreateTrainerProfile from "../createProfile/CreateTrainerProfile";
import { FirstHome } from "../hameCard/homeCars";
import DashNavbar from "../nav/nav";
import MainComponent from "../nav/sidbar";
import SideBar from "../nav/sidbar";
import './ad_dashboard.css'
import Details from "../Details/details";
import Mode from "../model/Mode";
import Category from "../category/category";

export function Ad_dashboardhome() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar/>
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <FirstHome/>
          </div>
          
        </div>
      </>
    );
  }

  export function Ad_dashboardCreate() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <div ><CreateTrainer /></div>
          </div>
        </div>
      </>
    );
  }

  export function AdStu_dashboardCreate() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <div ><CreateStudent /></div>
          </div>
        </div>
      </>
    );
  }

  export function Attendance_dashboardCreate() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex attendance_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="dashside d-flex">
            <div ><StudentAttendance className="studentAtten_dash mb-2" style={{ zIndex: 1 }}/></div>
          </div>
        </div>
        </div>
      </>
    );
  }

  export function Ad_dashboard_AdDetails() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="AdDetails w-auto dashside d-flex">
            <MainComponent className="maincomp " />
            <AdminDetails className="ad_details" />
          </div>
        </div>
      </>
    );
  }

  export function Ad_dashboard_TrDetails() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="col-lg-12">
            <TraineeDetails className="studentAtten_dash mb-2"/>
          </div>
        </div>
        </div>
      </>
    );
  }

  export function Ad_dashboard_StDetails() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="col-lg-12">
            <StudentDetails className="studentAtten_dash mb-2"/>
          </div>
        </div>
        </div>
      </>
    );
  }

  export function Ad_dashboard_Batch() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="col-lg-12">
            <Batch className="studentAtten_dash mb-2"/>
          </div>
        </div>
        </div>
      </>
    );
  }

  export function Ad_dashboard_Details() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
          <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
            <div className="attendance_main"><Details className="maincomp  ms-2" /></div>
         
        </div>
        </div>
      </>
    );
  }


  export function Ad_dashboard_Mode() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="col-lg-12">
            <Mode className="studentAtten_dash mb-2"/>
          </div>
        </div>
        </div>
      </>
    );
  }


  export function Ad_dashboard_Category() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="d-flex trdetails_comp ms-2">
            <div className="attendance_main"><MainComponent className="maincomp  ms-2" /></div>
          <div className="cat_dash col-lg-12">
            <Category className="studentAtten_dash mb-2"/>
          </div>
        </div>
        </div>
      </>
    );
  }