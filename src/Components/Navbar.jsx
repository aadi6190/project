import React from 'react';
import './Navbar.css'; // Import your CSS file for styling if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span>Providers for 
            <br />NDIS</span>
        </div>
        <div className="navbar-links">
         <b> <a href="#">Home</a></b>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Find Providers</a>
          <b><a href="#">Social Workers</a></b>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="navbar-right">
        <button className="btn-1">Login</button>
        <button className="btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
