import React, { useEffect, useRef } from 'react';

const SkillMeters = ({ skills }) => {
  const meterRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level;
        }
      });
    }, { threshold: 0.5 });
    
    meterRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      meterRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div 
              ref={el => meterRefs.current[index] = el}
              data-level={`${skill.level}%`}
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full w-0 transition-all duration-1000 ease-out"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillMeters;