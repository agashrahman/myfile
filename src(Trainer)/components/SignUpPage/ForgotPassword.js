import React from "react";
// import './new.css';
import 'bootstrap/dist/css/bootstrap.css';

function ForgotPassword() {
  const containerStyle = {
    // background: 'linear-gradient(to right, #7db2cc 10%, #5d7f7e)',
    background: 'linear-gradient(to right,#1BA098 10%,#a6eee9) no-repeat',
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  
  };
  const buttonStyle = {
    // background: 'linear-gradient(to right, #7db2cc 10%, #5d7f7e)',
    background: 'linear-gradient(to right,#1BA098 10%,#a6eee9) no-repeat',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div className="card d-inline-block p-4">
        <div className="card-body text-center">
          <h3>Forgot Password?</h3>
          <input type="email" placeholder="Enter your Email id" className="form-control my-3 mt-5" />
        
           <div>
        <input type="submit" value="RESET PASSWORD" className="btn mt-4" style={buttonStyle} />
      </div>
        </div>
      </div>

      <div>
        <h6 className="mt-5">
          🛡 Your data is safe with us:
          <a href="#" className="text-primary"> Security Privacy</a>
        </h6>
      </div>
    </div>
  );
}

export default ForgotPassword;