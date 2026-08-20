import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATA } from './shopData';

export default function CheckoutPage({ cartItems: initialCartItems = [] }) {
  // Mock cart items if empty for preview/demo
  const [cartItems, setCartItems] = useState(
    initialCartItems.length > 0
      ? initialCartItems
      : [
        { product: PRODUCTS_DATA[3], quantity: 2 }, // Cleaning Fabric Set ($12 x 2 = $24)
        { product: PRODUCTS_DATA[0], quantity: 1 }  // Cleaning Fabric ($5 x 1 = $5)
      ]
  );

  // Form Fields State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'United States (US)',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: 'California',
    zipCode: '',
    phone: '',
    email: '',
    shipToDifferent: false,
    orderNotes: '',
    couponCode: '',
    paymentMethod: 'bank_transfer'
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Totals Calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = appliedCoupon ? (subtotal * appliedCoupon.percentage) / 100 : 0;
  const grandTotal = Math.max(0, subtotal - discount);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();
    if (code === 'QLEEN10') {
      setAppliedCoupon({ code: 'QLEEN10', percentage: 10 });
    } else if (code === 'ECO35' || code === 'SAVE35') {
      setAppliedCoupon({ code, percentage: 35 });
    } else {
      setCouponError('Invalid coupon code. Try "QLEEN10" or "ECO35"');
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans pb-20">

      {/* =========================================================================
          1. HERO HEADER SECTION ("checkout")
         ========================================================================= */}
      <section className="relative w-full bg-white pt-16 pb-4 px-4 overflow-hidden mt-[60px]">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[140px] sm:min-h-[180px] lg:min-h-[220px]">

          {/* Giant Green "checkout" Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-black tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap">
              checkout
            </h1>
          </div>

          {/* Center Shop Hero Cutout Image (Lemons, Sprays, Brush) */}
          <div className="relative z-10 flex justify-center items-end mt-4 sm:mt-6">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/shop_image.png"
              alt="Qleen Checkout Header"
              className="max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] w-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN CHECKOUT FORM & BILLING DETAILS SECTION
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-10 text-left">

        {isSubmitted ? (
          /* ORDER SUCCESS STATE */
          <div className="bg-[#FAF8F5] rounded-3xl p-10 sm:p-16 border border-zinc-100 text-center max-w-2xl mx-auto space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-zinc-900">Thank You! Your Order is Received</h2>
              <p className="text-sm text-zinc-600">
                Order status notification sent to <strong>{formData.email || 'your email'}</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="text-zinc-500 font-semibold">Payment Method:</span>
                <span className="font-bold text-zinc-800 uppercase">{formData.paymentMethod.replace('_', ' ')}</span>
              </div>
              <div classNfame="flex justify-between border-b border-zinc-100 pb-2">
                <span className="text-zinc-500 font-semibold">Shipping Address:</span>
                <span className="font-bold text-zinc-800 text-right">{formData.streetAddress1 || '123 Main St'}, {formData.city || 'California'}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-500 font-semibold">Total Paid:</span>
                <span className="font-extrabold text-lg text-[#ff7f00]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                window.location.hash = "shop";
              }}
              className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 px-8 rounded-full text-sm shadow-md transition cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="space-y-8">

            {/* Top Coupon Banner */}
            <div className="bg-[#FAF8F5] border border-zinc-200/70 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-zinc-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#ff7f00] shrink-0" />
                <span>
                  Have a coupon?{' '}
                  <button
                    type="button"
                    onClick={() => setShowCouponInput(!showCouponInput)}
                    className="text-zinc-900 font-bold underline hover:text-[#ff7f00] transition cursor-pointer"
                  >
                    Click here to enter your code
                  </button>
                </span>
              </div>

              {showCouponInput && (
                <div className="w-full sm:w-auto flex items-center gap-2 mt-2 sm:mt-0">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="px-4 py-2 rounded-full border border-zinc-300 text-xs bg-white focus:outline-none focus:border-[#ff7f00] w-full sm:w-48"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="bg-[#ff7f00] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#e06f00] transition cursor-pointer whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            {couponError && (
              <p className="text-xs font-bold text-red-500 pl-2">{couponError}</p>
            )}
            {appliedCoupon && (
              <p className="text-xs font-bold text-emerald-600 pl-2">
                Coupon "{appliedCoupon.code}" applied! ({appliedCoupon.percentage}% off)
              </p>
            )}

            {/* Grid Layout: Left Billing Details & Right Shipping Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* LEFT COLUMN: Billing Details Form (lg:col-span-6) */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Billing details</h2>

                <div className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        First name <span className="text-[#ff7f00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Last name <span className="text-[#ff7f00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                      />
                    </div>
                  </div>

                  {/* Company Name (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                    />
                  </div>

                  {/* Country / Region */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Country / Region <span className="text-[#ff7f00]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full appearance-none px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition pr-10 cursor-pointer text-zinc-800"
                      >
                        <option value="United States (US)">United States (US)</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Street Address */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Street address <span className="text-[#ff7f00]">*</span>
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="streetAddress1"
                        required
                        placeholder="House number and street name"
                        value={formData.streetAddress1}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                      />
                      <input
                        type="text"
                        name="streetAddress2"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        value={formData.streetAddress2}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                      />
                    </div>
                  </div>

                  {/* Town / City */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Town / City <span className="text-[#ff7f00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      State <span className="text-[#ff7f00]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full appearance-none px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition pr-10 cursor-pointer text-zinc-800"
                      >
                        <option value="California">California</option>
                        <option value="New York">New York</option>
                        <option value="Texas">Texas</option>
                        <option value="Florida">Florida</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      ZIP Code <span className="text-[#ff7f00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Email address <span className="text-[#ff7f00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-full border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition"
                    />
                  </div>

                </div>
              </div>

              {/* RIGHT COLUMN: Ship to different address & Order Notes (lg:col-span-6) */}
              <div className="lg:col-span-6 space-y-6">

                {/* Ship to a different address checkbox headline */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="shipToDifferent"
                    name="shipToDifferent"
                    checked={formData.shipToDifferent}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded text-[#ff7f00] focus:ring-[#ff7f00] border-zinc-300 cursor-pointer"
                  />
                  <label htmlFor="shipToDifferent" className="text-2xl sm:text-3xl font-bold text-zinc-900 cursor-pointer select-none">
                    Ship to a different address?
                  </label>
                </div>

                {/* Additional Order Notes Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Order notes (optional)
                  </label>
                  <textarea
                    name="orderNotes"
                    rows={6}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    className="w-full p-5 rounded-3xl border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#ff7f00] transition resize-none"
                  />
                </div>

              </div>

            </div>

            {/* =========================================================================
                3. YOUR ORDER & PAYMENT SUMMARY SECTION
               ========================================================================= */}
            <div className="pt-12 border-t border-zinc-200 space-y-6 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Your order</h2>

              {/* Order Summary Table */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-zinc-100 space-y-4">

                <div className="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-zinc-500 pb-3 border-b border-zinc-200">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {/* Items List */}
                <div className="divide-y divide-zinc-200/60">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="py-3 flex items-center justify-between text-sm">
                      <span className="text-zinc-800 font-medium">
                        {item.product.title} <strong className="text-zinc-900">× {item.quantity}</strong>
                      </span>
                      <span className="font-bold text-zinc-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-200 text-sm font-bold">
                  <span className="text-zinc-700">Subtotal</span>
                  <span className="text-zinc-900">${subtotal.toFixed(2)}</span>
                </div>

                {/* Discount if any */}
                {appliedCoupon && (
                  <div className="flex items-center justify-between text-sm font-bold text-emerald-600">
                    <span>Discount ({appliedCoupon.percentage}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                {/* Total */}
                <div className="flex items-center justify-between pt-3 border-t-2 border-zinc-300 text-base sm:text-lg font-extrabold">
                  <span className="text-zinc-900">Total</span>
                  <span className="text-[#ff7f00] text-xl">${grandTotal.toFixed(2)}</span>
                </div>

              </div>

              {/* Payment Methods */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-zinc-100 space-y-4 text-sm text-zinc-700">
                <div className="space-y-3">

                  <label className="flex items-center gap-3 font-bold text-zinc-900 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={formData.paymentMethod === 'bank_transfer'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff7f00] focus:ring-[#ff7f00]"
                    />
                    <span>Direct bank transfer</span>
                  </label>

                  {formData.paymentMethod === 'bank_transfer' && (
                    <p className="text-xs text-zinc-500 pl-7 leading-relaxed">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    </p>
                  )}

                  <label className="flex items-center gap-3 font-bold text-zinc-900 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff7f00] focus:ring-[#ff7f00]"
                    />
                    <span>Cash on delivery</span>
                  </label>

                </div>

                {/* Place Order Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-4 px-10 rounded-full text-sm uppercase tracking-wider shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Place order
                  </button>
                </div>

              </div>

            </div>

          </form>
        )}

      </section>

    </div>
  );
}
