import React from 'react';
import './Abouts.css';
import HomeLayout from '../layouts/HomeLayout';

const About = () => {
    return (
        <HomeLayout>
        
        <div className="about-container">
            <h1>About Us</h1>
             <p>
                 Welcome to our company! We are dedicated to providing the best service to our customers.
                 Our team is composed of highly skilled professionals who are passionate about what they do.
             </p>
             <div className="team-section">
                 <h2>Meet Our Team</h2>
                 <div className="team-member">
                    
                     <h3>Kusum Limbu</h3>
                     <p>CEO</p>
                 </div>
                 <div className="team-member">
                    
                     <h3>Kusum Limbu</h3>
                     <p>CTO</p>
                 </div>
                 {/* Add more team members as needed */}
             </div>
             <div className="mission-section">
                 <h2>Our Mission</h2>
                 <p>
                     Our mission is to innovate and lead in our industry, constantly improving and striving for excellence.
                </p>
            </div>
        </div>

        </HomeLayout>
    );
};

export default About;
