import React, { useState } from 'react';
import { 
  CheckCircle, Star, ArrowRight, Info, 
  Zap, Code, Palette, Database, Cloud,
  Smartphone, MessageSquare, Shield, Award
} from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [isYearly, setIsYearly] = useState(false);
  
  // Web development pricing
  const webPricing = [
    {
      name: 'Basic',
      price: { monthly: 4999, yearly: 49999 },
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages website',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '1 month support',
        'Basic analytics'
      ],
      popular: false,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Mobile Responsive' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'SEO Optimized' }
      ]
    },
    {
      name: 'Professional',
      price: { monthly: 9999, yearly: 99999 },
      description: 'Ideal for growing businesses needing advanced features',
      features: [
        'Up to 15 pages website',
        'Custom admin panel',
        'Advanced SEO optimization',
        'API integration',
        '3 months support',
        'Advanced analytics',
        'Performance optimization'
      ],
      popular: true,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Custom Admin Panel' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'API Integration' }
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 19999, yearly: 199999 },
      description: 'For large enterprises with complex requirements',
      features: [
        'Unlimited pages',
        'Advanced admin panel',
        'Enterprise SEO',
        'Multiple API integrations',
        '6 months support',
        'Real-time analytics',
        'Advanced security features',
        'Performance optimization',
        'Dedicated project manager'
      ],
      popular: false,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Enterprise Security' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Dedicated Support' }
      ]
    }
  ];
  
  // Mobile app development pricing
  const mobilePricing = [
    {
      name: 'Basic',
      price: { monthly: 19999, yearly: 199999 },
      description: 'Simple mobile apps with essential features',
      features: [
        'Up to 10 screens',
        'Basic UI/UX design',
        'Local storage',
        'Basic animations',
        '2 months support',
        'App store deployment'
      ],
      popular: false,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'App Store Ready' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Basic Animations' }
      ]
    },
    {
      name: 'Professional',
      price: { monthly: 39999, yearly: 399999 },
      description: 'Feature-rich mobile apps with advanced functionality',
      features: [
        'Up to 25 screens',
        'Advanced UI/UX design',
        'API integration',
        'Real-time features',
        'Push notifications',
        '3 months support',
        'Advanced animations',
        'Offline capability'
      ],
      popular: true,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Real-time Features' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Offline Capability' }
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 69999, yearly: 699999 },
      description: 'Complex enterprise mobile solutions',
      features: [
        'Unlimited screens',
        'Custom UI/UX design',
        'Multiple API integrations',
        'Advanced real-time features',
        'Push notifications',
        '6 months support',
        'Advanced security',
        'Offline capability',
        'Cross-platform compatibility'
      ],
      popular: false,
      highlightFeatures: [
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Cross-platform' },
        { icon: <CheckCircle className="text-green-400" size={16} />, text: 'Enterprise Security' }
      ]
    }
  ];
  
  // Additional services
  const additionalServices = [
    {
      title: 'Custom Admin Panel',
      description: 'Tailored admin dashboard for managing your content',
      price: '₹2,000+',
      icon: <Code className="text-indigo-400" size={24} />
    },
    {
      title: 'Authentication System',
      description: 'Secure user authentication and authorization',
      price: '₹1,200 - ₹2,000',
      icon: <Shield className="text-indigo-400" size={24} />
    },
    {
      title: 'Payment Gateway',
      description: 'Integration with popular payment providers',
      price: '₹2,000 - ₹3,500',
      icon: <Smartphone className="text-indigo-400" size={24} />
    },
    {
      title: 'Real-time Chat',
      description: 'Live messaging and notification system',
      price: '₹3,000 - ₹5,000',
      icon: <MessageSquare className="text-indigo-400" size={24} />
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization and insights platform',
      price: '₹800 - ₹1,200',
      icon: <Database className="text-indigo-400" size={24} />
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings',
      price: '₹500 - ₹1,000',
      icon: <Star className="text-indigo-400" size={24} />
    }
  ];
  
  // Deployment services
  const deploymentServices = [
    {
      title: 'Basic Deployment',
      description: 'Simple hosting setup and deployment',
      price: '₹700 - ₹1,200',
      icon: <Cloud className="text-indigo-400" size={24} />
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automated testing and deployment with GitHub Actions',
      price: '₹1,500',
      icon: <Zap className="text-indigo-400" size={24} />
    },
    {
      title: 'Docker Deployment',
      description: 'Containerized deployment with Docker',
      price: '₹2,500',
      icon: <Cloud className="text-indigo-400" size={24} />
    },
    {
      title: 'Domain & SSL Setup',
      description: 'Domain configuration and SSL certificate',
      price: '₹800 - ₹1,200',
      icon: <Award className="text-indigo-400" size={24} />
    },
    {
      title: 'Cloud Database',
      description: 'PostgreSQL setup on cloud platform',
      price: '₹500 - ₹1,000',
      icon: <Database className="text-indigo-400" size={24} />
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "Saurabh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      author: "Rajiv Sharma",
      position: "CEO, Fashion Retail Co."
    },
    {
      quote: "Working with Saurabh was a game-changer for our startup. His mobile app development skills and ability to understand our business needs were impressive.",
      author: "Priya Patel",
      position: "Founder, TechStart Inc."
    },
    {
      quote: "The custom admin panel Saurabh built for our business has streamlined our operations significantly. His professionalism and technical expertise are unmatched.",
      author: "Amit Kumar",
      position: "Operations Manager, EduTech Solutions"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How do you estimate project costs?",
      answer: "Project costs are estimated based on complexity, features, timeline, and technology stack. I provide detailed breakdowns and transparent pricing before starting any project."
    },
    {
      question: "Do you offer post-development support?",
      answer: "Yes, all packages include post-development support. I also offer extended support packages for long-term maintenance and updates."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely! I have experience working with existing projects, refactoring code, adding new features, and optimizing performance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, UPI, and digital payments. For international clients, I accept payments via PayPal and Wise."
    }
  ];
  
  const currentPricing = activeTab === 'web' ? webPricing : mobilePricing;
  
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
            Pricing Plans
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Affordable, flexible pricing plans tailored to your project needs. 
            No hidden fees, just quality work.
          </p>
          
          {/* Toggle buttons */}
          <div className="inline-flex bg-slate-800/60 backdrop-blur-sm rounded-full p-1 border border-slate-700/50 mb-12">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Web Development
            </button>
            
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentPricing.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' 
                  : 'border-slate-700/50 hover:border-indigo-500/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-xs font-bold px-4 py-1">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">₹{plan.price.monthly.toLocaleString()}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-lg text-gray-400 line-through">₹{(plan.price.monthly * 12).toLocaleString()}</span>
                    <span className="ml-2 text-green-400 font-medium">Save ₹{(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-lg font-bold text-white">₹{plan.price.yearly.toLocaleString()}</span>
                    <span className="ml-2 text-indigo-400 font-medium">/year</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Highlight features */}
                <div className="space-y-3 mb-8">
                  {plan.highlightFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.icon}
                      <span className="ml-2 text-indigo-400">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <div className="text-lg font-bold text-indigo-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Deployment Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Deployment & DevOps Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploymentServices.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <div className="text-lg font-bold text-indigo-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-indigo-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-indigo-500/30 transition-all duration-300"
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
        
        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and get a customized quote for your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Get a Quote
              <ArrowRight className="ml-2" size={20} />
            </a>
            
            <a
              href="mailto:saurabh@example.com"
              className="inline-flex items-center px-8 py-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all hover:bg-slate-700/60 hover:border-indigo-500/50 hover:scale-105"
            >
              Email Me
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
        
        {/* Note */}
        <div className="bg-indigo-500/20 rounded-2xl p-6 border border-indigo-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <Info className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={16} />
              <span>Final price depends on project scope and complexity</span>
            </li>
            <li className="flex items-start">
              <Info className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={16} />
              <span>All pricing is negotiable based on bulk/project size</span>
            </li>
            <li className="flex items-start">
              <Info className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={16} />
              <span>Domain & Hosting charges are separate if not provided by the client</span>
            </li>
            <li className="flex items-start">
              <Info className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={16} />
              <span>Proper documentation and demo will be provided post-delivery</span>
            </li>
          </ul>
        </div>
      </section>
      
      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default Pricing;