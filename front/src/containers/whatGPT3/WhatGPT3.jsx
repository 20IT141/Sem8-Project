import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Harmoni Event" text="Experience the artistry of event planning with our dedicated team. Whether it's a grand celebration or an intimate affair, we tailor our expertise to suit your every need. Let us craft moments that resonate with joy and elegance." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Your Event Will be beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Corporate Conferences & Seminars" text="Elevate your company's image with meticulously planned corporate events. From conferences to seminars, we ensure smooth execution and impactful experiences, tailored to your brand's identity." />
      <Feature title="Exquisite Weddings & Celebrations" text="Transform your dream wedding into reality with our personalized touch. From intimate ceremonies to grand receptions, we curate every detail, ensuring your special day is filled with love, joy, and unforgettable moments." />
      <Feature title="Creative Innovation" text="Our team of creative minds thrives on pushing the boundaries of conventional event planning, constantly innovating to deliver fresh and exciting concepts that exceed your wildest dreams." />
    </div>
  </div> 
);

export default WhatGPT3;
