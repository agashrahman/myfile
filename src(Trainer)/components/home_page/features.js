import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './features.css';

function Features(){
    return(
        <>
        <div className='bg mt-3'>
        <h1 className='justify-content-center align-items-center text-center'>Features</h1></div>
        <div className='d-flex justify-content-center align-items-center text-center' >
        <div>
        <h6>TIMEKEEPING</h6>
        <div class="grid gap-3 d-flex">
  <div class="p-2 g-col-6">  <button class="btn button-28 custom-width  m-2 " type="button">Time Tracker</button></div>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2 " type="button">Apps</button></div>
  </div>
  <div className='grid gap-3 d-flex'>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2 " type="button">TimeSheet</button></div>
  <div class="p-2 g-col-6"><button class="bbtn button-28 custom-width  m-2" type="button">Calender</button></div>
</div>
</div>
<div>
        <h6>REPORTING</h6>
        <div class="grid gap-3 d-flex ">
  <div class="p-2 g-col-6">  <button class="btn button-28 custom-width  m-2 " type="button">Dashboard</button></div>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2" type="button">Activity</button></div>
  </div>
  <div className='grid gap-3 d-flex'>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2 " type="button">Reports</button></div>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2 " type="button">Projects</button></div>
</div>
</div>

<div>
        <h6>MANAGEMENT</h6>
        <div class="grid gap-3 d-flex">
  <div class="p-2 g-col-6">  <button class="btn button-28 custom-width  m-2" type="button">Team</button></div>
  <div class="p-2 g-col-6"><button class="btn button-28 custom-width  m-2 " type="button">Time Off</button></div>
  </div>
  <div className='grid gap-3 d-flex'>
  <div class="p-2 g-col-6"><button className=" btn button-28 custom-width  m-2" role="button">Expenses</button></div>
  <div class="p-2 g-col-6"><button className=" btn button-28 custom-width  m-2" role="button">Scheduling</button>

</div>
</div>
</div>
</div>

        </>
    )
}
export default Features;