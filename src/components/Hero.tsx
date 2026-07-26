import React from 'react';

const Hero = () => {
  return (
    <main id="home" className="flex-1 relative flex items-center px-4 lg:px-12 w-full h-full pb-10 lg:pb-20">
      {/* Background Big Text */}
      <div className="absolute right-[-5%] lg:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end leading-[0.8] tracking-tighter text-[25vw] lg:text-[16vw] font-black opacity-[0.02] lg:opacity-[0.03] pointer-events-none select-none uppercase overflow-hidden">
        <span>AJAY</span>
      </div>

      <div className="flex-1 flex flex-col relative z-20">
        {/* Main Stacked Text */}
        <div className="flex flex-col leading-[0.82] tracking-tighter text-[16vw] sm:text-[14vw] lg:text-[9.5vw] xl:text-[8.5rem] font-black uppercase mb-6 lg:mb-12">
          <span className="text-outline">Digital</span>
          <span className="text-white">Digital</span>
          <span className="text-white relative z-10">Marketer</span>
          <span className="text-outline">Marketer</span>
        </div>

        {/* Content Box */}
        <div className="max-w-[70vw] sm:max-w-[60vw] lg:max-w-[550px] relative mt-2 lg:mt-[-2rem] z-20">
          <p className="font-cormorant text-gray-400/90 text-[14px] sm:text-[16px] lg:text-[19px] leading-[1.6] lg:leading-[1.7] mb-4 lg:mb-8 font-light pr-2 lg:pr-10">
            Every project is an opportunity to learn, improve, and build something better.
          </p>
          
          <div className="flex flex-wrap gap-1.5 lg:gap-2.5 mb-6 lg:mb-10">
            {['Meta Ads', 'Google Ads', 'Shopify', 'SEO / SEM'].map(skill => (
              <span key={skill} className="px-2.5 lg:px-4 py-1 lg:py-1.5 rounded-full bg-white/[0.03] text-gray-300 text-[13px] lg:text-[18px] font-medium border border-white/10 backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <a href="tel:9660389898" className="px-4 lg:px-8 py-2 lg:py-3.5 rounded-full bg-gradient-to-r from-[#6b46c1] to-[#4c1d95] text-white text-[14px] lg:text-[18px] font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(107,70,193,0.4)] whitespace-nowrap">
              Hire Me
            </a>
            <a href="/AJAY_KUMAR_Resume.pdf" download="AJAY_KUMAR_Resume.pdf" className="px-4 lg:px-8 py-2 lg:py-3.5 rounded-full bg-[#151320] text-white text-[14px] lg:text-[18px] font-semibold border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-1 lg:gap-2 shadow-lg whitespace-nowrap">
              Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
