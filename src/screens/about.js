import React from 'react';
import Navbar from '../components/Navbar'; // Make sure this path is correct
import '../styling/about.css';

function About() {
  return (
    <div className="About">
      <Navbar />
      <header className="About-header">
        <h1>About BlockMining</h1>
      </header>
      <main>
        <section className="about-content">
          <h2>Our Story</h2>
          <p>BlockMining was founded with a vision to make cryptocurrency mining accessible to everyone. We believe in the power of blockchain technology and its potential to revolutionize the financial world.</p>
          
          <h2>Our Mission</h2>
          <p>Our mission is to provide a secure, efficient, and user-friendly platform for individuals to participate in cryptocurrency mining without the need for technical expertise or expensive hardware.</p>
          
          <h2>Our Team</h2>
          <p>We are a team of blockchain enthusiasts, financial experts, and technology innovators committed to delivering the best mining experience for our users.</p>
        </section>
      </main>
    </div>
  );
}

export default About;

