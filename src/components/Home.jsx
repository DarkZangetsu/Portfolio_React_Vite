// Home.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';


const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Full Stack', 'Mobile'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Fitahiana</h1>
        <h3>And I'm a <span className="multiple-text"></span>developer</h3>
        <p>
        Welcome to my portfolio! Dive into my journey as a passionate and dedicated developer.
        </p>
        <div className="social-media">
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/DarkZangetsu"><i className="bx bxl-github"></i></a>
          <a href="#"><i className='bx bxl-skype'></i></a>
        </div>
        <a href="my_cv.pdf" className="btn">Resume</a>
      </div>
      <div className="home-img">
        <img src="laptop.jpg" alt="laptop.jpg" />
      </div>
    </section>
  );
};

export default Home;
