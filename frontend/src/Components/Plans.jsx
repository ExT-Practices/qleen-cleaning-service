import React, { useState, useEffect, useRef } from 'react';

const services = [
  {
    id: '01',
    title: 'Home Cleaning',
    description: 'Dusting, vacuuming, mopping, and wiping down surfaces. It also typically involves cleaning appliances, bathrooms, and kitchen areas, as well as addressing any stains or messes.',
    features: [
      'Affordable hourly service',
      'Ideal after deep cleaning',
      'Helps to keep your home always tidy'
    ],
    price: '$39',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/moving_cards_image_01.png'
  },
  {
    id: '02',
    title: 'Office Cleaning',
    description: 'Professional office cleaning services designed to keep your workspace spotless, organized, and productivity-ready.',
    features: [
      'Dusting surfaces and workstations',
      'Vacuuming and mopping floors',
      'Emptying trash bins',
      'Disinfecting high-touch surfaces'
    ],
    price: '$49',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/moving_cards_image_02.png'
  },
  {
    id: '03',
    title: 'Moving In or Out Cleaning',
    description: 'A comprehensive cleaning of a property, including all rooms, bathrooms, and kitchen, to leave it spotless and ready for the next occupant.',
    features: [
      'Deep cleaning of all rooms',
      'Inside & outside of cabinets, drawers, and closets',
      'Appliance cleaning (oven, fridge, microwave)',
      'Windowsills and interior windows cleaned'
    ],
    price: '$59',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/moving_cards_image_03.png'
  }
];

export function StickyServiceCard({ service, index }) {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({
    opacity: 1,
    transform: 'scale(1) translateY(0px)',
  });

  useEffect(() => {
    let ticking = false;

    const updateStyles = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress
      const start = windowHeight;
      const end = windowHeight * 0.2 + (index * 25);
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0.4, Math.min(1, progress));
      
      setStyle({
        opacity: progress,
        transform: `scale(${0.94 + (progress - 0.4) * 0.1}) translateY(${(1 - progress) * 15}px)`,
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateStyles);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    updateStyles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [index]);

  // Deeper solid green shades per card index to keep them rich and green
  const greenShades = [
    'rgb(75, 162, 100)', // Card 1
    'rgb(61, 140, 84)',  // Card 2
    'rgb(48, 117, 69)'   // Card 3
  ];
  const baseGreen = greenShades[index] || 'rgb(75, 162, 100)';

  return (
    <div
      ref={containerRef}
      className="sticky shadow-2xl rounded-[2.5rem] p-8 md:p-10 lg:p-12 overflow-hidden border border-white/10 transition-all duration-300"
      style={{
        top: `calc(6rem + ${index * 2.25}rem)`,
        backgroundColor: baseGreen,
        color: 'white',
        opacity: style.opacity,
        transform: style.transform,
        willChange: 'transform, opacity',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{service.title}</h2>
        <span className="text-3xl md:text-4xl font-light opacity-80">{service.id}</span>
      </div>

      {/* Content Layout */}
      <div className="relative flex flex-col lg:flex-row items-stretch justify-between">
        
        {/* Left Text Column */}
        <div className="w-full lg:w-[56%] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Subheading */}
            <div className="flex items-center gap-2 text-xl font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m14.121-6.364l-12.728 12.728m0-12.728l12.728 12.728" />
              </svg>
              What’s Included?
            </div>
            
            <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed pr-2">
              {service.description}
            </p>
            
            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-white/95">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & Action Button */}
          <div className="pt-6 border-t border-white/20 flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-bold tracking-tight">{service.price}</span>
            <span className="text-lg text-white/90">/per hour</span>
            
            <button 
              className="ml-4 w-12 h-12 bg-[#f2871b] rounded-full flex items-center justify-center hover:bg-[#d97715] transition-all hover:scale-105 shadow-md"
              aria-label="Book service"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Column - Positioned absolutely at bottom-right on desktop to sit flush and reduce height */}
        <div className="w-full lg:absolute lg:right-0 lg:bottom-[-48px] lg:h-[110%] lg:w-[40%] mt-6 lg:mt-0 flex items-end justify-center lg:justify-end pointer-events-none relative">
          {/* Floating Bubble Decoration */}
          <img
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_04.png"
            alt="Bubble decoration"
            className="absolute top-1/4 left-1/4 w-32 md:w-40 h-auto opacity-40 z-0 animate-[pulse_3s_infinite]"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={service.image}
            alt={service.title}
            className="w-auto h-56 sm:h-64 lg:h-[105%] max-h-[380px] object-contain object-bottom align-bottom z-10 relative"
            loading="lazy"
            decoding="async"
          />
        </div>
    </div>
  </div>
  );
}

export default function CleaningServicesStack() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-8 space-y-12 pb-16">
      
      {/* Header Section from Reference Image */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-zinc-900 tracking-tight leading-none">
          Popular Services by Qleen
        </h2>
        
        {/* Bullet Points with Orange Checkboxes */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-2 text-[15px] sm:text-[16px] font-semibold text-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#f2871b] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span>Background checked cleaners</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#f2871b] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span>Insurance coverage up to $1M</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#f2871b] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span>No Contracts or Commitments</span>
          </div>
        </div>
      </div>

      {/* Cards Stack Container */}
      <div className="space-y-12">
        {services.map((service, index) => (
          <StickyServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}