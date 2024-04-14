import React from 'react'
import './Info.css';
import info from '../assets/img/info.jpg';
import { FaArrowRight } from 'react-icons/fa';


const Info = () => {
    return (



        <div>
            <div className="h1-title">
                <h1>Information And Resources
                </h1>
            </div>
            <div className="info-grp">
                <div className="info">
                    <img src={info} alt="" />
                    <h2>Spinal Cord Injury and <br /> Short Term 
                        Accommodation </h2>
                    <p>XERO software creates invoices in the correct <br />
                        format for Plan Managers and the NDIS to pay <br/>
                        quickly..
                    </p>
                    <h3>Learn More <FaArrowRight /></h3>
                </div>
                <div className="info">
                    <img src={info} alt="" />
                    <h2>Spinal Cord Injury and <br /> Short Term 
                        Accommodation </h2>
                    <p>XERO software creates invoices in the correct <br />
                        format for Plan Managers and the NDIS to pay <br/>
                        quickly..
                    </p>
                    <h3>Learn More <FaArrowRight /></h3>
                </div>
                <div className="info">
                    <img src={info} alt="" />
                    <h2>Spinal Cord Injury and <br /> Short Term 
                        Accommodation </h2>
                    <p>XERO software creates invoices in the correct <br />
                        format for Plan Managers and the NDIS to pay <br/>
                        quickly..
                    </p>
                    <h3>Learn More <FaArrowRight /></h3>
                </div>
            </div>
            <button className='info-btn'>View More <FaArrowRight /></button>
        </div>
    );
};



export default Info;
