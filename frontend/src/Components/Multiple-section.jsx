import React, { useState, useEffect, useRef } from 'react';

export default function Multiple() {
  const bgImageUrl = "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_02.jpg";
  const femaleClientUrl = "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_home_02_01.png";

  // Dropdown states
  const [selectedService, setSelectedService] = useState("Home Cleaning");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Animation states for count-up and progress bars
  const [isVisible, setIsVisible] = useState(false);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    "Home Cleaning",
    "Office Cleaning",
    "Moving In/Out Cleaning",
    "Deep Cleaning",
    "Window Cleaning"
  ];

  // Testimonials Slider state - start in the middle copy (index = 4)
  const [currentSlide, setCurrentSlide] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Dragging states for cards
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleDragStart = (e) => {
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
    setIsTransitioning(false); // Disable transitions during drag
    setIsDragging(true);
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    setStartX(pageX);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    const offset = pageX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const threshold = 50;
    if (dragOffset > threshold) {
      handlePrevSlide();
    } else if (dragOffset < -threshold) {
      handleNextSlide();
    } else {
      // Snap back
      setDragOffset(0);
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Rebecca Hawland",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_01.jpg",
      text: "“Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished. If anyone needs a clean home contact them.”"
    },
    {
      id: 2,
      name: "Annie Bennedict",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_02.jpg",
      text: "“Qleen did such an awesome job! They were even mindful of using natural cleaning products for my kiddos room, which I was so appreciative of.”"
    },
    {
      id: 3,
      name: "Andy Toy",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_03.jpg",
      text: "“Quis luctus vulputate nunc ut tellus. Laoreet elementum deep lectus interdum tempor pretium dui sem mi starter raw fam lorem ipsum dolor sit amet.”"
    },
    {
      id: 4,
      name: "Pete Goldner",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/testimonials_04.jpg",
      text: "“It vinyl distillery trade raw. Asymmetrical lyft shaman vaporware street affogato. Mi marfa vibecession pug offal.”"
    }
  ];

  // Auto-slide effect for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // If it reaches the boundary copy, jump instantly back to the center copy
    if (currentSlide >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - testimonials.length);
    } else if (currentSlide < testimonials.length) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + testimonials.length);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate satisfaction rate counter (0 to 96)
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = 96;
    const duration = 1500; // 1.5s
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setSatisfactionCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="w-full relative bg-[#1E3E2B]">

      {/* 1. Estimate Dropdown Banner Section */}
      <div
        className="w-full min-h-[500px] bg-cover bg-center bg-no-repeat relative flex items-center py-20  px-6 md:px-12"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="block text-white text-3xl md:text-4xl font-normal font-['Caveat'] tracking-wide">
              Let us make your life a little easier
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-xl leading-tight">
              Schedule Your Free Estimate Today
            </h1>

            {/* Hand-drawn style curved arrow decoration */}
            <div className="hidden md:block pl-36 pt-2">
              <svg className="w-32 h-16 text-white/70" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10,10 C40,45 80,45 105,20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M93,22 L105,20 L103,32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Dropdown card */}
          <div className="lg:col-span-5 flex justify-end">
            <div
              ref={dropdownRef}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 pl-4 pr-2 flex items-center justify-between w-full max-w-md shadow-2xl relative"
            >
              {/* Green house icon badge */}
              <div className="w-12 h-12 rounded-full bg-[#3d8c54] flex items-center justify-center text-white shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              {/* Selector area */}
              <div
                className="flex-1 px-4 py-2 cursor-pointer select-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-lg">{selectedService}</span>
                  <svg
                    className={`w-5 h-5 text-white/80 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Action Orange Button */}
              <button className="w-12 h-12 rounded-full bg-[#f2871b] hover:bg-[#d97715] flex items-center justify-center text-white shrink-0 transition-all hover:scale-105 active:scale-95 shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>

              {/* Dropdown Options List */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 py-2 animate-fadeIn">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="px-6 py-3.5 hover:bg-gray-50 text-gray-800 font-medium text-base transition-colors cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        setSelectedService(service);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span>{service}</span>
                      {selectedService === service && (
                        <span className="w-2.5 h-2.5 bg-[#f2871b] rounded-full"></span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Satisfaction Survey Section */}
      <div className="w-full bg-[#FAF8F5] rounded-t-[3.5rem] md:rounded-t-[5rem] px-6 py-20 md:py-28 -mt-12 relative z-10 space-y-24">

        {/* Top: Survey Stats Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image with Satisfaction Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Client Image */}
              <img
                src={femaleClientUrl}
                alt="Happy client"
                className="w-full max-w-[400px] h-auto rounded-[2.5rem] object-cover shadow-2xl"
              />

              {/* Satisfaction badge overlap */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#1a1a1a] text-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 max-w-[250px] border border-white/5">
                {/* Home/Clean badge icon */}
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center text-[#f2871b] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <div className="text-3xl font-extrabold tracking-tight text-[#f4ecd8] flex items-baseline">
                    <span>{satisfactionCount}</span>
                    <span className="text-xl text-[#f2871b] ml-0.5">%</span>
                  </div>
                  <div className="text-xs text-white/70 font-semibold tracking-wide uppercase">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Headings, Ratings, Progress Bars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="block text-[#f2871b] text-2xl md:text-3xl font-normal font-['Caveat'] tracking-wide">
                Satisfaction survey
              </span>
              <h2 className="text-zinc-950 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                What Our Clients Think
              </h2>
            </div>

            {/* Google Trustindex Rating */}
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100">
              {/* Google G icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#f2871b]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="text-zinc-800 font-bold text-sm">4.7</span>
            </div>

            {/* Progress Bars Container */}
            <div className="space-y-6 pt-2">
              {/* Bar 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Punctuality of cleaners</span>
                  <span>96%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3d8c54] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? '96%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Quality of cleaning</span>
                  <span>94%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3d8c54] rounded-full transition-all duration-1000 ease-out delay-100"
                    style={{ width: isVisible ? '94%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-zinc-900 font-semibold text-base">
                  <span>Respect for your home & belongings</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3 bg-zinc-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3d8c54] rounded-full transition-all duration-1000 ease-out delay-200"
                    style={{ width: isVisible ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="text-zinc-500 text-sm font-medium pt-2 italic">
              *Clients satisfaction survey based on 298 responses
            </div>

          </div>
        </div>

        {/* Bottom: Client Testimonials Slider */}
        <div className="max-w-7xl mx-auto pt-12 border-t border-zinc-200/60">

          {/* Testimonial Cards Carousel Viewport */}
          <div className="relative overflow-hidden w-full px-1 py-4">
            <div
              className={`testimonial-track flex gap-6 select-none cursor-grab active:cursor-grabbing ${isDragging ? 'dragging' : ''} ${!isTransitioning ? 'no-transition' : ''}`}
              style={{
                '--active-slide': currentSlide,
                '--drag-offset': `${dragOffset}px`
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="w-[85%] md:w-[38%] shrink-0 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[380px] border border-zinc-100/50"
                >
                  <div className="space-y-4">
                    {/* Cursive Tagline */}
                    <span className="block text-[#f2871b] text-xl md:text-[22px] font-normal font-['Caveat'] tracking-wide">
                      Client Testimonials
                    </span>

                    {/* Testimonial text */}
                    <p className="text-zinc-900 text-xl md:text-[24px] font-semibold leading-relaxed tracking-tight">
                      {item.text}
                    </p>
                  </div>

                  {/* Stars, Avatar and Details */}
                  <div className="mt-8 space-y-6">
                    {/* Ratings */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-[#f2871b]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Author details */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover shadow-sm border border-zinc-100"
                      />
                      <div>
                        <h4 className="text-zinc-950 font-bold text-base leading-tight">{item.name}</h4>
                        <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots and Arrows */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(testimonials.length + index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${(currentSlide % testimonials.length) === index ? 'w-6 bg-[#1E3E2B]' : 'w-2.5 bg-zinc-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevSlide}
                className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 transition-colors shadow-sm"
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={handleNextSlide}
                className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 transition-colors shadow-sm"
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}