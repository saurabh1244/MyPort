// GlitchText.jsx
import React, { useState, useEffect, useRef } from 'react';

const GlitchText = ({ 
  text, 
  className = '', 
  color = 'indigo',
  intensity = 'medium',
  speed = 'normal',
  as: Component = 'span'
}) => {
  const [glitch, setGlitch] = useState(false);
  const [hover, setHover] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Define color schemes
  const colorSchemes = {
    indigo: {
      primary: 'text-indigo-300',
      layer1: 'text-indigo-400',
      layer2: 'text-purple-500',
      layer3: 'text-cyan-400',
      glow: 'shadow-indigo-500/30',
      scanline: 'bg-indigo-400/20'
    },
    green: {
      primary: 'text-green-300',
      layer1: 'text-green-400',
      layer2: 'text-emerald-500',
      layer3: 'text-lime-400',
      glow: 'shadow-green-500/30',
      scanline: 'bg-green-400/20'
    },
    red: {
      primary: 'text-red-300',
      layer1: 'text-red-400',
      layer2: 'text-rose-500',
      layer3: 'text-orange-400',
      glow: 'shadow-red-500/30',
      scanline: 'bg-red-400/20'
    },
    blue: {
      primary: 'text-blue-300',
      layer1: 'text-blue-400',
      layer2: 'text-cyan-500',
      layer3: 'text-sky-400',
      glow: 'shadow-blue-500/30',
      scanline: 'bg-blue-400/20'
    }
  };
  
  // Define intensity levels
  const intensityLevels = {
    low: { frequency: 0.98, duration: 150, layers: 2 },
    medium: { frequency: 0.95, duration: 200, layers: 3 },
    high: { frequency: 0.90, duration: 250, layers: 4 }
  };
  
  // Define speed levels
  const speedLevels = {
    slow: { interval: 5000, animation: 'slow' },
    normal: { interval: 3000, animation: 'normal' },
    fast: { interval: 1500, animation: 'fast' }
  };
  
  const colors = colorSchemes[color] || colorSchemes.indigo;
  const intensityConfig = intensityLevels[intensity] || intensityLevels.medium;
  const speedConfig = speedLevels[speed] || speedLevels.normal;
  
  useEffect(() => {
    const triggerGlitch = () => {
      setGlitch(true);
      timeoutRef.current = setTimeout(() => setGlitch(false), intensityConfig.duration);
    };
    
    // Random glitch effect
    intervalRef.current = setInterval(() => {
      if (Math.random() > intensityConfig.frequency) {
        triggerGlitch();
      }
    }, speedConfig.interval);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [intensityConfig, speedConfig]);
  
  // Generate random glitch positions
  const getRandomPosition = () => {
    return {
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6
    };
  };
  
  const glitchPositions = Array.from({ length: intensityConfig.layers }, () => getRandomPosition());
  
  return (
    <Component 
      className={`relative inline-block ${className} ${hover ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Main text layer */}
      <span className={`relative z-10 transition-all duration-300 ${colors.primary} ${hover ? 'drop-shadow-lg' : ''}`}>
        {text}
      </span>
      
      {/* Glitch layers */}
      {glitch && glitchPositions.map((pos, index) => (
        <React.Fragment key={index}>
          {/* Top part */}
          <span
            className="absolute top-0 left-0 w-full h-full opacity-80 z-0 transition-all duration-100"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              clipPath: `polygon(0 0, 100% 0, 100% ${45 + index * 5}%, 0 ${45 + index * 5}%)`,
              color: index % 2 === 0 ? 'currentColor' : 'inherit',
              textShadow: '0 0 8px currentColor',
              animation: `glitch-shift ${0.1 + index * 0.05}s infinite alternate`
            }}
          >
            <span className={index === 0 ? colors.layer1 : index === 1 ? colors.layer2 : colors.layer3}>
              {text}
            </span>
          </span>
          
          {/* Bottom part */}
          <span
            className="absolute top-0 left-0 w-full h-full opacity-80 z-0 transition-all duration-100"
            style={{
              transform: `translate(${-pos.x}px, ${-pos.y}px)`,
              clipPath: `polygon(0 ${55 - index * 5}%, 100% ${55 - index * 5}%, 100% 100%, 0 100%)`,
              color: index % 2 === 0 ? 'currentColor' : 'inherit',
              textShadow: '0 0 8px currentColor',
              animation: `glitch-shift ${0.1 + index * 0.05}s infinite alternate-reverse`
            }}
          >
            <span className={index === 0 ? colors.layer2 : index === 1 ? colors.layer3 : colors.layer1}>
              {text}
            </span>
          </span>
        </React.Fragment>
      ))}
      
      {/* Random noise overlay */}
      {glitch && (
        <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='none'/%3E%3Cpath d='M0 0h100v100H0z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '4px 4px',
            animation: 'noise 0.2s infinite'
          }}></div>
        </div>
      )}
      
      {/* Scanline effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30">
        <div className={`absolute top-0 left-0 w-full h-0.5 ${colors.scanline} animate-scanline`}></div>
        {hover && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-40 animate-pulse"></div>
        )}
      </div>
      
      {/* Glow effect on hover */}
      {hover && (
        <div className={`absolute inset-0 opacity-50 blur-md z-0 ${colors.glow} rounded`}></div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes glitch-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px); }
        }
        
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, -1%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, 1%); }
          50% { transform: translate(-1%, -1%); }
          60% { transform: translate(1%, -1%); }
          70% { transform: translate(-1%, 1%); }
          80% { transform: translate(1%, 1%); }
          90% { transform: translate(-1%, -1%); }
        }
        
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </Component>
  );
};

export default GlitchText;