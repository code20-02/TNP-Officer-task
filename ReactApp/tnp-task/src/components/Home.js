import React from 'react';
import InstructorCard from './InstructorCard';
import TestimonialCard from './TestimonialCard'; 
import './Home.css'; // Import CSS file for styling
import imageTestimonial from '../assets/profile.png';
import Footer from './Footer'; // Import your Footer component;


const Home = () => {
    const instructors = [
        {
            name: 'Instructor Name',
            post: 'Post Instructor @tnpofficer',
            bio: `Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus ultricies velit vel mi
            feugiat, ac feugiat eros suscipit. Vivamus nec
            dictum risus. Sed sit amet eros a felis luctus
            facilisis. Integer at urna in nunc vehicula
            placerat sed quis nulla.`, 
        },
    ];

    const testimonials = [
        { 
          name: "Learner Name", 
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Phasellus ultricies velit vel mi
          feugiat, ac feugiat eros suscipit.
          Vivamuc vehicula placerat sed
          quis nulla.`, 
          image: imageTestimonial
          },
        { 
            name: "Learner Name", 
            text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Phasellus ultricies velit vel mi
            feugiat, ac feugiat eros suscipit.
            Vivamuc vehicula placerat sed
            quis nulla.`, 
            image: imageTestimonial 
          },
        { 
            name: "Learner Name", 
            text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Phasellus ultricies velit vel mi
            feugiat, ac feugiat eros suscipit.
            Vivamuc vehicula placerat sed
            quis nulla.`, 
            image: imageTestimonial
          },
      ];

    return (
        <div className='main-container'>
            <section>
                        <div className='instructor-section'>
                            <div className='instructor-header'>
                                <h2>Our Instructors</h2>
                                <p>Learn from Our Experienced and Dedicated Instructors.</p>
                            </div>
                            
                            <div className="instructor-list">
                                {instructors.map((instructor, index) => (
                                <InstructorCard key={index} {...instructor} />
                                ))}
                            </div>
                        </div>

                        <div className="testimonial-section">
                            <h2>Testimonials</h2>
                            <div className="testimonial-list">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                            </div>
                        </div>
                        <Footer />
                </section>
        </div>
        
        
    );
};

export default Home;
