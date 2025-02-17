import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';
import { useNavigate } from 'react-router-dom';


function Footer() {
  const navigate = useNavigate();
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future of Your Upcoming Event</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> Mohammadsafik Shaikh, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p onClick={()=>navigate('/')}>Home</p>
         <p onClick={()=>navigate('/about')} >About</p>
         <p onClick={()=>navigate('/gallery')}>Gallery</p>
         <p onClick={()=>navigate('/contact')}>Contact</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Mohammadsafik Shaikh</p>
        <p>+91 8758147580</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer