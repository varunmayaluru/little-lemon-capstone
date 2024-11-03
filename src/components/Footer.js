import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-section logo">
                {/* Placeholder for logo */}
                <div className="logo-placeholder"></div>
            </section>
            <nav className="footer-section">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <address className="footer-section">
                <h4>Contact</h4>
                <p>Address</p>
                <p>Phone number</p>
                <p><a href="mailto:email@example.com">Email</a></p>
            </address>
            <section className="footer-section">
                <h4>Social Media Links</h4>
                <p>Address</p>
                <p>Phone number</p>
                <p><a href="mailto:social@example.com">Email</a></p>
            </section>
        </footer>
    );
};

export default Footer;
