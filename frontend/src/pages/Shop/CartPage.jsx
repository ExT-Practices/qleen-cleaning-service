import React, { useState, useMemo } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Truck,
  CheckCircle2,
  Tag,
  CreditCard
} from 'lucide-react';
import { PRODUCTS_DATA } from './shopData';

export default function CartPage({ cartItems: initialCartItems = [], onNavigateShop }) {
  // Local cart state initialized with provided cart or default mockup items
  const [cartItems, setCartItems] = useState(
    initialCartItems.length > 0
      ? initialCartItems
      : [
          { product: PRODUCTS_DATA[3], quantity: 2 }, // Cleaning Fabric Set ($12 x 2 = $24)
          { product: PRODUCTS_DATA[0], quantity: 1 }  // Cleaning Fabric ($5 x 1 = $5)
        ]
  );

  const [couponInput, setCouponInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');
  const [showShippingCalc, setShowShippingCalc] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Cart quantity handlers
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Calculations
  const cartSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  const discountAmount = useMemo(() => {
    return (cartSubtotal * appliedDiscount) / 100;
  }, [cartSubtotal, appliedDiscount]);

  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (code === 'QLEEN10') {
      setAppliedDiscount(10);
      setCouponMsg('Coupon QLEEN10 applied! 10% discount');
    } else if (code === 'ECO35' || code === 'SAVE35') {
      setAppliedDiscount(35);
      setCouponMsg('Promo code applied! 35% discount');
    } else {
      setCouponMsg('Invalid coupon code. Try "QLEEN10" or "ECO35"');
    }
  };

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans">
      
      {/* =========================================================================
          1. HERO HEADER SECTION ("your shop cart") - Matching Screenshot 2
         ========================================================================= */}
      <section className="relative w-full bg-[#FAF8F5] pt-12 pb-16 px-4 overflow-hidden mt-[80px]">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[220px] sm:min-h-[280px]">
          
          {/* Giant Green "your shop cart" Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[9vw] sm:text-[8vw] md:text-[7vw] font-black tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap opacity-90">
              your shop cart
            </h1>
          </div>

          {/* Floating Sparkle Graphic */}
          <div className="absolute left-[12%] sm:left-[16%] top-[8%] z-10 w-24 sm:w-36 animate-pulse">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/sparkle.png"
              alt="Sparkle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center Shop Image (Lemons, Sprays, Brush) */}
          <div className="relative z-10 flex justify-center items-end mt-10 sm:mt-16">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/shop_image.png"
              alt="Qleen Shop Cart"
              className="max-h-[300px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN CART CONTENT (Table + Actions + Cart Totals) - Screenshot 2
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12 text-left">
        
        {cartItems.length === 0 ? (
          <div className="py-16 text-center space-y-4 bg-[#FAF8F5] rounded-3xl p-8 border border-zinc-100">
            <div className="w-20 h-20 rounded-full bg-orange-100 text-[#ff7f00] flex items-center justify-center mx-auto">
              <Trash2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-zinc-900">Your cart is currently empty.</h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              Before proceeding to checkout you must add some eco cleaning products to your shopping cart.
            </p>
            <button
              onClick={() => {
                if (onNavigateShop) onNavigateShop();
                else window.location.hash = "shop";
              }}
              className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 px-8 rounded-full text-sm shadow-md transition cursor-pointer inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Shop</span>
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Cart Table Container */}
            <div className="overflow-x-auto">
              
              {/* Orange Table Header Bar (Matching Screenshot 2) */}
              <div className="bg-[#ff7f00] text-white font-bold rounded-2xl py-3.5 px-6 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex-1">Product</div>
                <div className="w-24 text-right hidden sm:block">Price</div>
                <div className="w-32 text-center">Quantity</div>
                <div className="w-24 text-right">Subtotal</div>
              </div>

              {/* Cart Items Rows */}
              <div className="divide-y divide-zinc-100">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="py-5 px-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4"
                  >
                    {/* Left Product Details (Remove + Image + Title) */}
                    <div className="flex items-center gap-4 flex-1 min-w-[220px]">
                      {/* Orange Circle Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="w-6 h-6 rounded-full bg-[#ff7f00] hover:bg-[#e06f00] text-white flex items-center justify-center font-bold text-xs shadow-xs transition cursor-pointer shrink-0"
                        title="Remove item"
                      >
                        ×
                      </button>

                      {/* Round Thumbnail */}
                      <div className="w-16 h-16 rounded-full bg-[#F9F8F5] p-1 border border-zinc-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Title */}
                      <span className="font-bold text-sm sm:text-base text-zinc-900 hover:text-[#ff7f00] transition">
                        {item.product.title}
                      </span>
                    </div>

                    {/* Unit Price */}
                    <div className="w-24 text-right text-sm font-semibold text-zinc-700 hidden sm:block">
                      ${item.product.price.toFixed(2)}
                    </div>

                    {/* Quantity Pill Input */}
                    <div className="w-32 flex justify-center">
                      <div className="flex items-center border border-zinc-200 rounded-full px-3 py-1 bg-white shadow-xs">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-bold text-sm text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="w-24 text-right font-extrabold text-sm sm:text-base text-zinc-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>

                  </div>
                ))}
              </div>

              {/* Actions Row: Coupon & Update Cart */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200">
                <form onSubmit={handleApplyCoupon} className="flex items-center gap-3 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="px-5 py-2.5 rounded-full border border-zinc-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#ff7f00] flex-1 sm:w-64"
                  />
                  <button
                    type="submit"
                    className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm shadow-md transition cursor-pointer whitespace-nowrap"
                  >
                    Apply coupon
                  </button>
                </form>

                <button
                  onClick={() => triggerToast('Cart updated successfully')}
                  className="bg-orange-100/70 text-orange-400 font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm cursor-not-allowed opacity-80"
                  disabled
                >
                  Update cart
                </button>
              </div>

              {couponMsg && (
                <p className="text-xs font-bold text-emerald-600 mt-2">{couponMsg}</p>
              )}

            </div>

            {/* Cart Totals Section (Matching Screenshot 2) */}
            <div className="pt-8 border-t border-zinc-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-6">Cart totals</h2>

              <div className="max-w-xl space-y-4 bg-zinc-50/70 rounded-3xl p-6 border border-zinc-100">
                
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 text-sm">
                  <span className="font-bold text-zinc-700">Subtotal</span>
                  <span className="font-extrabold text-zinc-900 text-base">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 text-sm text-emerald-600 font-bold">
                    <span>Discount ({appliedDiscount}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="pb-4 border-b border-zinc-200/80 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-zinc-700">Shipment</span>
                    <div className="text-right text-zinc-600 space-y-1">
                      <p>Enter your address to view shipping options.</p>
                      <button
                        onClick={() => setShowShippingCalc(!showShippingCalc)}
                        className="font-bold text-zinc-800 hover:text-[#ff7f00] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Calculate shipping</span>
                        <Truck className="w-4 h-4 text-zinc-700" />
                      </button>
                    </div>
                  </div>

                  {showShippingCalc && (
                    <div className="p-4 bg-white rounded-2xl border border-zinc-200 mt-2 space-y-2 text-xs animate-fadeIn">
                      <input
                        type="text"
                        placeholder="State / City"
                        className="w-full p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        className="w-full p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                      />
                      <button
                        onClick={() => setShowShippingCalc(false)}
                        className="bg-[#ff7f00] text-white font-bold py-2 px-4 rounded-full text-xs shadow-xs"
                      >
                        Update Totals
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 text-base sm:text-lg font-extrabold text-zinc-900">
                  <span>Total</span>
                  <span className="text-[#ff7f00] text-xl">${finalTotal.toFixed(2)}</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      window.location.hash = "checkout";
                    }}
                    className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-4 px-8 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-200 cursor-pointer text-center"
                  >
                    Proceed to checkout
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
