import { useState } from 'react';
import { 
  Code, Globe, Server, Brain, Plug, Cloud, Folder, 
  Clock, Download, Filter, Star, ExternalLink, MessageSquare, 
  Calendar, Award, TrendingUp, Zap, BarChart3, CheckCircle, ChevronRight
} from 'lucide-react';

const MySkills = () => {
  // Enhanced skill data with proficiency levels
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

  // Tech Journey data with enhanced details
  const techJourney = [
    {
      year: "2020",
      title: "Foundations of Web Development",
      subtitle: "Laying the bricks for a strong tech career",
      icon: <Calendar className="text-yellow-400" size={20} />,
      achievements: [
        "Learned HTML, CSS, and JavaScript for creating responsive web pages",
        "Built small static websites and clones to practice design & layout",
        "Gained understanding of web standards, DOM manipulation, and semantic HTML"
      ],
      color: "from-blue-500 to-cyan-400",
      keySkills: ["HTML", "CSS", "JavaScript", "Web Design"]
    },
    {
      year: "2021",
      title: "Entry into Python & Machine Learning",
      subtitle: "Data meets logic",
      icon: <Brain className="text-yellow-400" size={20} />,
      achievements: [
        "Started with Python, then explored NumPy, Pandas, Matplotlib, etc.",
        "Worked on basic machine learning models using Scikit-Learn",
        "Integrated ML models with simple web UIs",
        "Built mini projects like price predictors, classifiers, and trend analyzers"
      ],
      color: "from-green-500 to-emerald-400",
      keySkills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "ML Models"]
    },
    {
      year: "2022",
      title: "Real Projects with Django & Fullstack Exposure",
      subtitle: "From scripts to scalable systems",
      icon: <Server className="text-yellow-400" size={20} />,
      achievements: [
        "Mastered Django for backend development",
        "Connected Django with HTML/CSS/JS to make full-fledged web apps",
        "Started integrating ML models into Django projects",
        "Explored cloud concepts, API integration, and basic deployment",
        "Created production-like apps: Blog platform, ML-integrated web apps, Chat systems"
      ],
      color: "from-purple-500 to-indigo-400",
      keySkills: ["Django", "Fullstack", "APIs", "ML Integration", "Deployment"]
    },
    {
      year: "2023",
      title: "Production, DevOps & Modern Stack",
      subtitle: "Building like a real engineer",
      icon: <Zap className="text-yellow-400" size={20} />,
      achievements: [
        "Worked with modern frontend: React.js",
        "Explored and implemented FastAPI and Express.js for REST APIs",
        "Gained hands-on with Git & GitHub, CI/CD pipelines",
        "Production deployment on VPS (DigitalOcean) using Docker, Nginx, and Gunicorn",
        "Connected custom domains and handled SSL, logs, firewall, and backups"
      ],
      color: "from-amber-500 to-yellow-400",
      keySkills: ["React", "FastAPI", "DevOps", "Docker", "Production"]
    }
  ];

  // Technical Skills Summary
  const skillsSummary = [
    {
      icon: <Code className="text-yellow-400" size={20} />,
      title: "Languages & Tools",
      skills: "Python | C++ | HTML | CSS | JavaScript | SQL | Git"
    },
    {
      icon: <Globe className="text-yellow-400" size={20} />,
      title: "Web & API Development",
      skills: "Django | FastAPI | Express.js | React.js | Tailwind CSS | Django REST Framework"
    },
    {
      icon: <Brain className="text-yellow-400" size={20} />,
      title: "Machine Learning",
      skills: "NumPy | Pandas | Scikit-Learn | Matplotlib | Model Integration in Web"
    },
    {
      icon: <Cloud className="text-yellow-400" size={20} />,
      title: "DevOps & Deployment",
      skills: "Docker | Linux VPS | Nginx | Gunicorn | GitHub Actions | CI/CD | PostgreSQL (Cloud) | Domain + SSL Setup"
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
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-500/10 transform hover:-translate-y-1"
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
        
        {/* Tech Journey Section - Vertical Timeline with 3D Effects */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <TrendingUp className="mr-3 text-yellow-400" size={32} />
            <h3 className="text-3xl font-bold text-white">🚀 My Tech Journey: Year-wise Growth</h3>
          </div>
          
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline line with neon effect */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-amber-500 shadow-lg shadow-blue-500/50 animate-pulse-slow"></div>
            
            <div className="space-y-12">
              {techJourney.map((journey, index) => (
                <div 
                  key={`journey-${index}`}
                  className="relative pl-16 group"
                >
                  {/* Timeline dot with neon glow */}
                  <div className={`absolute left-0 w-10 h-10 rounded-full bg-gradient-to-r ${journey.color} border-4 border-slate-900 z-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg ${journey.color.includes('blue') ? 'shadow-blue-500/50' : journey.color.includes('green') ? 'shadow-green-500/50' : journey.color.includes('purple') ? 'shadow-purple-500/50' : 'shadow-amber-500/50'}`}>
                    <span className="text-black font-bold text-sm">{journey.year}</span>
                  </div>
                  
                  {/* Journey Card with 3D effect */}
                  <div 
                    className={`bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-xl ${journey.color.includes('blue') ? 'group-hover:shadow-blue-500/20' : journey.color.includes('green') ? 'group-hover:shadow-green-500/20' : journey.color.includes('purple') ? 'group-hover:shadow-purple-500/20' : 'group-hover:shadow-amber-500/20'}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* Card header with neon effect */}
                    <div className={`bg-gradient-to-r ${journey.color} p-5 relative overflow-hidden`}>
                      {/* Neon light effect */}
                      <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
                      <div className="relative z-10 flex items-center">
                        <div className="bg-black/20 p-3 rounded-full mr-4">
                          {journey.icon}
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white drop-shadow-lg">{journey.year} – {journey.title}</div>
                          <div className="text-white/90">{journey.subtitle}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content */}
                    <div className="p-6">
                      {/* Key Skills with neon tags */}
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-white mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {journey.keySkills.map((skill, skillIndex) => (
                            <span 
                              key={`skill-${index}-${skillIndex}`}
                              className="px-3 py-1 bg-slate-700/50 text-yellow-300 rounded-lg text-xs font-medium border border-yellow-500/30 shadow-sm shadow-yellow-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {journey.achievements.map((achievement, achIndex) => (
                            <li key={`achievement-${index}-${achIndex}`} className="flex items-start">
                              <div className="bg-yellow-500/20 p-1 rounded-full mt-1 mr-3 animate-pulse-slow">
                                <CheckCircle className="text-yellow-400" size={16} />
                              </div>
                              <span className="text-slate-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technical Skills Summary */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Brain className="mr-3 text-yellow-400" size={28} /> My Technical Skills Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsSummary.map((summary, index) => (
              <div 
                key={`summary-${index}`}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-700 rounded-lg mr-4">
                    {summary.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{summary.title}</h4>
                </div>
                
                <div className="text-yellow-300 font-medium">
                  {summary.skills}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center">
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all hover:scale-105 transform hover:translate-y-1"
          >
            <Download size={20} />
            <span>Download My Resume</span>
          </button>
          <p className="text-slate-400 mt-3">Get a complete overview of my skills and experience</p>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default MySkills;