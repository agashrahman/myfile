// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';
// import { redirect } from 'react-router-dom';

// const LoginDetails = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);

//     const handleLogin = () => {
//         const storedUsername = localStorage.getItem('username');
//         const storedPassword = localStorage.getItem('password');

//         if (username === storedUsername && password === storedPassword) {
//             alert('Login Successful');
//             setLoggedIn(true);
            
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <>
//              <div className="loginDiiv">
//         <div className="containeer d-block h-auto">
//         <div className="texxt text-center">Login Now</div>
//         <form action="#">
//           <div className="datta">
//             <input type="text" placeholder="Your Email or Phone" required  value={username}
//                         onChange={(e) => setUsername(e.target.value)} />
//           </div>
//           <div className="datta">
//             <input type="password" placeholder="Your Password" required  value={password}
//                         onChange={(e) => setPassword(e.target.value)}/>
//           </div>
//           <div className="forgot-paass">
//             <Link to="/forgotpassword">Forgot Password?</Link>
//           </div>
//           <div className="bttn">
//             <div className="inneer"></div>
//             <button className='BTNLOG' type="submit" onClick={handleLogin}>Login</button>
//           </div>
//           {loggedIn ? (
//               <Link to="/mainComponent">Go to dashboard</Link>
//           ) : (
//               <p className="login-message"></p>
//           )}

//           <div className="signup-linnk">
//             Not a member? <Link to='/signup' href="#">Signup Now</Link>
//           </div>
//         </form>
//       </div>
//       </div>
//         </>
//     );
// };

// export default LoginDetails;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginDetails = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Login Successful');
            setLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // Password regex for at least 8 characters, one uppercase letter, one lowercase letter, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return (
        <>
            <div className="loginDiiv">
                <div className="containeer d-block h-auto">
                    <div className="texxt text-center">Login Now</div>
                    <form action="#">
                        <div className="datta">
                            <input type="text" placeholder="Your Email or Phone" required value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="datta">
                            <input type="password" placeholder="Your Password" required value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="forgot-paass">
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                        <div className="bttn">
                            <div className="inneer"></div>
                            <button className='BTNLOG' type="submit" onClick={handleLogin}>Login</button>
                        </div>
                        {loggedIn ? (
                            <Link to="/mainComponent">Go to dashboard</Link>
                        ) : (
                            <p className="login-message"></p>
                        )}

                        <div className="signup-linnk">
                            Not a member? <Link to='/signup' href="#">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginDetails;


