import { useState } from 'react';
import { 
  Code, Globe, Server, Brain, Plug, Cloud, Folder, 
  Clock, Download, Filter, Star, ExternalLink, MessageSquare 
} from 'lucide-react';

const Skills = () => {
  // Enhanced skill data with proficiency levels (instead of percentages)
  const skillCategories = [
    {
      icon: <Code className="text-yellow-400" size={24} />,
      title: "Programming Languages",
      description: "Proficient in multiple languages for web development, backend APIs, and data structures",
      skills: [
        { name: "Python", level: "expert" },
        { name: "C++", level: "advanced" },
        { name: "HTML/CSS", level: "expert" },
        { name: "Tailwind CSS", level: "advanced" },
        { name: "JavaScript", level: "advanced" },
        { name: "SQL", level: "advanced" }
      ]
    },
    {
      icon: <Globe className="text-yellow-400" size={24} />,
      title: "Web Development",
      description: "Full-stack development expertise with modern frameworks and responsive design",
      skills: [
        { name: "Django", level: "expert" },
        { name: "Django REST Framework", level: "expert" },
        { name: "Django Channels", level: "advanced" },
        { name: "React.js", level: "advanced" },
        { name: "JavaScript DOM", level: "advanced" }
      ]
    },
    {
      icon: <Server className="text-yellow-400" size={24} />,
      title: "DevOps & Deployment",
      description: "Containerization, server management, and production deployment solutions",
      skills: [
        { name: "Docker", level: "advanced" },
        { name: "Linux (Debian)", level: "advanced" },
        { name: "Nginx", level: "expert" },
        { name: "Gunicorn", level: "advanced" },
        { name: "PostgreSQL", level: "advanced" },
        { name: "DigitalOcean", level: "advanced" }
      ]
    },
    {
      icon: <Brain className="text-yellow-400" size={24} />,
      title: "Computer Science Fundamentals",
      description: "Strong foundation in core CS principles and problem-solving",
      skills: [
        { name: "Data Structures & Algorithms", level: "advanced" },
        { name: "Theory of Computation", level: "intermediate" },
        { name: "Operating Systems", level: "advanced" },
        { name: "Networking", level: "intermediate" }
      ]
    },
    {
      icon: <Plug className="text-yellow-400" size={24} />,
      title: "APIs & Tools",
      description: "API development and integration with specialized tools",
      skills: [
        { name: "Django REST Framework", level: "expert" },
        { name: "Plyer", level: "intermediate" },
        { name: "Redis", level: "advanced" },
        { name: "WebSockets", level: "advanced" }
      ]
    },
    {
      icon: <Cloud className="text-yellow-400" size={24} />,
      title: "Cloud & Hosting",
      description: "Complete cloud infrastructure management and deployment",
      skills: [
        { name: "Domain Setup", level: "expert" },
        { name: "VPS Configuration", level: "advanced" },
        { name: "Cloud PostgreSQL", level: "advanced" },
        { name: "NGINX", level: "expert" }
      ]
    }
  ];

  // Project data with unique IDs
  const projects = [
    {
      id: "chatroom-app",
      name: "Chatroom Web App",
      tech: "Django + WebSockets + Redis",
      description: "Real-time location-based messaging platform",
      link: "#",
      icon: <MessageSquare className="text-yellow-400" size={24} />
    },
    {
      id: "djangobeat-blog",
      name: "DjangoBeat Blog",
      tech: "Django + React + PostgreSQL",
      description: "Tech blog with modern UI/UX",
      link: "#",
      icon: <Folder className="text-yellow-400" size={24} />
    },
    {
      id: "portfolio-website",
      name: "Portfolio Website",
      tech: "React + Tailwind CSS",
      description: "Animated, responsive portfolio",
      link: "#",
      icon: <Globe className="text-yellow-400" size={24} />
    }
  ];

  // Skills timeline data
  const timeline = [
    { 
      year: "2020", 
      skills: ["Python", "HTML/CSS", "JavaScript"],
      description: "Started web development journey"
    },
    { 
      year: "2022", 
      skills: ["Django", "React", "Docker"],
      description: "Mastered full-stack development"
    },
    { 
      year: "2024", 
      skills: ["WebSockets", "Cloud Deployment", "DevOps"],
      description: "Advanced to production-level deployments"
    }
  ];

  // State for filtering
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories based on active filter and search term
  const filteredCategories = skillCategories.filter(category => {
    const matchesFilter = activeFilter === "All" || category.title === activeFilter;
    const matchesSearch = category.skills.some(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesFilter && matchesSearch;
  });

  // Function to handle resume download
  const handleDownloadResume = () => {
    alert("Resume download started! In a real app, this would trigger a PDF download.");
    // In a real app, you would use:
    // window.open('/path/to/resume.pdf', '_blank');
  };

  // Function to get progress width based on proficiency level
  const getProgressWidth = (level) => {
    switch(level) {
      case "expert": return "90%";
      case "advanced": return "75%";
      case "intermediate": return "60%";
      case "beginner": return "40%";
      default: return "50%";
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        
        {/* Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === "All" 
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button 
                key={category.title}
                onClick={() => setActiveFilter(category.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeFilter === category.title 
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 bg-slate-800 text-slate-300 rounded-full border border-slate-700 focus:border-yellow-500 focus:outline-none"
            />
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCategories.map((category, index) => (
            <div 
              key={`category-${index}`}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-700 rounded-lg mr-4 group-hover:bg-yellow-500/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <p className="text-slate-300 mb-4 text-sm">{category.description}</p>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`skill-${index}-${skillIndex}`}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-yellow-400 font-medium text-xs capitalize">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" 
                        style={{ width: getProgressWidth(skill.level) }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        
        
        {/* Skills Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Clock className="mr-3 text-yellow-400" size={28} /> Skills Evolution
          </h3>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-amber-500"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={`timeline-${index}`} className="relative flex">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 border-4 border-slate-800 z-10"></div>
                    
                    <div className="ml-12">
                      <div className="text-yellow-400 font-bold text-lg">{item.year}</div>
                      <div className="text-slate-300 mt-1">{item.description}</div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={`timeline-skill-${index}-${skillIndex}`}
                            className="px-3 py-1 bg-slate-700/50 text-yellow-200 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center">
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all hover:scale-105"
          >
            <Download size={20} />
            <span>Download My Resume</span>
          </button>
          <p className="text-slate-400 mt-3">Get a complete overview of my skills and experience</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;