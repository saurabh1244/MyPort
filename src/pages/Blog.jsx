import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './BlogData';
import { Calendar, Clock, User, MessageCircle, Heart } from 'lucide-react';
import ParticleBackground from '../components/Hero/ParticleBackground';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white  overflow-hidden">
      {/* Animated background particles */}

      <ParticleBackground />
      
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
            Knowledge Hub
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Insights, tutorials, and thoughts on web development, technology, and more from our team of experts.
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div 
              key={blog.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 overflow-hidden"
            >
              {/* Image with overlay effect */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-xs font-bold rounded-full">
                  {blog.category}
                </div>
                
                {/* Read time badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 text-gray-300 text-xs font-medium rounded-full flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {blog.readTime}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-indigo-400 text-sm font-medium mb-4">
                  <Calendar className="mr-2" size={16} />
                  {blog.date}
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="hover:text-indigo-300 transition-colors"
                  >
                    {blog.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {blog.intro}
                </p>
                
            
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-indigo-400 rounded-full text-xs font-medium">
                      +{blog.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Engagement stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{blog.comments} comments</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{blog.likes} likes</span>
                  </div>
                </div>
                
                {/* Read More Button */}
                <Link 
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500/30 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-indigo-400/50 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl">
            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Enjoyed our articles?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest updates and exclusive content delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105">
                  Subscribe Now
                </button>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg transition-all hover:bg-slate-700/60 hover:border-indigo-500/50"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
export default Blog;