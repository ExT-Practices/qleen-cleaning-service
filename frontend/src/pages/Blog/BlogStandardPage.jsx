import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Folder, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  X,
  Send,
  Copy,
  Check
} from 'lucide-react';

const SAMPLE_POSTS = [
  {
    id: 1,
    author: "BoldThemes",
    title: "How to Clean All Types of Cutting Boards",
    date: "July 20, 2025",
    categories: ["DIY", "Guides"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-1280x800.jpg",
    excerpt: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
    content: `
      <p>Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
      <h3 style="font-weight:bold; margin-top: 1.25rem; margin-bottom: 0.5rem; font-size: 1.25rem; color: #18181b;">1. Wooden Cutting Boards</h3>
      <p>Never submerge wooden cutting boards in water or place them in a dishwasher. Wash gently with warm soapy water, dry immediately, and apply food-grade mineral oil monthly to prevent drying and cracking.</p>
      <h3 style="font-weight:bold; margin-top: 1.25rem; margin-bottom: 0.5rem; font-size: 1.25rem; color: #18181b;">2. Plastic & Composite Boards</h3>
      <p>Plastic boards can safely be sanitized in the dishwasher. Use coarse salt and lemon halves to scrub stubborn food stains without scratching the surface.</p>
    `
  },
  {
    id: 2,
    author: "BoldThemes",
    title: "How To Clean and Maintain Your Sofa Bed",
    date: "July 10, 2025",
    categories: ["Cleaning", "Services"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-1280x800.jpg",
    excerpt: "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
    content: `
      <p>Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Efficiently unleash cross-media information without cross-media value.</p>
      <p>Vacuum fabric seams regularly using a brush attachment. Treat accidental liquid spills immediately with enzyme cleaners.</p>
    `
  },
  {
    id: 3,
    author: "BoldThemes",
    title: "Best Robot Vacuums for Pet Hair in 2025",
    date: "June 30, 2025",
    categories: ["Guides", "Organising"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-1280x800.jpg",
    excerpt: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Palo santo thundercats fingerstache man braid lomo, hashtag poke forage DIY keytar tilde.",
    content: `
      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
      <p>Pet hair can clog traditional roll brushes. Modern robotic vacuums utilize rubberized dual tangle-free extractors to lift pet fur easily.</p>
    `
  },
  {
    id: 4,
    author: "BoldThemes",
    title: "Move-In/Move-Out Cleaning Checklist for a Stress-Free Transition",
    date: "June 20, 2025",
    categories: ["Guides", "Tips & Tricks"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-1280x800.jpg",
    excerpt: "Bespoke la croix portland tacos pork belly hot chicken scenester umami cliche vape poutine. PBR&B pickled wayfarers tilde. Wayfarers biodiesel helvetica yr meh. Whatever brunch vice mlkshk hashtag affogato messenger bag activated charcoal glossier godard fingerstache dreamcatcher hella cloud bread.",
    content: `
      <p>Moving out of an apartment or home requires immaculate detail. Ensure baseboards, interior windows, light switches, and inside kitchen cabinets are fully wiped down before final key handoff.</p>
    `
  },
  {
    id: 5,
    author: "BoldThemes",
    title: "Green Cleaning: Eco-Friendly Tips for Everyday Homes",
    date: "June 1, 2025",
    categories: ["Cleaning", "Services"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/blog_02.jpg",
    excerpt: "Discover plant-based organic formulations that disinfect countertops, remove stains, and keep household indoor air safe for young children and pets.",
    content: `
      <p>Natural plant extracts and essential oils offer natural antibacterial protection without volatile organic compounds (VOCs).</p>
    `
  }
];

const RECENT_POSTS = [
  {
    id: 1,
    title: "How to Clean All Types...",
    date: "July 20, 2025",
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-1280x800.jpg"
  },
  {
    id: 2,
    title: "How To Clean and...",
    date: "July 10, 2025",
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-1280x800.jpg"
  },
  {
    id: 3,
    title: "Best Robot Vacuums f...",
    date: "June 30, 2025",
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-1280x800.jpg"
  },
  {
    id: 4,
    title: "Move-In/Move-Out...",
    date: "June 20, 2025",
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-1280x800.jpg"
  },
  {
    id: 5,
    title: "Green Cleaning: Eco-...",
    date: "June 1, 2025",
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/blog_02.jpg"
  }
];

const CATEGORIES = [
  "Business",
  "Cleaning",
  "DIY",
  "Guides",
  "Organising",
  "Services",
  "Tips & Tricks"
];

export default function BlogStandardPage({ onSelectPost }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePostModal, setActivePostModal] = useState(null);
  const [copiedPostId, setCopiedPostId] = useState(null);

  // Filter posts
  const filteredPosts = SAMPLE_POSTS.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = 
      !selectedCategory || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleCopyUrl = (id) => {
    setCopiedPostId(id);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans pb-24">
      {/* =========================================================================
          1. HERO HEADER SECTION
          - Image: https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/featured_image_blog.jpg
          - Natural light background with NO heavy dark overlay!
          - Subtle left-gradient for text contrast
          - Subheadline: Blog (Caveat script font, white)
          - Title: Read Our News & Tips To Make Your Home Shine
         ========================================================================= */}
      <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-start overflow-hidden pt-24 sm:pt-28 pb-12 px-6 sm:px-12 lg:px-20 mt-[68px]">
        {/* Featured Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/featured_image_blog.jpg")`,
            backgroundPosition: "center center",
          }}
        />

        {/* Light & Subtle Overlay gradient to ensure text readability without darkening the room image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left space-y-2">
            
            {/* Cursive Subtitle Header (Caveat font) */}
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-['Caveat'] tracking-wide font-normal block drop-shadow-sm">
              Blog
            </span>

            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-5xl lg:text-[3.8rem] font-bold tracking-tight leading-[1.12] drop-shadow-md">
              Read Our News &amp; Tips To <br className="hidden sm:inline" />
              Make Your Home Shine
            </h1>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CONTENT AREA (EXACT SECOND IMAGE LAYOUT)
          - Left Column (8 cols): Blog Posts List with Title on Top format
          - Right Column (4 cols): Search bar, Recent Posts, Categories list
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: BLOG POSTS (8 COLUMNS) */}
          <main className="lg:col-span-8 space-y-14">

            {/* Active Filter notification */}
            {(selectedCategory || searchQuery) && (
              <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700">
                  Showing results for: {selectedCategory ? `Category "${selectedCategory}"` : `Search "${searchQuery}"`}
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery("");
                  }}
                  className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                >
                  Clear filter
                </button>
              </div>
            )}

            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center text-zinc-500">
                <p className="text-lg font-semibold">No posts found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery("");
                  }}
                  className="mt-4 bg-[#ff7f00] text-white px-5 py-2 rounded-full text-xs font-bold"
                >
                  Show All Posts
                </button>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="space-y-3 pb-12 border-b border-zinc-200/80 last:border-b-0"
                >
                  {/* Author Cursive Label (BoldThemes) */}
                  <div className="font-['Caveat'] text-[#ff7f00] text-2xl sm:text-[1.75rem] font-semibold tracking-wide block">
                    {post.author}
                  </div>

                  {/* Post Title (H2) */}
                  <h2 className="text-3xl sm:text-[2.25rem] font-bold text-zinc-900 tracking-tight leading-[1.25]">
                    <button
                      onClick={() => onSelectPost ? onSelectPost(post.id) : setActivePostModal(post)}
                      className="text-left cursor-pointer hover:text-[#ff7f00] transition-colors"
                    >
                      {post.title}
                    </button>
                  </h2>

                  {/* Meta Line: Date / Categories */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium pb-2">
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <Clock className="w-3.5 h-3.5 text-[#ff7f00]" />
                      {post.date}
                    </span>
                    <span className="text-zinc-400">/</span>
                    <span className="flex items-center gap-1.5 text-[#ff7f00]">
                      <Folder className="w-3.5 h-3.5 text-[#ff7f00]" />
                      {post.categories.map((cat, cIdx) => (
                        <React.Fragment key={cIdx}>
                          <button
                            onClick={() => setSelectedCategory(cat)}
                            className="hover:underline cursor-pointer font-medium text-zinc-600 hover:text-[#ff7f00]"
                          >
                            {cat}
                          </button>
                          {cIdx < post.categories.length - 1 && <span className="text-zinc-400">, </span>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>

                  {/* Featured Image (Rounded Corners) */}
                  <div 
                    className="relative w-full overflow-hidden rounded-[20px] cursor-pointer bg-zinc-100"
                    onClick={() => onSelectPost ? onSelectPost(post.id) : setActivePostModal(post)}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto max-h-[460px] object-cover hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>

                  {/* Excerpt Paragraph */}
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-2">
                    {post.excerpt}
                  </p>

                  {/* Article Footer: Share Bar (Left) + Orange Continue Reading Pill (Right) */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    
                    {/* Share Bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500 font-semibold mr-1">Share</span>
                      
                      {/* Copy Link Circle */}
                      <button
                        onClick={() => handleCopyUrl(post.id)}
                        className="w-7 h-7 rounded-full bg-[#ff7f00] text-white flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                        title="Copy Link"
                      >
                        {copiedPostId === post.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>

                      {/* Facebook Circle */}
                      <a
                        href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                        title="Share on Facebook"
                      >
                        f
                      </a>

                      {/* Twitter X Circle */}
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                        title="Share on Twitter"
                      >
                        X
                      </a>

                      {/* LinkedIn Circle */}
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                        title="Share on LinkedIn"
                      >
                        in
                      </a>

                      {/* WhatsApp Circle */}
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                        title="Share on WhatsApp"
                      >
                        wa
                      </a>
                    </div>

                    {/* Continue reading Orange Pill Button */}
                    <button
                      onClick={() => onSelectPost ? onSelectPost(post.id) : setActivePostModal(post)}
                      className="bg-[#ff7f00] hover:bg-[#e67200] text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue reading</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </div>

                </article>
              ))
            )}

            {/* Pagination Controls */}
            {filteredPosts.length > 0 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button className="w-10 h-10 rounded-full bg-[#ff7f00] text-white font-bold text-sm shadow-md cursor-pointer">
                  1
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-zinc-700 hover:bg-zinc-100 font-semibold border border-zinc-200 text-sm transition cursor-pointer">
                  2
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-zinc-700 hover:bg-zinc-100 font-semibold border border-zinc-200 text-sm transition cursor-pointer">
                  3
                </button>
                <button className="h-10 px-4 rounded-full bg-white text-zinc-700 hover:bg-[#ff7f00] hover:text-white font-semibold border border-zinc-200 text-sm transition cursor-pointer flex items-center gap-1">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </main>

          {/* RIGHT COLUMN: SIDEBAR (4 COLUMNS) */}
          <aside className="lg:col-span-4 space-y-10 pl-0 lg:pl-4">

            {/* 1. SEARCH WIDGET (Oval search bar) */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-zinc-300 rounded-full text-xs text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#ff7f00] shadow-xs"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#ff7f00] transition cursor-pointer"
                  title="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. RECENT POSTS WIDGET */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {RECENT_POSTS.map((rp) => {
                  const fullPost = SAMPLE_POSTS.find(p => p.id === rp.id) || SAMPLE_POSTS[0];
                  return (
                    <div 
                      key={rp.id}
                      onClick={() => setActivePostModal(fullPost)}
                      className="flex items-center gap-3.5 group cursor-pointer"
                    >
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-14 h-14 rounded-full object-cover group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="font-['Caveat'] text-[#ff7f00] text-sm font-semibold block leading-none mb-1">
                          {rp.date}
                        </span>
                        <h4 className="text-xs font-bold text-zinc-800 line-clamp-2 group-hover:text-[#ff7f00] transition-colors leading-snug">
                          {rp.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. CATEGORIES WIDGET (List with clean bottom dividers) */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight pb-1">
                Categories
              </h3>
              <ul className="divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80">
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      className={`w-full py-2.5 text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer block ${
                        selectedCategory === cat
                          ? "text-[#ff7f00] font-bold"
                          : "text-zinc-700 hover:text-[#ff7f00]"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </div>

      {/* =========================================================================
          POST DETAIL MODAL (Read Full Article Interactive View)
         ========================================================================= */}
      {activePostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-zinc-100">
            {/* Close Button */}
            <button
              onClick={() => setActivePostModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-64 sm:h-80">
              <img
                src={activePostModal.image}
                alt={activePostModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-2">
                  <span className="font-['Caveat'] text-[#ff7f00] text-xl font-bold block">
                    {activePostModal.author}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    {activePostModal.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-500 border-b border-zinc-100 pb-4">
                <span>By {activePostModal.author}</span>
                <span>•</span>
                <span>{activePostModal.date}</span>
                <span>•</span>
                <span>Categories: {activePostModal.categories.join(", ")}</span>
              </div>

              <div 
                className="prose max-w-none text-zinc-700 leading-relaxed text-base space-y-4"
                dangerouslySetInnerHTML={{ __html: activePostModal.content }}
              />

              <div className="pt-6 border-t border-zinc-100 flex items-center justify-end">
                <button
                  onClick={() => setActivePostModal(null)}
                  className="bg-[#ff7f00] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e67200] transition cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
