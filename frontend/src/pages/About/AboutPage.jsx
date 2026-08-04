import React, { useState, useEffect } from 'react';
import { ShieldCheck, Calendar, Leaf, HeartHandshake, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import TestimonialsSection from '../../Components/TestimonialsSection';
import FAQSection from '../../Components/FAQSection';
import HonestSimpleQleen from '../../Components/HonestSimpleQleen';

// Animated Counter component that counts up from 0 on page load/refresh
function AnimatedCounter({ targetValue, suffix = '', prefix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [targetValue, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#43934a]" strokeWidth={1.75} />,
      title: "Trusted Professionals",
      description:
        "Our cleaners are thoroughly vetted, trained, and committed to quality service. We treat your space with the same care and respect we give our own.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#43934a]" strokeWidth={1.75} />,
      title: "Flexible Scheduling",
      description:
        "Life gets busy. That’s why we offer flexible booking options including weekly, monthly, and one-time cleanings, always on your terms.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#43934a]" strokeWidth={1.75} />,
      title: "Eco-Friendly Cleaning",
      description:
        "We use non-toxic, environmentally friendly products that are safe for children, pets, and the planet without compromising on results.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#43934a]" strokeWidth={1.75} />,
      title: "Customized Service Plans",
      description:
        "From a light refresh to a deep clean, we tailor every service to your needs and budget. You’ll never pay for more than you need.",
    },
  ];

  const stats = [
    {
      target: 96,
      suffix: "%",
      title: "Satisfaction Rate",
      description: "Based on 356 reviews on Google",
    },
    {
      target: 25,
      suffix: "",
      title: "Certified Cleaners",
      description: "Growing team of professional cleaners",
    },
    {
      target: 2,
      suffix: "M",
      title: "Insured up to $2M",
      description: "Your home & office are safe with us",
    },
    {
      target: 80,
      suffix: "%",
      title: "Rebook Monthly",
      description: "Special discounts for recurring clients",
    },
  ];

  const serviceCards = [
    {
      title: "Home Cleaning",
      price: "From $49",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_01.jpg",
    },
    {
      title: "Office Cleaning",
      price: "From $39",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_02.jpg",
      showArrow: true,
    },
    {
      title: "Short-Term Rentals Cleaning",
      price: "From $59",
      image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_service_03.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">
      
      {/* 1. Page Hero Banner Section */}
      <section className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] h-[82vh] flex items-center justify-start overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-20 z-10 mt-[70px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_about.jpg")',
          }}
        />

        {/* Soft Dark Left-Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-left space-y-3">
            {/* Cursive Handwritten Superheadline (White Caveat font) */}
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-['Caveat'] tracking-wide font-normal block">
              About us
            </span>

            {/* H1 Main Headline */}
            <h1 className="text-white text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.1] drop-shadow-md">
              Making Spaces Shine, One <br />
              Clean at a Time.
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Honest. Simple. Qleen. Section */}
      <HonestSimpleQleen />

      {/* 3. Main Content Container */}
      <section className="relative bg-[#FAF8F5] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          
          {/* Section Headline & Intro Paragraph */}
          <div className="max-w-4xl text-left space-y-3">
            {/* Cursive Handwritten Superheadline (Orange Caveat font) */}
            <span className="text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal block">
              About us
            </span>

            {/* Main Section Headline */}
            <h2 className="text-zinc-900 text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.25] tracking-tight">
              We are a professional cleaning company dedicated to delivering high-quality residential and commercial cleaning services with a personal touch.
            </h2>

            {/* Subheadline Paragraph */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed pt-2">
              Our team goes above and beyond to ensure you're happy after every clean, with open communication, flexible scheduling, and a satisfaction guarantee that puts your peace of mind first.
            </p>
          </div>

          {/* 2-Column Section: 2x2 Feature Grid (Left 7 Cols) | Green Backdrop Card (Right 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
            
            {/* Left 7 Columns: 2x2 Feature Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {features.map((item, index) => (
                <div key={index} className="flex flex-col items-start text-left space-y-3">
                  <div className="p-1">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right 5 Columns: Green Rounded Card Frame with Cleaning Equipment Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                
                {/* Green Backdrop Card Frame */}
                <div className="relative bg-[#43934a] rounded-[2.5rem] p-6 sm:p-8 flex items-end justify-center min-h-[380px] sm:min-h-[440px] shadow-lg border-[6px] border-[#D0E5D3] overflow-hidden">
                  
                  {/* Floating Bubble Graphic Overlays */}
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_04.png"
                    alt="Bubble graphic"
                    className="absolute top-8 right-6 w-20 h-auto opacity-85 pointer-events-none z-10 animate-bounce"
                    style={{ animationDuration: '4s' }}
                  />
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_05.png"
                    alt="Bubble graphic"
                    className="absolute top-20 left-4 w-14 h-auto opacity-80 pointer-events-none z-10"
                  />
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_06.png"
                    alt="Bubble graphic"
                    className="absolute bottom-28 right-4 w-12 h-auto opacity-75 pointer-events-none z-10"
                  />

                  {/* Main Product Image */}
                  <img
                    src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_about.png"
                    alt="Cleaning equipment"
                    className="relative z-20 w-full max-w-[360px] h-auto object-contain transform translate-y-4"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* 3. Tailored Services & Stacked Cards Section (Matching Theme HTML Snippet) */}
          <div className="pt-16 lg:pt-24 border-t border-zinc-200/60 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (7 Cols): Headline, Green Check Bullets & Action Buttons */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h3 className="text-zinc-900 text-2xl sm:text-4xl lg:text-[2.25rem] font-bold leading-[1.3] tracking-tight">
                From routine home cleanings to deep office cleans and move-in/move-out services, we tailor every job to your needs.
              </h3>

              {/* 4 Check Bullets */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Background checked cleaners",
                  "Easy last minute bookings",
                  "No contracts or commitments",
                  "Regular discounts for recurring clients",
                ].map((bullet, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#43934a]/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#43934a]" />
                    </span>
                    <span className="text-zinc-800 text-sm sm:text-base font-semibold">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Book Online & Phone */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <a
                  href="#contact"
                  className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-orange-500/25 transition duration-300 text-sm tracking-wide uppercase"
                >
                  Book Online
                </a>

                <a
                  href="tel:8442429464"
                  className="inline-flex items-center gap-2.5 group transition duration-200"
                >
                  <span className="w-10 h-10 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="font-bold text-zinc-900 text-base">
                    (844) 242-9464
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column (5 Cols): 3 Stacked Service Cards */}
            <div className="lg:col-span-5 space-y-4">
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2rem] p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition duration-300 border border-zinc-100/80 group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0"
                    />
                    <div className="space-y-2 text-left">
                      <h4 className="font-bold text-zinc-900 text-base sm:text-lg leading-snug">
                        {card.title}
                      </h4>
                      <span className="inline-block border border-[#43934a] text-[#43934a] text-xs font-bold px-3.5 py-1 rounded-full bg-[#43934a]/5">
                        {card.price}
                      </span>
                    </div>
                  </div>

                  {card.showArrow && (
                    <div className="w-9 h-9 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Green Tiles Stats Section with Rounded Corners Container & Counting Animation */}
      <section className="relative px-4 sm:px-8 lg:px-16 py-6 z-20">
        <div
          className="relative max-w-7xl mx-auto rounded-[3rem] lg:rounded-[4rem] bg-cover bg-center py-16 sm:py-20 px-8 sm:px-14 lg:px-20 text-white shadow-2xl overflow-hidden"
          style={{
            backgroundImage:
              'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_02.jpg")',
          }}
        >
          {/* Soft Green Overlay */}
          <div className="absolute inset-0 bg-[#327338]/60 backdrop-brightness-95" />

          {/* Stats Metrics Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                {/* Count Up Number Animation */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                  <AnimatedCounter targetValue={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-bold text-white tracking-wide">
                  {stat.title}
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curved White Container & Our Mission Card */}
      <section className="relative bg-[#FAF8F5] pt-12 pb-24 px-6 sm:px-12 lg:px-20 z-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Our Mission Floating White Card */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-zinc-100/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Column (7 Cols): Smiling Cleaner Image */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] overflow-hidden shadow-md border-2 border-zinc-100">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_about_01.jpg"
                  alt="Smiling professional cleaner"
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Text Column (5 Cols): Title, Quote, Signature & Founder */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                Our mission
              </h3>

              {/* Quotation Icon & Quote Text */}
              <div className="relative pl-1">
                <span className="text-[#ff7f00] font-serif text-4xl sm:text-5xl leading-none block mb-1">
                  “
                </span>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                  Our journey began with a passion for creating tidy, welcoming spaces and a desire to help busy people enjoy more free time.
                </p>
              </div>

              {/* Signature & Founder Info */}
              <div className="pt-3 flex items-center gap-4 border-t border-zinc-100">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/signature_01.png"
                  alt="Laura Jackon Signature"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <div>
                  <div className="font-bold text-zinc-900 text-sm sm:text-base">
                    Laura Jackon
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm font-medium">
                    Founder
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Client Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Free Quote CTA Section */}
      <FAQSection />

    </div>
  );
}
