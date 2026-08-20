import React from "react";
import { ShieldCheck, Sparkles, Heart } from "lucide-react";

export default function HowItWorks() {
  const standardCards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#43934A]" strokeWidth={1.75} />,
      title: "Trusted Company",
      text: "We pride ourselves on building trust through reliability, always showing up on time and treating your space with care.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#43934A]" strokeWidth={1.75} />,
      title: "Professional Service",
      text: "Excellent performance, flat rates, no surprises. Every clean is thorough, personalized, and backed by friendly support.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#43934A]" strokeWidth={1.75} />,
      title: "Customer Care",
      text: "With open communication, scheduling, and a satisfaction guarantee we ensure you're happy after every clean.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 rounded-t-[3rem] sm:rounded-t-[70px] mt-0 z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Elements */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#f2871b] font-serif italic text-xl sm:text-2xl block mb-2 sm:mb-3">
            How it works
          </span>
          <h2 className="text-zinc-900 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Step By Step User Guide
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* Map through the 3 white standard cards */}
          {standardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col items-start shadow-sm h-full"
            >
              <div className="mb-6 p-1">
                {card.icon}
              </div>
              <div className="mt-auto">
                <h3 className="text-xl lg:text-2xl font-semibold text-zinc-900 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-[15px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}

          {/* 4th Highlight Card (Green Metric Card) */}
          <div className="bg-[#43934A] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden border-[6px] sm:border-[8px] border-[#D0E5D3]">
            {/* Metric Text */}
            <div className="z-10 mt-1">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                4K+
              </div>
              <div className="text-white/90 text-base font-medium">
                Cleanings Performed
              </div>
            </div>

            {/* Bottom Image */}
            <div className="mt-6 flex justify-center items-end z-10 relative h-full">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/green_glove_02.png"
                alt="Cleaning Professional Glove"
                className="w-32 sm:w-36 lg:w-40 h-auto object-contain transform translate-y-6"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}