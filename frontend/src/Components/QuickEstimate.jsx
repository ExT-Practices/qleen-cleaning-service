import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function QuickEstimate() {
  const [cleaningType, setCleaningType] = useState({ label: "Home Cleaning", value: 500 });
  const [complexity, setComplexity] = useState({ label: "Deep cleaning", value: 200 });
  const [sqFootage, setSqFootage] = useState(40);
  const [supplies, setSupplies] = useState(false); // false = 0, true = 100
  const [total, setTotal] = useState(740);

  // Dropdown open states
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [complexityDropdownOpen, setComplexityDropdownOpen] = useState(false);

  const typeDropdownRef = useRef(null);
  const complexityDropdownRef = useRef(null);

  const cleaningTypes = [
    { label: "Home Cleaning", value: 500 },
    { label: "Move in/out Cleaning", value: 650 },
    { label: "Office Cleaning", value: 800 },
  ];

  const complexities = [
    { label: "Deep cleaning", value: 200 },
    { label: "Small Maintenance", value: 150 },
    { label: "Window Cleaning", value: 220 },
  ];

  // Calculate total whenever inputs change
  useEffect(() => {
    const calculatedTotal = cleaningType.value + complexity.value + sqFootage * 1 + (supplies ? 100 : 0);
    setTotal(calculatedTotal);
  }, [cleaningType, complexity, sqFootage, supplies]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
        setTypeDropdownOpen(false);
      }
      if (complexityDropdownRef.current && !complexityDropdownRef.current.contains(event.target)) {
        setComplexityDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-[#FAF8F5] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-lg border border-zinc-100/80 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-5 space-y-7">
          <div className="space-y-1">
            <h3 className="text-zinc-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get a Quick Estimate
            </h3>
            <p className="text-zinc-400 text-xs font-semibold">
              *For a detailed quote, use extended version
            </p>
          </div>

          <div className="space-y-5">
            {/* Type of Cleaning */}
            <div className="space-y-1.5 relative" ref={typeDropdownRef}>
              <label className="block text-zinc-400 font-bold text-[10px] uppercase tracking-wider">
                Type of Cleaning
              </label>
              <button
                onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 flex items-center justify-between text-zinc-700 font-medium hover:border-zinc-300 transition-colors text-sm shadow-sm"
              >
                <span>{cleaningType.label}</span>
                <ChevronDown size={16} className="text-zinc-500" />
              </button>

              {typeDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-zinc-100 z-50 py-1 overflow-hidden animate-fadeIn">
                  {cleaningTypes.map((type) => (
                    <button
                      key={type.label}
                      onClick={() => {
                        setCleaningType(type);
                        setTypeDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left hover:bg-zinc-50 font-medium text-zinc-700 flex items-center justify-between text-sm"
                    >
                      <span>{type.label}</span>
                      {cleaningType.label === type.label && (
                        <span className="w-1.5 h-1.5 bg-[#f58220] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Complexity */}
            <div className="space-y-1.5 relative" ref={complexityDropdownRef}>
              <label className="block text-zinc-400 font-bold text-[10px] uppercase tracking-wider">
                Complexity
              </label>
              <button
                onClick={() => setComplexityDropdownOpen(!complexityDropdownOpen)}
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 flex items-center justify-between text-zinc-700 font-medium hover:border-zinc-300 transition-colors text-sm shadow-sm"
              >
                <span>{complexity.label}</span>
                <ChevronDown size={16} className="text-zinc-500" />
              </button>

              {complexityDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-zinc-100 z-50 py-1 overflow-hidden animate-fadeIn">
                  {complexities.map((comp) => (
                    <button
                      key={comp.label}
                      onClick={() => {
                        setComplexity(comp);
                        setComplexityDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left hover:bg-zinc-50 font-medium text-zinc-700 flex items-center justify-between text-sm"
                    >
                      <span>{comp.label}</span>
                      {complexity.label === comp.label && (
                        <span className="w-1.5 h-1.5 bg-[#f58220] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Square Footage */}
            <div className="space-y-2">
              <label className="block text-zinc-400 font-bold text-[10px] uppercase tracking-wider">
                Square Footage
              </label>
              <div className="relative flex items-center h-8">
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={sqFootage}
                  onChange={(e) => setSqFootage(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer outline-none active:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-transparent [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:bg-transparent z-10"
                  style={{
                    background: `linear-gradient(to right, #cbcbcb ${(sqFootage / 200) * 100}%, #e4e4e7 ${(sqFootage / 200) * 100}%)`,
                  }}
                />
                 <div
                  style={{
                    left: `calc(${(sqFootage / 200) * 100}% - 14px)`,
                  }}
                  className="absolute pointer-events-none w-7 h-7 rounded-full bg-[#f58220] flex items-center justify-center text-white font-bold text-[10px] shadow-sm transition-all z-20"
                >
                  {sqFootage}
                </div>
              </div>
            </div>

            {/* Cleaning Supplies Toggle */}
            <div className="flex items-center justify-between py-1">
              <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-wider">
                Cleaning Supplies
              </span>
              <button
                onClick={() => setSupplies(!supplies)}
                className="w-14 h-7 rounded-full border border-zinc-200 bg-white p-0.5 transition-colors relative flex items-center cursor-pointer outline-none"
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full transition-all duration-200 ${
                    supplies ? "translate-x-7 bg-[#3d8c54]" : "translate-x-0.5 bg-zinc-400"
                  }`}
                />
              </button>
            </div>

            {/* Total Row Button style */}
            <div className="bg-[#f58220] rounded-full px-8 py-4.5 flex items-center justify-between text-white font-extrabold shadow-sm tracking-wide">
              <span className="text-sm tracking-widest font-black uppercase">TOTAL</span>
              <span className="text-xl font-black">$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image and Overlaid Badge */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            {/* Showcase Image */}
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/home_02_image_01.jpg"
              alt="Professional Cleaning Service"
              className="w-full h-auto rounded-[2.5rem] object-cover shadow-md"
            />

            {/* Trusted Clients Badge overlay */}
            <div className="absolute bottom-0 right-0 bg-white pt-6 pl-6 pb-0 pr-0 rounded-tl-[3.5rem] flex items-center gap-4 z-10">
              {/* 3 Circular Avatars */}
              <div className="flex -space-x-3.5">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_01.jpg"
                  alt="Client 1"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_02.jpg"
                  alt="Client 2"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_03.jpg"
                  alt="Client 3"
                />
                {/* Shield Check Badge */}
                <div className="w-12 h-12 rounded-full bg-[#43934a] text-white flex items-center justify-center border-2 border-white shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div className="text-[12px] text-zinc-500 font-semibold leading-[1.3] pr-4">
                Trusted by <br />
                <span className="text-zinc-800 font-black text-sm">200+</span> <br />
                clients
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
