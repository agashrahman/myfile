// TraineeDetails.js

import React, { useState } from 'react';
import './AdminDetails.css';
import { Link } from 'react-router-dom';

import SideBar from '../nav/sidbar';
import DashNavbar from '../nav/nav';



const TraineeDetails = () => {
  // Sample trainee data
  const trainees = [
    { slNo: 1, traineeName: 'John Smith', subject: 'Communication', details: 'Lorem ipsum' },
    { slNo: 2, traineeName: 'Jane Johnson', subject: 'Domain', details: 'Dolor sit amet' },
    { slNo: 3, traineeName: 'Bob Doe', subject: 'Aptitude', details: 'Consectetur adipiscing' },
    { slNo: 4, traineeName: 'Alice Brown', subject: 'Communication', details: 'Elit sed do eiusmod' },
    { slNo: 5, traineeName: 'Chris Wilson', subject: 'Domain', details: 'Tempor incididunt ut labore' },
    { slNo: 6, traineeName: 'Eva Davis', subject: 'Aptitude', details: 'Dolore magna aliqua' },
    { slNo: 7, traineeName: 'Frank Miller', subject: 'Communication', details: 'Ut enim ad minim veniam' },
    { slNo: 8, traineeName: 'Grace Taylor', subject: 'Domain', details: 'Quis nostrud exercitation' },
    { slNo: 9, traineeName: 'Harry Jones', subject: 'Aptitude', details: 'Sunt in culpa qui officia' },
    { slNo: 10, traineeName: 'Ivy Clark', subject: 'Communication', details: 'Excepteur sint occaecat cupidatat' },
    { slNo: 1, traineeName: 'John Smith', subject: 'Communication', details: 'Lorem ipsum' },
    { slNo: 2, traineeName: 'Jane Johnson', subject: 'Domain', details: 'Dolor sit amet' },
    { slNo: 3, traineeName: 'Bob Doe', subject: 'Aptitude', details: 'Consectetur adipiscing' },
    { slNo: 4, traineeName: 'Alice Brown', subject: 'Communication', details: 'Elit sed do eiusmod' },
    { slNo: 5, traineeName: 'Chris Wilson', subject: 'Domain', details: 'Tempor incididunt ut labore' },
    { slNo: 6, traineeName: 'Eva Davis', subject: 'Aptitude', details: 'Dolore magna aliqua' },
    { slNo: 7, traineeName: 'Frank Miller', subject: 'Communication', details: 'Ut enim ad minim veniam' },
    { slNo: 8, traineeName: 'Grace Taylor', subject: 'Domain', details: 'Quis nostrud exercitation' },
    { slNo: 9, traineeName: 'Harry Jones', subject: 'Aptitude', details: 'Sunt in culpa qui officia' },
    { slNo: 10, traineeName: 'Ivy Clark', subject: 'Communication', details: 'Excepteur sint occaecat cupidatat' },
  ];
 

  return (
    
    



      <div className='text-center admain-div'>
      <h2>Trainee Details</h2>
      <div className="ad_table-container">
      <table className='table  table-hover  col-lg-6 text-center col-md-5'>
      <thead className='thead-dark'>
          <tr>
            <th>Sl No</th>
            <th>Trainee Name</th>
            <th>Subject</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee) => (
            <tr key={trainee.slNo}>
              <td>{trainee.slNo}</td>
              <td>{trainee.traineeName}</td>
              <td>{trainee.subject}</td>
              <td>
                <Link to={"/AllDetails"}><button className="btn btn-primary" >
                  More Details
                </button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  
  
  );
};

export default TraineeDetails;
