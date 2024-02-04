import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Branch.css';
import SideBar from "../nav/sidbar";
import DashNavbar from "../nav/nav";

function Branch() {
  const [branchName, setBranchName] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [createdBranches, setCreatedBranches] = useState([]);

  const containerStyle = {
    
    minHeight: '150vh',
    padding: '20px',
  };

  const handleCreateBranch = () => {
    const newBranch = {
      branchName,
      branchAddress,
    };


    setCreatedBranches((prevBranches) => [...prevBranches, newBranch]);
    clearInputFields();
  };

  const clearInputFields = () => {
    setBranchName('');
    setBranchAddress('');
  };

  return (
    <div>
    <div className="">
        <DashNavbar/></div>
    <div className="d-flex">
    <div className="col-12 position-fixed">
  <SideBar/></div>
    <div className="container-fluid-branch batch-div  col-lg-10" style={containerStyle}>
     
      <div className="row justify-content-center  align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
             
            </div>
            <div className="col-lg-6 m5-5 d-flex justify-content-end align-items-center pe-3">
              <button className="btn custom-button custom-branch" onClick={handleCreateBranch}>CREATE NEW BRANCH</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-5 ms-4 card-batch me-3">
        <div className="card-body   p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3 ">
            <h5 className="text-secondary">Branch</h5>
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
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name of the Branch</th>
                  <th>Branch Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input type="text" className="form-branch" aria-label="Text input with serial number" placeholder="Branch Name" value={branchName} onChange={(e) => setBranchName(e.target.value)} /></td>
                  <td><input type="text" className="form-branch" aria-label="Text input with serial number" placeholder="Branch Address" value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <h3 className="text-secondary">Created Branches</h3>
        <div className="table-responsive p-1">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Branch</th>
                <th>Branch Address</th>
              </tr>
            </thead>
            <tbody>
              {createdBranches.map((branch, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{branch.branchName}</td>
                  <td>{branch.branchAddress}</td>
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

export default Branch;