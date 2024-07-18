import React, { useEffect, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const App = () => {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Menu icon click event
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    const handleMenuClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuClick);

    // Scroll event
    const handleScroll = () => {
      const sections = sectionsRef.current;
      const navLinks = navLinksRef.current;

      sections.forEach((sec, index) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          // Remove active class from all links
          navLinks.forEach((link) => link.classList.remove('active'));
          // Add active class to the corresponding link
          navLinks[index].classList.add('active');
        }
      });

      // Sticky header
      const header = headerRef.current;
      header.classList.toggle('sticky', window.scrollY > 100);

      // Remove icon and navbar active state
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    // ScrollReveal
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    return () => {
      // Cleanup event listeners
      menuIcon.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header ref={headerRef} className="header">
        <div className="logo">My Portfolio</div>
        <div ref={menuIconRef} id="menu-icon" className="bx bx-menu"></div>
        <nav ref={navbarRef} className="navbar">
          <a ref={(el) => (navLinksRef.current[0] = el)} href="#home" className="active">Home</a>
          <a ref={(el) => (navLinksRef.current[1] = el)} href="#about">About</a>
          <a ref={(el) => (navLinksRef.current[2] = el)} href="#services">Services</a>
          <a ref={(el) => (navLinksRef.current[3] = el)} href="#portfolio">Portfolio</a>
          <a ref={(el) => (navLinksRef.current[4] = el)} href="#contact">Contact</a>
        </nav>
      </header>
      <section ref={(el) => (sectionsRef.current[0] = el)} id="home" className="home">
        <Home />
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)} id="about" className="about">
        <About />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} id="services" className="services">
        <Services />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} id="portfolio" className="portfolio">
        <Portfolio />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} id="contact" className="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
