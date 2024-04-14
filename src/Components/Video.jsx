import React from 'react';
import './Video.css';
import { FaArrowRight } from 'react-icons/fa';

const Video = () => {
  const videoId = extractVideoId("https://youtu.be/Vd8GFGpDXzg");

  function extractVideoId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\?v=|embed\/|v\/|watch\?.+&v=))([^\/&\?]+)/);
    return match[1];
  }

  return (
    <div className="main-video">
      <div className='video-text'>
        <h2>Empowering Care  Reaching<br /> Every Need</h2>
        <p>Our commitment to empower individuals with disabilities.
          <br /> access to quality care about without boundaries or limitations
        </p>
        <div className="btn"><button>Let's Talk <FaArrowRight /></button></div>
        
      </div>
      
      <div className="video-section">
        <iframe
        
          width="520rem"
          height="275rem"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
