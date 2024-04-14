import React from 'react';
import './Talk.css';
import talk from '../assets/img/talk.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Talk = () => {
    return (
        <div className="talk-container">
            <img
                src={talk}
                alt="Talk"
                className="talk-image"
            />
            <div className="talk-text">
                <div className="h1-title">
                <h1>Your <span>NDIS</span> Navigators
                    <br />
                    Are Ready To Assist
                </h1></div>
                <p className="talk-description">
                    <br />
                   Our friendly Connections team take away the stress by doing the 
                    <br />
                    <span>
                   Search for you, finding local NDIS Providers That Meet Your needs to
                    </span>
                    <br />
                    <span>
                        choose from.
                    </span>
                </p>
                
                   
               
                <button className="button-talk">Let's Talk <FaArrowRight/> </button>
            </div>

        </div>
    );
};

export default Talk;
