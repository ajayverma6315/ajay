import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen flex flex-col items-center px-4 lg:px-12 py-24 z-40 bg-transparent">
      <div className="max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1200px] w-full mx-auto">
        
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            A selection of my best work in performance marketing, SEO, and digital strategy.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col bg-white/[0.02] rounded-3xl border border-white/5 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:backdrop-blur-md h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out ${(project.title === 'Google Business Profile Optimization' || project.title === 'Shopify E-commerce Store' || project.title === 'Solar Lead Generation Campaign' || project.title === 'Luxury Villa Lead Gen Campaign' || project.title === 'Email Marketing Campaign') ? 'object-contain p-8 bg-white' : 'object-cover object-top'}`}
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link 
                    to={`/case-study/${project.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors border border-white/10"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
