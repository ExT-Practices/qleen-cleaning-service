import React from 'react';

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-20 lg:py-28 text-center select-none rounded-[2.5rem] md:rounded-[4rem] my-4 mx-2 sm:mx-6 shadow-sm">
      {/* CSS Keyframe Animation for Floating / Swaying Leaf */}
      <style>{`
        @keyframes floatLeaf {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(12deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-floating-leaf {
          animation: floatLeaf 4.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_03.jpg')` 
        }}
      ></div>

      {/* Floating Animated Leaf Component */}
      <div className="absolute right-[12%] md:right-[18%] top-[20%] md:top-[25%] z-10 animate-floating-leaf pointer-events-none hidden sm:block">
        <svg 
          width="54" 
          height="64" 
          viewBox="0 0 50 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md opacity-90"
        >
          <path 
            d="M8 45C3 30 15 8 42 3C45 22 35 48 18 52C14 53 10 50 8 45Z" 
            fill="#529b42" 
          />
          <path 
            d="M10 44C10 44 24 30 40 5" 
            stroke="#3b722d" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          <path d="M22 32L17 27" stroke="#3b722d" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 24L23 20" stroke="#3b722d" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34 16L30 13" stroke="#3b722d" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center">
        {/* Cursive Subtitle */}
        <span 
          className="text-[#ff7a00] text-2xl md:text-3xl font-serif italic mb-2 tracking-wide block"
          style={{ fontFamily: "'Caveat', cursive, serif" }}
        >
          Ready for a spotless space?
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-8">
          Contact us today for a free quote.
        </h2>

        {/* Action Button */}
        <a
          href="#estimate"
          className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#ff7a00] hover:bg-[#e06b00] text-white font-bold text-base shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ring-4 ring-[#ff7a00]/30"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
