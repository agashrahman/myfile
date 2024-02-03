import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser, faSignOutAlt, faClock, faFileCirclePlus, faChartLine, faPeopleGroup, faSpinner, faComment } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './stu_sidebar.css';

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
        <Link to='/stuhome' className='sidenavText element-home'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-home' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Home</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faHome} />Home
          </li>
        </Link>

        <Link to='/stutodo' className='sidenavText element-todo'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-todo' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Todo</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faList} />Todo
          </li>
        </Link>

        <Link to='/stufeed' className='sidenavText element-feedback'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-feedback' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>Feedback</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faComment} />Feedback
          </li>
        </Link>

        <Link to='/stuprofile' className='sidenavText element-profile'>
          {!isSidebarOpen && (
            <Tooltip anchorSelect='.element-profile' place='left' className='tooltip-contents' style={{ zIndex: 1000, marginLeft: '-215px', backgroundColor: '#1BA098' }}>My Profile</Tooltip>
          )}
          <li className='sidenavicon'>
            <FontAwesomeIcon className="sidebar_icons" icon={faUser} />My Profile
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
