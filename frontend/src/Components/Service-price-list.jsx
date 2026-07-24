import React, { useState, useEffect, useRef } from "react";
import { Check, Sparkles, Building2, HomeIcon } from "lucide-react";

const TABS = [
  { key: "home", label: "Home Cleaning", icon: HomeIcon },
  { key: "office", label: "Office Cleaning", icon: Building2 },
  { key: "addon", label: "Add-On Services", icon: Sparkles },
];

const DATA = {
  home: [
    {
      title: "Standard Cleaning",
      desc: "Dusting, vacuuming, mopping, kitchen, bathroom cleaning",
      price: "$90",
      note: "(up to 2 bed/1 bath)",
    },
    {
      title: "Deep Cleaning",
      desc: "Includes baseboards, behind appliances, etc.",
      price: "$160",
      note: "(up to 2 bed/1 bath)",
    },
    {
      title: "Move in/out Cleaning",
      desc: "Empty home, deep clean of all rooms, bathrooms, kitchen",
      price: "$180 – $250",
    },
    {
      title: "Post Construction Cleaning",
      desc: "Debris removal, dusting, detail cleaning of all rooms",
      price: "$200 – $300",
    },
  ],
  office: [
    {
      title: "Regular Cleaning",
      desc: "Includes baseboards, behind appliances, etc.",
      price: "$190",
      note: "(eco-friendly)",
    },
    {
      title: "Industrial Sanitation",
      desc: "Empty home, deep clean of all rooms, bathrooms, kitchen",
      price: "$300 – $450",
    },
    {
      title: "Small Maintenance",
      desc: "Debris removal, dusting, detail cleaning of all rooms",
      price: "$200 – $250",
    },
    {
      title: "Deep Cleaning",
      desc: "Dusting, vacuuming, mopping, kitchen, bathroom cleaning",
      price: "$400 – $500",
    },
  ],
  addon: [
    {
      title: "Window Cleaning",
      desc: "Includes floor, railing, and furniture cleaning, if applicable",
      price: "$30",
      note: "(per window)",
    },
    {
      title: "Balcony/Terrace Cleaning",
      desc: "Vacuuming + mopping of all floors, dusting of all surfaces",
      price: "$90 – $120",
    },
    {
      title: "Ironing Clothes",
      desc: "Empty home, deep clean of all rooms, bathrooms, kitchen",
      price: "$50",
      note: "(per pound)",
    },
    {
      title: "Steam Cleaning",
      desc: "Children's Accessories, strollers, mattresses, carriers",
      price: "$80 – $110",
    },
  ],
};

const DISCOUNTS = [
  { 
    pct: "5%", 
    label: "Off Monthly Visits", 
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/spray_bottle_01.png" 
  },
  { 
    pct: "10%", 
    label: "Off Bi-Weekly Visits", 
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/microfiber_cloth_01.png" 
  },
  { 
    pct: "15%", 
    label: "Off Weekly Visits", 
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/green_glove_02.png" 
  },
];

export default function ServicePriceList() {
  const [activeTab, setActiveTab] = useState("addon");
  const [height, setHeight] = useState("auto");
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeight(entry.target.scrollHeight);
        }
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [activeTab]);

  return (
    <section className="w-full bg-[#43934A] py-16 sm:py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      
      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10"></div>

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="block text-[#FAF8F5]/90 text-xl sm:text-2xl md:text-3xl font-normal font-['Caveat'] tracking-wide">
            Offers & Discounts
          </span>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Cleaning Services Price List
          </h2>
        </div>

        {/* Horizontal Scrollable Responsive Tab Headers */}
        <div className="flex items-center overflow-x-auto scrollbar-none flex-nowrap gap-2 relative z-10 -mb-[1px] px-1 sm:pl-8 md:pl-16 pr-1 sm:pr-8 max-w-full">
          {TABS.map(({ key, label, icon: Icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 sm:gap-2.5 font-bold transition-all select-none duration-300 relative z-10 shrink-0 whitespace-nowrap rounded-t-2xl sm:rounded-t-[1.8rem] cursor-pointer
                  ${
                    isActive
                      ? "bg-[#347444] text-white px-5 sm:px-8 py-3.5 sm:py-4.5 shadow-md border-t border-x border-white/10"
                      : "bg-white/10 text-white/80 hover:text-white hover:bg-white/20 px-4 sm:px-6 py-2.5 sm:py-3.5"
                  }`}
              >
                <Icon size={17} className={isActive ? "text-[#FAF8F5]" : "text-white/80"} />
                <span className="text-xs sm:text-sm md:text-base">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Price List Content Card */}
        <div
          style={{ height: typeof height === "number" ? `${height}px` : height }}
          className="bg-[#347444] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-2xl relative z-0 transition-[height] duration-300 ease-out overflow-hidden"
        >
          <div ref={containerRef} className="p-5 sm:p-8 md:p-14">
            <div key={activeTab} className="divide-y divide-white/10 animate-fadeIn">
              {DATA[activeTab].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 md:gap-8 py-5 sm:py-7 first:pt-0 last:pb-0"
                >
                  {/* Title */}
                  <div className="w-full md:w-[28%] shrink-0">
                    <h4 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <div className="flex items-start gap-2.5 sm:gap-3 flex-1 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{item.desc}</span>
                  </div>

                  {/* Price */}
                  <div className="w-full md:w-[32%] text-left md:text-right flex flex-col md:items-end justify-center pt-1 md:pt-0">
                    <div className="flex items-baseline md:justify-end gap-1">
                      <span className="text-white font-black text-xl sm:text-2xl md:text-3xl tracking-tight">
                        {item.price}
                      </span>
                      {item.note && (
                        <span className="text-white/85 text-xs sm:text-sm md:text-base font-semibold ml-1">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discounts Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-8">
          {DISCOUNTS.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl border border-zinc-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[180px] sm:min-h-[200px]"
            >
              {/* Left text section */}
              <div className="space-y-1 z-10 max-w-[65%]">
                <span className="block text-[#43934A] text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-1">
                  {d.pct}
                </span>
                <h4 className="text-zinc-950 font-bold text-base sm:text-lg md:text-xl leading-snug">
                  {d.label}
                </h4>
                <span className="block text-zinc-400 text-[11px] sm:text-xs font-semibold pt-3 sm:pt-4">
                  *Recurring clients discounts
                </span>
              </div>

              {/* Right absolute image */}
              <img 
                src={d.image} 
                alt={d.label} 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain absolute right-2 bottom-2 pointer-events-none z-0 transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}