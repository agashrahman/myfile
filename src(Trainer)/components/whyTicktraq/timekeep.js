import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './timekeep.css';
function Timekeep(){
    return(
        <>
         <div className='body5timekeep '>
        <div className='timekeepmain container-fluid d-flex row  col-lg-12' >
        
         
<div className='row'>
          <div className="col-lg-5 col-md-12 ">
        <div className="   ">
 <img className='timekeepimg1 justify-content-center align-self-center  ' src='https://i.postimg.cc/rpXvDC0G/Screenshot-4.png' />
</div>
</div>                
  <div className="col-lg-6 col-md-12   pt-3  p-4    ">

  <h3 className='text-black'>TIME TRACKER</h3>
            <p>
            Todo lists provide a structured way to organize tasks and prioritize them based on importance and deadlines. Whether it's work-related projects, personal chores, or long-term goals, a well-organized list allows individuals to focus on what truly matters.
            </p>
    
</div>
</div>


            
  <div className="col-lg-6 mt-3 p-4  ">
  <h3 className='text-black'>TO-DO LIST</h3>
            <p>
            Todo lists provide a structured way to organize tasks and prioritize them based on importance and deadlines. Whether it's work-related projects, personal chores, or long-term goals, a well-organized list allows individuals to focus on what truly matters.
            </p>
    
</div>

<div className="col-lg-3 ">
 
    <div className="   ">
    <img className='timekeepimg2 justify-content-center align-self-center  ' src='https://img.freepik.com/free-vectorhand-drawn-business-planning-with-calendar_23-2149150730.jpg?w=996&t=st=1704943784~exp=1704944384~hmac=8b42094b819d0572b83b34a93a300fea7e09d7dab359b5f2d8393aaf7d3db6ff' />
  </div>
</div>
          
         
          
        </div>
      </div>
        </>
    )
}
export default Timekeep