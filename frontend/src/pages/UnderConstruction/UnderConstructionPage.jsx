import React, { useState, useEffect } from 'react';
import { Phone, ArrowLeft } from 'lucide-react';

export default function UnderConstructionPage({ setCurrentPage, targetDate }) {
  // Target date set to match the countdown style
  const defaultTarget = targetDate || new Date(Date.now() + (147 * 24 * 60 * 60 * 1000) + (15 * 60 * 60 * 1000) + (59 * 60 * 1000) + (51 * 1000));

  const calculateTimeLeft = () => {
    const difference = +new Date(defaultTarget) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [defaultTarget]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col justify-center items-center p-4 md:p-8 font-sans">
      
      {/* Main Hero Card Container */}
      <div 
        className="w-full max-w-[1240px] min-h-[600px] md:min-h-[680px] rounded-[32px] relative overflow-hidden bg-cover bg-center flex flex-col justify-between p-8 md:p-16 lg:p-20 text-white shadow-2xl"
        style={{
          backgroundImage: `url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_under.jpg")`
        }}
      >
        
        {/* Top Text Content */}
        <div className="z-10 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1]">
            We’re Polishing Our New Website
          </h1>
          <p className="text-base sm:text-lg font-normal text-white/90">
            Check back shortly to see it shine
          </p>
        </div>

        {/* Countdown Grid (Matches exact column alignment and spacing) */}
        <div className="z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 md:gap-16 max-w-2xl my-auto pt-8">
          <div className="flex flex-col items-start">
            <span className="text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-none">
              {timeLeft.days}
            </span>
            <span className="text-lg sm:text-xl font-normal text-white/90 mt-3">
              Days
            </span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-none">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-lg sm:text-xl font-normal text-white/90 mt-3">
              Hours
            </span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-none">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-lg sm:text-xl font-normal text-white/90 mt-3">
              Minutes
            </span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-none">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-lg sm:text-xl font-normal text-white/90 mt-3">
              Seconds
            </span>
          </div>
        </div>

        {/* Action Controls Section */}
        <div className="z-10 flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-white/10">
          <button
            onClick={() => {
              if (setCurrentPage) setCurrentPage("home");
              window.location.hash = "home";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <a
            href="tel:8442429464"
            className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-3 bg-black/20 backdrop-blur-md"
          >
            <span className="w-8 h-8 rounded-full bg-[#ff7f00] flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </span>
            Call us: (844) 242-9464
          </a>
        </div>

      </div>
    </div>
  );
}