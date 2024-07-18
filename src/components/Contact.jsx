import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email Address"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Your Phone"/>
          <input type="text" placeholder="Subject"/>
        </div>
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn"/>
      </form>
    </section>
  );
};

export default Contact;
