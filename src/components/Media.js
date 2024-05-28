import React from 'react';
import './Media.css'; // Import the CSS file for styling

const Media = () => {
  return (
    <div className="media-container">
      <div className="media-column">
        <h2>Hockey Highlights</h2>
        <div>
          <h3>France2 2023-2024 highlights</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ateSpX5uRd4"
            title="France2 2023-2024 highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3>NCAA & USA Pro 2022-2023 highlights</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bFpEh1QdbsQ"
            title="NCAA & USA Pro 2022-2023 highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3>NCAA Post Championship interview</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dgFHGfcE1Ic"
            title="NCAA Post Championship interview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="media-column">
        <h2>Software</h2>
        <div>
          <h3>Website Feature Remodel Demo</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zZ0Ea3HKqBo"
            title="Another Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Media;
