// GlitchText.jsx
import React, { useState, useEffect, useRef } from 'react';

const GlitchText = ({ text, className = '' }) => {
  const [glitch, setGlitch] = useState(false);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    const triggerGlitch = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    };
    
    // Random glitch effect
    intervalRef.current = setInterval(() => {
      if (Math.random() > 0.95) {
        triggerGlitch();
      }
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div className={`relative ${className}`}>
      <span className={`relative z-10 transition-all duration-200 ${glitch ? 'text-indigo-300' : ''}`}>
        {text}
      </span>
      
      {/* Glitch layers */}
      <span 
        className={`absolute top-0 left-0 w-full h-full text-indigo-400 opacity-70 z-0 transition-all duration-200 ${
          glitch ? 'translate-x-1 translate-y-1' : ''
        }`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {text}
      </span>
      
      <span 
        className={`absolute top-0 left-0 w-full h-full text-purple-500 opacity-70 z-0 transition-all duration-200 ${
          glitch ? '-translate-x-1 -translate-y-1' : ''
        }`}
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {text}
      </span>
      
      {/* Scanline effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400/20 animate-scanline"></div>
      </div>
    </div>
  );
};

export default GlitchText;