import React from "react";


function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have any questions? Feel free to reach out.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
