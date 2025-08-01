import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from './BlogData';
import { 
  ArrowLeft, Calendar, Clock, MessageCircle, Heart, Share2, 
  BookmarkPlus, Eye, ChevronUp, Hash, Copy, Check
} from 'lucide-react';

// Enhanced CodeBlock Component with improved styling and copy functionality
const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-8 rounded-xl overflow-hidden shadow-xl">
      <div className="absolute right-3 top-3 z-10">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-md bg-slate-800/90 text-gray-300 hover:bg-slate-700 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm border border-slate-700"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
        {language && (
          <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700/50 text-xs font-medium text-indigo-300">
            {language}
          </div>
        )}
        <pre className="p-6 overflow-x-auto">
          <code className={`text-indigo-200 font-mono text-sm leading-relaxed ${language ? `language-${language}` : ''}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id));
  
  // State for likes and visits
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [visits, setVisits] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Initialize likes and visits from localStorage
  useEffect(() => {
    if (blog) {
      // Get likes from localStorage
      const savedLikes = localStorage.getItem(`blog_likes_${blog.id}`);
      const userLiked = localStorage.getItem(`blog_liked_${blog.id}`);
      
      if (savedLikes) {
        setLikes(parseInt(savedLikes));
      } else {
        setLikes(blog.likes);
      }
      
      setIsLiked(userLiked === 'true');
      
      // Get visits from localStorage
      const savedVisits = localStorage.getItem(`blog_visits_${blog.id}`);
      if (savedVisits) {
        setVisits(parseInt(savedVisits));
      } else {
        setVisits(blog.visits || 0);
      }
      
      // Increment visit count
      const newVisits = parseInt(savedVisits || blog.visits || 0) + 1;
      setVisits(newVisits);
      localStorage.setItem(`blog_visits_${blog.id}`, newVisits.toString());
    }
  }, [blog]);
  
  // Handle like button click
  const handleLike = () => {
    if (!blog) return;
    
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    const newLikes = newLikedState ? likes + 1 : likes - 1;
    setLikes(newLikes);
    
    localStorage.setItem(`blog_likes_${blog.id}`, newLikes.toString());
    localStorage.setItem(`blog_liked_${blog.id}`, newLikedState.toString());
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['content', 'comments'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
            Error 404
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Blog Post Not Found
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/95"></div>
      </div>
      
      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-4">
          {['content', 'comments'].map((section) => (
            <button
              key={section}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === section 
                  ? 'bg-indigo-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Jump to ${section}`}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-white/10 z-10 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-indigo-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Eye className="w-4 h-4 mr-1" />
                {visits}
              </div>
              <button 
                onClick={handleLike}
                className={`flex items-center space-x-1 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </button>
            </div>
          </div>
        </header>
        
        {/* Hero section with title */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
              {blog.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {blog.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {blog.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                {visits} views
              </div>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <main className="pb-20">
          {/* Content section */}
          <section id="content" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {blog.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                  >
                    <Hash className="w-3 h-3 mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
              
              {/* Article content with improved readability */}
              <div className="prose prose-invert prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-100 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-white prose-code:text-indigo-300 prose-pre:bg-slate-900/50 prose-pre:border-slate-700 max-w-none">
                {blog.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  
                  // Check if paragraph is a code block
                  if (paragraph.startsWith('```')) {
                    // Extract language if specified (e.g., ```javascript)
                    const languageMatch = paragraph.match(/^```(\w+)?/);
                    const language = languageMatch ? languageMatch[1] : '';
                    const codeContent = paragraph.replace(/```(\w+)?/, '').trim();
                    
                    return (
                      <CodeBlock 
                        key={index} 
                        code={codeContent} 
                        language={language} 
                      />
                    );
                  }
                  
                  // Check if paragraph is a blockquote
                  if (paragraph.trim().startsWith('>')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-indigo-500 pl-6 py-4 my-8 italic text-gray-200 bg-slate-800/40 backdrop-blur-sm rounded-r-lg">
                        {paragraph.trim().substring(1)}
                      </blockquote>
                    );
                  }
                  
                  // Check if paragraph is a heading (starts with ###)
                  if (paragraph.trim().startsWith('###')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                        {paragraph.trim().substring(4)}
                      </h3>
                    );
                  }
                  
                  // Regular paragraph with improved readability
                  return (
                    <p key={index} className="mb-6 text-gray-100 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              
              {/* Engagement bar */}
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex space-x-6">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center space-x-2 transition-colors ${
                      isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likes} Likes</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                    <span>{blog.comments} Comments</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Eye className="w-5 h-5" />
                    <span>{visits} Views</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-white/10 hover:bg-indigo-500/20 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-300 hover:text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-indigo-500/20 transition-colors">
                    <BookmarkPlus className="w-5 h-5 text-gray-300 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Comments section */}
          <section id="comments" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Comments ({blog.comments})</h2>
              
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                {/* Comment form */}
                <div className="mb-12">
                  <h3 className="text-lg font-medium text-white mb-4">Leave a Comment</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="px-4 py-3 bg-slate-800/60 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="px-4 py-3 bg-slate-800/60 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <textarea 
                      placeholder="Your Comment" 
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/60 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105">
                      Post Comment
                    </button>
                  </div>
                </div>
                
                {/* Sample comments */}
                <div className="space-y-8">
                  {[1, 2].map((comment) => (
                    <div key={comment} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center text-white font-bold mr-4">
                          U
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between mb-2">
                            <h4 className="font-medium text-white">User {comment}</h4>
                            <span className="text-sm text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-gray-300">
                            This is a great article! I really enjoyed reading it and learned a lot. Looking forward to more content like this.
                          </p>
                          <div className="flex items-center mt-3 space-x-4 text-sm">
                            <button className="text-gray-500 hover:text-indigo-400 transition-colors">
                              Like
                            </button>
                            <button className="text-gray-500 hover:text-indigo-400 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Related articles */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogData
                  .filter(post => post.id !== blog.id && post.category === blog.category)
                  .slice(0, 2)
                  .map((relatedBlog) => (
                    <Link 
                      key={relatedBlog.id}
                      to={`/blog/${relatedBlog.id}`}
                      className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-indigo-500/50"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-medium text-indigo-400">
                            {relatedBlog.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {relatedBlog.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                          {relatedBlog.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {relatedBlog.intro}
                        </p>
                        
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {relatedBlog.date}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
          
          {/* Call to action */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl mb-8">
                <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter to get the latest updates and exclusive content delivered directly to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105">
                      Subscribe Now
                    </button>
                    <Link 
                      to="/blog" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-white/10 rounded-lg transition-all hover:bg-slate-700/60 hover:border-indigo-500/50"
                    >
                      More Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BlogDetail;