// Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // --- New state for header visibility based on scroll direction ---
  const [isVisibleHeader, setIsVisibleHeader] = useState(true);
  const lastScrollY = useRef(0); // To store the previous scroll position

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle background change on scroll (your existing logic)
      setScrolled(currentScrollY > 30);

      // --- Logic for hiding/showing header ---
      // If scrolling down AND past a certain threshold (e.g., 100px from top)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisibleHeader(false); // Hide header by setting state to false
      } else if (currentScrollY < lastScrollY.current) {
        // If scrolling up, show header
        setIsVisibleHeader(true);
      } else if (currentScrollY <= 30) {
        // Always show header at the very top of the page (e.g., within 30px)
        setIsVisibleHeader(true);
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  const navLinks = [
    { to: '/',      label: 'Home'   },
    { to: '/about',  label: 'About'  },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/pricing', label: 'Pricing' }


  ];

  const socials = [
    { Icon: Github,   href: 'https://github.com/xiorabh',   label: 'GitHub'   },
    { Icon: Linkedin, href: 'https://linkedin.com/in/xiorabh', label: 'LinkedIn' },
    { Icon: Twitter,  href: 'https://twitter.com/xiorabh', label: 'Twitter'  },
    { Icon: Mail,     href: 'mailto:hello@xiorabh.dev', label: 'Email'    }
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform
        ${isVisibleHeader ? 'translate-y-0' : '-translate-y-full'} {/* Controls show/hide */}
        ${scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-xl'
          : 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700'
        }`}
    >
      {/* subtle yellow spotlight */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(700px circle at 50% 50%, #f59e0b33, transparent 60%)`
        }}
      />

      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="font-extrabold text-2xl md:text-3xl text-black tracking-wider
                      hover:text-yellow-200 transition-colors"
        >
          Xiorabh
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-3 py-2 text-sm font-semibold rounded-md transition-all
                ${
                  location.pathname === to
                    ? 'text-black'
                    : 'text-yellow-950 hover:text-yellow-800'
                }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-900
                  rounded-full transition-all duration-300
                  ${location.pathname === to ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}
              />
            </Link>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500
                        text-black font-semibold rounded-lg shadow-md
                        hover:from-yellow-600 hover:to-amber-600 transition-all duration-300
                        hover:scale-105"
          >
            Hire Me
          </a>
        </nav>

        {/* Social icons desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-yellow-900 hover:text-yellow-700 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-900 hover:text-yellow-700 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 animate-fade-down bg-yellow-500">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-md font-semibold
                  ${
                    location.pathname === to
                      ? 'text-black bg-yellow-400'
                      : 'text-yellow-950 hover:text-yellow-800 hover:bg-yellow-400/40'
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center space-x-4 pt-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-yellow-900 hover:text-yellow-700 transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="block w-full mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500
                        text-black font-semibold rounded-lg shadow-md text-center
                        hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-down {
          animation: fade-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;