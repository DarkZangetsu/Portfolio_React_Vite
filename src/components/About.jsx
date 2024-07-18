import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="laptop.jpg" alt="laptop.jpg"/>
      </div>
      <div className="about-content">
        <h2 className="heading"><span>About</span> Me</h2>
        <h3>Backend Developer</h3>
        <p>
        I am Rakotosalama Fitahiana Florent, I am a full stack developer. My passion lies in developing applications that solve real-world problems. With experience in various programming languages and frameworks, I am motivated, responsible, and client-oriented, always eager to learn and apply my skills in a challenging professional environment.
        </p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default About;
