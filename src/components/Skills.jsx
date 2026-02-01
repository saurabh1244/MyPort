import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="relative mb-12">
          <h2 className="section-title">
            <span className="title-bracket">[</span>
            SKILLS & TECH
            <span className="title-bracket">]</span>
          </h2>
        </div>

        <div className="skills-grid-new">
          {/* Frontend */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              01
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-laptop-code text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Frontend</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">React 18</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Remix</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">TanStack Query</span>
              <span className="skill-tag">Zustand</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">85%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Backend (Python) */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              02
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-server text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Backend (Python)</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Django REST Framework</span>
              <span className="skill-tag">FastAPI</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">JWT + OAuth</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">90%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* DevOps & Cloud */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              03
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-rocket text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">DevOps & Cloud</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Nginx</span>
              <span className="skill-tag">VPS Deployment</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">DigitalOcean</span>
              <span className="skill-tag">CI/CD</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">80%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Databases & Caching */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              04
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-database text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Databases & Caching</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQLite</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Query Optimization</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">85%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Real-time Systems */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              05
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-comments text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Real-time Systems</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">WebSockets</span>
              <span className="skill-tag">Django Channels</span>
              <span className="skill-tag">Redis Pub/Sub</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Async Programming</span>
              <span className="skill-tag">Low Latency</span>
              <span className="skill-tag">Scalable Chat Systems</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">80%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Tools & CS Fundamentals */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{ top: "-20px", left: "-20px" }}>
              06
            </div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-toolbox text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Tools & CS Fundamentals</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">System Design</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">Problem Solving</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">85%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="corner-square bottom-4 right-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
