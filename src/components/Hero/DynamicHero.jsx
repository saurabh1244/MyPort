// DynamicHero.jsx
import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import GlitchText from './GlitchText';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';

const DynamicHero = ({ scrollTo }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const taglines = [
    "Crafting digital experiences with code, creativity, and cutting-edge technology",
    "Building scalable solutions that turn ideas into reality",
    "Architecting the future with modern web technologies"
  ];
  
  // Auto-typing effect
  useEffect(() => {
    const tag = taglines[currentIndex];
    let i = 0;
    
    const type = () => {
      if (i <= tag.length) {
        setTypedText(tag.slice(0, i++));
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          const clear = () => {
            if (i > 0) setTypedText(tag.slice(0, --i));
            if (i) setTimeout(clear, 25);
            else setCurrentIndex(prev => (prev + 1) % taglines.length);
          };
          setTimeout(clear, 2000);
        }, 1000);
      }
    };
    
    const t = setTimeout(type, 1000);
    return () => clearTimeout(t);
  }, [currentIndex]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Grid overlay with fade effect to avoid cutting text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(99,102,241,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          mask: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}
      />
      
      {/* Content container with higher z-index */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-8">
        {/* Name container with protective overlay */}
        <div className="relative inline-block">
          <GlitchText 
            text="Saurabh Chandra" 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
          />
          {/* Text protection overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, transparent 15%, transparent 85%, rgba(15, 23, 42, 0.4) 100%)',
              mixBlendMode: 'multiply'
            }} 
          />
        </div>
        
        <div className="text-2xl md:text-3xl text-indigo-400 font-semibold animate-fade-in-up animation-delay-300">
          Full Stack Developer
        </div>
        
        <div className="text-xl md:text-2xl text-gray-300 h-16 flex justify-center items-center animate-fade-in-up animation-delay-500">
          <span className="border-r-2 border-indigo-400 animate-pulse pr-1">{typedText}</span>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-700">
          {[
            { Icon: Github, href: '#', color: 'hover:bg-gray-700' },
            { Icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
            { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
            { Icon: Mail, href: 'mailto:saurabh@example.com', color: 'hover:bg-indigo-600' }
          ].map(({ Icon, href, color }) => (
            <a
              key={href}
              href={href}
              className={`p-4 bg-slate-800/60 backdrop-blur-sm ${color} rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-indigo-500/25`}
            >
              <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-indigo-400 transition-colors z-20"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-fade-in-up { 
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DynamicHero;