import React from 'react';
import { Check } from 'lucide-react';

export default function ServicePackages({ onSelectPackage }) {
  const packages = [
    {
      id: 'fresh-start',
      supertitle: 'Basic package',
      title: 'Fresh Start',
      subtitle: 'Light maintenance, small apartments, regular upkeep',
      price: '90',
      currency: '$',
      priceText: 'Per visit (up to 2 bed / 1 bath)',
      isPopular: false,
      includesText: null,
      features: [
        'Dusting all surfaces',
        'Vacuuming & mopping floors',
        'Kitchen wipe-down',
        'Bathroom cleaning',
        'Trash removal',
      ],
    },
    {
      id: 'comfort-clean',
      supertitle: 'Standard Package',
      title: 'Comfort Clean',
      subtitle: 'Families, regular home care, busy professionals',
      price: '130',
      currency: '$',
      priceText: 'Per visit (up to 3 bed / 2 bath)',
      isPopular: true,
      popularTag: 'Most Popular',
      includesText: 'Includes everything in Basic, plus:',
      features: [
        'Make beds/change linens',
        'Inside microwave',
        'Baseboard wipe-down',
        'Spot wall cleaning',
        'Light fixture & ceiling fan dusting',
      ],
    },
    {
      id: 'deep-refresh',
      supertitle: 'Premium Package',
      title: 'Deep Refresh',
      subtitle: 'Seasonal deep clean, first-time clients, post-event',
      price: '180',
      currency: '$',
      priceText: 'Per visit (up to 3 bed / 2 bath)',
      isPopular: false,
      includesText: 'Includes everything in Standard, plus:',
      features: [
        'Inside oven & fridge',
        'Inside cabinets',
        'Window interiors (up to 10)',
        'Detailed baseboard & molding',
        'Door frames & light switches',
      ],
    },
    {
      id: 'new-beginnings',
      supertitle: 'Move in/move out',
      title: 'New Beginnings',
      subtitle: 'Landlords, tenants, real estate staging',
      price: '220+',
      currency: '$',
      priceText: 'Quote required larger homes',
      isPopular: false,
      includesText: null,
      features: [
        'Deep clean of entire property',
        'Inside all appliances & cabinets',
        'Interior windows',
        'Walls, trim, and doors',
        'Garage sweep (if needed)',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Cursive handwritten superheadline */}
          <span className="block text-[#ff7f00] font-['Caveat'] text-3xl sm:text-4xl font-normal">
            Service Packages
          </span>

          {/* Main Title */}
          <h2 className="text-zinc-900 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Choose One Of Our Packages
          </h2>

          {/* Check Bullets Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-zinc-800 font-semibold text-base">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#43934a] flex items-center justify-center text-white shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#43934a] flex items-center justify-center text-white shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Affordable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#43934a] flex items-center justify-center text-white shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Professional</span>
            </div>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={
                pkg.isPopular
                  ? "relative bg-[#4A9448] rounded-[28px] p-[3px] shadow-xl flex flex-col justify-between overflow-hidden"
                  : "relative bg-white border border-zinc-200/80 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              }
            >
              {/* Dedicated Top Header for Most Popular */}
              {pkg.isPopular ? (
                <>
                  <div className="h-[22px] flex items-center justify-center text-white text-xs sm:text-[13px] font-semibold tracking-wide bg-[#4A9448] shrink-0">
                    {pkg.popularTag}
                  </div>
                  <div className="bg-white rounded-[24px] p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-5">
                      {/* Supertitle & Title */}
                      <div className="text-left">
                        <span className="block text-[#ff7f00] font-['Caveat'] text-2xl font-normal">
                          {pkg.supertitle}
                        </span>
                        <h3 className="text-zinc-900 text-2xl font-bold tracking-tight mt-0.5">
                          {pkg.title}
                        </h3>
                      </div>

                      {/* Subtitle */}
                      <div className="flex items-start gap-2 text-zinc-600 text-xs sm:text-sm leading-relaxed text-left">
                        <span className="w-4 h-4 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{pkg.subtitle}</span>
                      </div>

                      {/* Price Display */}
                      <div className="pt-1 text-left">
                        <div className="flex items-baseline gap-1 text-zinc-900">
                          <span className="text-3xl font-extrabold leading-none">{pkg.currency}</span>
                          <span className="text-5xl font-extrabold tracking-tight leading-none">
                            {pkg.price}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400 font-medium mt-1">
                          {pkg.priceText}
                        </div>
                      </div>

                      {/* Continue Button */}
                      <div className="pt-2">
                        <button
                          onClick={() => onSelectPackage && onSelectPackage(pkg.title)}
                          className="w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer block text-center bg-[#ff7f00] text-white hover:bg-[#d96e00] shadow-md border-2 border-[#ff7f00]"
                        >
                          Continue
                        </button>
                      </div>

                      {/* Thin divider line below button */}
                      <div className="w-full h-[1px] bg-zinc-200/70 my-3" />

                      {/* Optional Includes Intro */}
                      {pkg.includesText && (
                        <div className="text-xs font-semibold text-zinc-400 text-left">
                          {pkg.includesText}
                        </div>
                      )}

                      {/* Features checklist */}
                      <ul className="space-y-2.5 pt-1 text-left">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-zinc-700 font-medium">
                            <span className="w-4 h-4 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Supertitle & Title */}
                    <div className="text-left">
                      <span className="block text-[#ff7f00] font-['Caveat'] text-2xl font-normal">
                        {pkg.supertitle}
                      </span>
                      <h3 className="text-zinc-900 text-2xl font-bold tracking-tight mt-0.5">
                        {pkg.title}
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <div className="flex items-start gap-2 text-zinc-600 text-xs sm:text-sm leading-relaxed text-left">
                      <span className="w-4 h-4 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{pkg.subtitle}</span>
                    </div>

                    {/* Price Display */}
                    <div className="pt-1 text-left">
                      <div className="flex items-baseline gap-1 text-zinc-900">
                        <span className="text-3xl font-extrabold leading-none">{pkg.currency}</span>
                        <span className="text-5xl font-extrabold tracking-tight leading-none">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 font-medium mt-1">
                        {pkg.priceText}
                      </div>
                    </div>

                    {/* Continue Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectPackage && onSelectPackage(pkg.title)}
                        className="w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer block text-center border-2 border-[#ff7f00] text-zinc-900 bg-transparent hover:bg-[#ff7f00] hover:text-white"
                      >
                        Continue
                      </button>
                    </div>

                    {/* Thin divider line below button */}
                    <div className="w-full h-[1px] bg-zinc-200/70 my-3" />

                    {/* Optional Includes Intro */}
                    {pkg.includesText && (
                      <div className="text-xs font-semibold text-zinc-400 text-left">
                        {pkg.includesText}
                      </div>
                    )}

                    {/* Features checklist */}
                    <ul className="space-y-2.5 pt-1 text-left">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-zinc-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
