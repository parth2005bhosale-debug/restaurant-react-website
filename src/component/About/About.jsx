import React from "react";
import './About.css'
import image from '../../asset/Gulabjamun.jpg'

const About = () => {
    return (
        <section className="about">
            
                <div className="about-container">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>
                            Welcome to our Website! We are passionate about building beautiful and functional web application.
                            Our goal is to provide the best user experience with modern technologies
                        </p>
                        <p>
                            We are specialize in React developer,UI design and creating responsive websites that work on all devices.
                        </p>

                        <button className="about-btn">Learn More</button>
                    </div>
                    <div className="about-image">
                        <img src={image} alt="about" />
                    </div>
                </div>
           
        </section>
    )
}

export default About