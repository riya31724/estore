import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <footer className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Email: support@myshop.com</p>
        <p>Phone: +91 9876543210</p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="mailto:support@myshop.com"><FaEnvelope /></a>
        </div>

        <p className="copy">© 2025 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
