import React from 'react';
import './TestimonialCard.css'; 
import imageTestimonial from '../assets/profile.png'


const TestimonialCard= ({ name,text, image }) =>{
  return (
    <div className="testimonial-card">
      <img src={imageTestimonial} alt='Testimonial' />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
}

export default TestimonialCard; 
