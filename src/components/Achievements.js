// src/components/Achievements.js
import React from 'react';
import './Achievements.css'; // Import the CSS file for styling

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <div className="achievement-preview">
        <iframe
          src="https://empire8.com/news/2023/6/26/general-henry-mckinney-of-nazareth-university-named-2022-23-empire-8-co-male-senior-scholar-athlete-of-the-year.aspx"
          title="Scholar Athlete of the Year (All schools)"
          width="100%"
          height="500px"
        ></iframe>
      </div>
      <ul className="achievement-links">
        <li><a href="https://empire8.com/news/2023/6/26/general-henry-mckinney-of-nazareth-university-named-2022-23-empire-8-co-male-senior-scholar-athlete-of-the-year.aspx" target="_blank" rel="noopener noreferrer">Scholar Athlete of the Year (All schools)</a></li>
        <li><a href="https://nazathletics.com/news/2023/3/20/mens-ice-hockey-mckinney-tabbed-ccm-ahca-division-iii-all-american.aspx" target="_blank" rel="noopener noreferrer">CCM/AHCA Division III All-American</a></li>
      </ul>
    </div>
  );
}

export default Achievements;
