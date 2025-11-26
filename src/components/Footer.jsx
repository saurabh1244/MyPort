// Footer.jsx
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">

            {/* BRAND */}
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-bracket">[</span>
                <span className="logo-text">XIO<span className="logo-accent">RABH</span><span className="logo-text">.COM</span></span>
                <span className="logo-bracket">]</span>
              </div>
              <p className="footer-tagline">FULL STACK DEVELOPER • AI INTEGRATOR • PROBLEM SOLVER</p>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-links">
              <a href="#home">HOME</a>
              <a href="#services">SERVICES</a>
              <a href="#about">ABOUT</a>
              <a href="#skills">SKILLS</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="footer-social">
              <a href="https://github.com/saurabh1244" target="_blank" rel="noopener noreferrer" className="social-link">[ GITHUB ]</a>
              <a href="https://x.com/xiorabh" target="_blank" rel="noopener noreferrer" className="social-link">[ TWITTER ]</a>
              <a href="https://www.linkedin.com/in/saurabh-chandra-454600268/" target="_blank" rel="noopener noreferrer" className="social-link">[ LINKEDIN ]</a>
              <a href="mailto:saurabhchandra1244@gmail.com" className="social-link">[ EMAIL ]</a>
            </div>

          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SAURABH CHANDRA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <button
        className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <span>▲</span>
        <span className="back-text">TOP</span>
      </button>
    </>
  );
};

export default Footer;
