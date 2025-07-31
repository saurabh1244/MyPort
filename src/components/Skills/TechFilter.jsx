import React, { useState } from 'react';

const TechFilter = ({ technologies, onFilter }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const handleFilter = (tech) => {
    setActiveFilter(tech);
    onFilter(tech);
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {['All', ...technologies].map(tech => (
        <button
          key={tech}
          onClick={() => handleFilter(tech)}
          className={`px-4 py-2 rounded-full transition-all duration-300
            ${activeFilter === tech 
              ? 'bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/30' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;