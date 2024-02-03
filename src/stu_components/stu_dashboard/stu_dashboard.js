import DashNavbar from "../stu_nav/stu_nav";
import MainComponent from "../stu_sidebar/stu_sidebar";
import ClockHome from "../stu_clock/stu_clock";
import './stu_dashboard.css'
import { FirstHome } from "../stu_home/stu_home";
import MyCalendar from "../stu_todo/stu_todo";
import StaffFeedback from "../stu_feedback/stu_feedback";

export function Studashhome(){
  return(
    <>
    <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside p-0 ms-3 d-flex">
            <MainComponent className="maincomp " />
            <FirstHome className="mytimerDash" />
          </div>
        </div>
    </>
  );
}

export function Studashtodo(){
  return(
    <>
    <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside p-0 ms-3 d-flex">
            <MainComponent className="maincomp " />
            <MyCalendar className="mytimerDash" />
          </div>
        </div>
    </>
  );
}

export function Studashfeed(){
  return(
    <>
    <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside p-0 ms-3 d-flex">
            <MainComponent className="maincomp " />
            <div className="mx-auto"><StaffFeedback/></div>
          </div>
        </div>
    </>
  );
}