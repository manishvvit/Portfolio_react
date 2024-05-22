import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import pro1 from "../assets/image1.avif"
import pro2 from "../assets/image2.avif"


const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a software developer. I have good problem solving skills.</p>
        <Link to={"/contact"}>
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={pro1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={pro2} className="img" alt="true"/>
            </div>
        </div>
    </div>
  </div>
  
}

export default AboutContent
