
import MainComponent from "./Modal";
import { MyTimer } from "../timer/timer";
import './dashboard.css'
import StudentAttendance from "../attendance/Attendance";
import { FirstHome } from "../firsthome/firsthome";
import MyCalendar from "../calendar/calander";
import React, { useState } from 'react';
import GraphComponent from "../Reports/graphComponent";
import DashNavbar from "../navbar/navbar";
import MilestoneTable from "../milestone/milestone";

export function Timerdashboard() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <MyTimer/>
          </div>
        </div>
      </>
    );
  }

export function Homedashboard(){
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <div ><FirstHome /></div>
          </div>
        </div>
      </>
    );
}

export function Tododashboard() {
    return (
        <>
          <div className="dashbody">
            <div className="dashnav">
              <DashNavbar />
            </div>
            <div className="dashside d-flex">
              <MainComponent className="maincomp " />
              <div ><MyCalendar /></div>
            </div>
          </div>
        </>
      );
    
}

export function Attendancedashboard() {
    return (
        <>
          <div className="dashbody">
            <div className="dashnav">
              <DashNavbar />
            </div>
            <div className="dashside d-flex">
              <MainComponent className="maincomp " />
              <div ><StudentAttendance /></div>
            </div>
          </div>
        </>
      );
    
}

export function Reportsdashboard() {
    return(
        <>
        <DashNavbar/>
        <div className="reportDashMain">
            <div className="reportDashSecond container-fluid">
                    <div className="col-lg-12 position-fixed p-0 d-flex container-fluid">
                        <div className="ms-2 "><MainComponent/></div>
                        <div className="col-lg-10"><GraphComponent/></div>
                    </div>
            </div>
        </div>    
        </>
    );
}

export function MilestoneDashboard(){
    return (
        <>
          <div className="dashbody">
            <div className="dashnav">
              <DashNavbar />
            </div>
            <div className="Milestonedashside d-flex">
              <MainComponent className="maincomp " />
              <div className="ms-5" ><MilestoneTable /></div>
            </div>
          </div>
        </>
      );
}




