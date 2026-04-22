import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file for styling
import headshot from '../assets/Headshot.jpeg'; // Import the headshot image
import hockey from '../assets/hockey_photo2.JPG'; // Import the hockey image
import resume from '../assets/HENRY MCKINNEY Resume.pdf'; // Import the resume

const Home = () => {
  const [metaPrice, setMetaPrice] = useState('Loading...');
  const [micronPrice, setMicronPrice] = useState('Loading...');

  useEffect(() => {
    const fetchStockPrice = async (symbol, setPrice) => {
      const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
      const retryCount = 3;

      const fetchData = async (retry = 0) => {
        try {
          const response = await axios.get(url);
          const price = response.data['Global Quote']['05. price'];
          if (price) {
            setPrice(`$${parseFloat(price).toFixed(2)}`);
          } else {
            throw new Error('Price not found');
          }
        } catch (error) {
          if (retry < retryCount) {
            setTimeout(() => fetchData(retry + 1), 2000);
          } else {
            setPrice('Unavailable');
            console.error('Error fetching the stock price', error);
          }
        }
      };

      fetchData();
    };

    fetchStockPrice('META', setMetaPrice);
    fetchStockPrice('MU', setMicronPrice);
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
      <p>Hi, I'm Henry McKinney. I love software, finance, data, and sports, specifically hockey.</p>
      <p>Navigate the links above to view my software projects, data analyses, hockey stats or hockey highlights, or general accomplishments.</p>
      <p>Scroll to the bottom for contact info and GitHub. </p>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">View My Resume</a>
      <div className="top-row-container">
        <div className="recent-work">
          <h4 className="recent-work-label">RECENT WORK</h4>
          <a href="/pdf/MU_Revisit_2026.pdf" target="_blank" rel="noopener noreferrer">
            Micron Stock Analysis — April 7, 2026
          </a>
          <a href="https://semilens.vercel.app/" target="_blank" rel="noopener noreferrer">
            Semiconductor Financial Terminal
          </a>
          <a href="/pdf/Micron_Pre_Q3_Outlook.pdf" target="_blank" rel="noopener noreferrer">
            Micron Cycle Watch: Pre-Q3 Outlook — April 22, 2026
          </a>
        </div>
        <div className="images-container">
          <img src={headshot} alt="Headshot" className="profile-image" />
          <img src={hockey} alt="Hockey" className="profile-image" />
        </div>
      </div>
      <div className="highlights-container">
        <h2>Brief Highlights</h2>
        <div className="highlight">
          <h3>Meta Stock</h3>
          <p><span className="important">April 25, 2022 | Target $262</span> | Max Target $365</p>
          <p>
            <span className="important">Current Price: {metaPrice}</span>
            <a href="https://finance.yahoo.com/quote/META/" target="_blank" rel="noopener noreferrer"> (View on Yahoo Finance)</a>
          </p>
          <p><a href="/pdf/FB_Stock_Review.pdf" target="_blank" rel="noopener noreferrer">Link to full Analysis</a></p>
        </div>
        <div className="highlight">
          <h3>Micron Stock</h3>
          <p><span className="important">April 7, 2026 | Target $590</span> | Bull Target $885 | <a href="/pdf/MU_Revisit_2026.pdf" target="_blank" rel="noopener noreferrer">Analysis</a></p>
          <p><span className="important">February 16, 2022 | Target $130</span> | Max Target $147 | <a href="/pdf/MU_Stock_Pitch.pdf" target="_blank" rel="noopener noreferrer">Analysis</a></p>
          <p>
            <span className="important">Current Price: {micronPrice}</span>
            <a href="https://finance.yahoo.com/quote/MU" target="_blank" rel="noopener noreferrer"> (View on Yahoo Finance)</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
