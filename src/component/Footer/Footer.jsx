import React from "react";
import './Footer.css'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>The Hunger Pallate</h2> doorstep
                    <p>Delicious food delivered to your doorstep</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email : info@hungerpallate.com</p>
                    <p>Phone : +91 6482094239</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&Copy; 2026 HungerPallate. All rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer