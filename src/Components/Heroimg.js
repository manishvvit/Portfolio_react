import "./HeroStyles.css"
import React from 'react'

import hero from "../assets/Home.png"
import { Link } from "react-router-dom"


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img class="Into-img" src={hero} alt="IntroImage"></img>
        </div>
        <div className="content">
            <p>HI, I am Manish Kumar.</p>
            <h1>A Full Stack Software Developer.</h1>
            

        
        <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
      
    </div>
  )
}

export default Heroimg
