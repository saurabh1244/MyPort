import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageSquare, 
  Github, Linkedin, Twitter, ExternalLink,
  CheckCircle, AlertCircle, Clock, Users,
  ArrowRight, Star, Zap, Briefcase, Code
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});
  
  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="text-indigo-400" size={24} />,
      title: "Email",
      value: "saurabh@example.com",
      description: "I'll respond within 24 hours"
    },
    {
      icon: <Phone className="text-indigo-400" size={24} />,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <MapPin className="text-indigo-400" size={24} />,
      title: "Location",
      value: "Mumbai, India",
      description: "Available for remote work worldwide"
    }
  ];
  
  // Social links
  const socialLinks = [
    { icon: <Github size={20} />, url: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <ExternalLink size={20} />, url: '#', label: 'Website' }
  ];
  
  // Services
  const services = [
    {
      icon: <Code className="text-indigo-400" size={24} />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies"
    },
    {
      icon: <Briefcase className="text-indigo-400" size={24} />,
      title: "Consulting",
      description: "Technical guidance and architecture planning"
    },
    {
      icon: <Zap className="text-indigo-400" size={24} />,
      title: "Performance Optimization",
      description: "Speed up your existing applications"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "I typically respond to all inquiries within 24 hours. For urgent projects, I can often respond within a few hours."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients from all over the world. Time zone differences are not an issue as I'm flexible with my schedule."
    },
    {
      question: "What is your project process?",
      answer: "My process typically involves: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & Refinement, 5) Deployment & Support."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer various support packages depending on your needs, from basic bug fixes to full maintenance and feature updates."
    }
  ];
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.2; // 80% success rate
      
      if (isSuccess) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    }, 2000);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. 
            Let's create something amazing together!
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-indigo-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center p-3 bg-slate-700/50 rounded-xl hover:bg-indigo-500/20 transition-all duration-300 hover:scale-105 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {social.icon}
                    </div>
                    <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">What I Offer</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-indigo-400">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Send Me a Message</h2>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                  <div className="flex items-center">
                    <AlertCircle className="text-red-400 mr-3" size={20} />
                    <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/60 border ${
                        errors.name ? 'border-red-500/50' : 'border-slate-700/50'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/60 border ${
                        errors.email ? 'border-red-500/50' : 'border-slate-700/50'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800/60 border ${
                      errors.subject ? 'border-red-500/50' : 'border-slate-700/50'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-800/60 border ${
                      errors.message ? 'border-red-500/50' : 'border-slate-700/50'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white resize-none transition-all`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                      onClick={() => {
                        const element = document.getElementById(`faq-answer-${index}`);
                        const icon = document.getElementById(`faq-icon-${index}`);
                        
                        if (element.style.display === 'none' || element.style.display === '') {
                          element.style.display = 'block';
                          icon.style.transform = 'rotate(180deg)';
                        } else {
                          element.style.display = 'none';
                          icon.style.transform = 'rotate(0deg)';
                        }
                      }}
                    >
                      <h4 className="font-bold text-white">{faq.question}</h4>
                      <svg 
                        id={`faq-icon-${index}`}
                        className="w-5 h-5 text-indigo-400 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-4 pb-4 text-gray-300 text-sm hidden"
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-12 border border-indigo-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your ideas to life. I'm excited to hear about your project!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:saurabh@example.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Mail className="mr-2" size={20} />
                Email Me Directly
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all hover:bg-slate-700/60 hover:border-indigo-500/50 hover:scale-105"
              >
                <Briefcase className="mr-2" size={20} />
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;