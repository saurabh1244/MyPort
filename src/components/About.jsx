import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="relative mb-12">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            ABOUT ME
            <span className="title-bracket">]</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Full-Stack Developer */}
          <div className="about-card thick-border p-8 relative">
            <div className="badge-number rotated-badge" style={{top: '-20px', right: '-20px'}}>01</div>
            <div className="flex gap-6">
              <div className="icon-box flex-shrink-0">
                <i className="fas fa-code"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4">Full-Stack Developer</h3>
                <div className="speech-bubble">
                  <p className="text-sm font-bold">Specializing in Next.js, Prisma, and self-hosting using Coolify on Linux</p>
                </div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* DevOps & Deployment */}
          <div className="about-card thick-border p-8 relative">
            <div className="badge-number rotated-badge" style={{top: '-20px', right: '-20px'}}>02</div>
            <div className="flex gap-6">
              <div className="icon-box flex-shrink-0">
                <i className="fas fa-link"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4">DevOps & Deployment</h3>
                <div className="speech-bubble">
                  <p className="text-sm font-bold">Containerization, server management, and production deployment solutions</p>
                </div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Co-Founder */}
          <div className="about-card thick-border p-8 relative">
            <div className="badge-number rotated-badge" style={{top: '-20px', right: '-20px'}}>03</div>
            <div className="flex gap-6">
              <div className="icon-box flex-shrink-0">
                <i className="fas fa-building"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4">Cloud & Hosting</h3>
                <div className="speech-bubble">
                  <p className="text-sm font-bold">Complete cloud infrastructure management and deployment</p>
                </div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Game Developer */}
          <div className="about-card thick-border p-8 relative">
            <div className="badge-number rotated-badge" style={{top: '-20px', right: '-20px'}}>04</div>
            <div className="flex gap-6">
              <div className="icon-box flex-shrink-0">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4">APIs & Tools</h3>
                <div className="speech-bubble">
                  <p className="text-sm font-bold">API development and integration with specialized tools</p>
                </div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;