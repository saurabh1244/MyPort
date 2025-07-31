import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Github, ExternalLink, Calendar, Code, 
  Users, BarChart3, CheckCircle, Star, Award, 
  Lightbulb, Target, Zap, Shield, Globe
} from 'lucide-react';
import projectData from './projectData';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProject(projectData[slug]);
      setLoading(false);
    }, 500);
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl text-indigo-400">Loading project details...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-full transition-all hover:scale-105">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Projects
            </Link>
            
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                Featured Project
              </span>
              <span className="px-3 py-1 bg-slate-800/60 text-slate-300 rounded-full text-sm font-medium">
                {project.startDate} - {project.endDate}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-indigo-400 mb-6">
              {project.subtitle}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl transition-all hover:bg-slate-700/60 hover:border-indigo-500/50 hover:scale-105"
              >
                <Github className="mr-2" size={20} />
                View Code
              </a>
              
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                  <Target className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <Calendar className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white mb-1">Duration</h3>
                    <p className="text-gray-400">{project.startDate} - {project.endDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Code className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-white mb-1">Technologies</h3>
                    <p className="text-gray-400">{project.technologies.slice(0, 3).join(', ')} +{project.technologies.length - 3} more</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                  <Star className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
              </div>
              
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                    <BarChart3 className="text-indigo-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Challenges</h2>
                </div>
                
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                    <Lightbulb className="text-indigo-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Solutions</h2>
                </div>
                
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/30 rounded-lg mr-4">
                  <Users className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Client Testimonial</h2>
              </div>
              
              <blockquote className="text-lg text-gray-200 italic mb-6">
                "{project.testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center text-white font-bold mr-4">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-gray-400">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Timeline */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Project Timeline</h3>
              
              <div className="space-y-4">
                {project.timeline.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${
                      item.status === 'completed' ? 'bg-green-500' : 'bg-indigo-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-white">{item.phase}</span>
                        <span className="text-sm text-gray-400">{item.duration}</span>
                      </div>
                      <div className="w-full h-1 bg-slate-700 rounded-full mt-1">
                        <div 
                          className={`h-full rounded-full ${
                            item.status === 'completed' ? 'bg-green-500' : 'bg-indigo-500'
                          }`}
                          style={{ width: item.status === 'completed' ? '100%' : '60%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Outcomes */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Key Outcomes</h3>
              
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Interested in this project?</h3>
              <p className="text-gray-300 mb-4">Let's discuss how I can help you with similar solutions.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-lg transition-all hover:scale-105 w-full justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;