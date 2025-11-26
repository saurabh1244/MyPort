import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          setActiveLink(section.getAttribute('id'));
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 12px 0 rgba(255, 215, 0, 0.5)' : '0 8px 0 rgba(255, 215, 0, 0.3)' }}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-bracket">[</span>
                <span className="logo-text">XIO<span className="logo-accent">RABH</span><span className="logo-text">.COM</span></span>
            <span className="logo-bracket">]</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>&gt; HOME</a></li>
            <li><a href="#services" className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')}>&gt; SERVICES</a></li>
            <li><a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>&gt; ABOUT</a></li>
            <li><a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>&gt; SKILLS</a></li>
            <li><a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>&gt; PROJECTS</a></li>
            <li><a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>&gt; CONTACT</a></li>
          </ul>
          <button className="cta-button">GET STARTED_</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;