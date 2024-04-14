import React from 'react';
import './Services.css';
import work from '../assets/work.png';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services'>
      <div className="heading">
        <h2>Our Best Services</h2>
      </div>
      <div className="outer-box">
        {/* First row of boxes */}
        <div className="box">
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Occupational Therapy</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Support Coordination</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Plan Management</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of boxes */}
        <div className="box">
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Support Work</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Speech Therapy</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Cleaning</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third row of boxes */}
        <div className="box">
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Gardening</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Psychology</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
          <div className="inner-box">
            <img src={work} alt="" />
            <div className="inner-text">
              <div className="inner-h1">
                <p>Other</p>
              </div>
              <div className="inner-p">
                <p>We can believe in creating an atmosphere <br /> where every child can thrive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='button'>View All Services <FaArrowRight/></button>
    </div>
  );
};

export default Services;
