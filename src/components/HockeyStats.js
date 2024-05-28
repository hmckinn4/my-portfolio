// src/components/HockeyStats.js
import React from 'react';
import './HockeyStats.css'; // Import the CSS file for styling

const HockeyStats = () => {
  return (
    <div className="hockey-stats-container">
      <h2>Hockey Stats</h2>
      <div className="hockey-stats-preview">
        <iframe
          src="https://www.eliteprospects.com/player/282612/henry-mckinney"
          title="Elite Prospects Profile"
          width="100%"
          height="500px"
        ></iframe>
      </div>
      <p>
        Profile: <a href="https://www.eliteprospects.com/player/282612/henry-mckinney" target="_blank" rel="noopener noreferrer">Elite Prospects</a>
      </p>
    </div>
  );
}

export default HockeyStats;
