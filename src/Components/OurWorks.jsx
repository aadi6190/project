import React from 'react';
import './OurWorks.css';
import work from "../assets/work.png";

const OurWorks = () => {
  return (
    <div className="our-works">
      <div className="container">
        <div className="row">
          <div className="head">
            <h2>Our Works Process</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={work} alt="Image 1" />
            <h3>We Find Out What You Need</h3>
            <p>
              We need details about the person who needs support: their disability, location and preferences.
            </p>
          </div>
          <div className="col">
            <img src={work} alt="Image 2" />
            <h3>We Connect You With Providers</h3>
            <p>
              We need details about the person who needs support: their disability, location and preferences.
            </p>
          </div>
          <div className="col">
            <img src={work} alt="Image 3" />
            <h3>Providers Contact You Directly</h3>
            <p>
              We need details about the person who needs support: their disability, location and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
