import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle2, 
  Calendar, 
  CheckCheck, 
  Clock, 
  Sparkles, 
  Star,
  Plus,
  Minus,
  X,
  ShieldCheck,
  Award,
  ArrowRight,
  Send,
  HelpCircle,
  ThumbsUp,
  ChevronRight
} from 'lucide-react';
import ServicePriceList from '../../Components/Service-price-list';

export default function SingleService() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'Standard Home Cleaning',
    bedrooms: '1 Bedroom',
    bathrooms: '1 Bathroom',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState({ 0: true });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: 'Standard Home Cleaning',
        bedrooms: '1 Bedroom',
        bathrooms: '1 Bathroom',
        message: ''
      });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const features = [
    "Background checked & vetted cleaners",
    "Easy last-minute online bookings",
    "No lock-in contracts or hidden fees",
    "Fully insured up to $1M coverage",
  ];

  const steps = [
    {
      num: "01",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: "Booking Made Easy",
      description: "Schedule your cleaning online or by phone. Pick a date and service plan tailored to your lifestyle.",
    },
    {
      num: "02",
      icon: <CheckCheck className="w-6 h-6 text-emerald-600" />,
      title: "Personalized Cleaning Plan",
      description: "We customize our checklist according to your home layout, priority areas, and special requests.",
    },
    {
      num: "03",
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Arrival & Walkthrough",
      description: "Our professional, uniformed team arrives punctually with all supplies and reviews the priorities with you.",
    },
    {
      num: "04",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Detailed Room Cleaning",
      description: "Dusting high & low, sanitizing bathrooms and kitchen, vacuuming carpets, and mopping hard floors.",
    },
    {
      num: "05",
      icon: <Star className="w-6 h-6 text-emerald-600" />,
      title: "Final Check & Satisfaction",
      description: "We perform a thorough final walkthrough to ensure complete perfection and 100% satisfaction.",
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive residential and commercial cleaning including Standard Home Cleaning, Deep Cleaning, Move In/Move Out service, Post-Construction Cleaning, and specialized office maintenance."
    },
    {
      question: "What services don’t you offer?",
      answer: "For safety reasons, we do not handle hazardous materials, biohazard cleanup, mold remediation, industrial debris hauling, or moving extremely heavy furniture (>75 lbs)."
    },
    {
      question: "How long will it take to clean my home?",
      answer: "Duration depends on square footage and cleanliness state. A typical 2-bedroom standard clean takes 2–3 hours with 2 cleaners. Deep cleans can take 4–6 hours."
    },
    {
      question: "How often can you clean our office or home?",
      answer: "We offer flexible routines: weekly, bi-weekly, monthly, or customized one-time bookings that fit perfectly into your weekly agenda."
    },
    {
      question: "What’s included in your standard home cleaning?",
      answer: "Dusting all surfaces, vacuuming and mopping floors, sanitizing kitchen counters & sink, exterior appliance wiping, bathroom scrub and trash removal."
    },
    {
      question: "Do you offer cleaning services on weekends?",
      answer: "Yes! We operate 7 days a week with flexible morning, afternoon, and evening booking slots to fit your busy schedule."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-zinc-800 font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f2f7f3] via-[#FAF8F5] to-[#FAF8F5] pt-12 md:pt-16 pb-20 select-none">
        
        {/* Decorative Ambient Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#43934a]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#ff7f00]/10 blur-[90px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Giant Typography Stack with Centered Armchair Hero Image */}
          <div className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
            
            {/* Giant Background Text */}
            <h1 className="text-[#43934a] font-black text-[20vw] sm:text-[18vw] md:text-[16.5vw] leading-none tracking-tighter lowercase whitespace-nowrap opacity-90 select-none text-center transform -translate-y-4">
              home clean
            </h1>

            {/* Armchair Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_single_service.png"
                alt="Clean & Fresh Armchair Showcase"
                className="h-[85%] max-h-[480px] md:max-h-[540px] object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Decorative Leaf Accent Right */}
            <div className="hidden sm:block absolute right-[6%] bottom-[4%] pointer-events-none z-20">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/floating_image_08.png"
                alt="Clean Floating Element"
                className="w-28 h-28 md:w-48 md:h-48 object-contain animate-float filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEP BY STEP USER GUIDE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-12">
        
        {/* Header Block with Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-200/60 pb-8">
          <div className="space-y-2">
            <span className="font-['Caveat'] text-[#ff7f00] text-3xl font-semibold italic block">
              Step by step
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Home Cleaning Service <br /> User Guide
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#book-form"
              className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Book Online
            </a>
            <a
              href="tel:8442429464"
              className="flex items-center gap-3 font-bold text-zinc-900 hover:text-[#ff7f00] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#ff7f00] flex items-center justify-center text-white">
                <Phone className="w-5 h-5" />
              </span>
              (844) 242-9464
            </a>
          </div>
        </div>

        {/* Intro Description & Bullet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <p className="lg:col-span-6 text-zinc-600 text-lg leading-relaxed">
            Professional home cleaning services that leave your space spotless, fresh, and inviting. Customized solutions for every home, from deep cleaning to routine maintenance.
          </p>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#43934a] flex-shrink-0" />
                <span className="text-sm font-semibold text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Grid matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[#43934a] flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                {React.cloneElement(step.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= BOOK YOUR CLEAN TODAY FORM SECTION ================= */}
      <section id="book-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-zinc-100/80 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Form Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="font-['Caveat'] text-[#ff7f00] text-2xl sm:text-3xl font-semibold italic block">
                  Get in touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                  Book Your Clean Today
                </h2>
              </div>

              {formSubmitted ? (
                <div className="bg-[#43934a]/10 border border-[#43934a]/30 text-[#43934a] p-8 rounded-3xl text-center space-y-3">
                  <h3 className="text-2xl font-bold">Booking Request Sent!</h3>
                  <p className="text-sm leading-relaxed">
                    Thank you for booking with Qleen! We've received your request and will contact you shortly to confirm your schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your E-mail*"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition"
                    />
                  </div>

                  <div>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm text-zinc-600 focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition cursor-pointer"
                    >
                      <option value="Type of service">Type of service</option>
                      <option value="Home Cleaning">Home Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Move in/out Cleaning">Move in/out Cleaning</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm text-zinc-600 focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition cursor-pointer"
                    >
                      <option value="1 Bedroom">1 Bedroom</option>
                      <option value="2 Bedrooms">2 Bedrooms</option>
                      <option value="3 Bedrooms">3 Bedrooms</option>
                    </select>

                    <select
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm text-zinc-600 focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition cursor-pointer"
                    >
                      <option value="1 Bathroom">1 Bathroom</option>
                      <option value="2 Bathrooms">2 Bathrooms</option>
                      <option value="3 Bathrooms">3 Bathrooms</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Type your message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200/90 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] focus:bg-white focus:ring-2 focus:ring-[#43934a]/20 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-orange-500/30 transition duration-300 cursor-pointer text-center text-sm"
                  >
                    Send
                  </button>

                  <p className="text-xs text-zinc-400 font-medium pt-0.5">
                    <span className="text-[#ff6d00] font-bold">*</span>Required fields
                  </p>
                </form>
              )}
            </div>

            {/* Right Showcase Image Column with exact curved frame matching Demo 01 */}
            <div className="lg:col-span-7 relative flex items-stretch">
              <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-zinc-100 flex flex-col justify-end min-h-[460px] lg:min-h-full">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/single_service_image_01.jpg"
                  alt="Single Service Showcase"
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Bottom-Right Curved Corner Badge */}
                <div className="relative z-10 self-end bg-white pt-4 pl-4 pr-6 pb-6 rounded-tl-[2.2rem] shadow-2xl border-t border-l border-zinc-100 flex items-center gap-3 mt-auto">
                  {/* Icon Checkmark */}
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#ff7f00] shrink-0">
                    <svg className="w-6 h-6 text-[#ff7f00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#43934a] leading-none tracking-tight">
                      20+
                    </div>
                    <div className="text-[11px] font-bold text-zinc-700 uppercase tracking-wider mt-0.5">
                      Certified Cleaners
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS SECTION ================= */}
      <section className="relative overflow-hidden bg-white pt-20 pb-0 border-t border-zinc-100/50">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-2 mb-14">
            <span className="font-['Caveat'] text-[#ff7f00] text-3xl font-semibold italic block">
              Frequently asked questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Questions? Look here.
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto pt-1">
              Can't find an answer? Call us at <a href="tel:8442429464" className="font-bold text-zinc-900 hover:text-[#ff7f00]">844 242 9464</a> or email <a href="mailto:info@boldthemes.com" className="font-bold text-zinc-900 hover:text-[#ff7f00]">info@boldthemes.com</a>
            </p>
          </div>

          {/* Accordion Grid Layout (2-columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
            {/* Left Column (0, 1, 2) */}
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => {
                const isOpen = !!openFaq[index];
                return (
                  <div
                    key={index}
                    className="border border-zinc-100 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] rounded-3xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-zinc-950 focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#43934a] border border-zinc-100 shrink-0">
                        {isOpen ? <X className="w-4 h-4 text-[#43934a]" /> : <Plus className="w-4 h-4 text-[#43934a]" />}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-zinc-100' : 'max-h-0'
                      }`}
                    >
                      <p className="p-6 text-zinc-500 text-sm leading-relaxed bg-white">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (3, 4, 5) */}
            <div className="space-y-4">
              {faqs.slice(3, 6).map((faq, index) => {
                const idx = index + 3;
                const isOpen = !!openFaq[idx];
                return (
                  <div
                    key={idx}
                    className="border border-zinc-100 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] rounded-3xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-zinc-950 focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#43934a] border border-zinc-100 shrink-0">
                        {isOpen ? <X className="w-4 h-4 text-[#43934a]" /> : <Plus className="w-4 h-4 text-[#43934a]" />}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-zinc-100' : 'max-h-0'
                      }`}
                    >
                      <p className="p-6 text-zinc-500 text-sm leading-relaxed bg-white">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Background Leaf Banner matching demo background_03.jpg */}
        <div 
          className="w-full h-44 sm:h-56 md:h-72 mt-12 bg-bottom bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_03.jpg")`
          }}
        ></div>

      </section>

      {/* ================= PRICE LIST SECTION ================= */}
      <ServicePriceList />

    </div>
  );
}