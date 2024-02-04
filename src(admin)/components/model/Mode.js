import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Mode.css';
import SideBar from "../nav/sidbar";
import DashNavbar from "../nav/nav";

function Mode() {
  const [batchMode, setBatchMode] = useState('');
  const [noOfBatches, setNoOfBatches] = useState('');
  const [currentBatches, setCurrentBatches] = useState('');
  const [upcomingBatches, setUpcomingBatches] = useState('');
  const [achievedBatches, setAchievedBatches] = useState('');
  const [createdModes, setCreatedModes] = useState([]);

  const containerStyle = {
  
    minHeight: '150vh',
    padding: '20px',
  };

  const handleCreateMode = () => {
    const newMode = {
      batchMode,
      noOfBatches,
      currentBatches,
      upcomingBatches,
      achievedBatches,
    };

    setCreatedModes((prevModes) => [...prevModes, newMode]);
    clearInputFields();
  };

  const clearInputFields = () => {
    setBatchMode('');
    setNoOfBatches('');
    setCurrentBatches('');
    setUpcomingBatches('');
    setAchievedBatches('');
  };

  return (
    <div>
    <div className="d-flex">
 
    <div className="container-fluid-mode" style={containerStyle}>
      
      

      <div className="card mode-card   me-3">
        <div className="card-body p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3">
            <h3 className="text-secondary">MODE</h3>
            <div className="dropdown">
              <button className="btn text-secondary dropdown-toggle me-5" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a className="dropdown-item" href="#">Save as CSV</a></li>
                <li><a className="dropdown-item" href="#">Save as Excel</a></li>
                <li><a className="dropdown-item" href="#">Customize</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="table-responsive p-1">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  
                  <th>Batch Mode</th>
                  <th>Batches Running</th>
                  <th>Current Batches</th>
                  <th>Upcoming Batches</th>
                  <th>Achieved Batches</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td><input type="text" className="form-mode" aria-label="Text input with serial number" placeholder="Batch Mode" value={batchMode} onChange={(e) => setBatchMode(e.target.value)} /></td>
                  <td><input type="text" className="form-mode" aria-label="Text input with serial number" placeholder="No Of Batches" value={noOfBatches} onChange={(e) => setNoOfBatches(e.target.value)} /></td>
                  <td><input type="text" className="form-mode" aria-label="Text input with serial number" placeholder="Current Batches" value={currentBatches} onChange={(e) => setCurrentBatches(e.target.value)} /></td>
                  <td><input type="text" className="form-mode" aria-label="Text input with serial number" placeholder="Upcoming Batches" value={upcomingBatches} onChange={(e) => setUpcomingBatches(e.target.value)} /></td>
                  <td><input type="text" className="form-mode" aria-label="Text input with serial number" placeholder="Achieved Batches" value={achievedBatches} onChange={(e) => setAchievedBatches(e.target.value)} /></td>
                  <td> <button className="btn custom-button custom-mode" onClick={handleCreateMode}>CREATE NEW MODE</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" m-3">
        <h3 className="text-secondary">Created Modes</h3>
        <div className="mode_table-container p-1">
          <table className="table  table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Batch Mode</th>
                <th>Batches Running</th>
                <th>Current Batches</th>
                <th>Upcoming Batches</th>
                <th>Achieved Batches</th>
              </tr>
            </thead>
            <tbody>
              {createdModes.map((mode, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{mode.batchMode}</td>
                  <td>{mode.noOfBatches}</td>
                  <td>{mode.currentBatches}</td>
                  <td>{mode.upcomingBatches}</td>
                  <td>{mode.achievedBatches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Mode;