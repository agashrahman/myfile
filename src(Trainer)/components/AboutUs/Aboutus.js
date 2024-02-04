import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './Aboutus.css'

function AboutUs() {
  const containerStyle = {
    background: "linear-gradient(to right, #1BA098 10%, #a6eee9) no-repeat",
    minHeight: "100vh", // Set a minimum height to cover the whole viewport
    padding: "20px", // Add padding for better visibility
    
  };

  const cardStyle = {
    maxWidth: "540px",
    margin: "10px", 
  };

  return (
    <>
      <div style={containerStyle }>
        <div className="text-center">
          <h2>About Us</h2>
          <p className="text-secondary">Powered by KGiSL Microcollege learners. <a href="" className="text-primary">Learn more</a></p>
          <img src="https://media.istockphoto.com/id/1016048268/photo/group-of-young-people-on-white-background.jpg?s=612x612&w=0&k=20&c=uAXcwplrv8sdPjvWVyrqS1ZXn-70q1NEcPBnGmeIlIw=" alt="Description for the image" className="" />
          </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/qMHyTGp2/IMG-20230830-WA0015.jpg"
                  className="img-fluid rounded ms-2 "
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title">Kareem Arshad A</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/fyVf1NS0/Sridarsini.jpg"
                  className="img-fluid rounded ms-2"
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Sridarsini N</h5>
                  <p className="card-text">
                    This is another card with supporting text. Customize as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/JhbjsCFj/C9-CFEB42-F9-A8-40-E9-B1-C8-F7-CCBFD3-E95-F.jpg"
                  className="img-fluid rounded ms-2"
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Agash Rahman A</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0 demo">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/FR1260RQ/47-EDBF97-A0-B3-4-E1-F-91-D4-EA4088577-EAF.jpg"
                  className="img-fluid rounded ms-2"
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Noufiya A</h5>
                  <p className="card-text">
                    This is another card with supporting text. Customize as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/hjnYt3Th/DSC-0763-copy.jpg"
                  className="img-fluid rounded ms-2"
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Naveen Kumar T</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

    
          <div className="card mb-3"  style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.postimg.cc/nznkGLbH/86-F770-A6-20-EE-4646-8-D04-C53-B6-C27-A105.jpg"
                  className="img-fluid rounded ms-2"
                  alt="Card illustration"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Monica R</h5>
                  <p className="card-text">
                    This is another card with supporting text. Customize as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
