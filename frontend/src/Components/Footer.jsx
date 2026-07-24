import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-[#1f2937] pt-8 pb-6 px-4 sm:px-8 lg:px-12 font-sans border-t border-gray-100">
      {/* Full-width container without large side margins */}
      <div className="w-full">
        
        {/* ROW 1: Logo (Left) & Newsletter Form (Right) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-block">
              <img 
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/footer_logo_01.png" 
                alt="Qleen Logo" 
                className="h-[52px] sm:h-[58px] w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-1 text-2xl font-bold text-[#3b873e]">
                <span>Qleen</span>
                <span className="text-[#ff7a00]">.</span>
              </div>
            </a>
          </div>

          {/* Subscribe Form Container */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
            <form 
              onSubmit={handleSubmit}
              className="w-full sm:w-[440px] bg-[#f7f5f2] p-1.5 pl-5 rounded-full flex items-center justify-between border border-gray-200/60 shadow-sm"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm w-full pr-3"
              />
              <button
                type="submit"
                className="bg-[#ff7a00] hover:bg-[#e06b00] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0 cursor-pointer"
              >
                Sign Up
              </button>
            </form>
            <p className="text-[12px] text-gray-500 mt-2 max-w-sm text-left lg:text-right leading-tight">
              Receive exclusive cleaning and home maintenance promotions, and updates straight to your inbox.
            </p>
          </div>
        </div>

        {/* DIVIDER 1 */}
        <hr className="border-t border-gray-200/70 my-5" />

        {/* ROW 2: About Column + Services, Info, Contact Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-2">
          
          {/* Left Side: About Text & Social Icons (5 cols out of 12) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-5">
                At Qleen, we treat every space like royalty. Whether it’s your home, office, or move-in clean, we tailor our services to fit your lifestyle and expectations.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3.5">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/boldthemes/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#3b873e] hover:bg-[#3b873e] hover:text-white hover:border-[#3b873e] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/bold_themes/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#3b873e] hover:bg-[#3b873e] hover:text-white hover:border-[#3b873e] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a 
                  href="https://twitter.com/bold_themes" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#3b873e] hover:bg-[#3b873e] hover:text-white hover:border-[#3b873e] transition-all duration-300"
                  aria-label="X"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#3b873e] hover:bg-[#3b873e] hover:text-white hover:border-[#3b873e] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Services, Info, Contact Columns (7 cols out of 12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Column 1: Services */}
            <div>
              <h4 className="text-base font-bold text-[#1f2937] mb-3 tracking-tight">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#recurring" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Recurring Cleanings
                  </a>
                </li>
                <li>
                  <a href="#office" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Office Cleanings
                  </a>
                </li>
                <li>
                  <a href="#deep" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Deep Cleaning
                  </a>
                </li>
                <li>
                  <a href="#movein" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Move in / out cleanings
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Info */}
            <div>
              <h4 className="text-base font-bold text-[#1f2937] mb-3 tracking-tight">Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#privacy" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-gray-600 hover:text-[#3b873e] transition-colors duration-200 block font-normal">
                    Cookies Settings
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-base font-bold text-[#1f2937] mb-3 tracking-tight">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5 text-gray-600 hover:text-[#3b873e] transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-[#3b873e] flex-shrink-0" />
                  <a href="tel:8442429464" className="hover:underline">844 242 9464</a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-600 hover:text-[#3b873e] transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#3b873e] flex-shrink-0" />
                  <a href="mailto:contact@qleen.com" className="hover:underline">contact@qleen.com</a>
                </li>
                <li className="flex items-start gap-2.5 text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-[#3b873e] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">2590 Walnut St Denver, CO 80205</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* DIVIDER 2 */}
        <hr className="border-t border-gray-200/70 my-5" />

        {/* ROW 3: Bottom Copyright & Horizontal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3 pt-1">
          <p>© 2025 BoldThemes. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-[#3b873e] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#3b873e] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-[#3b873e] transition-colors duration-200">
              Cookies Settings
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
