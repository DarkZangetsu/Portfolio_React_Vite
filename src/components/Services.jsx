import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading"><span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>Creating dynamic and responsive websites using frameworks like Reactjs, Symfony, and Nodejs.</p>
        </div>
        <div className="services-box">
          <i className='bx bxs-data'></i>
          <h3>Mobile App Development</h3>
          <p> Designing and developing mobile applications using Flutter and React Native.</p>
        </div>
        <div className="services-box">
          <i className='bx bxl-dev-to'></i>
          <h3>Backend Development</h3>
          <p>Building robust backend systems with PHP, Symfony, and Nodejs.</p>
        </div>
        <div className="services-box">
          <i className='bx bxl-dev-to'></i>
          <h3>Database Management</h3>
          <p> Proficient in MySQL, SQL, PostgreSQL, and Supabase for efficient data handling and storage solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
