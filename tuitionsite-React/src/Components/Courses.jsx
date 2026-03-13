import React from "react";


function Courses() {
  return (
    <section className="courses">
      <h2>Our Courses</h2>

      <div className="course-container">
        <div className="course-card">
          <h3>Class 8</h3>
          <p>Strong foundation in Maths & Science.</p>
        </div>

        <div className="course-card">
          <h3>Class 9</h3>
          <p>Concept clarity with regular tests.</p>
        </div>

        <div className="course-card">
          <h3>Class 10</h3>
          <p>Board exam focused preparation.</p>
        </div>

        <div className="course-card">
          <h3>Class 11–12</h3>
          <p>Advanced learning with expert guidance.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
