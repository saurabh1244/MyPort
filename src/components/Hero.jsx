// Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Copy, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  const subtitleRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const resumeDownload =
    'https://drive.google.com/uc?export=download&id=1CH3_qfFKQkrKzx2aGar7MTGl_qod1nU7';

  // Subtitle typing effect
  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (subtitle) {
      const text = 'FULL STACK DEVELOPER | CREATING IMPACT WITH CODE';
      subtitle.textContent = '';
      let i = 0;

      const typeWriter = () => {
        if (i < text.length) {
          subtitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 40);
        }
      };

      setTimeout(typeWriter, 800);
    }
  }, []);

  // Copy CLI command
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx xiorabh');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">

          {/* 🟡 NAME ADDED HERE */}
          <h2
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(1.8rem, 1.8vw, 2rem)',
              color: 'var(--color-yellow)',
              letterSpacing: '1px',
              marginBottom: '1rem',
              textAlign: 'center',
              animation: 'fadeInUp 0.6s ease 0.1s both',
            }}
          >
            SAURABH CHANDRA
          </h2>

          {/* TITLE */}
          <h1 className="hero-title">
            <span className="title-line">DEVELOPER</span>
            <span className="title-separator">×</span>
            <span className="title-line">CREATOR</span>
            <span className="title-separator">×</span>
            <span className="title-line">BUILDER</span>
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle" ref={subtitleRef}></p>

          {/* CLI BOX */}
          <div
            className="cli-box"
            style={{
              marginTop: '2rem',
              background: 'var(--color-black)',
              border: 'var(--border-width) solid var(--color-yellow)',
              padding: '1rem',
              boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0 var(--color-white)',
              borderRadius: '8px',
              fontFamily: 'var(--font-mono)',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p style={{ color: 'var(--color-white)', marginBottom: '0.5rem' }}>
              👉 Try this command in your terminal:
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--color-gray)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                color: 'var(--color-yellow)',
                border: 'var(--border-width) solid var(--color-yellow)',
              }}
            >
              <span style={{ fontWeight: '700' }}>npx xiorabh</span>
              <button
                onClick={copyToClipboard}
                style={{
                  cursor: 'pointer',
                  background: copied ? 'var(--color-green)' : 'var(--color-yellow)',
                  color: 'var(--color-black)',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-mono)',
                  transition: 'all var(--transition)',
                }}
              >
                {copied ? 'COPIED!' : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {[
              { Icon: Github, href: 'https://github.com/saurabh1244' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-chandra-454600268/' },
              { Icon: Twitter, href: 'https://x.com/xiorabh' },
              { Icon: Mail, href: 'mailto:saurabhchandra1244@gmail.com' },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--color-black)',
                  border: 'var(--border-width) solid var(--color-yellow)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  display: 'flex',
                  boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0 var(--color-white)',
                  transition: 'all var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-4px, -4px)';
                  e.currentTarget.style.boxShadow = '12px 12px 0 var(--color-yellow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)';
                  e.currentTarget.style.boxShadow =
                    'var(--shadow-offset) var(--shadow-offset) 0 var(--color-white)';
                }}
              >
                <Icon size={24} color="var(--color-yellow)" />
              </a>
            ))}
          </div>

          {/* BUTTON – DOWNLOAD ENABLED 🔥 */}
          <div className="hero-buttons" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
            <a
              href={resumeDownload}
              className="cta-button"
              download="Saurabh_Chandra_Resume.pdf"
            >
              GET MY RESUME
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
