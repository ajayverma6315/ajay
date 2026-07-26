import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, CheckCircle, Lightbulb, Wrench, Target, BookOpen } from 'lucide-react';
import { 
  SiWordpress, 
  SiElementor, 
  SiGooglesearchconsole, 
  SiGoogleanalytics, 
  SiGoogle, 
  SiShopify,
  SiGoogleads,
  SiMeta,
  SiMailchimp,
  SiGooglemaps
} from 'react-icons/si';
import { projects } from '../data/projects';

const getToolIcon = (tool: string) => {
  const t = tool.toLowerCase();
  // @ts-ignore
  if (t.includes('wordpress')) return <SiWordpress className="w-4 h-4 text-[#21759b]" />;
  // @ts-ignore
  if (t.includes('elementor')) return <SiElementor className="w-4 h-4 text-[#92003B]" />;
  // @ts-ignore
  if (t.includes('search console')) return <SiGooglesearchconsole className="w-4 h-4 text-[#4285F4]" />;
  // @ts-ignore
  if (t.includes('analytics')) return <SiGoogleanalytics className="w-4 h-4 text-[#E37400]" />;
  // @ts-ignore
  if (t.includes('google ads') || t.includes('keyword planner')) return <SiGoogleads className="w-4 h-4 text-[#4285F4]" />;
  // @ts-ignore
  if (t.includes('google maps')) return <SiGooglemaps className="w-4 h-4 text-[#34A853]" />;
  // @ts-ignore
  if (t.includes('google')) return <SiGoogle className="w-4 h-4 text-[#4285F4]" />;
  // @ts-ignore
  if (t.includes('shopify')) return <SiShopify className="w-4 h-4 text-[#96bf48]" />;
  // @ts-ignore
  if (t.includes('meta')) return <SiMeta className="w-4 h-4 text-[#0668E1]" />;
  // @ts-ignore
  if (t.includes('mailchimp')) return <SiMailchimp className="w-4 h-4 text-[#FFE01B]" />;
  return <Wrench className="w-4 h-4 text-gray-400" />;
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const hasRichContent = !!project.caseStudy?.overview;

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-20">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Projects</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
          {project.title}
        </h1>
        
        <p className="text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed">
          {project.description}
        </p>

        {project.demoLink && (
          <a 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors mb-12 shadow-lg shadow-blue-500/20"
          >
            <span>View Live Project</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-16 shadow-2xl"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full max-h-[600px] ${project.title.includes('Google Business Profile Optimization') || project.title.includes('Shopify') || project.title.includes('Campaign') ? 'object-contain p-12 bg-white' : 'object-cover object-top'}`}
        />
      </motion.div>

      {hasRichContent ? (
        <div className="space-y-20">
          {project.caseStudy?.overview && (
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                {project.caseStudy.overview.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed text-lg mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {(project.caseStudy?.challenge || project.caseStudy?.approach) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.caseStudy?.challenge && (
                <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-red-400" />
                  The Challenge
                </h2>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
                  {project.caseStudy.challenge.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={`text-gray-300 leading-relaxed ${idx < project.caseStudy!.challenge!.split('\n\n').length - 1 ? 'mb-4' : ''}`}>
                      {paragraph.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < paragraph.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {project.caseStudy?.approach && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  My Approach
                </h2>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
                  {project.caseStudy.approach.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={`text-gray-300 leading-relaxed ${idx < project.caseStudy!.approach!.split('\n\n').length - 1 ? 'mb-4' : ''}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
          )}

          {project.caseStudy?.whatIDid && project.caseStudy.whatIDid.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">What I Did</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.caseStudy.whatIDid.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    {item.description && (
                      <div className="text-gray-300 leading-relaxed">
                        {item.description.split('\n\n').map((paragraph, pIdx) => (
                          <p key={pIdx} className={pIdx < item.description!.split('\n\n').length - 1 ? 'mb-4' : ''}>
                            {paragraph.split('\n').map((line, lIdx) => (
                              <React.Fragment key={lIdx}>
                                {line}
                                {lIdx < paragraph.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.caseStudy?.toolsUsed && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-gray-400" />
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.caseStudy.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-medium flex items-center gap-2">
                    {getToolIcon(tool)}
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.caseStudy?.gallery && project.caseStudy.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Performance & Insights</h2>
              <div className={`grid grid-cols-1 ${project.id === 'email-marketing' ? 'max-w-3xl mx-auto gap-12' : (project.caseStudy.gallery.length === 1 ? 'md:grid-cols-1 gap-6' : 'md:grid-cols-2 gap-6')}`}>
                {project.caseStudy.gallery.map((image, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className={`w-full h-auto ${(project.caseStudy.gallery!.length === 1 || project.id === 'email-marketing') ? 'max-h-[800px]' : 'max-h-[400px]'} object-contain transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-6 font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.caseStudy?.results && (
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.caseStudy.results.map((result, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
                    <p className="text-gray-200 font-medium leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(project.caseStudy?.learned || project.caseStudy?.finalThoughts) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.caseStudy?.learned && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                    What I Learned
                  </h2>
                  <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 h-full">
                    {project.caseStudy.learned.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={`text-gray-300 leading-relaxed ${idx < project.caseStudy!.learned!.split('\n\n').length - 1 ? 'mb-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {project.caseStudy?.finalThoughts && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Final Thoughts</h2>
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
                    {project.caseStudy.finalThoughts.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={`text-gray-300 leading-relaxed ${idx < project.caseStudy!.finalThoughts!.split('\n\n').length - 1 ? 'mb-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {project.caseStudy?.summary && (
            <section className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">Project Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Role</h3>
                  <p className="text-white font-medium">{project.caseStudy.summary.role}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Industry</h3>
                  <p className="text-white font-medium">{project.caseStudy.summary.industry}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Platform</h3>
                  <p className="text-white font-medium">{project.caseStudy.summary.platform}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Services Delivered</h3>
                  <ul className="text-white font-medium space-y-1">
                    {project.caseStudy.summary.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        /* Fallback for simple case studies */
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm">01</span>
                The Challenge
              </h2>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 h-full">
                <p className="text-gray-300 leading-relaxed">
                  {project.caseStudy?.challenge || "Detailed challenge information is being updated."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">02</span>
                The Solution
              </h2>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 h-full">
                <p className="text-gray-300 leading-relaxed">
                  {project.caseStudy?.solution || "Detailed solution information is being updated."}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">03</span>
              Key Results
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.caseStudy?.results?.map((result, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col gap-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <p className="text-gray-200 font-medium">{result}</p>
                </div>
              ))}
            </div>
            {!project.caseStudy?.results && (
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-400 text-center">
                Results are currently being compiled.
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}
