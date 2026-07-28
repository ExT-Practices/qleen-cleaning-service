import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Annie Bennedict",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_02.jpg",
      text: "They were even mindful of using natural cleaning products for my kiddos room, which I was so appreciative of."
    },
    {
      id: 2,
      name: "Pete Goldner",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/testimonials_04.jpg",
      text: "It vinyl distillery trade raw. Asymmetrical lyft shaman vaporware street affogato. Mi marfa vibecession pug offal."
    },
    {
      id: 3,
      name: "Rebecca Hawland",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_01.jpg",
      text: "Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished."
    },
    {
      id: 4,
      name: "Andy Toy",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_03.jpg",
      text: "Quis luctus vulputate nunc ut tellus. Laoreet elementum deep lectus interdum tempor pretium dui sem mi starter raw fam."
    }
  ];

  // Extended array for infinite looping (3 copies)
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Start in the middle copy (index = 4)
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
    // If it reaches the boundary copy, jump instantly back to the center copy
    if (currentSlide >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - testimonials.length);
    } else if (currentSlide < testimonials.length) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + testimonials.length);
    }
  };

  // Auto-slide effect (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activeDotIndex = currentSlide % testimonials.length;

  return (
    <section className="relative bg-[#FAF8F5] px-4 sm:px-8 lg:px-16 py-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#398d40] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative shadow-xl">
          
          {/* Left Column: Green Section with Headings, Rating & Testimonials Cards */}
          <div 
            className="lg:col-span-7 p-8 sm:p-12 lg:p-14 relative flex flex-col justify-between overflow-hidden z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Floating Leaf Graphic Bottom-Left */}
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_02.png"
              alt="Decorative Leaf"
              className="absolute -bottom-6 -left-6 w-32 md:w-40 pointer-events-none select-none z-0 opacity-80"
              loading="lazy"
            />
            
            {/* Floating Leaf Graphic Top-Right */}
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_03.png"
              alt="Decorative Leaf"
              className="absolute -top-6 -right-6 w-32 md:w-40 pointer-events-none select-none z-0 opacity-80"
              loading="lazy"
            />

            <div className="relative z-10 space-y-6">
              {/* Section Titles */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-white/90 text-2xl md:text-3xl font-normal font-['Caveat'] tracking-wide mb-1">
                    Testimonials
                  </span>
                  <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    What Our Clients Think
                  </h2>
                </div>
              </div>

              {/* Google Trustindex Rating Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.7</span>
              </div>

              {/* Sliding Carousel Track Viewport */}
              <div className="overflow-hidden w-full pt-2">
                <div 
                  className={`flex gap-4 sm:gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                  style={{
                    transform: `translateX(-${currentSlide * 50}%)`,
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {extendedTestimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full md:w-[calc(50%-12px)] shrink-0 bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between min-h-[260px] border border-white/20 transition-all duration-300"
                    >
                      <div>
                        {/* Quote icon */}
                        <div className="text-[#f2871b] text-4xl sm:text-5xl font-serif leading-none font-bold mb-2">
                          “
                        </div>
                        {/* Text */}
                        <p className="text-zinc-700 text-sm sm:text-base font-normal leading-relaxed">
                          {item.text.replace(/^[“"]|[”"]$/g, '')}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-gray-100">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover shadow-sm border border-gray-100"
                        />
                        <div>
                          <div className="font-bold text-zinc-900 text-sm leading-tight">{item.name}</div>
                          <div className="text-xs text-zinc-400 font-medium">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Pagination Controls: Dots & Arrows */}
            <div className="mt-8 flex items-center justify-between relative z-10">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentSlide(testimonials.length + index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeDotIndex === index
                        ? 'w-7 bg-white'
                        : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-95 border border-white/20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-95 border border-white/20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Kitchen Image */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[600px] overflow-hidden">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_02.jpg"
              alt="Satisfied client on kitchen counter"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
