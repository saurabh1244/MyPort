import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicHero from '../components/Hero/DynamicHero';
import SkillMeters from '../components/Skills/SkillMeters';
import SkillCloud from '../components/Skills/SkillCloud';
import TechFilter from '../components/Skills/TechFilter';
import ExperienceTimeline from '../components/Skills/ExperienceTimeline';
import AnimatedCard from '../components/UI/AnimatedCard';
import MySkills from '../components/MySkills';
import { Github, ExternalLink } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Mock projects
  const mockProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      stack: ["React", "Django", "PostgreSQL", "AWS"],
      github: "https://github.com/saurabh/ecommerce",
      demo: "https://demo.ecommerce.com",
      description: "Full-stack e-commerce solution with payment integration",
      slug: "ecommerce-platform"
    },
    {
      id: 2,
      title: "AI Task Manager",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      stack: ["Python", "FastAPI", "React", "OpenAI"],
      github: "https://github.com/saurabh/ai-tasks",
      demo: "https://ai-tasks.demo.com",
      description: "Intelligent task management with AI-powered suggestions",
      slug: "ai-task-manager"
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      stack: ["Express.js", "React", "D3.js", "MongoDB"],
      github: "https://github.com/saurabh/analytics",
      demo: "https://analytics.demo.com",
      description: "Real-time data visualization and analytics platform",
      slug: "realtime-analytics-dashboard"
    }
  ];
  
  // Tech stack for filtering
  const techStack = ['React', 'JavaScript', 'Node.js', 'Python', 'TypeScript', 'CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'];
  
  // Intersection observer
  useEffect(() => {
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
    
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => 
          setIsVisible(p => ({ ...p, [e.target.id]: e.isIntersecting }))
        );
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  
  // Handle project filtering
  const handleFilter = (tech) => {
    setActiveFilter(tech);
    if (tech === 'All') {
      setFilteredProjects(mockProjects);
    } else {
      setFilteredProjects(mockProjects.filter(project => 
        project.stack.includes(tech)
      ));
    }
  };
  
  // Helper scroll
  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white min-h-screen">
      {/* Hero Section */}
      <DynamicHero scrollTo={scrollTo} />
      
      {/* About Section */}
      <section id="about" data-animate className={`py-24 px-6 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl rotate-6 opacity-80 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl -rotate-6 opacity-60 group-hover:-rotate-12 transition-transform duration-500" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Saurabh"
                className="w-72 h-72 rounded-2xl object-cover absolute top-4 left-4 border-2 border-indigo-400/50 shadow-2xl z-10"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications and cloud solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new tech, contributing to open-source, or sharing knowledge with the community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Tech Enthusiast', 'Open Source Contributor'].map(t => (
                  <span key={t} className="px-4 py-2 bg-slate-800/60 text-indigo-400 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/20 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section - Using MySkills Component */}
      <MySkills />
      
      {/* Projects Section */}
      <section id="projects" data-animate className={`py-24 px-6 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <TechFilter technologies={techStack} onFilter={handleFilter} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <AnimatedCard key={p.id} style={{ animationDelay: `${i * 150}ms` }} className="animate-slide-up">
                {/* Image with overlay effect */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Indigo/Purple glow overlay on hover */}
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <Link to={`/projects/${p.slug}`}>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300 flex items-center cursor-pointer">
                      {p.title}
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </h3>
                  </Link>
                  
                  <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors duration-300">{p.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs hover:bg-indigo-400/40 hover:text-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-indigo-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-4 pt-2">
                    <a 
                      href={p.github} 
                      className="flex items-center space-x-1 text-gray-400 hover:text-indigo-300 transition-all duration-300 hover:translate-x-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 group-hover:text-indigo-400" /> 
                      <span className="text-sm group-hover:text-indigo-300">Code</span>
                    </a>
                    
                    <a 
                      href={p.demo} 
                      className="flex items-center space-x-1 text-gray-400 hover:text-indigo-300 transition-all duration-300 hover:translate-x-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 group-hover:text-indigo-400" /> 
                      <span className="text-sm group-hover:text-indigo-300">Demo</span>
                    </a>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500/30 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-indigo-400/50 transition-colors duration-300"></div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.7s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Home;