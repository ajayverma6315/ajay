import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lanyard from './components/Lanyard';
import CaseStudy from './pages/CaseStudy';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <div className="max-w-[1600px] mx-auto relative min-h-screen flex flex-col">
      {/* Hero and About section container - Lanyard stops here */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
          <Navbar />
        </div>
        {/* Sticky wrapper for Lanyard */}
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-30">
          <div className="sticky top-0 h-screen w-full relative">
            <Lanyard />
          </div>
        </div>
        <div className="min-h-screen flex flex-col relative z-20 pt-[88px] lg:pt-[104px]">
          <Hero />
        </div>
        <About />
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0d0b14] text-white relative font-outfit overflow-x-hidden selection:bg-purple-500/30">
        {/* Glow effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/15 blur-[150px] rounded-full pointer-events-none" />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
