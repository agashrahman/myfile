import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser, faSignOutAlt, faClock, faFileCirclePlus, faChartLine, faPeopleGroup, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './sidbar.css'

import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => (
  <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`} style={{ marginTop: '0rem' }}>
    {!isSidebarOpen && (
      <button className="toggle-button ms-2" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    )}
    {isSidebarOpen && (
      <button className="close-button" onClick={closeSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    )}

    <div className='sidebar_mainDiv '>
      <ul>
        <Link to='/' className='sidenavText element-home'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-home' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Home</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faHome} />Home
          </li>
        </Link>

        <Link>
        {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-profile' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Create Profile</Tooltip>
          )}
        <li className="dropdown ms-1 element-profile">
        
              <a href="#"> <FontAwesomeIcon className="sidebar_icons" icon={faFileCirclePlus} />Create Profile</a>
             
              <div className="dropdown-content">
              <Link to={"/AddTrainee"}><li className="nav-item">Add Trainee </li></Link>
              <Link to={"/AddStudent"}><li className="nav-item">Add Student</li></Link>
              
              </div>
        </li>
        </Link>

        <Link>
        {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-details' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Details</Tooltip>
          )}
        <li className="dropdown ms-1 element-details">
        
              <a href="#"> <FontAwesomeIcon className="sidebar_icons" icon={faList} />Details</a>
             
              <div className="detailsdropdown-content">
              <Link to={"/AdminDetails"}><li className="nav-item">Admin Details</li></Link>
              <Link to={"/TraineeDetails"}><li className="nav-item">Trainee Details</li></Link>
              <Link to={"/StudentDetails"}><li className="nav-item">Student Details</li></Link>
              
              </div>
        </li>
        </Link>


        <Link to='/AdminAttendance' className='sidenavText element-att'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-att' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Attendance Sheet</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faFileCirclePlus} />Attendance Sheet
          </li>
        </Link>

        <Link to='/batch' className='sidenavText element-batch'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-batch' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Batch</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon icon={faSpinner} className='sidebar_icons mt-3' />Batch
          </li>
        </Link>
        <Link to='/AdminMode' className='sidenavText element-mode'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-mode' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Mode</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faUser} />Mode
          </li>
        </Link>
        <Link to='/AdminCategory' className='sidenavText element-report'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-report' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Category</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faChartLine} />Category
          </li>
        </Link>
        <Link to='/aboutus' className='sidenavText element-aboutus'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-aboutus' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>About Us</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faPeopleGroup} />About Us
          </li>
        </Link>
      </ul>
    </div>
  </div>
);

const MainComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div>
      {/* <Navbar userName="User Name" profilePic="https://example.com/profile-pic.jpg" onLogout={handleLogout} /> */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
    </div>
  );
};

export default MainComponent;
