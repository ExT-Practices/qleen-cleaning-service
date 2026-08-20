import React, { useState, useEffect, useMemo } from 'react';
import {
  Star,
  Search,
  ChevronRight,
  Plus,
  Minus,
  Check,
  ShoppingBag,
  Heart,
  Share2,
  Lock,
  RotateCcw,
  Truck,
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';
import { PRODUCTS_DATA, SHOP_CATEGORIES } from './shopData';

export default function ProductDetailPage({
  productId = 'prod-4', // Default to Cleaning Fabric Set as in prompt HTML screenshot
  onNavigate,
  onAddToCart
}) {
  // Find current product or fallback
  const product = useMemo(() => {
    return PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[3];
  }, [productId]);

  // Gallery image selection
  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    setSelectedImage(product.image);
    window.scrollTo(0, 0);
  }, [product]);

  // Gallery thumbnails (using related image variations)
  const galleryThumbnails = useMemo(() => {
    return [
      product.image,
      'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/product_11.jpg',
      'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/product_08.jpg'
    ];
  }, [product]);

  // Tab State: 'description' | 'reviews'
  const [activeTab, setActiveTab] = useState('description');

  // Quantity input state
  const [quantity, setQuantity] = useState(1);

  // Review Form State
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState('');

  // Toast State
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // Add to cart handler
  const handleAddToCartSubmit = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product, quantity);
    } else {
      triggerToast(`Added ${quantity} × "${product.title}" to cart!`);
    }
  };

  // Handle Review Submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewComment.trim() || !reviewName.trim() || !reviewEmail.trim()) return;

    const newReview = {
      id: Date.now(),
      name: reviewName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      rating: rating,
      comment: reviewComment
    };

    setReviewsList([newReview, ...reviewsList]);
    setReviewComment('');
    setReviewName('');
    setReviewEmail('');
    setReviewSuccessMsg('Thank you! Your review has been submitted.');
    setTimeout(() => setReviewSuccessMsg(''), 3000);
  };

  // Related products (excluding current)
  const relatedProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 3);
  }, [product]);

  // Sidebar featured list
  const sidebarProducts = useMemo(() => {
    return PRODUCTS_DATA.slice(0, 5);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans mt-[70px]">

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff7f00]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Main Container matching BoldThemes WooCommerce layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs text-zinc-500 gap-2 mb-8 font-medium">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-[#ff7f00] transition cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <button
            onClick={() => onNavigate && onNavigate('shop')}
            className="hover:text-[#ff7f00] transition cursor-pointer"
          >
            Shop
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-800 font-bold truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* 2-Column Main Layout (Main Content + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* =====================================================================
              LEFT CONTENT AREA (lg:col-span-8)
             ===================================================================== */}
          <main className="lg:col-span-8 space-y-12 text-left">
            
            {/* Top Product Hero Card (Gallery + Summary Info) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Product Gallery (Left) */}
              <div className="space-y-4">
                {/* Main Large Image Container */}
                <div className="relative w-full aspect-square bg-[#F9F8F5] rounded-3xl p-6 flex items-center justify-center border border-zinc-100 overflow-hidden group">
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isSale && (
                    <span className="absolute top-4 right-4 bg-[#3B9245] text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                      SALE!
                    </span>
                  )}
                  {/* Zoom Lightbox Trigger */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-zinc-700 hover:text-[#ff7f00] transition cursor-pointer">
                    <Search className="w-4 h-4" />
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="flex items-center gap-3">
                  {galleryThumbnails.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`w-20 h-20 rounded-2xl bg-[#F9F8F5] p-2 border-2 transition cursor-pointer flex items-center justify-center overflow-hidden ${
                        selectedImage === imgSrc ? 'border-[#ff7f00] shadow-sm' : 'border-zinc-100 hover:border-zinc-300'
                      }`}
                    >
                      <img src={imgSrc} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Entry Summary (Right) */}
              <div className="space-y-4 pt-1">
                {/* Category Tags */}
                <div className="text-xs font-bold uppercase tracking-wider text-[#ff7f00]">
                  <span>{product.categoryName}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight">
                  {product.title}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 text-2xl font-extrabold text-zinc-900 pt-1">
                  {product.originalPrice && (
                    <span className="text-zinc-400 line-through text-lg font-normal">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-zinc-900">${product.price.toFixed(2)}</span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                  {product.description ||
                    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'}
                </p>

                {/* Quantity & Add to Cart Form */}
                <form onSubmit={handleAddToCartSubmit} className="pt-4 flex items-center gap-4">
                  {/* Quantity Pill Input */}
                  <div className="flex items-center border border-zinc-200 rounded-full px-3 py-2 bg-zinc-50 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-10 text-center font-bold text-sm text-zinc-900 bg-transparent focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="submit"
                    className="flex-1 bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3.5 px-8 rounded-full text-sm shadow-md transition-all duration-200 cursor-pointer text-center"
                  >
                    Add to cart
                  </button>
                </form>

                {/* Product Features / Value Props */}
                {product.features && (
                  <div className="pt-4 border-t border-zinc-100 space-y-2">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                        <Check className="w-4 h-4 text-[#3B9245]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* =====================================================================
                TABS SECTION (Description vs Reviews)
               ===================================================================== */}
            <div className="pt-6 border-t border-zinc-100">
              
              {/* Tab Header Buttons */}
              <div className="flex items-center gap-2 border-b border-zinc-200">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-3 px-6 font-bold text-sm rounded-t-2xl transition cursor-pointer border-b-2 ${
                    activeTab === 'description'
                      ? 'border-[#ff7f00] text-[#ff7f00] bg-orange-50/40'
                      : 'border-transparent text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-3 px-6 font-bold text-sm rounded-t-2xl transition cursor-pointer border-b-2 ${
                    activeTab === 'reviews'
                      ? 'border-[#ff7f00] text-[#ff7f00] bg-orange-50/40'
                      : 'border-transparent text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Reviews ({reviewsList.length})
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="py-6">
                
                {/* 1. DESCRIPTION PANEL */}
                {activeTab === 'description' && (
                  <div className="space-y-4 text-zinc-700 text-sm leading-relaxed animate-fadeIn">
                    <h3 className="text-xl font-bold text-zinc-900">Description</h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <p>
                      Crafted specifically for residential and commercial cleaning perfection, our high-performance cleaning fabric sets are designed to tackle grease, grime, and dust without leaving scratches or lint behind.
                    </p>
                  </div>
                )}

                {/* 2. REVIEWS PANEL */}
                {activeTab === 'reviews' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-zinc-900">Reviews</h3>
                      
                      {reviewsList.length === 0 ? (
                        <p className="text-sm text-zinc-500 italic">There are no reviews yet.</p>
                      ) : (
                        <div className="space-y-4">
                          {reviewsList.map((rev) => (
                            <div key={rev.id} className="p-4 bg-zinc-50 rounded-2xl space-y-2 border border-zinc-100">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-zinc-900">{rev.name}</span>
                                <span className="text-xs text-zinc-400">{rev.date}</span>
                              </div>
                              <div className="flex items-center gap-1 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3.5 h-3.5 fill-current ${
                                      i < rev.rating ? 'text-amber-400' : 'text-zinc-200'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-zinc-600">{rev.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Review Form */}
                    <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 space-y-6 border border-zinc-100">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-zinc-900">
                          Be the first to review “{product.title}”
                        </h4>
                        <p className="text-xs text-zinc-500">
                          Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                        </p>
                      </div>

                      {reviewSuccessMsg && (
                        <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold">
                          {reviewSuccessMsg}
                        </div>
                      )}

                      <form onSubmit={handleReviewSubmit} className="space-y-4">
                        
                        {/* Rating Star Selector */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-zinc-700 block">
                            Your rating <span className="text-red-500">*</span>
                          </label>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="p-1 cursor-pointer transition transform hover:scale-110"
                              >
                                <Star
                                  className={`w-5 h-5 ${
                                    star <= (hoverRating || rating)
                                      ? 'text-amber-400 fill-amber-400'
                                      : 'text-zinc-300'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Review Comment */}
                        <div>
                          <label className="text-xs font-bold text-zinc-700 block mb-1">
                            Your review <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            required
                            rows="4"
                            value={reviewComment}
                            onChange={(e) => setReviewComment(e.target.value)}
                            className="w-full p-3.5 rounded-2xl border border-zinc-200 text-xs bg-white focus:outline-none focus:border-[#ff7f00]"
                          ></textarea>
                        </div>

                        {/* Name & Email Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-zinc-700 block mb-1">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={reviewName}
                              onChange={(e) => setReviewName(e.target.value)}
                              className="w-full p-3 rounded-xl border border-zinc-200 text-xs bg-white focus:outline-none focus:border-[#ff7f00]"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-zinc-700 block mb-1">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={reviewEmail}
                              onChange={(e) => setReviewEmail(e.target.value)}
                              className="w-full p-3 rounded-xl border border-zinc-200 text-xs bg-white focus:outline-none focus:border-[#ff7f00]"
                            />
                          </div>
                        </div>

                        {/* Cookie Checkbox */}
                        <div className="flex items-center gap-2 pt-1">
                          <input
                            type="checkbox"
                            id="save-details"
                            checked={saveDetails}
                            onChange={(e) => setSaveDetails(e.target.checked)}
                            className="rounded text-[#ff7f00] focus:ring-[#ff7f00]"
                          />
                          <label htmlFor="save-details" className="text-xs text-zinc-600 cursor-pointer">
                            Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                        >
                          Submit
                        </button>

                      </form>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* =====================================================================
                RELATED PRODUCTS SECTION
               ===================================================================== */}
            <div className="pt-10 border-t border-zinc-100 space-y-6">
              <h2 className="text-2xl font-extrabold text-zinc-900">Related products</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    className="bg-[#F9F8F5] rounded-[2rem] p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group relative"
                  >
                    {rel.isSale && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-[#3B9245] text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                          SALE!
                        </span>
                      </div>
                    )}

                    <div
                      onClick={() => {
                        if (onNavigate) onNavigate('product-detail', rel.id);
                      }}
                      className="relative w-full h-44 flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl mb-4"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-1.5 text-left mb-4">
                      <h3
                        onClick={() => onNavigate && onNavigate('product-detail', rel.id)}
                        className="font-bold text-sm text-zinc-900 line-clamp-1 group-hover:text-[#ff7f00] transition cursor-pointer"
                      >
                        {rel.title}
                      </h3>
                      <div className="flex items-baseline gap-2 font-bold text-xs">
                        {rel.originalPrice && (
                          <span className="text-zinc-400 line-through font-normal">
                            ${rel.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-zinc-900">${rel.price.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (onAddToCart) onAddToCart(rel, 1);
                        else triggerToast(`Added "${rel.title}" to cart!`);
                      }}
                      className="w-full bg-[#ff7f00] hover:bg-[#e06f00] text-white font-bold py-2.5 px-4 rounded-full text-xs shadow-md transition cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </main>

          {/* =====================================================================
              RIGHT SIDEBAR (lg:col-span-4)
             ===================================================================== */}
          <aside className="lg:col-span-4 space-y-10 text-left pl-0 lg:pl-4">
            
            {/* 1. Cart Widget */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-zinc-900">Cart</h3>
              <p className="text-xs text-zinc-500">No products in the cart.</p>
            </div>

            {/* 2. Products List Widget */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900">Products</h3>
              <div className="space-y-4">
                {sidebarProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onNavigate && onNavigate('product-detail', p.id)}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F9F8F5] p-2 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs text-zinc-800 group-hover:text-[#ff7f00] transition">
                        {p.title}
                      </h4>
                      <div className="flex items-baseline gap-1.5 text-xs font-semibold text-zinc-600">
                        {p.originalPrice && (
                          <span className="line-through text-zinc-400 font-normal text-[10px]">
                            ${p.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span>${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Product Categories Widget */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-900">Product categories</h3>
              <div className="divide-y divide-zinc-200/70 text-xs">
                {SHOP_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onNavigate && onNavigate('shop')}
                    className="w-full py-2.5 text-left text-zinc-700 hover:text-[#ff7f00] transition cursor-pointer flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}
