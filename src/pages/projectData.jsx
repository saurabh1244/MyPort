const projectData = {
    'ecommerce-platform': {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-featured online shopping solution",
      description: "A comprehensive e-commerce platform built with modern technologies to provide seamless shopping experience for customers and robust management tools for administrators.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
      technologies: ["React", "Django", "PostgreSQL", "AWS", "Stripe", "Redis"],
      features: [
        "User authentication and authorization",
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and management",
        "Admin dashboard with analytics",
        "Responsive design for all devices",
        "SEO optimized for better visibility"
      ],
      challenges: [
        "Implementing real-time inventory management",
        "Optimizing database queries for high traffic",
        "Ensuring payment security and compliance",
        "Creating intuitive user experience"
      ],
      solutions: [
        "Used Redis for caching frequently accessed data",
        "Implemented database indexing and query optimization",
        "Integrated Stripe with PCI compliance",
        "Conducted user testing and iterative design improvements"
      ],
      outcomes: [
        "40% increase in conversion rate",
        "60% reduction in page load time",
        "99.9% uptime since launch",
        "Positive feedback from 95% of users"
      ],
      testimonial: {
        quote: "This e-commerce platform transformed our online business. The seamless user experience and robust backend have significantly increased our sales and customer satisfaction.",
        author: "Sarah Johnson",
        position: "CEO, Fashion Retail Co."
      },
      timeline: [
        { phase: "Planning", duration: "2 weeks", status: "completed" },
        { phase: "Design", duration: "3 weeks", status: "completed" },
        { phase: "Development", duration: "8 weeks", status: "completed" },
        { phase: "Testing", duration: "2 weeks", status: "completed" },
        { phase: "Deployment", duration: "1 week", status: "completed" }
      ],
      github: "https://github.com/saurabh/ecommerce",
      demo: "https://demo.ecommerce.com",
      startDate: "Jan 2023",
      endDate: "Apr 2023"
    },
    'ai-task-manager': {
      id: 2,
      title: "AI Task Manager",
      subtitle: "Intelligent productivity tool with AI assistance",
      description: "An innovative task management application that leverages artificial intelligence to help users organize their work, prioritize tasks, and optimize productivity through intelligent suggestions and automation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200",
      technologies: ["Python", "FastAPI", "React", "OpenAI", "PostgreSQL", "TensorFlow"],
      features: [
        "AI-powered task prioritization",
        "Natural language processing for task creation",
        "Smart scheduling and deadline management",
        "Team collaboration tools",
        "Progress tracking and analytics",
        "Integration with popular calendars",
        "Mobile-responsive design",
        "Real-time notifications"
      ],
      challenges: [
        "Implementing accurate AI task prioritization",
        "Ensuring data privacy with AI processing",
        "Creating intuitive UI for complex features",
        "Optimizing performance for real-time AI processing"
      ],
      solutions: [
        "Developed custom ML models for task prioritization",
        "Implemented on-device processing for sensitive data",
        "Conducted extensive UX research and testing",
        "Used efficient algorithms and cloud processing"
      ],
      outcomes: [
        "35% increase in user productivity",
        "50% reduction in missed deadlines",
        "90% user satisfaction rate",
        "Featured in TechCrunch as innovative productivity tool"
      ],
      testimonial: {
        quote: "This AI task manager has revolutionized how our team works. The intelligent suggestions and automation features have saved us countless hours and improved our project delivery.",
        author: "Michael Chen",
        position: "CTO, TechStart Inc."
      },
      timeline: [
        { phase: "Research", duration: "3 weeks", status: "completed" },
        { phase: "Prototyping", duration: "2 weeks", status: "completed" },
        { phase: "Development", duration: "10 weeks", status: "completed" },
        { phase: "AI Integration", duration: "4 weeks", status: "completed" },
        { phase: "Testing & Refinement", duration: "3 weeks", status: "completed" }
      ],
      github: "https://github.com/saurabh/ai-tasks",
      demo: "https://ai-tasks.demo.com",
      startDate: "Mar 2023",
      endDate: "Jul 2023"
    },
    'realtime-analytics-dashboard': {
      id: 3,
      title: "Real-time Analytics Dashboard",
      subtitle: "Data visualization platform for business intelligence",
      description: "A powerful real-time analytics dashboard that transforms complex data into actionable insights through interactive visualizations, enabling businesses to make data-driven decisions with confidence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      technologies: ["Express.js", "React", "D3.js", "MongoDB", "Socket.io", "AWS"],
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "Customizable dashboard widgets",
        "Data filtering and segmentation",
        "Automated report generation",
        "Alert system for critical metrics",
        "Multi-user collaboration",
        "Mobile-responsive design"
      ],
      challenges: [
        "Handling large volumes of real-time data",
        "Creating performant visualizations",
        "Ensuring data accuracy and consistency",
        "Building intuitive user interface for complex data"
      ],
      solutions: [
        "Implemented efficient data streaming and processing",
        "Used D3.js for optimized visualizations",
        "Created data validation and reconciliation systems",
        "Designed user-tested interface patterns"
      ],
      outcomes: [
        "80% reduction in data analysis time",
        "Real-time insights for 10,000+ metrics",
        "Adopted by 50+ enterprise clients",
        "Named Best Analytics Tool by Tech Awards 2023"
      ],
      testimonial: {
        quote: "This analytics dashboard has transformed how we understand our business data. The real-time insights and intuitive visualizations have helped us identify opportunities and address issues faster than ever before.",
        author: "Jennifer Williams",
        position: "Data Director, Global Analytics Corp."
      },
      timeline: [
        { phase: "Requirements", duration: "2 weeks", status: "completed" },
        { phase: "Architecture", duration: "2 weeks", status: "completed" },
        { phase: "Core Development", duration: "8 weeks", status: "completed" },
        { phase: "Visualization", duration: "4 weeks", status: "completed" },
        { phase: "Testing & Deployment", duration: "2 weeks", status: "completed" }
      ],
      github: "https://github.com/saurabh/analytics",
      demo: "https://analytics.demo.com",
      startDate: "May 2023",
      endDate: "Sep 2023"
    },
    'social-media-platform': {
      id: 4,
      title: "Social Media Platform",
      subtitle: "Connect and share with communities",
      description: "A modern social media platform with real-time messaging, content sharing, and community features designed to bring people together in meaningful digital spaces.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redis", "JWT"],
      features: [
        "Real-time messaging and notifications",
        "Content creation and sharing",
        "Community groups and forums",
        "Advanced privacy controls",
        "Media uploads and processing",
        "User profiles and customization",
        "Activity feeds and algorithms",
        "Mobile-responsive design"
      ],
      challenges: [
        "Scaling real-time messaging for thousands of concurrent users",
        "Implementing efficient content recommendation algorithms",
        "Ensuring data privacy and security compliance",
        "Creating engaging user experience with minimal loading times"
      ],
      solutions: [
        "Implemented WebSocket clustering with Socket.io for scalability",
        "Developed hybrid recommendation system combining collaborative filtering and content-based approaches",
        "Created comprehensive security framework with end-to-end encryption",
        "Optimized database queries and implemented caching strategies"
      ],
      outcomes: [
        "10,000+ active monthly users",
        "99.95% uptime for real-time features",
        "40% increase in user engagement",
        "Featured in Top 10 Social Innovations by Tech Magazine"
      ],
      testimonial: {
        quote: "This platform has created an incredible community around our brand. The real-time features and intuitive design have made it an essential part of our digital strategy.",
        author: "Alex Rodriguez",
        position: "CMO, ConnectSphere Inc."
      },
      timeline: [
        { phase: "Research & Planning", duration: "3 weeks", status: "completed" },
        { phase: "Design", duration: "4 weeks", status: "completed" },
        { phase: "Development", duration: "12 weeks", status: "completed" },
        { phase: "Testing", duration: "3 weeks", status: "completed" },
        { phase: "Deployment", duration: "2 weeks", status: "completed" }
      ],
      github: "https://github.com/saurabh/social-platform",
      demo: "https://social.demo.com",
      startDate: "Jul 2023",
      endDate: "Oct 2023"
    },
    'fitness-tracker': {
      id: 5,
      title: "Fitness Tracker",
      subtitle: "Track your health and fitness goals",
      description: "A comprehensive fitness tracking application with workout plans, progress tracking, nutrition guidance, and social features to keep users motivated on their health journey.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "TensorFlow.js", "Health APIs"],
      features: [
        "Personalized workout plans and routines",
        "Progress tracking with visual analytics",
        "Nutrition tracking and meal planning",
        "Social challenges and leaderboards",
        "Integration with wearable devices",
        "AI-powered form correction",
        "Goal setting and reminders",
        "Community support and motivation"
      ],
      challenges: [
        "Integrating with multiple wearable device APIs",
        "Creating accurate AI-powered exercise form analysis",
        "Designing intuitive user interface for complex health data",
        "Ensuring data privacy and HIPAA compliance"
      ],
      solutions: [
        "Developed unified API layer for wearable device integration",
        "Implemented pose estimation using TensorFlow.js for real-time form analysis",
        "Created user-tested dashboard with customizable health metrics",
        "Built comprehensive security framework with end-to-end encryption"
      ],
      outcomes: [
        "25,000+ active users",
        "87% of users reported improved fitness consistency",
        "30% increase in goal achievement rate",
        "Partnered with 50+ fitness brands and trainers"
      ],
      testimonial: {
        quote: "This fitness app has completely transformed how I approach my health journey. The AI form correction and personalized plans have helped me achieve goals I never thought possible.",
        author: "Emma Thompson",
        position: "Fitness Enthusiast & App User"
      },
      timeline: [
        { phase: "Research", duration: "2 weeks", status: "completed" },
        { phase: "Design", duration: "3 weeks", status: "completed" },
        { phase: "Development", duration: "14 weeks", status: "completed" },
        { phase: "AI Integration", duration: "4 weeks", status: "completed" },
        { phase: "Testing & Launch", duration: "3 weeks", status: "completed" }
      ],
      github: "https://github.com/saurabh/fitness-tracker",
      demo: "https://fitness.demo.com",
      startDate: "Nov 2023",
      endDate: "Mar 2024"
    },
    'recipe-finder': {
      id: 6,
      title: "Recipe Finder",
      subtitle: "Discover and share delicious recipes",
      description: "A recipe discovery platform with advanced filtering, meal planning, grocery list generation, and social features that connect food enthusiasts from around the world.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200",
      technologies: ["Vue.js", "Express.js", "MySQL", "EDAMAM API", "Cloudinary", "JWT"],
      features: [
        "Advanced recipe search with dietary filters",
        "Meal planning and calendar integration",
        "Automated grocery list generation",
        "Nutritional information and calorie tracking",
        "User reviews and ratings",
        "Step-by-step cooking instructions",
        "Social sharing and community features",
        "Personalized recommendations"
      ],
      challenges: [
        "Integrating multiple food APIs for comprehensive recipe database",
        "Implementing accurate nutritional analysis for diverse recipes",
        "Creating efficient meal planning algorithm with dietary restrictions",
        "Designing engaging user experience for recipe discovery"
      ],
      solutions: [
        "Developed custom API aggregation layer for multiple food databases",
        "Implemented nutritional calculation engine with USDA database integration",
        "Created constraint satisfaction algorithm for meal planning",
        "Designed user-tested interface with focus on visual recipe discovery"
      ],
      outcomes: [
        "50,000+ recipes in database",
        "30,000+ monthly active users",
        "40% increase in home cooking among users",
        "Partnership with 100+ food brands and nutritionists"
      ],
      testimonial: {
        quote: "This recipe app has become an essential part of my daily life. The meal planning features have saved me hours each week, and I've discovered so many amazing new recipes!",
        author: "David Kim",
        position: "Home Chef & Food Blogger"
      },
      timeline: [
        { phase: "Research & Planning", duration: "2 weeks", status: "completed" },
        { phase: "Design", duration: "3 weeks", status: "completed" },
        { phase: "Development", duration: "10 weeks", status: "completed" },
        { phase: "API Integration", duration: "3 weeks", status: "completed" },
        { phase: "Testing & Launch", duration: "2 weeks", status: "completed" }
      ],
      github: "https://github.com/saurabh/recipe-finder",
      demo: "https://recipes.demo.com",
      startDate: "Jan 2024",
      endDate: "Apr 2024"
    }
  };

export default projectData;  