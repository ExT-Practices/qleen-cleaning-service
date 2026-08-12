import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Calendar, Clock, Sparkles, Send } from 'lucide-react';
import ServicePriceList from '../../Components/Service-price-list';
import FAQSection from '../../Components/FAQSection';
import TestimonialsSection from '../../Components/TestimonialsSection';

export default function GetQuotePage({ setCurrentPage }) {
  // Calculator state
  const [cleaningType, setCleaningType] = useState('200'); // Home Cleaning ($200)
  const [frequency, setFrequency] = useState('50'); // One-Time ($50)
  const [cleaningPackage, setCleaningPackage] = useState('80'); // Basic Cleaning ($80)
  
  const [sqFootage, setSqFootage] = useState(20);
  const [roomNumber, setRoomNumber] = useState(1);
  const [bathroomNumber, setBathroomNumber] = useState(1);

  // Add-on toggles (+$10 each)
  const [addons, setAddons] = useState({
    fridge: false,
    oven: false,
    windows: false,
    carpet: false,
    balcony: false,
    laundry: false,
    linen: false,
    furniture: false,
  });

  // Additional info & booking
  const [preferredTime, setPreferredTime] = useState('During Business Hours');
  const [hasPets, setHasPets] = useState('No');
  const [homeType, setHomeType] = useState('Apartment / Condo');
  const [serviceDate, setServiceDate] = useState('');

  // Contact & submission
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Calculate live total price
  const calculateTotal = () => {
    let total = Number(cleaningType) + Number(frequency) + Number(cleaningPackage);
    total += sqFootage * 1;
    total += roomNumber * 15;
    total += bathroomNumber * 20;

    // Addons cost
    const activeAddonsCount = Object.values(addons).filter(Boolean).length;
    total += activeAddonsCount * 10;

    return total;
  };

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactData({ name: '', email: '', phone: '', comments: '' });
    }, 5000);
  };

  const totalPrice = calculateTotal();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans pt-[80px]">
      
      {/* Top Banner Hero Section with Giant Watermark Typography */}
      <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-20 sm:pt-28 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 text-center select-none min-h-[480px] flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto relative flex flex-col items-center justify-center">
          
          {/* Giant "cost estimate" backdrop text in single line - fully fitted */}
          <h1 className="text-[10vw] sm:text-[11.5vw] font-black text-[#3d8c54] leading-none tracking-tight uppercase font-sans pointer-events-none z-0 scale-y-105 whitespace-nowrap">
            cost estimate
          </h1>

          {/* Floating Glove Hero Image Overlay */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] pointer-events-none">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_get_quote.png"
              alt="Cleaning Glove"
              className="w-48 sm:w-64 md:w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Decorative Floating Sparkle Badge */}
          <div className="hidden lg:block absolute right-[15%] bottom-4 z-20 animate-bounce duration-1000">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/floating_image_08.png"
              alt="Floating decorative star"
              className="w-28 h-28 object-contain -rotate-12"
            />
          </div>
        </div>
      </section>

      {/* Cost Calculator Section Header & Features Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Headline */}
          <div className="lg:col-span-6 space-y-2 text-left">
            <span className="text-[#ff7f00] font-['Caveat'] text-3xl sm:text-4xl font-normal block tracking-wide">
              Cost Calculator
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight">
              Get a Detailed Estimate for Your Cleaning Needs
            </h2>
          </div>

          {/* Buttons */}
          <div className="lg:col-span-6 flex flex-wrap items-center justify-start lg:justify-end gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('calculator-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-extrabold text-sm px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Book Online
            </button>
            
            <a
              href="tel:8442429464"
              className="flex items-center gap-3 bg-white border border-zinc-200 text-zinc-900 hover:border-[#ff7f00] font-extrabold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#ff7f00] text-white flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>(844) 242-9464</span>
            </a>
          </div>
        </div>

        {/* Sub-headline description & Feature bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200/80 pb-12">
          <div className="lg:col-span-6 text-left text-zinc-600 font-medium text-base sm:text-lg leading-relaxed">
            Use the form below to estimate your home cleaning service. We’ll follow up with a personalized quote and scheduling options.
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#43934a] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-zinc-800">Background checked cleaners</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#43934a] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-zinc-800">No contracts or commitments</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#43934a] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-zinc-800">Easy last minute bookings</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#43934a] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-zinc-800">Insured up to $1M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Cost Calculator Form Container */}
      <section id="calculator-form" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-xl border border-zinc-100/90 text-left space-y-10">
          
          {/* SECTION 1: SERVICE TYPE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">
              Service Type
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Type of cleaning */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  TYPE OF CLEANING
                </label>
                <select
                  value={cleaningType}
                  onChange={(e) => setCleaningType(e.target.value)}
                  className="w-full p-4 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] transition-colors shadow-sm cursor-pointer"
                >
                  <option value="200">Home Cleaning</option>
                  <option value="250">Office Cleaning</option>
                  <option value="300">Move in/out Cleaning</option>
                </select>
              </div>

              {/* Cleaning Frequency */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  CLEANING FREQUENCY
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full p-4 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] transition-colors shadow-sm cursor-pointer"
                >
                  <option value="50">One-Time</option>
                  <option value="30">Twice a Week</option>
                  <option value="20">Monthly</option>
                </select>
              </div>
            </div>

            {/* Cleaning Package */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                CLEANING PACKAGE
              </label>
              <select
                value={cleaningPackage}
                onChange={(e) => setCleaningPackage(e.target.value)}
                className="w-full p-4 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] transition-colors shadow-sm cursor-pointer"
              >
                <option value="80">Basic Cleaning - Light maintenance, regular upkeep, up to 50m2</option>
                <option value="120">Deep Cleaning - Includes baseboards, behind appliances, etc.</option>
                <option value="150">Move in/out Cleaning - Empty home, deep clean of all rooms, bathrooms, kitchen</option>
              </select>
            </div>
          </div>

          {/* SECTION 2: SPACE SIZE */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">
              Space Size
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Square Footage Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    SQUARE FOOTAGE
                  </label>
                  <span className="bg-[#ff7f00] text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                    {sqFootage} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={sqFootage}
                  onChange={(e) => setSqFootage(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#ff7f00]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
                  <span>20 m²</span>
                  <span>200 m²</span>
                </div>
              </div>

              {/* Room Number Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    ROOM NUMBER
                  </label>
                  <span className="bg-[#ff7f00] text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                    {roomNumber}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#ff7f00]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
                  <span>1 Room</span>
                  <span>10 Rooms</span>
                </div>
              </div>

              {/* Bathroom Number Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    BATHROOM NUMBER
                  </label>
                  <span className="bg-[#ff7f00] text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                    {bathroomNumber}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={bathroomNumber}
                  onChange={(e) => setBathroomNumber(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#ff7f00]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
                  <span>1 Bath</span>
                  <span>7 Baths</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: ADD-ON SERVICES (OPTIONAL) */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">
              Add-On Services (Optional)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { key: 'fridge', label: 'INSIDE FRIDGE CLEANING' },
                { key: 'oven', label: 'INSIDE OVEN CLEANING' },
                { key: 'windows', label: 'INTERIOR WINDOWS' },
                { key: 'carpet', label: 'CARPET CLEANING' },
                { key: 'balcony', label: 'BALCONY OR PATIO CLEANING' },
                { key: 'laundry', label: 'LAUNDRY WASH & FOLD' },
                { key: 'linen', label: 'BED LINEN CHANGE' },
                { key: 'furniture', label: 'FURNITURE VACUUMING' },
              ].map((item) => (
                <div
                  key={item.key}
                  className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 flex flex-col justify-between space-y-3 hover:border-zinc-300 transition-colors"
                >
                  <span className="text-[11px] font-extrabold uppercase text-zinc-700 tracking-wider">
                    {item.label}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600">+$10</span>
                    <button
                      type="button"
                      onClick={() => toggleAddon(item.key)}
                      className={`w-12 h-6 rounded-full p-0.5 transition-colors relative flex items-center cursor-pointer ${
                        addons[item.key] ? 'bg-[#43934a]' : 'bg-zinc-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                          addons[item.key] ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: ADDITIONAL INFO & SCHEDULING */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">
              Additional Info & Scheduling
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  PREFERRED CLEANING TIME
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] shadow-sm cursor-pointer"
                >
                  <option value="During Business Hours">During Business Hours</option>
                  <option value="In the Morning">In the Morning</option>
                  <option value="In the Evening">In the Evening</option>
                </select>
              </div>

              {/* Pets */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  DO YOU HAVE PETS
                </label>
                <select
                  value={hasPets}
                  onChange={(e) => setHasPets(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] shadow-sm cursor-pointer"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {/* Home Type */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  HOME TYPE
                </label>
                <select
                  value={homeType}
                  onChange={(e) => setHomeType(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] shadow-sm cursor-pointer"
                >
                  <option value="Apartment / Condo">Apartment / Condo</option>
                  <option value="Split Level">Split Level</option>
                  <option value="Standalone House">Standalone House</option>
                </select>
              </div>

              {/* Service Date */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  PREFERRED SERVICE DATE
                </label>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-zinc-200 bg-white font-semibold text-sm text-zinc-800 focus:outline-none focus:border-[#ff7f00] shadow-sm cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: TOTAL PILL BAR & NEXT BUTTON - Matching reference image */}
          <div className="pt-8 border-t border-zinc-200/80">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Green Total Pill Bar */}
              <div className="flex-1 w-full bg-[#3d8c54] text-white rounded-full px-8 py-5 flex items-center justify-between shadow-md">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider uppercase">
                  TOTAL
                </span>
                <span className="font-black text-2xl sm:text-3xl tracking-tight">
                  $ {totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Orange NEXT Button */}
              <button
                type="button"
                className="w-full sm:w-auto bg-[#ff7f00] hover:bg-[#e06f00] text-white font-extrabold text-base px-10 py-5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider shrink-0"
              >
                NEXT
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Service Price List & FAQ Components */}
      <ServicePriceList />
      <FAQSection />

    </div>
  );
}
