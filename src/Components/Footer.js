import "./footerStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4> <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    </h4>
                    <div>
                        <p>Madhepura,Bihar</p>
                        <p>India</p>
                    </div>
                    
                </div>
                <div className="Phone">
                    <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    </h4>
                    <div>
                        <p>+91 6200064858</p>
                    </div>
                    
                </div>
                <div className="Email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    </h4>
                    <div>
                        <p>manishnitcalicut@gmail.com</p>
                    </div>
                    
            </div>
                
            </div>
            <div className="rigth">
                <h4 className="footer-about">About me</h4>
                <p className="footer-about">This is Manish Kumar, MTech scholar of NIT Calicut.
                    I enjoy discussing new technology and challenges.
                </p>
                <div class="social">
                <FaFacebook 
                size={30} 
                style={{color:"#fff",marginRight:"2rem"}}
                />
                <FaTwitter 
                size={30}
                 style={{color:"#fff",marginRight:"2rem"}}
                 />
                <FaLinkedin
                 size={30} style={{color:"#fff",marginRight:"2rem"}}
                 />
                <FaInstagram
                 size={30} style={{color:"#fff",marginRight:"2rem"}}
                 />
                </div>
            
            </div>
        </div>
    </div>
);
};

export default Footer
