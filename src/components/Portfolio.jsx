import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading"><span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="portfolio.png" alt=""/>
          <div className="portfolio-layer">
            <h4>Web Application</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quis?</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="portfolio.png" alt=""/>
          <div className="portfolio-layer">
            <h4>Web Application</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quis?</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="portfolio.png" alt=""/>
          <div className="portfolio-layer">
            <h4>Web Application</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quis?</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
