//manage team
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './manageteam.css';


function ManageTeam() {
  return (
    <>
      <div className='body5 '>
        <div className='teammain container-fluid d-flex row' >
          <div className='teamdiv col-lg-8 col-md-12 p-2'>
            <div className='row g-3 col-lg-9'><h2 className='text-black' >Track team activity</h2>
              <h6 className='pclass'>Invite your team so they can track time they spend on activities, see who works on what, manage workload, and send attendance data to payroll and accounting.</h6></div>

            <div>
              <div className='d-flex row  row-cols-md-3 g-3 mt-2  mb-4   col-lg-9'>
                <div className="col">
                  <h5 className="">Task Assignees</h5>
                  <p className="text-secondary">Assign team members to tasks so they can track time.</p>
                </div>

                <div className="col">
                  <h5 className="">Force Timer</h5>
                  <p className=" text-secondary">Prevent users from manually adding or editing time entries.</p>

                </div>
                <div className="col">
                  <h5 className=" ">Team Activity</h5>
                  <p className=" text-secondary">See who currently works on what and how their day looks like.</p>
                </div>
              </div>

              <div className='d-flex row row-cols-md-3 g-3 mt-5 col-lg-9'>
                <div className="col ">
                  <h5 className="">Screenshots</h5>
                  <p className=" text-secondary">Capture screenshot while working for future reference.</p>
                </div>
                <div className="col ">
                  <h5 className="">Schedule Reports</h5>
                  <p className=" text-secondary">Receive a custom report each day,  week,or month via email.</p>
                </div>

                <div className="col ">
                  <h5 className="">Time Off</h5>
                  <p className=" text-secondary">Request and approve vacations, sick leaves, and holidays.</p>
                </div>
              </div>
              <div className='d-flex row row-cols-md-3 mt-5  g-3 col-lg-9'>
                <div className="col">
                  <h5 className="">Team Calendar</h5>
                  <p className="card-text text-secondary">See how your team's day looks like, and find gaps or overlaps.</p>
                </div>

                <div className="col">
                  <h5 className="">Capacity</h5>
                  <p className=" text-secondary">See who's busy, who's available, and who's overbooked.</p>

                </div>
                <div className="col">
                  <h5 className="">Employee Scheduling</h5>
                  <p className=" text-secondary">See who's available for work and give assignments.</p>
                </div>
              </div>
            </div>
          </div>
        
            
          <div className='justify-content-center align-self-center col-lg-4 col-md-12  '>
            <img className='teamimg1 justify-content-center align-self-center  ' src='https://img.freepik.com/free-vectorhand-drawn-business-planning-with-calendar_23-2149150730.jpg?w=996&t=st=1704943784~exp=1704944384~hmac=8b42094b819d0572b83b34a93a300fea7e09d7dab359b5f2d8393aaf7d3db6ff' />
            <img className='teamimg2 justify-content-center align-self-center ' src='https://www.softwaresuggest.com/blog/wp-content/uploads/2020/02/The-Benefits-Of-Using-Time-Management-Software-768x307.png'/>
          </div>
         
          
        </div>
      </div>


    </>
  );
}


export default ManageTeam