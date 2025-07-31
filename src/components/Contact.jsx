// Contact.jsx
import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    await new Promise(r => setTimeout(r, 1500));
    console.log(form);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* ONLY the card is yellow-gold */}
        <div className="bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute top-1/2 left-4 -translate-y-1/2 text-black/70" size={20} />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-white/20 placeholder-black/60 text-black rounded-xl border border-transparent focus:border-black/40 outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute top-1/2 left-4 -translate-y-1/2 text-black/70" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3 bg-white/20 placeholder-black/60 text-black rounded-xl border border-transparent focus:border-black/40 outline-none"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute top-4 left-4 text-black/70" size={20} />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/20 placeholder-black/60 text-black rounded-xl border border-transparent focus:border-black/40 outline-none resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-black text-yellow-400 font-bold rounded-lg shadow-md hover:bg-neutral-800 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 border-2 border-t-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && <p className="text-center text-green-800 font-semibold">Sent successfully!</p>}
            {status === 'error' && <p className="text-center text-red-800 font-semibold">Failed, please retry.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;