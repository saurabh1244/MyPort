import React, { useState } from 'react';

const SkillCloud = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          onMouseEnter={() => setActiveSkill(skill)}
          onMouseLeave={() => setActiveSkill(null)}
          className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer
            ${activeSkill?.name === skill.name 
              ? 'bg-indigo-500 text-white scale-110 shadow-lg shadow-indigo-500/30' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          style={{
            transform: `scale(${1 + (index % 3) * 0.1})`,
            opacity: activeSkill && activeSkill.name !== skill.name ? 0.6 : 1
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillCloud;