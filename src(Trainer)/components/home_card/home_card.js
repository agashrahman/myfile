import React from "react";
import './home_card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
export function Home_card(){
    return(
        <>
        <h1 className="text-center">Why track time with Clockify</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div class="col-lg-4">
    <div class="card">
      <h1 className="text-primary mt-3 ms-3"><FontAwesomeIcon icon={faCrosshairs} /></h1>
      <div class="card-body">
        <h5 class="card-title">Boost productivity</h5>
        <p class="card-text">Track time you spend on activities, see where your times goes, and improve your time management skills.</p>
        <a href="" className="text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <h1 className="text-primary mt-3 ms-3"><FontAwesomeIcon icon={faCircleDollarToSlot} /></h1>
      <div class="card-body">
        <h5 class="card-title">Bill clients</h5>
        <p class="card-text">Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.</p>
        <a href="" className="text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <h1 className="text-primary mt-3 ms-3"><FontAwesomeIcon icon={faPeopleGroup} /></h1>
      <div class="card-body">
        <h5 class="card-title">Manage team</h5>
        <p class="card-text">Track attendence for payroll and accounting, see who works on what, and manage workload among teams.</p>
        <a href="" className="text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <h1 className="text-primary mt-3 ms-3"><FontAwesomeIcon icon={faClock} /></h1>
      <div class="card-body">
        <h5 class="card-title">Streamline processes</h5>
        <p class="card-text">Track time and analyze your company's efficiency across projects, clients, departments, and employees.</p>
        <a href="" className="text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
      </div>
    </div>
  </div>
</div>
 <h6 className="text-center mt-5 usecase">MORE USE CASES</h6>
<div className="text-center d-flex gap-2 justify-content-center">
  <button className="card_btn">Time Clock</button>
  <button className="card_btn">Work Hours Tracker</button>
  <button className="card_btn">Employee Time Tracker</button>
  <button className="card_btn">Attendence</button>
  <button className="card_btn">Task Timer</button>
  <button className="card_btn">Time Card Calculator</button>
</div>
        </>
    );
}