import React from 'react'
import './Slide.css';
import { BsReception0 } from "react-icons/bs";
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const Slide = () => {
    return (
        <>
            <div className="review">


                <div className="arrow-left">
                    <p className="left"><FaCircleChevronLeft /> </p>
                </div>



                <div className='main-slide'>
                    <div className="h1-title">
                        <h1>See What People <span>SAY</span> About
                        </h1>

                    </div>
                    <div className="text">
                        <p >"I'm very greatful  for Clickability . Every time i have spoken to their team, they've been extremly helpful, patient and
                            <br />
                            have brought a lot of clarity to any situation."
                        </p>
                        <br />
                        <h2>Eleyas Hasan Shirsho</h2>
                        <br />
                        Support Coordinator
                    </div>


                </div>


                <div className="arrow-right">
                    <p className="right"><FaCircleChevronRight /> </p>
                </div>








            </div>
        </>
    )
}

export default Slide
