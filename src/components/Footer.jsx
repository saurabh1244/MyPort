const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white py-10 px-6 md:px-20 shadow-inner rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and tagline */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wider mb-2">Xiorabh</h2>
          <p className="text-sm text-white/90">
            Empowering brands and businesses through modern, scalable, and performance-driven web solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul className="text-sm space-y-1 text-white/90">
            <li>Email: <a href="mailto:hello@xiorabh.dev" className="underline">hello@xiorabh.dev</a></li>
            <li>Phone: <a href="tel:+919876543210" className="underline">+91 98765 43210</a></li>
            <li>Location: Remote Freelancer, India 🇮🇳</li>
            <li>Working Hours: Mon - Sat, 10:00 AM - 7:00 PM IST</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1 text-white/90">
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-sm text-center text-white/80">
        <p>&copy; {new Date().getFullYear()} <span className="font-bold">Xiorabh</span>. All rights reserved.</p>
        <p>Designed & built with 💻 passion and ☕ caffeine.</p>
      </div>
    </footer>
  );
};

export default Footer;
