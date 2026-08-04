import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Pete Goldner",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/testimonials_04.jpg",
      rating: 5,
      text: "It vinyl distillery trade raw. Asymmetrical lyft shaman vaporware street affogato. Mi marfa vibecession pug offal."
    },
    {
      id: 2,
      name: "Rebecca Hawland",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_01.jpg",
      rating: 5,
      text: "“Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished. If anyone needs a clean home contact them.”"
    },
    {
      id: 3,
      name: "Annie Bennedict",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_02.jpg",
      rating: 5,
      text: "“Qleen did such an awesome job! They were even mindful of using natural cleaning products for my kiddos room, which I was so appreciative of.”"
    },
    {
      id: 4,
      name: "Andy Toy",
      role: "Client",
      avatar: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/testimonials_03.jpg",
      rating: 5,
      text: "Quis luctus vulputate nunc ut tellus. Laoreet elementum deep lectus interdum tempor pretium dui sem mi starter raw fam lorem ipsum dolor sit amet."
    }
  ];

  return (
    <section className="relative bg-[#FAF8F5] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
          }}
          className="w-full pb-2"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto flex">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col justify-between w-full h-full min-h-[320px] sm:min-h-[350px]">
                <div>
                  {/* Superheadline */}
                  <span className="block text-[#ff7f00] font-['Caveat'] text-2xl sm:text-[26px] font-normal mb-4 text-left">
                    Client Testimonials
                  </span>

                  {/* Quote Text */}
                  <p className="text-zinc-900 text-lg sm:text-[20px] font-bold tracking-tight leading-snug text-left mb-6">
                    {item.text}
                  </p>
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ff7f00] text-[#ff7f00]" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t border-zinc-100 pt-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover shadow-xs shrink-0"
                    />
                    <div className="text-left">
                      <div className="font-bold text-zinc-900 text-base leading-tight">
                        {item.name}
                      </div>
                      <div className="text-xs text-zinc-400 font-medium mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls Bar */}
        <div className="flex items-center justify-between pt-2">
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="w-2.5 h-2.5 rounded-full bg-zinc-300 hover:bg-[#ff7f00] transition-colors cursor-pointer"
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-700 hover:text-zinc-900 hover:bg-white border border-transparent hover:border-zinc-200 transition duration-200 cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-700 hover:text-zinc-900 hover:bg-white border border-transparent hover:border-zinc-200 transition duration-200 cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
