import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState(0); // Index 0 open by default on left column
  const [openRight, setOpenRight] = useState(2); // Index 2 open by default on right column

  const leftFaqs = [
    {
      title: "What services do you offer?",
      content: "All you have to do is click on the Book Now button, enter your relevant details (name, address, phone number, your home size, and any extras you require). We’ll reply on the same business day confirming the appointment and arrival time. You can also call us for live help or chat with us."
    },
    {
      title: "What services don’t you offer?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet mollis sem, tincidunt tristique nisi vulputate eu. In hac habitasse platea dictumst. Cras imperdiet vitae odio dictum consectetur. Fusce pharetra erat id sapien pulvinar porttitor. Integer sit amet libero nisi."
    },
    {
      title: "How long will it take to clean my house?",
      content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
    }
  ];

  const rightFaqs = [
    {
      title: "How often can you clean our office?",
      content: "Duis dictum consequat efficitur. Praesent hendrerit consectetur enim, eu gravida mi pulvinar et. In hac habitasse platea dictumst. Suspendisse potenti. Etiam at nibh ornare, dapibus diam sed, ornare dui. Morbi consequat sed dolor et interdum."
    },
    {
      title: "What’s included in your office cleaning service?",
      content: "Cras pulvinar feugiat justo sed imperdiet. Nullam et laoreet dolor. Proin nec ex ac augue condimentum dapibus ac vel odio. Proin laoreet venenatis eros, ut venenatis sem venenatis sed. Donec sit amet leo id velit tempor efficitur sed a libero."
    },
    {
      title: "Do you clean after hours or on weekends?",
      content: "Nam dapibus turpis tortor, id iaculis est elementum et. Phasellus efficitur non lacus in placerat. Suspendisse turpis libero, finibus vitae imperdiet eget, mollis sit amet erat. Morbi id enim elementum, fermentum quam at, aliquam leo. Curabitur tincidunt quis lorem ac pellentesque."
    }
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Decorative background leaves at bottom */}
      <div 
        className="absolute bottom-0 inset-x-0 h-44 sm:h-60 bg-cover bg-bottom bg-no-repeat pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_03.jpg')`
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-2 max-w-3xl mx-auto relative">
          <span className="text-[#ff7f00] font-['Caveat'] text-2xl sm:text-3xl font-normal block">
            Frequently asked questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Questions? Look here.
          </h2>
          <p className="text-zinc-500 font-medium text-sm sm:text-base pt-1">
            Can't find an answer? Call us at <a href="tel:8442429464" className="font-bold text-zinc-800 hover:text-[#ff7f00] underline">844 242 9464</a> or email <a href="mailto:info@boldthemes.com" className="font-bold text-zinc-800 hover:text-[#ff7f00] underline">info@boldthemes.com</a>
          </p>

          {/* Floating Leaf graphic element */}
          <div className="hidden lg:block absolute -right-12 bottom-0 pointer-events-none">
            <img 
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_leaf_01.png"
              alt="Floating Leaf"
              className="w-24 h-auto animate-bounce duration-1000"
            />
          </div>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column Accordion */}
          <div className="space-y-4">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#f5f2eb]/70 hover:bg-[#f5f2eb] rounded-[1.8rem] p-6 sm:p-7 transition-all duration-300 border border-zinc-200/50 text-left"
                >
                  <button
                    onClick={() => setOpenLeft(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 cursor-pointer text-left focus:outline-none"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                      {faq.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#43934a] shrink-0 shadow-xs">
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-zinc-200/60 text-zinc-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      {faq.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column Accordion */}
          <div className="space-y-4">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#f5f2eb]/70 hover:bg-[#f5f2eb] rounded-[1.8rem] p-6 sm:p-7 transition-all duration-300 border border-zinc-200/50 text-left"
                >
                  <button
                    onClick={() => setOpenRight(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 cursor-pointer text-left focus:outline-none"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                      {faq.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#43934a] shrink-0 shadow-xs">
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-zinc-200/60 text-zinc-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      {faq.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
