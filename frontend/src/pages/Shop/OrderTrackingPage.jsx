import React, { useState } from 'react';
import { Search, PackageCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setTrackedOrder(null);

    if (!orderId.trim()) {
      setErrorMsg('Please enter a valid Order ID.');
      return;
    }
    if (!billingEmail.trim()) {
      setErrorMsg('Please enter your billing email.');
      return;
    }

    setIsSearching(true);

    // Simulate order tracking search logic
    setTimeout(() => {
      setIsSearching(false);
      const cleanedId = orderId.trim().toUpperCase();

      if (cleanedId === 'QL-8921' || cleanedId === '8921') {
        setTrackedOrder({
          id: 'QL-8921',
          date: 'August 14, 2026',
          status: 'Completed',
          step: 4,
          email: billingEmail,
          items: [
            { name: 'Cleaning Fabric Set', qty: 2, price: '$24.00' },
            { name: 'Eco All-Purpose Spray', qty: 1, price: '$5.00' }
          ],
          total: '$29.00',
          shippingAddress: '2590 Walnut St, Denver, CO 80205'
        });
      } else if (cleanedId === 'QL-7740' || cleanedId === '7740') {
        setTrackedOrder({
          id: 'QL-7740',
          date: 'August 18, 2026',
          status: 'In Transit',
          step: 3,
          email: billingEmail,
          items: [
            { name: 'Organic Glass Cleaner', qty: 1, price: '$15.00' },
            { name: 'Natural Scrub Sponge', qty: 2, price: '$30.00' }
          ],
          total: '$45.00',
          shippingAddress: '123 Main St, San Jose, CA 95112'
        });
      } else {
        // Fallback demo order status for any entered ID
        setTrackedOrder({
          id: cleanedId.startsWith('QL-') ? cleanedId : `QL-${cleanedId}`,
          date: 'Recent Order',
          status: 'Processing',
          step: 2,
          email: billingEmail,
          items: [
            { name: 'Qleen Eco Cleaning Supplies', qty: 1, price: '$35.00' }
          ],
          total: '$35.00',
          shippingAddress: 'Standard Delivery Address'
        });
      }
    }, 600);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-zinc-900 font-sans pb-24">
      
      {/* =========================================================================
          1. HERO HEADER SECTION ("order tracking")
          - Warm beige backdrop (#FAF8F5)
          - Translucent/green huge background text: "order tracking"
          - Sparkle graphic float left
          - Shop image cutout centered
         ========================================================================= */}
      <section className="relative w-full bg-[#FAF8F5] pt-14 sm:pt-20 pb-4 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[220px] sm:min-h-[300px] lg:min-h-[340px]">
          
          {/* Sparkle Floating Asset (Left) */}
          <div className="absolute left-[8%] sm:left-[14%] top-[12%] z-10 w-20 sm:w-28 lg:w-36 pointer-events-none hidden sm:block">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/sparkle.png"
              alt="Sparkle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Huge Green "order tracking" Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-extrabold tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap lowercase">
              order tracking
            </h1>
          </div>

          {/* Center Shop Image Cutout */}
          <div className="relative z-10 flex justify-center items-end mt-8 sm:mt-12">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/shop_image.png"
              alt="Qleen Order Tracking Cutout"
              className="max-h-[160px] sm:max-h-[220px] lg:max-h-[260px] w-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN HARD-ROUNDED WHITE CONTAINER
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-100/80 p-6 sm:p-12 lg:p-16 text-left space-y-8">

          {/* Description Text */}
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
          </p>

          {/* Error Alert if any */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Woocommerce Order Tracking Form */}
          <form onSubmit={handleTrackSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Order ID Input */}
              <div>
                <label htmlFor="orderid" className="block text-sm font-bold text-zinc-800 mb-2">
                  Order ID <span className="text-[#ff7f00]">*</span>
                </label>
                <input
                  type="text"
                  id="orderid"
                  name="orderid"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Found in your order confirmation email."
                  className="w-full px-5 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-sm font-medium focus:outline-none focus:border-[#ff7f00] focus:ring-1 focus:ring-[#ff7f00] transition"
                />
              </div>

              {/* Billing Email Input */}
              <div>
                <label htmlFor="order_email" className="block text-sm font-bold text-zinc-800 mb-2">
                  Billing email <span className="text-[#ff7f00]">*</span>
                </label>
                <input
                  type="email"
                  id="order_email"
                  name="order_email"
                  required
                  value={billingEmail}
                  onChange={(e) => setBillingEmail(e.target.value)}
                  placeholder="Email you used during checkout."
                  className="w-full px-5 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-sm font-medium focus:outline-none focus:border-[#ff7f00] focus:ring-1 focus:ring-[#ff7f00] transition"
                />
              </div>

            </div>

            {/* Track Button */}
            <div>
              <button
                type="submit"
                disabled={isSearching}
                className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 px-10 rounded-full text-sm shadow-md shadow-[#ff7f00]/20 transition cursor-pointer disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Track'}
              </button>
            </div>
          </form>

          {/* SEARCH RESULTS DISPLAY */}
          {trackedOrder && (
            <div className="mt-10 pt-8 border-t border-zinc-100 space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#FAF8F5] p-6 rounded-2xl border border-zinc-200/60">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Order Details</span>
                  <h3 className="text-xl font-extrabold text-zinc-900 mt-0.5">{trackedOrder.id}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{trackedOrder.date} • {trackedOrder.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-600">Status:</span>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    trackedOrder.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {trackedOrder.status}
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center pt-2">
                {['Order Placed', 'Processing', 'In Transit', 'Delivered'].map((stepName, idx) => {
                  const stepNum = idx + 1;
                  const isDone = stepNum <= trackedOrder.step;
                  return (
                    <div key={stepName} className="space-y-2">
                      <div className={`h-2 rounded-full transition-colors ${isDone ? 'bg-[#ff7f00]' : 'bg-zinc-200'}`} />
                      <span className={`text-xs font-bold block ${isDone ? 'text-zinc-900' : 'text-zinc-400'}`}>
                        {stepName}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Items List Summary */}
              <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-3">
                <h4 className="font-bold text-zinc-900 text-sm border-b border-zinc-100 pb-2">Order Items</h4>
                {trackedOrder.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm py-1">
                    <span className="text-zinc-700 font-medium">{item.name} × {item.qty}</span>
                    <span className="font-bold text-zinc-900">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-zinc-100 pt-3 text-base font-extrabold text-zinc-900">
                  <span>Total Amount</span>
                  <span className="text-[#ff7f00]">{trackedOrder.total}</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
