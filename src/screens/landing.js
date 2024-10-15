import React from 'react';
import '../styling/landing.css'; // Optional: your main styles
import Navbar from '../components/Navbar.js'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Landing Page!</h1>
        <p>This is a simple landing page built with React.</p>
      </header>
    </div>
  );
}

export default App;
