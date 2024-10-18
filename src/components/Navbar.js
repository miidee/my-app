import React, { useState } from 'react';
import './Navbar.css';
// Import an icon library, for example:
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h2 style={{ color: 'white', margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>BlockMining</h2>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}><a href="#home">Home</a></li>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}><a href="#about">About</a></li>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}><a href="#services">Services</a></li>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}><a href="#about">Reviews</a></li>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}><a href="#contact">Contact</a></li>
        <li style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'normal' }}> <a href="/profile" className="profile-icon">
          <FaUserCircle size={24} />
        </a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
