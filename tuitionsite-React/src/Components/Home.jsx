import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Nav />

      <div id="home">
        <Hero />
      </div>

      <div id="courses">
        <Courses />
      </div>

      <div id="courses">
      <Contact/>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
