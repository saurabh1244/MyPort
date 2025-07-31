import React, { useEffect, useRef, useState } from 'react';

const ParallaxContainer = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        
        // Calculate how far the element is from the viewport center
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + elementHeight / 2;
        const distanceFromCenter = viewportCenter - elementCenter;
        
        // Calculate parallax offset
        const newOffset = distanceFromCenter * speed;
        setOffset(newOffset);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default ParallaxContainer;