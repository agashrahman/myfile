import React, { useState } from 'react';
import './nav.css';

const DashNavbar = () => {
  
  const [user, setUser] = useState({
    username: 'JohnDoe',
    profilePic: 'path/to/profile-pic.jpg',
  });

  return (
    <nav className="custom-navbar">
      <img src="https://i.imghippo.com/files/jAX8O1706542253.png" className="TickTraq_navLogo"/>

      <div className="user-info-container">
        <img className="profile-pic" src='https://scontent.fcjb3-1.fna.fbcdn.net/v/t39.30808-6/312217282_3284298305222256_6471956793315331499_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d6Z3ymH_krsAX9zajNA&_nc_ht=scontent.fcjb3-1.fna&oh=00_AfD0Vbi-k9fri8gTOs2vZsjwRk-EETmCvJWwLdQXkiiZSw&oe=65BC149A' alt="Profile Picture" />
        <span className="username">{user.username}'s Workspace</span>
      </div>
    </nav>
  );
};

export default DashNavbar;
