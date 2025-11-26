// Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Title Section */}
        <div className="title-wrapper">
          <div className="title-box">
            <h2 className="section-title">PROJECTS</h2>
          </div>
          <p className="subtitle">Web development and AI-powered applications</p>
          <div className="title-star">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <polygon points="40,5 45,35 75,40 45,45 40,75 35,45 5,40 35,35" fill="var(--color-yellow)" stroke="var(--color-yellow)" strokeWidth="3"/>
            </svg>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="tab-wrapper">
          <div className="tab-container">
            <button 
              id="web-tab" 
              className={`project-tab ${activeTab === 'web' ? 'active' : ''}`} 
              onClick={() => switchTab('web')}
            >
              WEB PROJECTS
            </button>
            <button 
              id="game-tab" 
              className={`project-tab ${activeTab === 'game' ? 'active' : ''}`} 
              onClick={() => switchTab('game')}
            >
              GAME PROJECTS
            </button>
          </div>
        </div>

        {/* ----------------🔥 NEW WEB PROJECTS ADDED HERE ---------------- */}
        <div id="web-content" className={`project-content ${activeTab === 'web' ? 'active' : ''}`}>
          <div className="projects-grid">

            {/* 1️⃣ InstaSQL */}
            <div className="project-card">
              <div className="card-number">1</div>
              <div className="card-star">★</div>

              <div className="card-content">
                {/* Image */}
                <div className="project-image">
                  <div className="image-box">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80" alt="InstaSQL" />
                    <div className="image-overlay"></div>
                  </div>
                </div>

                {/* Details */}
                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-title">InstaSQL – AI Database IDE</h3>
                    <span className="status-badge">✓ COMPLETED</span>
                  </div>

                  <div className="project-description">
                    <p>AI-assisted SQL IDE converting natural language → optimized SQL with 90%+ accuracy. FastAPI backend supports 100+ concurrent sessions.</p>
                    <div className="description-corner"></div>
                  </div>

                  <div className="skill-tags">
                    <span className="skill-tag">#FastAPI</span>
                    <span className="skill-tag">#LangChain</span>
                    <span className="skill-tag">#Docker</span>
                    <span className="skill-tag">#MySQL</span>
                  </div>

                  <a href="https://instasql.xiorabh.com" target="_blank" rel="noopener noreferrer" className="project-btn">
                    LIVE DEMO →
                  </a>
                  <a href="https://github.com/saurabh1244/instasql-docs" target="_blank" rel="noopener noreferrer" className="project-btn">
                    GITHUB →
                  </a>
                </div>
              </div>
            </div>

            {/* 2️⃣ CodeGram */}
            <div className="project-card">
              <div className="card-number">2</div>
              <div className="card-star">★</div>

              <div className="card-content">
                <div className="project-image">
                  <div className="image-box">
                    <img
  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop"
  alt="CodeGram"
/>

                    <div className="image-overlay"></div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-title">CodeGram – AI Social Platform</h3>
                    <span className="status-badge">✓ COMPLETED</span>
                  </div>

                  <div className="project-description">
                    <p>Full-stack social platform for developers + AI Code Playground. Built with Remix, Zustand & PostgreSQL.</p>
                    <div className="description-corner"></div>
                  </div>

                  <div className="skill-tags">
                    <span className="skill-tag">#Remix</span>
                    <span className="skill-tag">#Prisma</span>
                    <span className="skill-tag">#PostgreSQL</span>
                    <span className="skill-tag">#AI Tools</span>
                  </div>

                  <a href="https://code.appnity.co.in" target="_blank" rel="noopener noreferrer" className="project-btn">
                    LIVE DEMO →
                  </a>
                  <a href="https://github.com/saurabh1244/codegram-docs" target="_blank" rel="noopener noreferrer" className="project-btn">
                    GITHUB →
                  </a>
                </div>
              </div>
            </div>

            {/* 3️⃣ Baatchit */}
            <div className="project-card">
              <div className="card-number">3</div>
              <div className="card-star">★</div>

              <div className="card-content">
                <div className="project-image">
                  <div className="image-box">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" alt="Baatchit" />
                    <div className="image-overlay"></div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-title">Baatchit – Real-Time Chat</h3>
                    <span className="status-badge">⚡ IN DEVELOPMENT</span>
                  </div>

                  <div className="project-description">
                    <p>Scalable real-time chat app with 500+ users & sub-100ms latency. Built with Django Channels & Redis.</p>
                    <div className="description-corner"></div>
                  </div>

                  <div className="skill-tags">
                    <span className="skill-tag">#Django</span>
                    <span className="skill-tag">#WebSocket</span>
                    <span className="skill-tag">#Redis</span>
                    <span className="skill-tag">#OAuth</span>
                  </div>

                  <a href="https://baatchit.xiorabh.com" target="_blank" rel="noopener noreferrer" className="project-btn">
                    LIVE DEMO →
                  </a>
                  <a href="https://github.com/saurabh1244/baatchit-docs" target="_blank" rel="noopener noreferrer" className="project-btn">
                    GITHUB →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* GAME PROJECTS (unchanged) */}
        <div id="game-content" className={`project-content ${activeTab === 'game' ? 'active' : ''}`}>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-number">1</div>
              <div className="card-star">★</div>
              <div className="card-content">
                <div className="project-image">
                  <div className="image-box">
                    <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80" alt="Zombie Survival Game" />
                    <div className="image-overlay"></div>
                  </div>
                </div>
                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-title">Zombie Survival Game</h3>
                    <span className="status-badge">⚡ IN DEVELOPMENT</span>
                  </div>
                  <div className="project-description">
                    <p>3D zombie survival game using Unity + C# with dynamic gameplay and combat system.</p>
                    <div className="description-corner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
