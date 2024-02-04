// AdminDetails.js

import React, { useState } from 'react';
import './AdminDetails.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser, faSignOutAlt,faClock,faFileCirclePlus,faChartLine,faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../nav/sidbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashNavbar from '../nav/nav';



const AdminDetails = () => {
  // Sample admin data
  const admins = [
    { slNo: 1, adminName: 'John Doe', position: 'Admin', details: 'Lorem ipsum' },
    { slNo: 2, adminName: 'Jane Doe', position: 'Manager', details: 'Dolor sit amet' },
    { slNo: 3, adminName: 'Bob Smith', position: 'Supervisor', details: 'Consectetur adipiscing' },
    { slNo: 4, adminName: 'Alice Johnson', position: 'Coordinator', details: 'Elit sed do eiusmod' },
  ];
 
 
 
  
  
  
  


  return (
   
    
    
   
    <div className='col-lg-10 mt-3 ' >
      <h2 className='text-center'>Admin Details</h2>
      
      <table className='table table-bordered table-striped table-hover ms-4 col-lg-6 text-center col-md-5'>
      <thead className='thead-dark'>
        <tr>
          <th>Sl No</th>
          <th>Admin Name</th>
          <th>Position</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin.slNo}>
            <td>{admin.slNo}</td>
            <td>{admin.adminName}</td>
            <td>{admin.position}</td>
            <td>
              <Link to={"/AllDetails"}><button
                type="button"
                className="btn btn-primary"
                data-toggle="tooltip"
                data-placement="top">
                More Details
              </button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  
   
  );
};

export default AdminDetails;
