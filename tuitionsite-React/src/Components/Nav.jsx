import React from "react";


function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h2>Welcome To Our Tuition Classes</h2>
        <p>We provide best coaching for classes 8-12</p>
      </div>

      <ul className="nav-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
