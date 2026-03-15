// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Media from './components/Media';
import HockeyStats from './components/HockeyStats';
import './App.css'; // Import the CSS file for styling

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/achievements" onClick={() => setMenuOpen(false)}>Achievements</Link></li>
            <li><Link to="/media" onClick={() => setMenuOpen(false)}>Media</Link></li>
            <li><Link to="/hockey-stats" onClick={() => setMenuOpen(false)}>Hockey Stats</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/media" element={<Media />} />
          <Route path="/hockey-stats" element={<HockeyStats />} />
        </Routes>
        <footer className="footer">
          <div className="contact-info">
            <p>Contact Info:</p>
            <p>Email: <a href="mailto:hmckinney14@gmail.com">hmckinney14@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/henry-mckinney-7421ab201/" target="_blank" rel="noopener noreferrer">Henry McKinney</a></p>
            <p>GitHub: <a href="https://github.com/hmckinn4" target="_blank" rel="noopener noreferrer">hmckinn4</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;