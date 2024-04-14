import React from 'react'
import './Card.css';
import wheel from '../assets/img/card.jpeg'
import { FaArrowRight } from 'react-icons/fa';

const Cards = () => {
    return (
        <div>
            <div className="h1-title">
                <h1>Support For Every  
                    <br />
                   Stage Of Your  <span>NDIS</span> Journey
                </h1>

            </div>
            <div className="card-grp">
        <div className="card">
            <img src={wheel} alt="" />
            <h2>Don't have an NDIS plan 
                <br />yet?</h2>
            <p>We need details about the person who needs <br />
            their disability.
            </p>
            <h3>Get Support <FaArrowRight/></h3>
        </div>
        <div className="card">
            <img src={wheel} alt="" />
            <h2>Don't have an NDIS plan 
                <br />yet?</h2>
            <p>We need details about the person who needs <br />
            their disability.
            </p>
            <h3>Get Support <FaArrowRight/></h3>
        </div>
        <div className="card">
            <img src={wheel} alt="" />
            <h2>Don't have an NDIS plan 
                <br />yet?</h2>
            <p>We need details about the person who needs <br />
            their disability.
            </p>
            <h3>Get Support <FaArrowRight/></h3>
        </div>


        </div>
        <button className='card-btn'>View More <FaArrowRight/></button>

        </div>
    )
}

export default Cards
