import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './report.css';
function Report(){
    return(
        <>
         <div className='body5report '>
        <div className='reportmain container-fluid d-flex row  col-lg-12' >
        <div className='row'>
          <div className="col-lg-5 col-md-12 ">
          <div>
             <img className='reportimg1 justify-content-center align-self-center  ' src='https://img.freepik.com/free-vectorhand-drawn-business-planning-with-calendar_23-2149150730.jpg?w=996&t=st=1704943784~exp=1704944384~hmac=8b42094b819d0572b83b34a93a300fea7e09d7dab359b5f2d8393aaf7d3db6ff' />
           </div>
</div>                
  <div className="col-lg-6 col-md-12   pt-3  p-4    ">

  <h3 className='text-black'>PER DAY</h3>
            <p>
            Daily reports offer a snapshot of ongoing projects and tasks, allowing stakeholders to track progress in real time. This transparency is crucial for keeping everyone involved informed about the status of different activities, ensuring alignment with overarching goals.
            </p>
    
</div>
</div>
<div className="col-lg-6 pt-3  p-4 mt-4 ">
  <h3 className='text-black'>PER MONTH</h3>
            <p>
            Monthly reports offer a comprehensive view of progress made over a month, providing stakeholders with a detailed understanding of ongoing projects, milestones achieved, and overall performance. This holistic perspective aids in strategic decision-making.
            </p>
    
</div>

<div className="col-lg-3 ">
 
      <div>
             <img className='reportimg2 justify-content-center align-self-center  ' src='https://3.bp.blogspot.com/-96GZgZ0UufM/VNFOXvTQTmI/AAAAAAAAMF0/Kozow6AIExw/s1600/graficos.png' />
           </div>
         
</div>
</div>
      </div>
        </>
    )
}
export default Report