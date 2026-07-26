import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center px-4 lg:px-12 py-20 z-10 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[70vw] sm:max-w-[60vw] lg:max-w-[800px] mt-0 lg:-mt-20 z-20 relative"
      >
        <h2 className="text-4xl lg:text-7xl font-black mb-8">
          <span className="text-outline">ABOUT</span> <span className="text-white">ME</span>
        </h2>
        <div className="space-y-6 text-gray-400 text-[18px] lg:text-[22px] font-light leading-relaxed font-cormorant">
          <p>
            Hi there, my name is Ajay Kumar. I am a digital marketer specializing in performance marketing, SEO, and conversion optimization. I love building fast user-friendly websites, creating landing pages and crafting marketing plans that enable businesses to bring in quality leads and increase their presence.
          </p>
          <p>
            Instead of going with my gut instincts, I would rather make decisions based on actual facts, human behavior, and constant testing. Each project for me is an opportunity to optimize its performance.
          </p>
          <div className="pt-4">
            <p className="text-white font-medium mb-2 text-[20px] lg:text-[24px]">My ambition is very clear:</p>
            <p>
              For me, digital marketing is not only about campaigns; it is about knowing people, making decisions and optimizing each part of the customer journey.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
