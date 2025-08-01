import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, ExternalLink, Filter, Search, Calendar, 
  Star, Code, Globe, Zap, ArrowRight, Briefcase
} from 'lucide-react';
import projectData from './projectData';
import ParticleBackground from '../components/Hero/ParticleBackground';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState({});
  
  // Convert projectData object to array and extract needed fields
  const projectsArray = Object.values(projectData).map(project => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    image: project.image,
    stack: project.technologies, // Note: in projectData.js it's called "technologies"
    slug: Object.keys(projectData).find(key => projectData[key].id === project.id),
    featured: project.featured || false,
    tags: project.tags || [],
    date: project.startDate,
    github: project.github,
    demo: project.demo
  }));
  
  // Tech stack for filtering
  const techStack = ['All', 'React', 'Node.js', 'Python', 'Django', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Vue.js'];
  
  // Initialize projects
  useEffect(() => {
    setProjects(projectsArray);
    setFilteredProjects(projectsArray);
    
    // Set up intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('[data-animate]').forEach(el => observer.unobserve(el));
    };
  }, []);
  
  // Handle filtering
  useEffect(() => {
    let result = projects;
    
    // Apply tech filter
    if (activeFilter !== 'All') {
      result = result.filter(project => 
        project.stack.includes(activeFilter)
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm, projects]);
  
  // Handle filter change
  const handleFilter = (tech) => {
    setActiveFilter(tech);
  };
  
  // Handle search change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Hero Section */}
      <ParticleBackground />

      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
            My Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            A collection of my recent work showcasing my skills in full-stack development, 
            AI integration, and innovative problem-solving
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto bg-slate-800/60 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/60 text-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => handleFilter(tech)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeFilter === tech
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-700 text-white'
                        : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-10">
              <Star className="text-indigo-400 mr-3" size={24} />
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Link 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group"
                  data-animate
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20">
                    {/* Image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Featured badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-indigo-400 text-sm font-medium mb-2">
                        <Calendar className="mr-2" size={16} />
                        {project.date}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300 flex items-center">
                        {project.title}
                        <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={18} />
                      </h3>
                      
                      <p className="text-gray-400 mb-4">{project.subtitle}</p>
                      
                      <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                            +{project.stack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* All Projects */}
        <div>
          <div className="flex items-center mb-10">
            <Briefcase className="text-indigo-400 mr-3" size={24} />
            <h2 className="text-3xl font-bold text-white">All Projects</h2>
            <span className="ml-4 px-3 py-1 bg-slate-800/60 text-slate-400 rounded-full text-sm">
              {filteredProjects.length} projects
            </span>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <Link 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group"
                  data-animate
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20">
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-indigo-400 text-sm font-medium mb-2">
                        <Calendar className="mr-2" size={16} />
                        {project.date}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300 flex items-center">
                        {project.title}
                        <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.subtitle}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-xs font-medium">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;