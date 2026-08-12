import React from 'react';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const serviceCards = [
    {
      title: "Home Cleaning",
      price: "From $49",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_01.jpg",
    },
    {
      title: "Office Cleaning",
      price: "From $39",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_02.jpg",
      showArrow: true,
    },
    {
      title: "Short-Term Rentals Cleaning",
      price: "From $59",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_03.jpg",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 rounded-t-[2.5rem] sm:rounded-t-[4.5rem] -mt-12 sm:-mt-16 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        
        {/* Top Section: Cleaner Image with Cutout Counter & Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          
          {/* Left Column: Image with Cleaner & Counter */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px]">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_home_02_02.png"
                alt="Professional cleaner smiling"
                className="w-full h-auto object-contain"
              />
              
              {/* 20+ Certified Cleaners Overlay Box */}
              <div className="absolute bottom-0 right-0 bg-[#FAF8F5] p-4 sm:p-6 pl-6 sm:pl-8 pt-6 sm:pt-8 rounded-tl-[2rem] sm:rounded-tl-[2.5rem] flex flex-col items-start gap-1 cutout-box z-10 select-none">
                <style>{`
                  .cutout-box::before {
                    content: '';
                    position: absolute;
                    top: -24px;
                    right: 0;
                    width: 24px;
                    height: 24px;
                    background: transparent;
                    border-bottom-right-radius: 24px;
                    box-shadow: 12px 12px 0 0 #FAF8F5;
                    pointer-events: none;
                  }
                  .cutout-box::after {
                    content: '';
                    position: absolute;
                    left: -24px;
                    bottom: 0;
                    width: 24px;
                    height: 24px;
                    background: transparent;
                    border-bottom-right-radius: 24px;
                    box-shadow: 12px 12px 0 0 #FAF8F5;
                    pointer-events: none;
                  }
                `}</style>
                <div className="flex items-center gap-2 text-[#4BA264] mb-1">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-[#4BA264]/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
                <span className="text-3xl sm:text-5xl font-extrabold text-[#4BA264] tracking-tight leading-none">20+</span>
                <span className="text-zinc-800 text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1">Certified Cleaners</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start space-y-5 sm:space-y-6 text-left">
            {/* Subheadline */}
            <span className="text-orange-500 font-serif italic text-xl sm:text-2xl">
              About us
            </span>
            
            {/* Main Headline */}
            <h2 className="text-zinc-900 text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-extrabold tracking-tight">
              Professional Cleaning Services, You Can Count On
            </h2>
            
            {/* Description */}
            <p className="text-zinc-600 text-sm sm:text-lg leading-relaxed">
              Our team goes above and beyond to ensure you're happy after every clean, with open communication, flexible scheduling, and a satisfaction guarantee that puts your peace of mind first.
            </p>
            
            {/* Award Section */}
            <div className="flex items-start gap-4 pt-2 sm:pt-4">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/award_star.png"
                alt="Award Winner"
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h3 className="text-zinc-950 font-bold text-base sm:text-lg leading-snug">
                  An Award Winning Service
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-[420px]">
                  Custom cleaning services tailored to your needs, preferences, and schedule because no two spaces are the same.
                </p>
              </div>
            </div>
            
            {/* Book Now Button with Halo */}
            <div className="relative mt-6 sm:mt-8 inline-block group">
              <div className="absolute inset-[-8px] bg-orange-500/30 rounded-full transition-all duration-300 ease-out group-hover:inset-0 group-hover:opacity-0 pointer-events-none"></div>
              
              <a
                href="contact"
                className="relative block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg text-xs tracking-wider uppercase transition-colors duration-200"
              >
                Book Consultation Now
              </a>
            </div>
          </div>

        </div>

        {/* Tailored Services Overview Section (From User's HTML & Image) */}
        <div className="pt-16 lg:pt-24 border-t border-zinc-200/60 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 Cols): Headline, Green Check Bullets & Action Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h3 className="text-zinc-900 text-2xl sm:text-4xl lg:text-[2.25rem] font-bold leading-[1.3] tracking-tight">
              From routine home cleanings to deep office cleans and move-in/move-out services, we tailor every job to your needs.
            </h3>

            {/* 4 Check Bullets */}
            <div className="space-y-3.5 pt-2">
              {[
                "Background checked cleaners",
                "Easy last minute bookings",
                "No contracts or commitments",
                "Regular discounts for recurring clients",
              ].map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#43934a]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#43934a]" />
                  </span>
                  <span className="text-zinc-800 text-sm sm:text-base font-semibold">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Book Online & Phone */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a
                href="#contact"
                className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-orange-500/25 transition duration-300 text-sm tracking-wide uppercase"
              >
                Book Online
              </a>

              <a
                href="tel:8442429464"
                className="inline-flex items-center gap-2.5 group transition duration-200"
              >
                <span className="w-10 h-10 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-bold text-zinc-900 text-base">
                  (844) 242-9464
                </span>
              </a>
            </div>
          </div>

          {/* Right Column (5 Cols): 3 Stacked Service Cards */}
          <div className="lg:col-span-5 space-y-4">
            {serviceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition duration-300 border border-zinc-100/80 group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0"
                  />
                  <div className="space-y-2 text-left">
                    <h4 className="font-bold text-zinc-900 text-base sm:text-lg leading-snug">
                      {card.title}
                    </h4>
                    <span className="inline-block border border-[#43934a] text-[#43934a] text-xs font-bold px-3.5 py-1 rounded-full bg-[#43934a]/5">
                      {card.price}
                    </span>
                  </div>
                </div>

                {card.showArrow && (
                  <div className="w-9 h-9 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
