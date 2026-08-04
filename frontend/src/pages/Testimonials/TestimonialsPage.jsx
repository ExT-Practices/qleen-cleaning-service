import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import FAQSection from '../../Components/FAQSection';
import TestimonialsSection from '../../Components/TestimonialsSection';
import HonestSimpleQleen from '../../Components/HonestSimpleQleen';
import heroBg from '../../assets/hero_testimonials.jpg';

export default function TestimonialsPage() {
  // Progress bar animation state
  const [isVisible, setIsVisible] = useState(false);
  const surveyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (surveyRef.current) {
      observer.observe(surveyRef.current);
    }

    return () => {
      if (surveyRef.current) {
        observer.unobserve(surveyRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rebecca Hawland",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_01.jpg",
      rating: 5,
      text: "Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished. If anyone needs a clean home contact them."
    },
    {
      id: 2,
      name: "Annie Bennedict",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_02.jpg",
      rating: 5,
      text: "Qleen did such an awesome job! They were even mindful of using natural cleaning products for my kiddos room, which I was so appreciative of."
    },
    {
      id: 3,
      name: "Andy Toy",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_03.jpg",
      rating: 5,
      text: "Quis luctus vulputate nunc ut tellus. Laoreet elementum deep lectus interdum tempor pretium dui sem mi starter raw fam."
    },
    {
      id: 4,
      name: "Pete Goldner",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/testimonials_04.jpg",
      rating: 5,
      text: "It vinyl distillery trade raw. Asymmetrical lyft shaman vaporware street affogato. Mi marfa vibecession pug offal."
    }
  ];

  // Extended array for infinite looping slider
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentSlide, setCurrentSlide] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - testimonials.length);
    } else if (currentSlide < testimonials.length) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + testimonials.length);
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activeDotIndex = currentSlide % testimonials.length;

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[660px] h-[78vh] flex items-center justify-start overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-20 z-10 mt-[65px]">
        {/* Background Image (Wooden Parquet Floor with Child Drawing) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        {/* Soft, Natural Dark Gradient Overlay for text contrast while keeping floor vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end pb-8 sm:pb-12 gap-8">
          {/* Main Titles */}
          <div className="max-w-2xl text-left space-y-1">
            <span className="text-white text-3xl sm:text-4xl lg:text-[42px] font-['Caveat'] tracking-wide font-normal block italic drop-shadow-sm">
              Testimonials
            </span>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] font-extrabold tracking-tight leading-[1.06] drop-shadow-lg">
              More Time For Your <br />
              Favorite Ativities
            </h1>
          </div>

          {/* Interactive Angled Price Indicator (Orange Pulsing Target Dot + Angled Line + Script Text) */}
          <div className="relative mb-6 md:mb-10 self-end md:self-auto z-20">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] h-[75px] sm:h-[85px]">
              {/* Handwritten Script Text Sitting Above Horizontal Line */}
              <div className="absolute -top-1 sm:-top-2 right-4 sm:right-6 text-white font-['Caveat'] text-2xl sm:text-3xl lg:text-[34px] font-normal italic tracking-wide drop-shadow-lg pointer-events-none select-none">
                Home Cleaning from $49
              </div>

              {/* SVG Canvas drawing angled line + target dot + end tip */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 380 75">
                {/* Outer translucent pulsing ring */}
                <circle cx="28" cy="52" r="22" fill="#ff7f00" opacity="0.4" className="animate-pulse" />
                
                {/* Inner solid orange target dot */}
                <circle cx="28" cy="52" r="12" fill="#ff7f00" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Angled connector path: starts at dot center (28,52), goes up-right diagonally to (75,18), then straight horizontal to (365,18) */}
                <path
                  d="M 28 52 L 75 18 L 365 18"
                  fill="none"
                  stroke="#ff7f00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* End tip dot on horizontal line */}
                <circle cx="365" cy="18" r="5" fill="#ff7f00" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SATISFACTION SURVEY SECTION */}
      <section 
        ref={surveyRef}
        className="relative bg-[#FAF8F5] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 rounded-t-[3.5rem] sm:rounded-t-[5.5rem] -mt-20 sm:-mt-28 z-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Trusted Clients Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative max-w-[420px] w-full">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_home_02_01.png"
                alt="Happy customer in clean home"
                className="w-full h-auto rounded-[2.5rem] object-cover shadow-2xl"
              />

              {/* Overlapping Badge: Trusted by 200+ clients */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#1a1a1a] text-white p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10 max-w-[280px]">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_clients.png"
                  alt="Client avatars"
                  className="h-10 w-auto object-contain shrink-0"
                />
                <div>
                  <div className="font-bold text-sm sm:text-base text-white leading-tight">
                    Trusted by <br />
                    <span className="text-[#ff7f00]">200+ clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Headings, Google Rating & Satisfaction Progress Bars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-2">
              <span className="block text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal">
                Satisfaction survey
              </span>
              <h2 className="text-zinc-900 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                What Our Clients Think
              </h2>
            </div>

            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-zinc-200/80">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span className="text-zinc-900 font-bold text-sm">4.7</span>
            </div>

            {/* Animated Satisfaction Progress Bars */}
            <div className="space-y-6 pt-2">
              {/* Bar 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Punctuality of cleaners</span>
                  <span className="font-bold text-[#43934a]">96%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#43934a] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? '96%' : '0%' }}
                  />
                </div>
              </div>

              {/* Bar 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Quality of cleaning</span>
                  <span className="font-bold text-[#43934a]">94%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#43934a] rounded-full transition-all duration-1000 ease-out delay-100"
                    style={{ width: isVisible ? '94%' : '0%' }}
                  />
                </div>
              </div>

              {/* Bar 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Respect for your home & belongings</span>
                  <span className="font-bold text-[#43934a]">100%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#43934a] rounded-full transition-all duration-1000 ease-out delay-200"
                    style={{ width: isVisible ? '100%' : '0%' }}
                  />
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="text-zinc-500 text-sm font-medium pt-1 italic">
              *Clients satisfaction survey based on 298 responses
            </div>
          </div>

        </div>
      </section>

      {/* 3. CLIENT TESTIMONIALS CARDS SECTION */}
      <TestimonialsSection />

      {/* 4. ABOUT US / HONEST. SIMPLE. QLEEN. SECTION */}
      <HonestSimpleQleen />

      {/* 5. FAQ / CTA SECTION */}
      <FAQSection />

    </div>
  );
}
