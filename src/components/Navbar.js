import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// Import an icon library, for example:
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={require('../images/Black White Minimalist Initials Monogram Jewelry Logo.png')} alt="BlockMining Logo" className="navbar-logo" style={{ height: '60px', width: '120px', marginLeft: '0px' }} />
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li> <a href="/profile" className="profile-icon">
          <FaUserCircle size={24} />
        </a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
