import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-all">
      <div className="footer-div-1">
        <h2>
          This is the result of a Christmas Hackathon
          <br />
          at Wild Code School
        </h2>
      </div>
      <div className="footer-div-2">
        <div className="links">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="footer-div-3">
        <p id="copyrights">&copy; 2022 Christmas Crew</p>
      </div>
    </div>
  );
}

export default Footer;
