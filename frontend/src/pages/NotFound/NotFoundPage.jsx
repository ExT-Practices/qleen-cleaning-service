import React from 'react';
import { Phone, ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ setCurrentPage }) {
  return (
    <div className="pt-22 pb-20 bg-[#FAF8F5] min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Full-width graphic section with no horizontal constraints */}
      <div className="w-full relative flex items-center justify-center py-10 sm:py-16 select-none overflow-visible">
        {/* Green background text "missing page" */}
        <h1 className="text-[#43934a] font-black text-[15.5vw] tracking-tighter leading-none font-sans lowercase select-none whitespace-nowrap">
          missing page
        </h1>
        {/* Mop overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          <img 
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_404.png" 
            alt="Mop Sweep" 
            className="w-[125vw] max-w-[1400px] h-auto object-contain transform translate-y-[2%] scale-105"
          />
        </div>
      </div>

      {/* Text content & buttons section (constrained to max-w-4xl) */}
      <div className="max-w-4xl w-full text-center space-y-8 px-6 animate-fade-in mt-6">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-zinc-900 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Oops! This page is a little dusty.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
            Looks like the page you’re looking for has been swept away or never existed. 
            But don’t worry, we’re here to help you find what you need!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
          <button
            onClick={() => {
              if (setCurrentPage) setCurrentPage("home");
              window.location.hash = "home";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-8 py-4 rounded-full shadow-md hover:shadow-orange-500/20 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <a
            href="tel:8442429464"
            className="w-full sm:w-auto border-2 border-zinc-300 hover:border-[#ff7f00] text-zinc-800 hover:text-[#ff7f00] font-bold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span className="w-9 h-9 rounded-full bg-[#ff7f00] flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </span>
            Call us: (844) 242-9464
          </a>
        </div>
      </div>
    </div>
  );
}
