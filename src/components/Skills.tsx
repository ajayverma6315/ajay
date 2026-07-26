import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Search,
  Sparkles,
  BarChart3,
  Code,
  PenTool,
  Image,
  UserCheck,
} from "lucide-react";

const skillCategories = [
  {
    title: "Performance Marketing",
    description:
      "Driving growth and conversions through targeted advertising strategies.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
    skills: [
      "Google Ads",
      "Meta Ads",
      "PPC Strategy",
      "Campaign Planning",
      "Landing Page Optimization (CRO)",
      "Audience Research",
      "Keyword Research",
      "Conversion Optimization",
    ],
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improving organic visibility and traffic through technical and content strategies.",
    icon: <Search className="w-6 h-6 text-blue-400" />,
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Off-Page SEO",
      "Keyword Mapping",
      "Internal Linking",
      "Schema Markup",
      "Topical Authority",
      "Semantic SEO",
      "Entity SEO",
      "Search Intent Optimization",
    ],
  },
  {
    title: "AI Search Optimization",
    description:
      "Preparing content for the future of search with AI-driven optimization techniques.",
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    skills: [
      "AEO (Answer Engine Optimization)",
      "GEO (Generative Engine Optimization)",
      "AI Overview Optimization",
      "LLM SEO",
      "Conversational Search Optimization",
      "FAQ Optimization",
      "Entity-Based SEO",
    ],
  },
  {
    title: "Analytics & Tracking",
    description:
      "Measuring performance and gaining actionable insights through data analysis.",
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    skills: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "Event Tracking",
      "Conversion Tracking",
      "Looker Studio",
    ],
  },
  {
    title: "Website Development",
    description:
      "Building responsive and conversion-focused digital experiences.",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    skills: [
      "WordPress",
      "Elementor",
      "Shopify",
      "Responsive Design",
      "Landing Page Design",
      "Basic HTML",
      "Website Speed Optimization",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "Creating engaging and SEO-friendly content that drives action.",
    icon: <PenTool className="w-6 h-6 text-blue-400" />,
    skills: [
      "SEO Copywriting",
      "Blog Writing",
      "Email Marketing",
      "Ad Copywriting",
      "Content Strategy",
      "Content Optimization",
    ],
  },
  {
    title: "Creative",
    description:
      "Designing compelling visuals and creatives for diverse marketing channels.",
    icon: <Image className="w-6 h-6 text-blue-400" />,
    skills: [
      "Canva",
      "CapCut",
      "Social Media Creatives",
      "Ad Creative Design",
    ],
  },
  {
    title: "Soft Skills",
    description:
      "Essential interpersonal skills for effective collaboration and project management.",
    icon: <UserCheck className="w-6 h-6 text-blue-400" />,
    skills: [
      "Marketing Strategy",
      "Problem Solving",
      "Client Communication",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 z-40 bg-transparent flex flex-col items-center px-4 lg:px-12"
    >
      <div className="max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1200px] w-full mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-6"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed space-y-4"
          >
            <p>
              A growing foundation in digital marketing built through hands on learning and real world projects. My focus is on SEO, Google Ads, Meta Ads, AI Search Optimization, WordPress, analytics, and landing page optimization. I enjoy combining creativity with data to build marketing campaigns that improve visibility, attract the right audience, and support business growth.
            </p>
            <p>
              I'm continuously learning, testing new strategies, and improving my skills to deliver better results with every project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Glassmorphism gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.03] text-gray-300 text-sm font-medium border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
