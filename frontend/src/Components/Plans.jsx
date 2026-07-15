import React from 'react';

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

// 1. The clearly named individual Card Component
export function StickyServiceCard({ service, index }) {
  return (
    <div
      className="sticky shadow-2xl rounded-[2.5rem] p-8 md:p-14 overflow-hidden border border-white/10"
      style={{
        top: `calc(4rem + ${index * 2}rem)`,
        backgroundColor: `rgba(74, 156, 85, ${1 - index * 0.03})`, 
        color: 'white',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{service.title}</h2>
        <span className="text-4xl md:text-5xl font-semibold">{service.id}</span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Subheading */}
          <div className="flex items-center gap-3 text-2xl font-medium">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m14.121-6.364l-12.728 12.728m0-12.728l12.728 12.728" />
            </svg>
            What’s Included?
          </div>
          
          <p className="text-lg text-white/90 leading-relaxed pr-4">
            {service.description}
          </p>
          
          {/* Checklist */}
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-white/95">
                <svg className="w-6 h-6 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price & Action Button */}
          <div className="pt-8 border-t border-white/20 flex items-center gap-4">
            <span className="text-6xl font-bold tracking-tight">{service.price}</span>
            <span className="text-xl text-white/90 mt-2">/per hour</span>
            
            <button 
              className="ml-auto w-14 h-14 bg-[#f2871b] rounded-full flex items-center justify-center hover:bg-[#d97715] transition-transform hover:scale-105"
              aria-label="Book service"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-contain max-h-[450px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

// 2. The main Parent Container mapping through the data
export default function CleaningServicesStack() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 space-y-16 pb-[60vh]">
      {services.map((service, index) => (
        <StickyServiceCard 
          key={service.id} 
          service={service} 
          index={index} 
        />
      ))}
    </div>
  );
}