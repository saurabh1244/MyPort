import React from 'react';

const AnimatedCard = ({ children, className = '', hoverScale = 1.03 }) => {
  return (
    <div 
      className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-yellow-400/80 transition-all duration-500 hover:scale-[${hoverScale}] hover:shadow-2xl hover:shadow-yellow-400/40 hover:ring-2 hover:ring-yellow-400/30 ${className}`}
    >
      {children}
      
      {/* Yellow glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(250,204,21,0.15)] group-hover:shadow-[0_0_25px_rgba(250,204,21,0.3)]"></div>
      </div>
    </div>
  );
};

export default AnimatedCard;