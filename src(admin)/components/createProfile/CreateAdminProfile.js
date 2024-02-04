import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser, faSignOutAlt,faClock,faFileCirclePlus,faChartLine,faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';

import './signupp.css'

import { Link } from 'react-router-dom';
import SideBar from '../nav/sidbar';
import DashNavbar from '../nav/nav';



  
  const CreateAdminProfile = () => {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      setUsername('');
      setPassword('');
    };
  
    
  
    const handleLogout = () => {
      console.log('Logout clicked');
    };

  return (
    <div>
      <DashNavbar/>
    <div className='d-flex'>
      <SideBar/>
      <div className=" studentsignupsDiv container-fluid">
        <div className='d-flex text-center mx-auto gap-5'>
        <div className='mt-2 '>
        
        </div>
      <div className="tick row justify-content-center col-lg-12 ">
         <h1 className='h1get   '>Get started with TickTraq</h1>
         <h3 className='h1get   '>Create Trainer Profile</h3>
         
         <h6 className='h6text text-secondary me='>Powered by KGiSL Microcollege Learners </h6>
          <a className='aget text-center mx-auto' href='learn more'>Learn More</a>
       </div>
         </div>
        
      <div className=' mx-auto row'>
      <div className="containerrr  text-center mx-auto d-block  h-auto rounded col-lg-5 col-md-12 ">
      <div className="textt">Personal details</div>
      <form action="#">
        <div className='d-flex gap-5'>
      <div className="dataaa">
          <input type="text" placeholder="First name" required />
        </div>
        <div className="dataaa">
          <input type="text" placeholder="Last name" required />
        </div>
        </div>
       
        <div className="dataaa">
          <input type="text" placeholder="Phone number" required />
        </div><div className='d-flex gap-3'>
        <div className='gender text-start rounded'>
          Gender
        </div>
        <div className="dataaa d-flex gap-2  mt-2">
         <div className='d-flex gap-1'>
          <div>
         <input type="radio" name="gender" required /> </div>
         <div className='male' >
          Male
         </div>
         </div>
         <div className='d-flex gap-1'>
          <div>
         <input type="radio" name="gender" required /> </div>
         <div  className='male' >
         Female
         </div>
         </div>
  
        </div>
        </div>
        <div className='d-flex gap-3'>
        <div className='gender text-start rounded mt-2'>
          DOB
        </div>
        <div className="dataaa">
        <input
          type="date"
        
          required
        />
      </div></div>
      <div className="dataaa">
          <input type="text" placeholder="Blood Group" required />
        </div>
  
     
        <div className='d-flex gap-3'>
        <div className="dataaa">
    <input type="Text" placeholder="City" required />
  </div>
  <div className="dataaa">
    <input type="Text" placeholder="Nationality" required />
  </div></div>
  <div className="dataaa">
    <input type="Text" placeholder="AGE" required />
  </div>
   </form>
    </div>
  <div className="containerrr d-block text-center mx-auto  h-auto rounded col-lg-5 col-md-12 ">
      <div className="textt">Professional details</div>
      <form action="#">
        <div className='d-flex gap-1'>
     
        </div>
      
  
  <div className='d-flex gap-1 '>
  <div className="dataaa">
    <input type="Text" placeholder="Register no" required />
  </div>
  
  
  
  
  
                  <div>
          <label placeholder='slot' className=''></label>
                  <select className='Slot' >
                  <option value="" disabled selected hidden>
  Mode
    </option>
                      <option for="Full Stack">Career Ed</option>
                      <option for="Web Devopment">Alter Ed</option>
            
                      
                  </select></div>
                  
  <div className="dataaa">
    <input className='batch' type="Text" placeholder="Batch" required />
  </div>
       
  
       
        </div>
  
  
  
  
  
  
  
  
  
  
  
      <div className='d-flex gap-1 mb-3'>
     
          <div>
          <label placeholder='Domain' className=''></label>
                  <select className='domain' for= "place" placeholder='Domain'>
                  <option value="" disabled selected hidden>
     Domain
    </option>
                      <option for="Full Stack">SP</option>
                      
              
              <option for="IMS">IMS</option>
                      <option for="SAP">SAP</option>
                      <option for="digital marketing">DM</option>
                      
                  </select></div>
                  
                  <div>
                  <label placeholder='Domain' className=''></label>
                  <select className='subdomain' for= "place" placeholder='Domain'>
                  <option value="" disabled selected hidden>
    Sub Domain
    </option>
                      <option for="">SP-FS</option>
                      <option for="">SP-WD</option>
                      <option for="">SP-DA</option>
                      <option for="">SP-DS</option>
                      <option for="">SP-ST</option>
                      <option for="">IMS-DevOps</option>
                      <option for="">IMS-Cyber Security</option>
                      <option for="">SAP-ABAP</option>
                      <option for="">HANA</option>
                      <option for="">FICCO</option>
                      
                  </select></div>
    <div>
          <label placeholder='slot' className=''></label>
                  <select className='Slot' >
                  <option value="" disabled selected hidden>
  Slot
    </option>
                      <option for="Full Stack">A</option>
                      <option for="Web Devopment">B</option>
            
                      
                  </select></div>
  
        </div>
      
        <div className="dataaa">
          <input type="text" placeholder="Email address" required  value={username}
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="dataaa">
          <input type="password" placeholder="Password" required  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div class="terms-checkboxxx ">
      <span className='span'><input type="checkbox" id="terms" name="terms" required/>
      <label className='termss' htmlFor="terms" style={{ textAlign: 'left' }}>
    I accept the <a className="termm" href="#">terms and conditions</a>
  </label>
  </span>
    </div>
  
    
  
        <div className="btnnn col-lg-3 ">
          <div className="innerrr"></div>
          <button className="BTNSIGN " type="submit" onClick={handleSignUp}>Signup</button>
        </div>
        <div className="signup-linkkk text-black">
          Already a member? <a href='/login' className="BTNNOW" >Login Now</a>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateAdminProfile;
