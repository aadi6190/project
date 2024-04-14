import React from 'react'
import './Hero.css'
import { FaArrowRight } from 'react-icons/fa'
import Layout from './Layout'

const Hero = () => {
  return (
    <>
      <div className="hero">

        <div className="hero-text">
          <h1>Spend your time on what
            <br />
           You Love
          </h1>
          <p>
            Lets us do the NDPI providers Search for you. conneting you with verified <br />
            locals providers to choose from
          </p>
        </div>
        <div className="hero-btn">
          <button>Lets Talk  <FaArrowRight/> </button>
        </div>
        <br />
      
        <br />
       <Layout/>



      </div></>
  )
}

export default Hero
