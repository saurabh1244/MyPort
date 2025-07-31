// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Skills from '../components/MySkills';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [projects, setProjects] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsRef = useRef();

  const taglines = [
    "Crafting digital experiences with code, creativity, and cutting-edge technology",
    "Building scalable solutions that turn ideas into reality",
    "Architecting the future with modern web technologies"
  ];

  // Auto-typing effect
  useEffect(() => {
    const tag = taglines[currentIndex];
    let i = 0;
    
    const type = () => {
      if (i <= tag.length) {
        setTypedText(tag.slice(0, i++));
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          const clear = () => {
            if (i > 0) setTypedText(tag.slice(0, --i));
            if (i) setTimeout(clear, 25);
            else setCurrentIndex(prev => (prev + 1) % taglines.length);
          };
          setTimeout(clear, 2000);
        }, 1000);
      }
    };
    
    const t = setTimeout(type, 1000);
    return () => clearTimeout(t);
  }, [currentIndex]);

  // Mock projects
  const mockProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      stack: ["React", "Django", "PostgreSQL", "AWS"],
      github: "https://github.com/saurabh/ecommerce",
      demo: "https://demo.ecommerce.com",
      description: "Full-stack e-commerce solution with payment integration"
    },
    {
      id: 2,
      title: "AI Task Manager",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      stack: ["Python", "FastAPI", "React", "OpenAI"],
      github: "https://github.com/saurabh/ai-tasks",
      demo: "https://ai-tasks.demo.com",
      description: "Intelligent task management with AI-powered suggestions"
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      stack: ["Express.js", "React", "D3.js", "MongoDB"],
      github: "https://github.com/saurabh/analytics",
      demo: "https://analytics.demo.com",
      description: "Real-time data visualization and analytics platform"
    }
  ];

  // Intersection observer
  useEffect(() => {
    setProjects(mockProjects);
    
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

  // D3 skills tree
  useEffect(() => {
    if (!skillsRef.current || !isVisible.skills) return;
    
    const container = d3.select(skillsRef.current);
    container.selectAll('*').remove();
    
    const data = {
      name: "Technical Skills",
      children: [
        { name: "Languages", children: [{ name: "Python" }, { name: "JavaScript" }, { name: "C++" }] },
        { name: "Frontend", children: [{ name: "React" }, { name: "Vue.js" }, { name: "TypeScript" }] },
        { name: "Backend", children: [{ name: "Django" }, { name: "FastAPI" }, { name: "Express.js" }, { name: "Node.js" }] },
        { name: "DevOps & Cloud", children: [{ name: "AWS" }, { name: "Docker" }, { name: "CI/CD" }, { name: "Git" }] }
      ]
    };
    
    const width = skillsRef.current.offsetWidth;
    const height = 600;
    
    const svg = container
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');
    
    const g = svg.append('g').attr('transform', `translate(${width / 2}, 50)`);
    const tree = d3.tree().size([width - 200, height - 100]);
    const root = d3.hierarchy(data);
    
    root.children.forEach(d => (d._children = d.children));
    root.children = null;
    
    // Gradients
    const defs = svg.append('defs');
    const grad = defs
      .append('linearGradient')
      .attr('id', 'yellowGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#facc15');
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#eab308');
    
    // Update function
    function update(source) {
      const nodes = root.descendants();
      const links = root.links();
      tree(root);
      nodes.forEach(d => (d.y = d.depth * 180));
      
      // Nodes
      const node = g.selectAll('.node').data(nodes, d => d.id || (d.id = Math.random()));
      
      const nodeEnter = node
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', `translate(${source.x0}, ${source.y0})`)
        .style('opacity', 0)
        .on('click', click);
      
      nodeEnter
        .filter(d => d.depth === 0)
        .append('circle')
        .attr('r', 0)
        .attr('fill', 'url(#yellowGradient)')
        .attr('stroke', '#fbbf24')
        .attr('stroke-width', 3)
        .transition()
        .duration(500)
        .attr('r', 25);
      
      nodeEnter
        .filter(d => d.depth === 1)
        .append('rect')
        .attr('width', 0)
        .attr('height', 0)
        .attr('x', 0)
        .attr('y', 0)
        .attr('rx', 8)
        .attr('fill', '#422006')
        .attr('stroke', '#fbbf24')
        .attr('stroke-width', 2)
        .transition()
        .duration(500)
        .attr('width', 120)
        .attr('height', 40)
        .attr('x', -60)
        .attr('y', -20);
      
      nodeEnter
        .filter(d => d.depth === 2)
        .append('path')
        .attr('d', d3.symbol().type(d3.symbolHexagon).size(1500))
        .attr('fill', '#ca8a04')
        .attr('stroke', '#fcd34d')
        .attr('stroke-width', 2)
        .attr('transform', 'scale(0)')
        .transition()
        .duration(500)
        .attr('transform', 'scale(1)');
      
      nodeEnter
        .append('text')
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .style('fill', '#ffffff')
        .style('font-size', d => (d.depth === 0 ? 14 : d.depth === 1 ? 12 : 10) + 'px')
        .style('font-weight', d => (d.depth === 0 ? 'bold' : d.depth === 1 ? 600 : 500))
        .style('opacity', 0)
        .text(d => d.data.name)
        .transition()
        .duration(500)
        .style('opacity', 1);
      
      nodeEnter
        .merge(node)
        .transition()
        .duration(750)
        .attr('transform', d => `translate(${d.x}, ${d.y})`)
        .style('opacity', 1);
      
      node.exit()
        .transition()
        .duration(750)
        .attr('transform', d => `translate(${source.x}, ${source.y})`)
        .style('opacity', 0)
        .remove();
      
      // Links
      const link = g.selectAll('.link').data(links, d => d.target.id);
      
      link
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#fde68a')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0)
        .attr('d', d3.linkVertical().x(() => source.x0).y(() => source.y0))
        .merge(link)
        .transition()
        .duration(750)
        .attr('d', d3.linkVertical().x(d => d.x).y(d => d.y))
        .attr('stroke-opacity', 0.6);
      
      link.exit()
        .transition()
        .duration(750)
        .attr('stroke-opacity', 0)
        .remove();
      
      nodes.forEach(d => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }
    
    // Click handler
    function click(e, d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
    
    root.x0 = width / 2;
    root.y0 = 0;
    update(root);
    
    // Magnetic hover
    function magnet(e) {
      const [mx, my] = d3.pointer(e, g.node());
      g.selectAll('.node').each(function (d) {
        const el = d3.select(this);
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const pull = 10 * (1 - dist / 150);
          el.attr('transform', `translate(${d.x - dx * pull / 150}, ${d.y - dy * pull / 150})`);
        } else {
          el.attr('transform', `translate(${d.x}, ${d.y})`);
        }
      });
    }
    
    function reset() {
      g.selectAll('.node')
        .transition()
        .duration(200)
        .attr('transform', d => `translate(${d.x}, ${d.y})`);
    }
    
    svg.on('mousemove', magnet).on('mouseleave', reset);
  }, [isVisible.skills]);

  // Helper scroll
  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-slate-900/40 to-amber-900/20" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float 8s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="w-4 h-4 bg-yellow-400 rotate-45 rounded-sm" />
            </div>
          ))}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(252,211,77,0.1) 1px, transparent 1px), linear-gradient(90deg,rgba(252,211,77,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent animate-fade-in-up">
            Saurabh Chandra
          </h1>
          <div className="text-2xl md:text-3xl text-yellow-400 font-semibold animate-fade-in-up animation-delay-300">
            Full Stack Developer
          </div>
          <div className="text-xl md:text-2xl text-gray-300 h-16 flex justify-center items-center animate-fade-in-up animation-delay-500">
            <span className="border-r-2 border-yellow-400 animate-pulse pr-1">{typedText}</span>
          </div>
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-700">
            {[
              { Icon: Github, href: '#', color: 'hover:bg-gray-700' },
              { Icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
              { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
              { Icon: Mail, href: 'mailto:saurabh@example.com', color: 'hover:bg-yellow-600' }
            ].map(({ Icon, href, color }) => (
              <a
                key={href}
                href={href}
                className={`p-4 bg-slate-800/60 backdrop-blur-sm ${color} rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-yellow-500/25`}
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About */}
      <section id="about" data-animate className={`py-24 px-6 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl rotate-6 opacity-80 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl -rotate-6 opacity-60 group-hover:-rotate-12 transition-transform duration-500" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Saurabh"
                className="w-72 h-72 rounded-2xl object-cover absolute top-4 left-4 border-2 border-yellow-400/50 shadow-2xl z-10"
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
                  <span key={t} className="px-4 py-2 bg-slate-800/60 text-yellow-400 rounded-full text-sm border border-yellow-500/30 hover:bg-yellow-500/20 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {/* Projects */}
      <section id="projects" data-animate className={`py-24 px-6 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-yellow-400/80 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-400/40 hover:ring-2 hover:ring-yellow-400/30 animate-slide-up"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Image with overlay effect */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Yellow glow overlay on hover */}
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300 flex items-center">
                    {p.title}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors duration-300">{p.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs hover:bg-yellow-400/40 hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-yellow-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-4 pt-2">
                    <a 
                      href={p.github} 
                      className="flex items-center space-x-1 text-gray-400 hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 group-hover:text-yellow-400" /> 
                      <span className="text-sm group-hover:text-yellow-300">Code</span>
                    </a>
                    
                    <a 
                      href={p.demo} 
                      className="flex items-center space-x-1 text-gray-400 hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 group-hover:text-yellow-400" /> 
                      <span className="text-sm group-hover:text-yellow-300">Demo</span>
                    </a>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500/30 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-yellow-400/50 transition-colors duration-300"></div>
                </div>
                
                {/* Yellow glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(250,204,21,0.15)] group-hover:shadow-[0_0_25px_rgba(250,204,21,0.3)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.7s ease-out forwards; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
      `}</style>
    </div>
  );
};

export default Home;