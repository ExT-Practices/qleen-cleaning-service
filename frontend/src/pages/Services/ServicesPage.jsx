import React, { useState } from 'react';
import {
  ArrowRight,
  X,
  Send,
  CheckCircle2
} from 'lucide-react';
import CleaningServicesStack from '../../Components/Plans';
import HowItWorks from '../../Components/Howworks';
import Cards from '../../Components/Cards';
import ServicePriceList from '../../Components/Service-price-list';
import FAQSection from '../../Components/FAQSection';
import TestimonialsSection from '../../Components/TestimonialsSection';
import ServicePackages from '../../Components/ServicePackages';
import JoinTeam from '../../Components/JoinTeam';

export default function ServicesPage({ setCurrentPage }) {
  // Interactive Dot Hotspot Tooltip state
  const [showTooltip, setShowTooltip] = useState(false);

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Standard Clean');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    notes: '',
    serviceType: 'Home Cleaning ($39)'
  });

  const handleOpenBooking = (serviceName = 'Standard Clean') => {
    setSelectedService(serviceName);
    setBookingData((prev) => ({
      ...prev,
      serviceType: serviceName
    }));
    setBookingSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setIsModalOpen(false);
        setBookingSubmitted(false);
      }, 3000);
    }, 400);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">

      {/* =========================================================================
          1. FIRST SECTION: HERO IMAGE SECTION
          - Image: hero_services.jpg
          - Subheadline: Services (Caveat font)
          - Main Headline: What Can We Clean For You Today?
          - Interactive Callout Pin: Standard clean from $29
         ========================================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] h-[80vh] flex items-center justify-start overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-20 z-10 mt-[70px]">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_services.jpg")',
          }}
        />

        {/* Soft Dark Left-Gradient Overlay matching theme design */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-left space-y-4">

            {/* Cursive Handwritten Superheadline (White Caveat font) */}
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-['Caveat'] tracking-wide font-normal block drop-shadow-md">
              Services
            </span>

            {/* H1 Main Headline */}
            <h1 className="text-white text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.1] drop-shadow-lg">
              What Can We Clean <br className="hidden sm:inline" />
              For You Today?
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-zinc-200 text-base sm:text-lg max-w-xl font-medium leading-relaxed pt-1">
              Explore our full range of professional home, office, and deep cleaning services tailored to keep your space sparkling clean.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => handleOpenBooking('Custom Service Request')}
                className="bg-[#5200c9] hover:bg-[#4100a3] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-[#5200c9]/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE CALLOUT DOT PIN / TOOLTIP
            `Standard clean from $29`
           ========================================================================= */}
        <div className="absolute right-[10%] sm:right-[16%] bottom-[20%] sm:bottom-[26%] z-30 flex flex-col items-center group">

          {/* Pointer cursive label tag */}
          <div className="flex items-center gap-2 mb-2 transition transform group-hover:scale-105">
            <span className="font-['Caveat'] text-white text-2xl sm:text-3xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] px-3.5 py-1 bg-black/35 backdrop-blur-sm rounded-full border border-white/20">
              Standard clean from $29
            </span>
          </div>

          {/* Glowing Purple Interactive Dot Pin */}
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            onMouseEnter={() => setShowTooltip(true)}
            className="relative focus:outline-none cursor-pointer p-2"
            title="Click to view Standard Clean offer"
          >
            {/* Pulsing outer ring */}
            <span className="absolute inset-0 rounded-full bg-[#5200c9] opacity-75 animate-ping" />
            {/* Inner glowing dot */}
            <span className="relative block w-5 h-5 rounded-full bg-[#5200c9] border-2 border-white shadow-[0_0_15px_#5200c9]" />
          </button>

          {/* Interactive Popover Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-12 right-0 w-72 bg-white rounded-2xl p-5 shadow-2xl border border-zinc-100 z-50 text-left animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <span className="text-[#5200c9] font-bold text-xs uppercase tracking-wider">Special Offer</span>
                <span className="text-zinc-900 font-extrabold text-lg">$29</span>
              </div>
              <h4 className="text-zinc-900 font-bold text-base mt-2">Standard Home Clean</h4>
              <p className="text-zinc-600 text-xs mt-1 leading-relaxed">
                Includes dusting, floor mopping, kitchen surface wipe down, and bathroom refresh.
              </p>
              <button
                onClick={() => {
                  setShowTooltip(false);
                  handleOpenBooking('Standard Clean ($29)');
                }}
                className="w-full mt-3 bg-[#5200c9] hover:bg-[#4100a3] text-white py-2 px-4 rounded-xl font-bold text-xs tracking-wide transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Clean ($29)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </section>

      {/* =========================================================================
          2. SERVICE PACKAGES SECTION
         ========================================================================= */}
      <ServicePackages onSelectPackage={handleOpenBooking} />

      {/* =========================================================================
          3. DIRECT COMPONENT IMPORT OF PLANS (CleaningServicesStack)
         ========================================================================= */}
      <CleaningServicesStack />

      {/* =========================================================================
          4. DIRECT COMPONENT IMPORT OF HOW IT WORKS
         ========================================================================= */}
      <HowItWorks />

      {/* =========================================================================
          5. DIRECT COMPONENT IMPORTS OF OTHER FEATURE SECTIONS
         ========================================================================= */}
      <Cards />
      <ServicePriceList />
      <FAQSection />
      <TestimonialsSection />
      <JoinTeam />

      {/* =========================================================================
          BOOKING REQUEST MODAL
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-zinc-100 text-left">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-2 rounded-full hover:bg-zinc-100 transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {bookingSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Service Request Received!</h3>
                <p className="text-zinc-600 text-sm max-w-sm mx-auto">
                  Thank you, <strong>{bookingData.name}</strong>. Our team will contact you shortly at <strong>{bookingData.phone}</strong> to confirm your appointment.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#43934a] text-white font-bold py-3 px-8 rounded-full text-sm cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[#ff7f00] font-bold text-xs uppercase tracking-wider">Book Online</span>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Request {selectedService}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    Fill out the quick form below and our representative will reach out right away.
                  </p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1">Selected Service</label>
                  <select
                    value={bookingData.serviceType}
                    onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                    className="w-full p-3 rounded-xl border border-zinc-200 text-sm font-semibold bg-zinc-50 text-zinc-800 focus:outline-none focus:border-[#ff7f00]"
                  >
                    <option value="Home Cleaning ($39)">Home Cleaning ($39)</option>
                    <option value="Office Cleaning ($49)">Office Cleaning ($49)</option>
                    <option value="Moving In or Out Cleaning ($59)">Moving In or Out Cleaning ($59)</option>
                    <option value="Standard Clean ($29)">Standard Clean ($29)</option>
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1">Special Notes / Address</label>
                  <textarea
                    rows="2"
                    placeholder="Enter any specific requirements or address details..."
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    className="w-full p-3 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Service Booking Request</span>
                </button>
              </form>
            )}




          </div>
        </div>
      )}

    </div>
  );
}
