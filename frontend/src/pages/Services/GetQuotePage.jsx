import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import ServicePriceList from '../../Components/Service-price-list';
import FAQSection from '../../Components/FAQSection';

export default function GetQuotePage({ setCurrentPage }) {
  const [submitted, setSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Home Cleaning',
    squareFeet: '1000-1500 sq ft',
    frequency: 'Bi-Weekly',
    comments: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Home Cleaning',
        squareFeet: '1000-1500 sq ft',
        frequency: 'Bi-Weekly',
        comments: ''
      });
    }, 4000);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-start overflow-hidden pt-28 sm:pt-36 pb-16 px-6 sm:px-12 lg:px-20 z-10 mt-[70px] bg-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_services.jpg")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-[#ff7f00] text-3xl sm:text-4xl font-['Caveat'] tracking-wide font-normal block">
              Free Estimate
            </span>
            <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              Get A Instant Cleaning Quote
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-medium">
              Tell us about your cleaning needs and we'll craft a customized estimate within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form & Details */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-zinc-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#ff7f00] font-['Caveat'] text-2xl font-bold block">
                  Quick Quote Request
                </span>
                <h2 className="text-3xl font-extrabold text-zinc-900">
                  Custom Cleaning Estimate
                </h2>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-3xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold">Quote Request Received!</h3>
                  <p className="text-sm">
                    Thank you! Our team is calculating your estimate and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={quoteData.name}
                        onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(844) 242-9464"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={quoteData.email}
                      onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Service Type</label>
                      <select
                        value={quoteData.serviceType}
                        onChange={(e) => setQuoteData({ ...quoteData, serviceType: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 text-zinc-800 focus:outline-none focus:border-[#ff7f00]"
                      >
                        <option value="Home Cleaning">Home Cleaning</option>
                        <option value="Office Cleaning">Office Cleaning</option>
                        <option value="Move In/Out Clean">Move In/Out Clean</option>
                        <option value="Deep Clean">Deep Clean</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Square Feet</label>
                      <select
                        value={quoteData.squareFeet}
                        onChange={(e) => setQuoteData({ ...quoteData, squareFeet: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 text-zinc-800 focus:outline-none focus:border-[#ff7f00]"
                      >
                        <option value="Under 1000 sq ft">Under 1000 sq ft</option>
                        <option value="1000-1500 sq ft">1000-1500 sq ft</option>
                        <option value="1500-2500 sq ft">1500-2500 sq ft</option>
                        <option value="2500+ sq ft">2500+ sq ft</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Frequency</label>
                      <select
                        value={quoteData.frequency}
                        onChange={(e) => setQuoteData({ ...quoteData, frequency: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 text-zinc-800 focus:outline-none focus:border-[#ff7f00]"
                      >
                        <option value="One Time">One Time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Additional Notes</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us any specific requirements or details..."
                      value={quoteData.comments}
                      onChange={(e) => setQuoteData({ ...quoteData, comments: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-zinc-200 text-sm bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white py-4 rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Calculate &amp; Request Quote</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-8 rounded-3xl space-y-8 flex flex-col justify-between border border-zinc-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900">Why Choose Qleen?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">100% Satisfaction Guarantee</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">If you're not happy, we re-clean for free within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">Transparent Flat-Rate Pricing</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">No hidden charges or unexpected upsells on arrival.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#43934a]/15 text-[#43934a] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">Vetted &amp; Insured Cleaners</h4>
                      <p className="text-xs text-zinc-600 mt-0.5">Every team member passes rigorous background checks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200/80 space-y-3">
                <div className="flex items-center gap-3 text-zinc-800">
                  <Phone className="w-5 h-5 text-[#ff7f00]" />
                  <span className="font-bold text-sm">(844) 242-9464</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-800">
                  <Mail className="w-5 h-5 text-[#ff7f00]" />
                  <span className="font-medium text-sm">support@qleen.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicePriceList />
      <FAQSection />
    </div>
  );
}
