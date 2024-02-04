//streamline
import 'bootstrap/dist/css/bootstrap.css'
import './streamline.css';

import React, { useState, useEffect } from 'react';
const Streamline = () => {   
return(
    <>  
     <div className='body6 '>
        <div className='streamMain container-fluid d-flex row' >
          <div className='streamdiv col-lg-8 col-md-12' >
          <div className=' row g-3  col-lg-9 '>
           <h2 className='streamtext'>Streamline Processes</h2>
             <h6 className='streamtext'>Measure time spent on daily activities to find opportunities for improvements, understand time spent on ad-hoc requests and workload distribution, and improve project efficiency and cost capitalization.</h6>
      </div>

            <div>
              <div className='d-flex row  row-cols-md-3 g-3 mt-4   col-lg-9'>
              <div class="col">
            <h6 className='streamtext'>Online Timesheets</h6>
             <p  className="text-secondary">Fill your weekly timesheet in less than a minute.</p>
        </div>
     
        <div class="col">
           <h6 className='streamtext'>Project Status</h6>
           <p  className="text-secondary">See project progress and improve estimates</p>
      </div>
      <div class="col">
         <h6 className='streamtext'> Manager Role</h6>
          <p  className="text-secondary">Make someone a manager so they can manage projects and teams.</p>
    </div>
              </div>

              <div className='d-flex row row-cols-md-3 mt-5  g-3 col-lg-9'>
              <div class="col">
            <h6 className='streamtext'> Import Data</h6>
             <p  className="text-secondary">Import projects, tasks, and historic time entries from a file.</p>
       </div>
        <div class="col ">
           <h6 className='streamtext'>Custom Fields</h6>
           <p  className="text-secondary">Add custom fields and information to time entries.</p>
       </div>
       <div class="col ">
           <h6 className='streamtext'>Security & Privacy</h6>
            <p  className="text-secondary">Control who can do what, and log in with your SSO.</p>
         </div>
              </div>
              <div className='d-flex row  row-cols-md-3 g-3 mt-5  col-lg-9'>
                
              <div class="col">
             <h6 className='streamtext'>Reports</h6>
             <p  className="text-secondary">See breakdown of all work hours and dig into data.</p>
         </div>
     
     <div class="col">
     <h6 className='streamtext'> Audit Log </h6>
             <p  className="text-secondary">Track all changes users make in their timesheets.</p>
           </div>

       <div class="col ">
           <h6 className='streamtext'>Export</h6>
           <p  className="text-secondary">Customize and export data from reports (Excel, PDF).</p>
       </div>
              </div>
            </div>
          </div>
          <div className='justify-content-center align-self-center col-lg-3 col-md-6   '>
           
          <img className='streamimg1 ' src='https://static.dashthis.com/media/1203/image_widgets.svg'/>
          <img className='streamimg2 ' src='https://invoice.ng/blog/wp-content/uploads/2022/06/Boost-business-growth-768x672.png'/>
          </div>
        </div>
      </div>
    </>

);

}
export default Streamline