import React from 'react';

const AnimatedCard = ({ children, className = '', hoverScale = 1.03 }) => {
  return (
    <div 
      className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-400/80 transition-all duration-500 hover:scale-[${hoverScale}] hover:shadow-2xl hover:shadow-indigo-400/40 hover:ring-2 hover:ring-indigo-400/30 ${className}`}
    >
      {children}
      
      {/* Indigo glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"></div>
      </div>
    </div>
  );
};

export default AnimatedCard;