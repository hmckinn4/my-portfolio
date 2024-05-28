// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-section">
        <h3>Financial Analyses</h3>
        <div className="project-preview">
          <iframe
            src="/pdf/FB_Stock_Review.pdf"
            title="FB Stock Review"
            width="100%"
            height="500px"
          ></iframe>
          <iframe
            src="/pdf/MU_Stock_Pitch.pdf"
            title="MU Stock Pitch"
            width="100%"
            height="500px"
          ></iframe>
        </div>
        <div className="project-links">
          <a href="/pdf/FB_Stock_Review.pdf" target="_blank" rel="noopener noreferrer">FB Stock Review</a>
          <a href="/pdf/MU_Stock_Pitch.pdf" target="_blank" rel="noopener noreferrer">MU Stock Pitch</a>
        </div>
      </div>
      <div className="project-section">
        <h3>Hockey Analyses</h3>
        <div className="project-links">
          <a href="https://github.com/hmckinn4/NHL-2023-Regular-Season-Analysis/blob/main/NHL%202023%20Player%20Stat%20Analysis.ipynb" target="_blank" rel="noopener noreferrer">NHL-2023-Regular-Season-Analysis</a>
          <a href="https://github.com/hmckinn4/Instat_Analysis_23-24_Hockey_Season/blob/main/Henry_Instat_Analysis_and_DataViz.ipynb" target="_blank" rel="noopener noreferrer">Personal InStat Analysis 23-24</a>
          <a href="https://github.com/hmckinn4/Instat_Analysis_23-24_Hockey_Season/blob/main/Recovery_x_Instat_Index.ipynb" target="_blank" rel="noopener noreferrer">InStat Index and Whoop Statistics Correlation Analysis</a>
        </div>
      </div>
      <div className="project-section">
        <h3>Graduate School Software Applications</h3>
        <div className="project-links">
          <a href="https://github.com/hmckinn4/CSC_ECE_517_Spring2024_Program_2" target="_blank" rel="noopener noreferrer">Events Management System</a>
          <div className="project-subsection">
            <h4>Student Assignment Page Full Stack Remodel</h4>
            <a className="video-link" href="https://www.youtube.com/watch?v=zZ0Ea3HKqBo" target="_blank" rel="noopener noreferrer">Demonstration (Video)</a>
            <a className="repo-link" href="https://github.com/ychen-207523/reimplementation-front-end" target="_blank" rel="noopener noreferrer">Frontend (Repository)</a>
            <a className="repo-link" href="https://github.com/ychen-207523/reimplementation-back-end" target="_blank" rel="noopener noreferrer">Backend (Repository)</a>
          </div>
        </div>
      </div>
      <div className="project-section">
        <h3>Software Applications</h3>
        <div className="project-links">
          <a href="https://github.com/hmckinn4/Dijkstra-Algorithm" target="_blank" rel="noopener noreferrer">Java Fastest Path Algorithm</a>
          <a href="https://github.com/hmckinn4/FarmDB_Simulation" target="_blank" rel="noopener noreferrer">Farm Business Simulation</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
