import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog,faComment, faUser, faSignOutAlt, faClock, faFileCirclePlus, faChartLine, faPeopleGroup, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './Modal.css';

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
        <Link to='/home' className='sidenavText element-home'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-home' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Home</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faHome} />Home
          </li>
        </Link>
        <Link to='/timer' className='sidenavText element-tasktracker'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-tasktracker' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Task Tracker</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className='sidebar_icons mt-3' icon={faClock} />Task Tracker
          </li>
        </Link>
        <Link to='/todolist' className='sidenavText element-todo'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-todo' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>To do List</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faList} />To do List
          </li>
        </Link>
        <Link to='/attendance' className='sidenavText element-att'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-att' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Attendance Sheet</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faFileCirclePlus} />Attendance Sheet
          </li>
        </Link>
        <Link to='/milestoneprogress' className='sidenavText element-milestoneprogress'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-milestoneprogress' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Milestone Progress</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon icon={faSpinner} className='sidebar_icons mt-3' />Milestone Progress
          </li>
        </Link>
        <Link to='#' className='sidenavText element-feedback'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-feedback' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Feedback</Tooltip>
          )}
          <li className='sidenavicon'>
          <FontAwesomeIcon icon={faComment} className='sidebar_icons mt-3'/>Feedback 
          </li>
        </Link>
        <Link to='' className='sidenavText element-myprofile'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-myprofile' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>My Profile</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faUser} />My Profile
          </li>
        </Link>
        <Link to='/reports' className='sidenavText element-report'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-report' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Reports</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons mt-3" icon={faChartLine} />Reports
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
