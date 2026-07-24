import React from 'react';

const JoinTeam = () => {
  return (
    <section className="relative bg-[#faf8f5] pt-16 sm:pt-24 pb-12 px-4 sm:px-6 md:px-8 overflow-hidden sm:overflow-visible">
      <div className="max-w-6xl mx-auto">
        {/* Main Soft Rounded Container Card with green background */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#3b873e] flex flex-col lg:flex-row items-stretch overflow-visible shadow-xl min-h-[360px]">
          
          {/* LEFT HALF: Kitchen Background Image & Pop-out Person */}
          <div className="relative w-full lg:w-[46%] min-h-[300px] sm:min-h-[340px] lg:min-h-full rounded-t-[2rem] sm:rounded-t-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-tr-none overflow-visible">
            
            {/* Kitchen Photo Container (Clipped to rounded corner) */}
            <div 
              className="absolute inset-0 rounded-t-[2rem] sm:rounded-t-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-tr-none bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/home_02_image_02.jpg')`
              }}
            >
              {/* Super Service Award Pointer / Badge */}
              <div className="absolute top-6 sm:top-12 left-4 sm:left-10 z-10 flex items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#ff7a00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#ff7a00] border-2 border-white"></span>
                </div>
                {/* Pointer Line */}
                <div className="hidden sm:block w-8 sm:w-10 h-[2px] bg-[#ff7a00]"></div>
                <span 
                  className="text-white text-base sm:text-xl font-serif italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap"
                  style={{ fontFamily: "'Dancing Script', 'Caveat', cursive, serif" }}
                >
                  Super Service Award
                </span>
              </div>
            </div>

            {/* Person Cutout Image (Scaled responsively to prevent overflow on mobile) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[18%] z-20 w-[260px] min-[400px]:w-[310px] sm:w-[420px] md:w-[460px] lg:w-[500px] max-w-full pointer-events-none">
              <img 
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/team_02.png" 
                alt="Join Our Team Cleaner" 
                className="w-full h-auto object-contain block drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT HALF: Solid Green Background with Text & Email button */}
          <div className="relative z-10 w-full lg:w-[54%] p-6 sm:p-10 lg:py-16 lg:pl-14 lg:pr-16 text-left text-white flex flex-col justify-center">
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4 tracking-tight">
              Join Our Growing <br className="hidden sm:block" /> Team Today
            </h2>

            <div className="relative flex items-center justify-between max-w-sm mb-6">
              <p className="text-base sm:text-xl text-white/90 font-normal">
                Send us your resume
              </p>

              {/* Curved Arrow pointing down & left towards button */}
              <div className="hidden sm:block opacity-90 pointer-events-none transform -rotate-[45deg] -translate-x-8 translate-y-4">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_rotate_bottom.png"
                  alt="Decorative Arrow"
                  className="w-10 sm:w-12 h-auto scale-y-[-1]"
                />
              </div>
            </div>

            {/* Email Contact Pill Button */}
            <a
              href="mailto:office@qleentheme.com"
              className="inline-flex items-center gap-3 sm:gap-4 bg-white/10 hover:bg-white/20 border border-white/25 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 text-white transition-all duration-300 w-full sm:w-fit backdrop-blur-md group max-w-full"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#3b873e] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-sm sm:text-lg font-semibold tracking-wide truncate">
                office@qleentheme.com
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
