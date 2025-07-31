import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Code, Briefcase, Award, Lightbulb, Target, 
  Zap, Shield, Globe, BookOpen, Users, Star, 
  ChevronRight, ArrowRight, Play, CheckCircle, Calendar,
  Server, Palette, Database, Cloud, Clipboard
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);
  
  // Intersection Observer for animations
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Journey data
  const journeyData = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Started my journey in web development with HTML and CSS",
      icon: <Code className="text-indigo-400" size={24} />
    },
    {
      year: "2018",
      title: "First Breakthrough",
      description: "Built my first full-stack application and fell in love with creating digital solutions",
      icon: <Lightbulb className="text-indigo-400" size={24} />
    },
    {
      year: "2020",
      title: "Professional Growth",
      description: "Joined Tech Innovations Inc. as a Full Stack Developer",
      icon: <Briefcase className="text-indigo-400" size={24} />
    },
    {
      year: "2022",
      title: "Senior Developer",
      description: "Promoted to Senior Developer, leading complex projects and mentoring juniors",
      icon: <Award className="text-indigo-400" size={24} />
    },
    {
      year: "2024",
      title: "Tech Visionary",
      description: "Exploring cutting-edge technologies and architecting scalable solutions",
      icon: <Zap className="text-indigo-400" size={24} />
    }
  ];
  
  // Skills data
  const skillsData = [
    { name: "Frontend Development", level: 90, icon: <Code className="text-indigo-400" size={20} /> },
    { name: "Backend Development", level: 85, icon: <Server className="text-indigo-400" size={20} /> },
    { name: "UI/UX Design", level: 75, icon: <Palette className="text-indigo-400" size={20} /> },
    { name: "Database Management", level: 80, icon: <Database className="text-indigo-400" size={20} /> },
    { name: "DevOps & Deployment", level: 70, icon: <Cloud className="text-indigo-400" size={20} /> },
    { name: "Project Management", level: 85, icon: <Clipboard className="text-indigo-400" size={20} /> }
  ];
  
  // Values data
  const valuesData = [
    {
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to solve problems creatively",
      icon: <Lightbulb className="text-indigo-400" size={24} />
    },
    {
      title: "Quality",
      description: "Committed to delivering high-quality, well-tested, and maintainable code",
      icon: <Shield className="text-indigo-400" size={24} />
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication",
      icon: <Users className="text-indigo-400" size={24} />
    },
    {
      title: "Continuous Learning",
      description: "Always eager to learn new skills and improve existing ones",
      icon: <BookOpen className="text-indigo-400" size={24} />
    }
  ];
  
  // Testimonials data
  const testimonialsData = [
    {
      quote: "Saurabh is one of the most talented developers I've worked with. His ability to solve complex problems with elegant solutions is unmatched.",
      author: "Michael Chen",
      position: "CTO, TechStart Inc."
    },
    {
      quote: "Working with Saurabh was a game-changer for our project. His attention to detail and innovative approach helped us deliver ahead of schedule.",
      author: "Sarah Johnson",
      position: "Product Manager, InnovateCo"
    },
    {
      quote: "Saurabh's technical expertise combined with his communication skills makes him an invaluable team member. He consistently exceeds expectations.",
      author: "David Williams",
      position: "Lead Developer, Digital Solutions Ltd."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6 animate-pulse-slow">
            Get to Know Me
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              About Saurabh Chandra
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Full Stack Developer with a passion for creating innovative digital solutions and pushing the boundaries of web technology
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              View Projects <ArrowRight className="ml-2" size={18} />
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-full transition-all hover:bg-slate-700/60 hover:border-indigo-500/50 hover:scale-105"
            >
              Get In Touch <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 pb-32">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Image and Intro */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl rotate-6 opacity-80 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl -rotate-6 opacity-60 blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                alt="Saurabh Chandra" 
                className="relative rounded-2xl border-2 border-indigo-400/30 shadow-2xl shadow-indigo-500/20 w-full h-auto"
              />
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                  <User className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Who I Am</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications and cloud solutions. My journey in tech started with a curiosity about how websites work, and it has evolved into a career focused on creating innovative digital experiences.
              </p>
              
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in the power of technology to solve real-world problems and improve people's lives.
              </p>
            </div>
          </div>
          
          {/* Right Column - Stats and Skills */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "20+", label: "Technologies" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.03]"
                >
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Skills */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                  <Code className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Core Skills</h2>
              </div>
              
              <div className="space-y-5">
                {skillsData.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        {skill.icon}
                        <span className="ml-2 text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-indigo-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mb-32">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/60 backdrop-blur-sm rounded-full p-1 border border-slate-700/50">
              {[
                { id: 'journey', label: 'My Journey' },
                { id: 'values', label: 'My Values' },
                { id: 'testimonials', label: 'Testimonials' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-700 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {/* Journey Tab */}
            {activeTab === 'journey' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">My Professional Journey</h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                  
                  <div className="space-y-12">
                    {journeyData.map((item, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline dot */}
                        <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center border-4 border-slate-900">
                          <span className="text-white font-bold">{item.year}</span>
                        </div>
                        
                        {/* Content */}
                        <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-indigo-500/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            {item.icon}
                            <h4 className="text-xl font-bold text-white ml-3">{item.title}</h4>
                          </div>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Values Tab */}
            {activeTab === 'values' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Values & Philosophy</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {valuesData.map((value, index) => (
                    <div 
                      key={index}
                      className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-indigo-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {value.icon}
                        <h4 className="text-xl font-bold text-white ml-3">{value.title}</h4>
                      </div>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30 mt-8">
                  <h4 className="text-xl font-bold text-white mb-4">My Philosophy</h4>
                  <p className="text-gray-300 mb-4">
                    I believe that great software is built on a foundation of clean code, thoughtful design, and a deep understanding of user needs. Every line of code should serve a purpose, and every feature should enhance the user experience.
                  </p>
                  <p className="text-gray-300">
                    Technology is constantly evolving, and so am I. I'm committed to continuous learning and staying at the forefront of industry trends to deliver solutions that are not just functional, but exceptional.
                  </p>
                </div>
              </div>
            )}
            
            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">What People Say</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonialsData.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-indigo-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-indigo-400 fill-current" size={18} />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-300 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-white">{testimonial.author}</p>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-12 text-center border border-indigo-500/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Get In Touch <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default About;