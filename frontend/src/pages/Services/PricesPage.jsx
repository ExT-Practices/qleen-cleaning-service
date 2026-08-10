import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import ServicePriceList from '../../Components/Service-price-list';
import QuickEstimate from '../../Components/QuickEstimate';
import FAQSection from '../../Components/FAQSection';
import ServicePackages from '../../Components/ServicePackages';
import JoinTeam from '../../Components/JoinTeam';

export default function PricesPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">
      {/* ================= HERO HEADER SECTION ================= */}
      <section className="relative w-full min-h-[680px] sm:min-h-[640px] lg:min-h-[800px] flex items-center justify-start overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-20 z-10 mt-[70px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_prices.jpg")',
          }}
        />

        {/* Soft Dark Overlay matching WP theme default-headline-overlay-dark-20 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-left space-y-3">
            {/* Cursive Handwritten Superheadline */}
            <span className="text-[#ff7f00] text-3xl sm:text-4xl lg:text-5xl font-['Caveat'] tracking-wide font-normal block drop-shadow-md">
              Packages &amp; Prices
            </span>

            {/* H1 Main Headline */}
            <h1 className="text-white text-4xl sm:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.15] drop-shadow-lg">
              Cleaning Services <br className="hidden sm:inline" /> Packages &amp; Pricing
            </h1>
          </div>
        </div>
      </section>

      {/* ================= SERVICE PACKAGES SECTION (OVERLAPPING / Hard Rounded) ================= */}
      <div className="-mt-16 sm:-mt-24 relative z-20">
        <ServicePackages onSelectPackage={() => {
          if (setCurrentPage) setCurrentPage('contact');
          window.location.hash = 'contact';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
      </div>

      {/* ================= SERVICE PRICE LIST SECTION ================= */}
      <ServicePriceList />

      {/* ================= QUICK ESTIMATE SECTION ================= */}
      <QuickEstimate />

      {/* ================= FAQ SECTION ================= */}
      <FAQSection />

      {/* ================= JOIN TEAM BANNER ================= */}
      <JoinTeam />
    </div>
  );
}
