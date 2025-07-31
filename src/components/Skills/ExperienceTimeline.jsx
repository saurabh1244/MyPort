import React from 'react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-500"></div>
      
      {experiences.map((exp, index) => (
        <div 
          key={exp.id} 
          className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className="w-1/2 px-8">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-indigo-400 font-medium mb-2">{exp.period}</div>
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <h4 className="text-purple-300 mb-3">{exp.company}</h4>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-6 h-6 rounded-full bg-indigo-400 border-4 border-slate-900 z-10"></div>
          </div>
          <div className="w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;