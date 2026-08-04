import React, { useState } from 'react';
import { Phone, MapPin, Headphones, RotateCcw, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'Type of service',
    bedrooms: '1 Bedroom',
    bathrooms: '1 Bathroom',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">

      {/* 1. HERO SECTION WITH GIANT "contact us" TEXT & FLOATING BOOKING FORM */}
      <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] overflow-hidden flex flex-col justify-start min-h-[720px] sm:min-h-[820px]">

        {/* Giant Green Background Text "contact us" (Positioned behind form) */}
        <div className="absolute top-10 sm:top-14 lg:top-14 left-0 right-0 z-0 text-center select-none overflow-hidden pointer-events-none">
          <h1 className="text-[#43934a] font-extrabold text-7xl sm:text-[11rem] lg:text-[16rem] xl:text-[19rem] tracking-tight leading-none opacity-[0.85] lowercase whitespace-nowrap">
            contact us
          </h1>
        </div>

        {/* Floating Contact Form Container */}
        <div className="relative max-w-6xl mx-auto pt-12 sm:pt-16 lg:pt-20 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-0">

            {/* Left Decorative Image: Cleaning Supplies Bucket */}
            <div className="hidden lg:flex lg:col-span-3 justify-end pb-4 z-20 pointer-events-none">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_02_contact.png"
                alt="Cleaning supplies bucket"
                className="max-h-[280px] lg:max-h-[340px] w-auto object-contain object-bottom transform translate-x-2 lg:translate-x-4 translate-y-4 drop-shadow-lg"
              />
            </div>

            {/* Center Form Box */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-white/80 text-left relative z-20">

              {/* Form Title Header */}
              <div className="text-center space-y-1 mb-6 sm:mb-8">
                <span className="text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal block italic">
                  Get in touch
                </span>
                <h2 className="text-zinc-900 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Book Your Clean Today
                </h2>
              </div>

              {submitted ? (
                <div className="bg-[#43934a]/10 border border-[#43934a] text-[#43934a] p-6 rounded-2xl text-center space-y-2">
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="text-sm">Your request has been sent successfully. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition"
                    />
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your E-mail*"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition"
                    />
                  </div>

                  {/* Row 3: Type of Service */}
                  <div>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition text-zinc-700"
                    >
                      <option value="Type of service">Type of service</option>
                      <option value="Home Cleaning">Home Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Move in/out Cleaning">Move in/out Cleaning</option>
                    </select>
                  </div>

                  {/* Row 4: Bedrooms & Bathrooms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition text-zinc-700"
                    >
                      <option value="1 Bedroom">1 Bedroom</option>
                      <option value="2 Bedrooms">2 Bedrooms</option>
                      <option value="3 Bedrooms">3 Bedrooms</option>
                      <option value="4+ Bedrooms">4+ Bedrooms</option>
                    </select>
                    <select
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition text-zinc-700"
                    >
                      <option value="1 Bathroom">1 Bathroom</option>
                      <option value="2 Bathrooms">2 Bathrooms</option>
                      <option value="3 Bathrooms">3 Bathrooms</option>
                      <option value="4+ Bathrooms">4+ Bathrooms</option>
                    </select>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Type your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#43934a] transition"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 rounded-full shadow-lg transition duration-300 tracking-wide uppercase text-sm"
                  >
                    Send
                  </button>

                  <p className="text-zinc-500 text-xs italic text-left pt-1">
                    <span className="text-[#ff7f00]">*</span>Required fields
                  </p>
                </form>
              )}
            </div>

            {/* Right Decorative Image: Cleaner Woman with Mop (Tall Lady) */}
            <div className="hidden lg:flex lg:col-span-3 justify-start items-end pb-0 z-20 pointer-events-none">
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_01_contact.png"
                alt="Professional cleaner woman with mop"
                className="max-h-[620px] lg:max-h-[740px] xl:max-h-[820px] w-auto object-contain object-bottom transform -translate-x-2 lg:-translate-x-4 xl:-translate-x-6 translate-y-4 drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. GET IN TOUCH & 3 CONTACT CARDS SECTION */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal block italic">
              Get in touch
            </span>
            <h2 className="text-zinc-900 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Have questions or ready to book a cleaning?
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg pt-2 leading-relaxed">
              Whether you need a one-time deep clean or recurring service, our friendly team is just a message away.
            </p>
          </div>

          {/* 3 Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Card 1: Customer Service */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-zinc-100 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#43934a]/10 flex items-center justify-center text-[#43934a]">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold tracking-tight">
                  Customer Service
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Call or text us anytime during business hours
                </p>
              </div>

              <div className="space-y-1 border-t border-zinc-100 pt-4">
                <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  Monday to Saturday:
                </div>
                <div className="text-sm font-semibold text-zinc-700">
                  8:00 AM – 6:00 PM
                </div>
                <a href="tel:8442429464" className="text-sm font-bold text-zinc-900 hover:text-[#ff7f00] transition block pt-1">
                  (844) 242-9464
                </a>
              </div>
            </div>

            {/* Card 2: Find Us Here */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-zinc-100 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#43934a]/10 flex items-center justify-center text-[#43934a]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold tracking-tight">
                  Find Us Here
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Qleen Cleaning Services<br />
                  1234 Myrtle Avenue, Suite 2B<br />
                  Brooklyn, NY 11221
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#map"
                  className="inline-block bg-[#ff7f00] hover:bg-[#e06f00] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-sm transition uppercase tracking-wider"
                >
                  View Map
                </a>
              </div>
            </div>

            {/* Card 3: Contact online / Green Card with Glove */}
            <div className="bg-[#43934a] rounded-[2.5rem] p-8 sm:p-10 shadow-lg text-white relative overflow-hidden flex flex-col justify-between min-h-[300px]">

              {/* Content Left */}
              <div className="relative z-10 text-left space-y-4 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                  Contact us online or via social media
                </h3>
                <a href="mailto:office@qleentheme.com" className="text-emerald-100 text-sm font-semibold hover:underline block pt-1">
                  office@qleentheme.com
                </a>
              </div>

              {/* Social Icons Bottom Left */}
              <div className="relative z-10 flex items-center gap-3 pt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#ff7f00] hover:bg-[#e06f00] flex items-center justify-center text-white font-extrabold text-sm transition" aria-label="X">
                  X
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              {/* Green Glove Image Right */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-end justify-end pointer-events-none z-0">
                <img
                  src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/green_glove.png"
                  alt="Green glove"
                  className="max-h-[260px] w-auto object-contain object-bottom transform translate-y-2 pr-2"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. LOCATIONS WE SERVE MAP SECTION */}
      <section id="map" className="relative py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-10">

          <div className="text-center space-y-2">
            <span className="text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal block italic">
              Get in touch
            </span>
            <h2 className="text-zinc-900 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Locations We Serve
            </h2>
          </div>

          {/* Interactive Locations Map Box */}
          <div className="bg-[#E5E7EB] rounded-[3rem] p-6 sm:p-10 relative overflow-hidden min-h-[420px] flex items-center justify-center shadow-inner">
            {/* Orange Location Card Highlight Overlay */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-[#ff7f00] text-white p-6 sm:p-8 rounded-[2rem] max-w-sm text-left shadow-xl z-10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Brooklyn, NY*
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                1234 Myrtle Avenue, Suite 2B<br />
                Brooklyn, NY 11221
              </p>
              <div className="text-sm font-bold pt-1">
                (718) 555-0247
              </div>
              <p className="text-xs text-orange-100 italic pt-1">
                *Serving all five boroughs and nearby areas.
              </p>
            </div>

            {/* Embedded Google Map iframe fallback */}
            <iframe
              title="Brooklyn Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.214!2d-73.935!3d40.697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzE5LjIiTiA3M8KwNTYnMDYuMCJX!5e0!3m2!1sen!2sus!4v1600000000000"
              className="absolute inset-0 w-full h-full border-0 rounded-[3rem]"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 4. MORE LOCATIONS BY QLEEN GREEN TILES SECTION */}
      <section className="relative px-4 sm:px-8 lg:px-12 py-12 bg-[#FAF8F5]">
        <div className="relative max-w-7xl mx-auto rounded-[3.5rem] bg-[#43934a] py-16 sm:py-20 px-6 sm:px-12 text-white shadow-2xl overflow-hidden">

          {/* Tiled Grid Background overlay effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          {/* Floating Water Bubble Overlays */}
          <img
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_04.png"
            alt="Bubble"
            className="absolute top-8 left-8 w-24 h-auto opacity-75 pointer-events-none animate-bounce"
            style={{ animationDuration: '6s' }}
          />
          <img
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_05.png"
            alt="Bubble"
            className="absolute bottom-6 right-6 w-20 h-auto opacity-70 pointer-events-none"
          />

          <div className="relative z-10 space-y-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              More Locations by Qleen
            </h2>

            {/* 4 White Location Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                {
                  city: "Queens, NY",
                  address: "89-14 Queens Boulevard, Suite 205 Elmhurst, NY 11373",
                  phone: "(718) 555-0247"
                },
                {
                  city: "The Bronx, NY",
                  address: "301 East 138th Street Bronx, NY 10454",
                  phone: "(347) 555-0362"
                },
                {
                  city: "Staten Island, NY",
                  address: "240 Richmond Valley Road Staten Island, NY 10309",
                  phone: "(917) 555-0425"
                },
                {
                  city: "Jersey City, NJ",
                  address: "123 Newark Avenue, Suite 4A Jersey City, NJ 07302",
                  phone: "(201) 555-0563"
                }
              ].map((loc, idx) => (
                <div key={idx} className="bg-white text-zinc-900 rounded-[2rem] p-6 shadow-md border border-white/90 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff7f00]/10 flex items-center justify-center text-[#ff7f00]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                      {loc.city}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#43934a] pt-2 border-t border-zinc-100">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
