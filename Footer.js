import React from "react";
import "./Footer.css"; // styling ke liye alag CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 MyStore. All rights reserved.</p>
      <div className="footer-links">
        <a href="/contact">Contact</a> | 
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
