import React from 'react'
import './Footer.css';
import { FaFacebook, FaInstagram,  FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import { FaXTwitter } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';




const Footer = () => {
    return (

        <>
        <div className="footer">
            <div className="foot">
                <div className="left-foot">
                    <h3>Porviders for <br />NDIS </h3>
                    <p>Lets Us do the NDIS Provider search for you,<br />conneting you with verified local providers to <br />choose from</p>
                    <div className="icons">
                        <p className='foot-icon' ><FaFacebook /></p >
                        <p className='foot-icon' ><FaXTwitter /></p >
                        <p className='foot-icon'><FaInstagram /></p >
                        <p className='foot-icon' ><FaYoutube /></p >



                    </div>



                    <br />
                    <h6>Provide For NDIS All rights Reserved.</h6>
                    

                </div>







                <div className="foot-links">
                    <h2>Ouick Link</h2>
                    <ul>
                        <li><MdKeyboardDoubleArrowRight />Home</li>
                        <li><MdKeyboardDoubleArrowRight />About Us</li>
                        <li><MdKeyboardDoubleArrowRight />Our Services</li>
                        <li><MdKeyboardDoubleArrowRight />Contact Us</li>
                    </ul>
                </div>
                <div className="foot-links">
                    <h2>Sevices</h2>
                    <ul>
                        <li><MdKeyboardDoubleArrowRight />Find Providers</li>
                        <li><MdKeyboardDoubleArrowRight />Social Workers </li>
                        <li><MdKeyboardDoubleArrowRight />For Providers</li>
                        <li><MdKeyboardDoubleArrowRight />Find Insureance</li>
                    </ul>
                </div>
                <div className="foot-links ">
                    <h2>Contact Information</h2>
                    <ul>
                     <li><FaPhone/> +8801879782939</li>
                        <li><FaMessage/> Info@sanbarisol.com </li>
                        <li><FaLocationDot />2464 Royal Ln. Mesa,<br />New Jersey $5463</li>
                       
                    </ul>
                    <div className="foot-terms">
                    <p className="terms">Terms of Use</p>
                    <p className="terms-policy">Privicy Policy </p>
                    </div>
                </div>
             
               
            </div>
            
            <div className="hr">
            <hr style={{width:"75%", alignItems:"center",color:"white", marginLeft:"13rem"}} />
            <p style={{color:"white", fontSize:"17px", marginLeft:"20rem"}}>We Acknowledge the Traditional Owner of the Land on Which we live and work , we pay our respects to Elders Past , Present and emerging, and we celebrate . </p>
            </div>
           

            </div>
        </>
    )
}

export default Footer;
