import React from 'react';

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
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>01</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-laptop-code text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Frontend</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">90%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Backend */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>02</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-server text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Backend</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Prisma</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">API Development</span>
              <span className="skill-tag">Self-Hosting</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">85%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* DevOps */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>03</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-rocket text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">DevOps</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Coolify</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Docker</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Server Management</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">80%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Automation */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>04</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-bolt text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Automation</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">n8n</span>
              <span className="skill-tag">Workflow Design</span>
              <span className="skill-tag">Business Process</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Integration</span>
              <span className="skill-tag">API Automation</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">85%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Game Dev */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>05</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-gamepad text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Game Dev</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Unity</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Blender</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Aseprite</span>
              <span className="skill-tag">3D Development</span>
              <span className="skill-tag">Game Design</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">75%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="corner-square bottom-4 right-4"></div>
          </div>

          {/* Design */}
          <div className="skill-card thick-border p-8 relative">
            <div className="badge-number" style={{top: '-20px', left: '-20px'}}>06</div>
            <div className="flex items-center gap-4 mb-6">
              <i className="fas fa-palette text-5xl skill-icon"></i>
              <h3 className="text-2xl font-black skill-title">Design</h3>
            </div>
            <div className="h-1 skill-divider w-full mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Prototyping</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">Design Systems</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-black skill-label">Proficiency</span>
                <span className="text-xs font-black skill-label">70%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{width: '70%'}}></div>
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