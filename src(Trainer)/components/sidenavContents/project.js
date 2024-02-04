import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './project.css'

function Project(){
//   const containerStyle = {
//     background: 'linear-gradient(to right,#1BA098 10%,#a6eee9) no-repeat;',
//     minHeight: '100vh',
//     padding: '20px', 
//   };
  return(
        <div className="container-fluid_project p-5">

      <div className="row justify-content-between align-items-center">
        <div className='col-lg-6 ps-5'>
          <h4 className="mt-5 text-dark">PROJECTS</h4>
        </div>

        <div className="col-lg-6 mt-4 d-flex justify-content-end align-items-center pe-3">
          <button className="CreateProjectbutton btn me-3 custom-button">CREATE NEW PROJECT</button>
        </div>
      </div>

      <div className="row mt-5 ps-5 me-3">
        <div className="card">
          <div className="input-group gap-3">
            <span className="input-group-text text-secondary">Filters</span>

            <div className="dropdown ms-3">
              <button className="btn text-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Active
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Active</a></li>
                <li><a className="dropdown-item" href="#">Archived</a></li>
                <li><a className="dropdown-item" href="#">All</a></li>
              </ul>
            </div>

            <div className="dropdown ms-3">
              <button className="btn text-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Client
              </button>
              <ul className="dropdown-menu ms-3" aria-labelledby="dropdownMenuButton2">
                <input className="form-control mb-2" type="text" placeholder="Find Clients" aria-label="default input example" />
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Select all
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Without Client
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Others
                  </label>
                </div>
              </ul>
            </div>

            <div className="dropdown ms-3">
              <button className="btn text-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                Access
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>

          <input type="text" aria-label="Last name" className="form-control bg-white mt-3" placeholder="🔍 Find by Name" />
        </div>
      </div>

      <div className="card mt-5 ms-4 me-3">
        <div className="card-body p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3 ">
            <h5 className=" text-secondary ms-2">Projects</h5>
            <div className="dropdown">
              <button className="btn text-secondary dropdown-toggle me-5" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                Export
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a className="dropdown-item" href="#">Save as CSV</a></li>
                <li><a className="dropdown-item" href="#">Save as Excel</a></li>
                <li><a className="dropdown-item" href="#">Customize</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="input-group p-1">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
            </div>
            <input type="text" className="form-control" aria-label="Text input with radio button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;