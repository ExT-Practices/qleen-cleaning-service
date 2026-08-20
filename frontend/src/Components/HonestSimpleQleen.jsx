import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

// Animated Counter component for Satisfaction Rate
function AnimatedCounter({ targetValue, suffix = '%', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const num = parseFloat(targetValue);
    if (isNaN(num)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * num));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(num);
      }
    };

    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isVisible, targetValue, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HonestSimpleQleen({ className = "" }) {
  const col1Items = [
    {
      title: "Trust",
      text: "Trust is our paramount value. All of our employees go through work authorization check.",
    },
    {
      title: "Care",
      text: "Average response time is less than 10 minutes. You can call, e-mail, text or message us.",
    },
  ];

  const col2Items = [
    {
      title: "Quality",
      text: "Excellent performance, flat rates, no surprises. Five star rating on Google.",
    },
    {
      title: "People",
      text: "We pay good wages, health benefits and retirement, and abide by the laws.",
    },
  ];

  return (
    <section className={`relative w-full px-3 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 z-20 ${className}`}>
      <div className="max-w-[1400px] mx-auto bg-[#FAF7F2] rounded-[3rem] sm:rounded-[4.5rem] lg:rounded-[5rem] pt-16 sm:pt-20 pb-20 sm:pb-28 px-6 sm:px-12 lg:px-16 shadow-sm overflow-hidden font-sans text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Header: Subtitle & Headline */}
          <div className="text-center space-y-2">
            <span className="text-[#ff7f00] font-['Caveat'] text-3xl sm:text-4xl font-normal block tracking-wide italic">
              About us
            </span>
            <h2 className="text-[#1A1A1A] text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-tight">
              Honest. Simple. Qleen.
            </h2>
          </div>

          {/* 3-Column Content Layout (Left Column 1, Column 2, Right White Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Column 1: Trust & Care */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-8 sm:space-y-10 text-left py-2">
              {col1Items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#43934A] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <h3 className="text-[#1A1A1A] text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#6B7280] text-sm sm:text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2: Quality & People */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-8 sm:space-y-10 text-left py-2">
              {col2Items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#43934A] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <h3 className="text-[#1A1A1A] text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#6B7280] text-sm sm:text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 3 (Spans 6 cols): White Satisfaction Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-zinc-100 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] h-full">
                
                {/* Top Left: 96% and Satisfaction Rate* */}
                <div className="relative z-10 text-left space-y-1 max-w-[280px]">
                  <div className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold text-[#43934A] tracking-tight leading-none">
                    <AnimatedCounter targetValue={96} suffix="%" />
                  </div>
                  <h4 className="text-[#1A1A1A] text-2xl sm:text-[1.65rem] font-bold tracking-tight pt-2">
                    Satisfaction Rate*
                  </h4>
                </div>

                {/* Bottom Left: *Based on 356 reviews on Google */}
                <div className="relative z-10 text-left pt-10 sm:pt-14">
                  <p className="text-[#6B7280] text-xs sm:text-sm font-medium">
                    *Based on 356 reviews on Google
                  </p>
                </div>

                {/* Right Side: Green Glove with Sparkle Lines */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-end justify-end pointer-events-none z-0">
                  <div className="relative w-full h-full flex items-end justify-end pr-2 sm:pr-6">
                    
                    {/* Orange Sparkle Burst Accent Lines Above Finger */}
                    <svg
                      className="absolute top-7 sm:top-9 right-[4.5rem] sm:right-[5.5rem] w-9 h-9 text-[#ff7f00]"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="8" y1="10" x2="15" y2="15" stroke="#ff7f00" strokeWidth="3" strokeLinecap="round" />
                      <line x1="18" y1="4" x2="18" y2="12" stroke="#ff7f00" strokeWidth="3" strokeLinecap="round" />
                      <line x1="28" y1="10" x2="21" y2="15" stroke="#ff7f00" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                    {/* Green Glove Image */}
                    <img
                      src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/green_glove.png"
                      alt="Green glove cleaning satisfaction"
                      className="max-h-[290px] sm:max-h-[340px] w-auto object-contain object-bottom transform translate-y-1"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
