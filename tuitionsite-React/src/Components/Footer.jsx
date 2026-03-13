import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <h3>Tuition Classes</h3>
      <p>Quality education for classes 8–12</p>

      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p className="copyright">
        © {new Date().getFullYear()} Tuition Classes. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
