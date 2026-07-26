import React from 'react';
import { motion } from 'motion/react';

const Lanyard = () => {
  return (
    <motion.div 
      className="absolute top-[-20px] md:top-[-50px] right-[-30%] sm:right-[0%] md:right-[10%] lg:right-[15%] 2xl:right-[20%] flex flex-col items-center origin-top z-40 scale-[0.35] sm:scale-[0.5] md:scale-[0.8] lg:scale-100 pointer-events-auto"
      initial={{ y: -1000, rotate: -8 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ 
        type: 'spring', 
        damping: 14, 
        stiffness: 45,
        mass: 2,
        restDelta: 0.001
      }}
    >
      {/* Strap */}
      <div className="relative flex justify-center w-full h-[220px]">
        {/* Left strap part */}
        <div className="absolute bottom-0 left-1/2 -translate-x-[18px] w-5 h-[1200px] bg-[#121212] origin-bottom -rotate-[3deg] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.8)] border-l border-white/5 rounded-t-full"></div>
        {/* Right strap part */}
        <div className="absolute bottom-0 right-1/2 translate-x-[18px] w-5 h-[1200px] bg-[#181818] origin-bottom rotate-[3deg] shadow-[inset_2px_0_10px_rgba(0,0,0,0.8)] border-r border-white/5 rounded-t-full"></div>
        
        {/* Strap connector/knot at bottom */}
        <div className="absolute -bottom-1 w-[46px] h-7 bg-[#151515] rounded-b-xl border border-black/50 shadow-xl flex justify-center items-end pb-1.5 z-10 before:absolute before:inset-0 before:rounded-b-xl before:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
           <div className="w-5 h-1.5 bg-black/60 rounded-full shadow-inner"></div>
        </div>
      </div>

      {/* Metal Clip System */}
      <div className="relative flex flex-col items-center z-10 mt-[-2px]">
        {/* Top ring connecting to strap */}
        <div className="w-4 h-5 border-[3px] border-[#888] rounded-md bg-transparent shadow-sm"></div>
        {/* Main clip body */}
        <div className="w-5 h-8 bg-gradient-to-b from-[#a0a0a0] via-[#d4d4d4] to-[#737373] rounded-sm shadow-md mt-[-2px] flex flex-col items-center justify-between py-1 relative">
           <div className="w-2 h-2 bg-[#444] rounded-full shadow-inner"></div>
           <div className="w-full h-px bg-white/50"></div>
        </div>
        {/* Bottom hook */}
        <div className="w-4 h-6 border-[3px] border-[#999] rounded-b-full rounded-t-sm mt-[-2px] z-[-1]"></div>
      </div>

      {/* Card Holder & Card */}
      <div className="relative w-[270px] h-[390px] mt-[-10px] z-20 group">
        {/* Plastic Sleeve */}
        <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-[4px] rounded-2xl border border-white/20 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:z-10">
          
          {/* Hole for clip */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black/20 rounded-full border border-white/10 flex justify-center items-center z-20 backdrop-blur-md shadow-inner"></div>

          {/* Actual ID Card inside sleeve */}
          <div className="absolute top-10 left-3 right-3 bottom-3 bg-[#f8f9fa] rounded-xl shadow-inner overflow-hidden flex flex-col relative z-0">
            
            {/* Header */}
            <div className="w-full pt-4 pb-3 flex justify-center items-center gap-1.5">
              <span className="text-black font-extrabold tracking-[0.2em] text-[13px] uppercase mt-0.5">AJAY</span>
            </div>

            {/* Photo Section */}
            <div className="w-full px-5 py-2 flex justify-center">
              <div className="w-full aspect-[4/4.8] rounded-lg overflow-hidden bg-gray-200 relative shadow-sm border border-black/5">
                <img 
                  src="/profile.jpg?v=6" 
                  alt="Ajay - Profile Photo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Details */}
            <div className="px-5 pb-5 pt-2 flex-1 flex flex-col justify-end">
              <div className="mb-3">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Name:</p>
                <h2 className="text-[20px] font-black text-gray-900 leading-none tracking-tight">AJAY</h2>
              </div>
              
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Role:</p>
                <h3 className="text-[14px] font-bold text-gray-800">Marketer</h3>
              </div>

              {/* Barcode Deco */}
              <div className="mt-3 flex gap-[3px] opacity-40">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="h-5 bg-black" style={{ width: i % 3 === 0 ? '4px' : '2px' }}></div>
                ))}
              </div>
            </div>

          </div>

          {/* Plastic glare reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transform -skew-x-12 translate-x-1/3 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20 h-1/2"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lanyard;
