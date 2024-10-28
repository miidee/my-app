import React from 'react';
import Navbar from '../components/Navbar'; // Make sure this path is correct
import '../styling/about.css';

function About() {
  return (
    <div className="About">
      <Navbar />
      <main style={{ backgroundColor: 'white' }}>
        <section className="about-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h2>Our Story</h2>
            <p>BlockMining was founded with a vision to make cryptocurrency mining accessible to everyone. We believe in the power of blockchain technology and its potential to revolutionize the financial world.</p>
            
            <h2>Our Mission</h2>
            <p>Our mission is to provide a secure, efficient, and user-friendly platform for individuals to participate in cryptocurrency mining without the need for technical expertise or expensive hardware.</p>
            
            <h2>Our Team</h2>
            <p>We are a team of blockchain enthusiasts, financial experts, and technology innovators committed to delivering the best mining experience for our users.</p>
          </div>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="About BlockMining" style={{ width: '100%', height: 'auto', order: 2 }} />
          </div>
        </section>
      </main>
     
    </div>
  );
}

export default About;

