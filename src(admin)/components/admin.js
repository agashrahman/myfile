import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser,faUserPlus, faBookMedical,faClock,faFileCirclePlus,faChartLine,faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';
import { FirstHome } from './hameCard/homeCars';
import { Link } from 'react-router-dom';
import SideBar from './nav/sidbar';
import DashNavbar from './nav/nav';



  const Admin = () => {
    
    
    return(
      <div>
        <DashNavbar/>
        <div className='d-flex'>
          
            <SideBar/>
            <FirstHome/>
        </div>
        </div>
    )
  };
  export default Admin;