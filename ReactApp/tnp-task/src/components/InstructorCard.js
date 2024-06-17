import React from 'react';
import './InstructorCard.css'; 
import instructorImage from '../assets/instructor.jpg'

const InstructorCard = ({ name, post, bio, image }) => {
    return (
        <div className="instructor-card">

            <div className='image-container'>
                 <img src={instructorImage} alt={`${name}'s profile`} className="instructor-image" />
            </div>

            <div className='instructor-card-info'>
                <h3>{name}</h3>
                <div>
                    <p>{post}</p>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
