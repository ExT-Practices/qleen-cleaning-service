import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Book Consultations",
      text: "Call us or write a message in the contact form below.",
      // Custom Calendar Icon matching the design
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 16l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Choose Your Package",
      text: "We offer cleaning packages by hour, type of room or tailored to your needs.",
      // Custom Double Check/Layered Check Icon matching the design
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7M5 18l4 4L19 12" />
        </svg>
      ),
    },
    {
      title: "We Clean, You Relax",
      text: "Cleaning service covering dusting, vacuuming, mopping, and sanitization.",
      // Custom Sparkles Icon matching the design
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-20 px-6 sm:px-12 rounded-t-[70px] mt-0 z-10">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Elements */}
        <span className="text-orange-500 font-serif italic text-xl block mb-2">
          How it works
        </span>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16">
          Step By Step User Guide
        </h2>

        {/* Steps Flex Row Wrapper */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 max-w-6xl mx-auto relative mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-1 items-center gap-4 relative w-full z-10">
              
              {/* Double Ringed Green Icon Container */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 border border-green-600/30 rounded-full scale-125"></div>
                <div className="w-20 h-20 bg-[#43934a] rounded-full flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
              </div>

              {/* Text Blocks */}
              <div className="text-left max-w-xs">
                <h3 className="text-zinc-900 font-bold text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Floating Curving Connecting Arrows */}
              {index === 0 && (
                <div className="hidden lg:block absolute -right-6 -top-10 w-28 h-12">
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_top.png"
                    alt="Next Step"
                    className="w-full h-auto object-contain pointer-events-none"
                  />
                </div>
              )}

              {index === 1 && (
                <div className="hidden lg:block absolute -right-6 -bottom-12 w-28 h-12">
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_bottom.png"
                    alt="Next Step"
                    className="w-full h-auto object-contain pointer-events-none"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Button */}
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-sm scale-105 transition-all group-hover:scale-110"></div>
          <a
            href="contact"
            className="relative block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-md text-sm transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}