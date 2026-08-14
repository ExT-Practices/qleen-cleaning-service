import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  CreditCard,
  Eye
} from 'lucide-react';
import { PRODUCTS_DATA, SHOP_CATEGORIES } from './shopData';

export default function ShopPage() {
  // Filter & Sort State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  
  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewQuantity, setQuickViewQuantity] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Toast Notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  // Add item to cart
  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    triggerToast(`Added "${product.title}" to cart!`);
  };

  // Update item quantity
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Cart subtotal
  const cartSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  // Filtered & Sorted products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      if (selectedCategory === 'all') return true;
      return product.category === selectedCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, sortBy]);

  // Sidebar featured products
  const sidebarProducts = PRODUCTS_DATA.slice(0, 5);

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#ff7f00]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          1. EXACT HERO HEADER SECTION (Matching Screenshot 1 & Qleen Demo)
          - White background
          - Huge green text: "eco clean" (#399647)
          - Left float: featured_image_shop_01.png (green cloth cutout)
          - Right float: featured_image_shop_02.png (dish brush cutout)
          - Center: girl_image_shop.png
         ========================================================================= */}
      <section className="relative w-full bg-white pt-14 sm:pt-16 pb-0 px-4 overflow-hidden border-b border-zinc-100">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[420px] lg:min-h-[460px]">
          
          {/* Huge Green "eco clean" Background Headline */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-[22vw] sm:text-[19vw] lg:text-[21.5vw] font-black tracking-tight text-[#399647] font-sans leading-none whitespace-nowrap">
              eco clean
            </h1>
          </div>

          {/* Top Left Floating Green Cloth PNG */}
          <div className="absolute left-[3%] sm:left-[6%] top-[14%] sm:top-[16%] z-10 w-24 sm:w-36 lg:w-48 transition-transform duration-700 hover:scale-105">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/featured_image_shop_01.png"
              alt="Eco Green Cloth"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Bottom Right Floating Dish Brush PNG */}
          <div className="absolute right-[2%] sm:right-[5%] bottom-[4%] sm:bottom-[8%] z-10 w-32 sm:w-48 lg:w-64 transition-transform duration-700 hover:scale-105">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/featured_image_shop_02.png"
              alt="Eco Dish Brush"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Center Girl Thumbs-Up Image */}
          <div className="relative z-10 flex justify-center items-end mt-6 sm:mt-10">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/girl_image_shop.png"
              alt="Qleen Girl"
              className="max-h-[340px] sm:max-h-[420px] lg:max-h-[470px] w-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MAIN SHOP CONTENT (Matching Screenshot 2)
          - Left: Toolbar ("Showing 1-9 of 12 results", "Default sorting") + 3-Col Cards
          - Right Sidebar: Cart + Products + Product categories
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* =====================================================================
              LEFT MAIN PRODUCT GRID (lg:col-span-8)
             ===================================================================== */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Toolbar: Results count + Default sorting dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <span className="text-sm font-medium text-zinc-600">
                Showing 1–{Math.min(9, filteredProducts.length)} of {PRODUCTS_DATA.length} results
              </span>

              {/* Sorting Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-zinc-200 rounded-full px-5 py-2.5 pr-10 text-sm font-medium text-zinc-700 shadow-xs focus:outline-none focus:border-zinc-400 cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                  <option value="rating">Sort by average rating</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-4 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Product Cards Grid (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F9F8F5] rounded-[2rem] p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group relative"
                >
                  {/* Top Right SALE! Green Badge */}
                  {product.isSale && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#3B9245] text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                        SALE!
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <div
                    onClick={() => {
                      setQuickViewProduct(product);
                      setQuickViewQuantity(1);
                    }}
                    className="relative w-full h-48 flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl mb-4"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Quick View overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-zinc-800 p-2.5 rounded-full shadow-md">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Price */}
                  <div className="space-y-1.5 text-left mb-4">
                    <h3 className="font-bold text-base text-zinc-900 line-clamp-1 group-hover:text-[#ff7f00] transition">
                      {product.title}
                    </h3>
                    
                    {/* Price display */}
                    <div className="flex items-baseline gap-2 font-bold text-sm">
                      {product.originalPrice && (
                        <span className="text-zinc-400 line-through text-xs font-normal">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-zinc-900">${product.price.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Add to Cart Orange Button */}
                  <button
                    onClick={() => handleAddToCart(product, 1)}
                    className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3 px-6 rounded-full text-sm shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
                  >
                    Add to cart
                  </button>

                </div>
              ))}
            </div>

          </main>

          {/* =====================================================================
              RIGHT SIDEBAR (lg:col-span-4)
              Matching screenshot 2:
              1. Cart section
              2. Products section
              3. Product categories section
             ===================================================================== */}
          <aside className="lg:col-span-4 space-y-10 text-left pl-0 lg:pl-4">
            
            {/* 1. CART SECTION (Matching Screenshot 1) */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-zinc-900">Cart</h3>
              
              {cartItems.length === 0 ? (
                <p className="text-sm text-zinc-500">No products in the cart.</p>
              ) : (
                <div className="space-y-4">
                  <div className="divide-y divide-zinc-200/70">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="py-3 first:pt-0 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {/* Round Thumbnail */}
                          <div className="w-12 h-12 rounded-full bg-[#F9F8F5] p-1 border border-zinc-100 flex items-center justify-center shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-zinc-900 line-clamp-1">
                              {item.product.title}
                            </h4>
                            <div className="text-xs text-zinc-500 font-semibold">
                              {item.quantity} × <span className="text-zinc-800">${item.product.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Orange Circle Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="w-5 h-5 rounded-full bg-[#ff7f00] hover:bg-[#e06f00] text-white flex items-center justify-center font-bold text-[10px] cursor-pointer shrink-0 transition"
                          title="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal */}
                  <div className="pt-3 border-t border-zinc-200/80 flex items-center justify-between text-sm">
                    <span className="font-bold text-zinc-900">Subtotal:</span>
                    <span className="font-extrabold text-base text-zinc-900">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  {/* View Cart & Checkout Pill Buttons */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => {
                        window.location.hash = "cart";
                      }}
                      className="flex-1 bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3 px-4 rounded-full text-xs text-center transition cursor-pointer shadow-xs"
                    >
                      View cart
                    </button>
                    <button
                      onClick={() => {
                        setIsCheckoutOpen(true);
                        setCheckoutSuccess(false);
                      }}
                      className="flex-1 border-2 border-[#ff7f00] text-[#ff7f00] hover:bg-[#ff7f00] hover:text-white font-bold py-2.5 px-4 rounded-full text-xs text-center transition cursor-pointer"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. PRODUCTS SIDEBAR LIST */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-zinc-900">Products</h3>
              
              <div className="space-y-4">
                {sidebarProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      setQuickViewProduct(prod);
                      setQuickViewQuantity(1);
                    }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-14 rounded-2xl bg-[#F9F8F5] p-2 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-sm text-zinc-800 group-hover:text-[#ff7f00] transition">
                        {prod.title}
                      </h4>
                      <div className="flex items-baseline gap-1.5 text-xs font-semibold text-zinc-600">
                        {prod.originalPrice && (
                          <span className="line-through text-zinc-400 font-normal">
                            ${prod.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span>${prod.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. PRODUCT CATEGORIES LIST */}
            <div className="space-y-4 pt-2">
              <h3 className="text-2xl font-bold text-zinc-900">Product categories</h3>
              
              <div className="divide-y divide-zinc-200/70 text-sm">
                {SHOP_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                      className={`w-full py-3 text-left transition flex items-center justify-between cursor-pointer ${
                        isSelected ? 'font-bold text-[#ff7f00]' : 'text-zinc-700 hover:text-[#ff7f00]'
                      }`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>
      </section>

      {/* =========================================================================
          3. QUICK VIEW PRODUCT MODAL
         ========================================================================= */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-2 rounded-full hover:bg-zinc-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="bg-[#F9F8F5] p-4 rounded-2xl flex items-center justify-center h-56">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[#ff7f00] font-bold text-xs uppercase tracking-wider">
                  {quickViewProduct.categoryName}
                </span>
                <h3 className="text-xl font-bold text-zinc-900">{quickViewProduct.title}</h3>
                
                <div className="flex items-baseline gap-2 font-bold text-lg">
                  {quickViewProduct.originalPrice && (
                    <span className="text-zinc-400 line-through text-sm font-normal">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span>${quickViewProduct.price.toFixed(2)}</span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-zinc-200 rounded-full px-2 py-1 bg-zinc-50">
                    <button
                      onClick={() => setQuickViewQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 text-zinc-600 hover:text-zinc-900 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-bold text-xs">{quickViewQuantity}</span>
                    <button
                      onClick={() => setQuickViewQuantity((q) => q + 1)}
                      className="p-1 text-zinc-600 hover:text-zinc-900 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct, quickViewQuantity);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-[#ff7f00] hover:bg-[#e06f00] text-white py-3 rounded-full font-bold text-xs shadow-md transition cursor-pointer"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. CHECKOUT MODAL
         ========================================================================= */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-2 rounded-full hover:bg-zinc-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Order Placed Successfully!</h3>
                <p className="text-xs text-zinc-500">
                  Thank you for your purchase. Your order total is <strong>${cartSubtotal.toFixed(2)}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setCartItems([]);
                  }}
                  className="bg-[#ff7f00] text-white font-bold py-2.5 px-6 rounded-full text-xs shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCheckoutSuccess(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-zinc-900">Checkout</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full p-3 rounded-xl border border-zinc-200 text-xs bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full p-3 rounded-xl border border-zinc-200 text-xs bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1">Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="123 Street Address"
                    className="w-full p-3 rounded-xl border border-zinc-200 text-xs bg-zinc-50 focus:outline-none focus:border-[#ff7f00]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-100 text-sm">
                  <span className="font-bold text-zinc-700">Total:</span>
                  <span className="font-extrabold text-lg text-[#ff7f00]">${cartSubtotal.toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white py-3 rounded-full font-bold text-xs uppercase shadow-md cursor-pointer"
                >
                  Place Order
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
