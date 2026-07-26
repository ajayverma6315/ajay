import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "aj552956@gmail.com",
    href: "mailto:aj552956@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 9660389898",
    href: "tel:+919660389898"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Rahanawa Sikar Rajsthan",
    href: "#"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    if (!name || !phone || !message) return;
    
    const text = `Hi, my name is ${name}. My phone number is ${phone}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/9660389898?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-transparent text-white z-40 selection:bg-blue-500/30">
      <div className="max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1200px] w-full mx-auto">
        
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black tracking-tight mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-xl font-semibold text-blue-400">
              Whether you need SEO, Performance Marketing, Google Ads, Meta Ads, WordPress, or landing page optimization, I'm ready to help.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-medium">
              I'm currently available for internships, freelance work, and full-time opportunities. If you're looking for someone eager to learn, contribute, and deliver results, I'd love to connect.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Left Column: Contact Info & Why Work With Me */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 border border-white/5">
                    {info.icon}
                  </div>
                  <div className="relative z-10 flex flex-col">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{info.label}</span>
                    <span className="text-sm sm:text-base font-medium text-white group-hover:text-blue-400 transition-colors break-all">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-white/[0.02] shadow-xl shadow-black/50 border border-white/5 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl outline-none focus:bg-white/[0.05] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-300 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl outline-none focus:bg-white/[0.05] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-300 ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl outline-none focus:bg-white/[0.05] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mt-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center justify-center"
        >
          <p className="text-2xl font-bold text-white mb-3">
            Let's build something that creates real business growth.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            I usually respond within 24 hours.
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="https://www.instagram.com/ajjuu_5_?igsh=MWl5Z2ExMjVjenptdQ==" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/5 hover:border-pink-500/30 hover:bg-white/10 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="url(#instagram-gradient)">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="25%" stopColor="#FEDA77" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="75%" stopColor="#8134AF" />
                    <stop offset="100%" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <path d="M12 2c2.7 0 3 .01 4.1.06 1 .05 1.6.2 1.9.35.45.18.77.38 1.1.72.34.33.54.64.72 1.1.13.34.3.89.35 1.94.05 1.05.06 1.37.06 4.1s-.01 3-.06 4.1c-.05 1-.2 1.6-.35 1.94-.18.46-.38.77-.72 1.1-.33.34-.65.54-1.1.72-.34.13-.89.3-1.94.35-1.05.05-1.37.06-4.1.06s-3-.01-4.1-.06c-1-.05-1.6-.2-1.94-.35-.46-.18-.77-.38-1.1-.72-.34-.33-.54-.65-.72-1.1-.13-.34-.3-.89-.35-1.94-.05-1.05-.06-1.37-.06-4.1s.01-3 .06-4.1c.05-1 .2-1.6.35-1.94.18-.45.38-.77.72-1.1.33-.34.65-.54 1.1-.72.34-.13.89-.3 1.94-.35C9 2.01 9.3 2 12 2zm0-2C9.3 0 8.9 0 7.8.05c-1.1.05-1.9.22-2.6.48-.7.28-1.3.64-1.9 1.25-.6.6-1 1.2-1.26 1.9-.26.7-.43 1.5-.48 2.6C0 8.9 0 9.3 0 12s0 3.1.05 4.2c.05 1.1.22 1.9.48 2.6.28.7.64 1.3 1.25 1.9.6.6 1.2 1 1.9 1.26.7.26 1.5.43 2.6.48 1.1.05 1.5.05 4.2.05s3.1 0 4.2-.05c1.1-.05 1.9-.22 2.6-.48.7-.28 1.3-.64 1.9-1.25.6-.6 1-1.2 1.26-1.9.26-.7.43-1.5.48-2.6.05-1.1.05-1.5.05-4.2s0-3.1-.05-4.2c-.05-1.1-.22-1.9-.48-2.6-.28-.7-.64-1.3-1.25-1.9-.6-.6-1.2-1-1.9-1.26-.7-.26-1.5-.43-2.6-.48C15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm3.9-8.4a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1FFeoYjZbo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
                <path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3.2v-3.5h3.2v-2.6c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 2v2.2h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ajay-tech-marketer?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/5 hover:border-blue-700/30 hover:bg-white/10 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#0A66C2">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.1-.1.3-.1.6-.1.9V19h-3V9h3v1.4a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4.1z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
