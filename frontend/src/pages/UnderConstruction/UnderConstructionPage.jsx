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
      const difference = +new Date(defaultTarget) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [defaultTarget]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex flex-col justify-between p-8 md:p-16 lg:p-24 text-white relative font-sans"
      style={{
        backgroundImage: `url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_under.jpg")`,
        backgroundPositionY: "-5px"
      }}
    >
      {/* Top Text Content */}
      <div className="z-10 max-w-4xl space-y-4 mt-auto md:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05] font-['Inter_Tight']">
          We’re Polishing Our New Website
        </h1>
        <p className="text-lg sm:text-2xl font-light text-white/95 tracking-wide">
          Check back shortly to see it shine
        </p>
      </div>

      {/* Countdown Grid */}
      <div className="z-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-16 lg:gap-24 max-w-4xl my-auto pt-12 md:pt-16">
        <div className="flex flex-row items-baseline gap-6 sm:flex-col sm:items-start">
          <span className="text-6xl sm:text-7xl lg:text-[96px] font-medium tracking-[0.1em] leading-none">
            {timeLeft.days}
          </span>
          <span className="text-xl sm:text-2xl font-light text-white/90 capitalize mt-2">
            Days
          </span>
        </div>

        <div className="flex flex-row items-baseline gap-6 sm:flex-col sm:items-start">
          <span className="text-6xl sm:text-7xl lg:text-[96px] font-medium tracking-[0.1em] leading-none">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-xl sm:text-2xl font-light text-white/90 capitalize mt-2">
            Hours
          </span>
        </div>

        <div className="flex flex-row items-baseline gap-6 sm:flex-col sm:items-start">
          <span className="text-6xl sm:text-7xl lg:text-[96px] font-medium tracking-[0.1em] leading-none">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-xl sm:text-2xl font-light text-white/90 capitalize mt-2">
            Minutes
          </span>
        </div>

        <div className="flex flex-row items-baseline gap-6 sm:flex-col sm:items-start">
          <span className="text-6xl sm:text-7xl lg:text-[96px] font-medium tracking-[0.1em] leading-none">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-xl sm:text-2xl font-light text-white/90 capitalize mt-2">
            Seconds
          </span>
        </div>
      </div>

      {/* Action Controls Section */}
      <div className="z-10 flex flex-col sm:flex-row items-center gap-6 pt-10 mt-auto border-t border-white/10">
        <button
          onClick={() => {
            if (setCurrentPage) setCurrentPage("home");
            window.location.hash = "home";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-full sm:w-auto bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-10 py-4.5 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <a
          href="tel:8442429464"
          className="w-full sm:w-auto border border-white/35 hover:border-white text-white font-bold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 bg-black/25 backdrop-blur-md text-lg"
        >
          <span className="w-9 h-9 rounded-full bg-[#ff7f00] flex items-center justify-center text-white">
            <Phone className="w-4.5 h-4.5" />
          </span>
          Call us: (844) 242-9464
        </a>
      </div>
    </div>
  );
}