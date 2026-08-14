import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Folder, 
  ArrowRight, 
  ChevronRight, 
  X,
  Copy,
  Check,
  Tag,
  MessageCircle,
  User,
  Calendar,
  Share2
} from 'lucide-react';

export const BLOG_POSTS_DATA = [
  {
    id: "green-cleaning-eco-friendly-products-that-actually-work",
    numericId: 1069,
    author: "BoldThemes",
    authorTitle: "Cleaning Specialist",
    title: "Green Cleaning: Eco-Friendly Products That Actually Work",
    date: "June 1, 2025",
    categories: ["Cleaning", "Services"],
    tags: ["Qleen", "Services", "Tips & Tricks"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_03.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_03-160x160.jpg",
    excerpt: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    content: `
      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
      
      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
      
      <blockquote class="my-6 p-6 bg-[#fffaf5] border-l-4 border-[#ff7f00] italic text-zinc-700 text-lg rounded-r-2xl font-serif">
        "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions."
      </blockquote>
      
      <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
    `,
    comments: [
      {
        id: 15,
        author: "Esta Reinger",
        avatar: "https://secure.gravatar.com/avatar/117e8c0d93b88a40e7ee584cb0771ef0e82988b375c7b790d9ac6d5db05b9d67?s=128&d=mm&r=g",
        date: "January 25, 2018 at 9:35 am",
        text: "Est nisi est dolores quisquam. Dolor ducimus molestias sunt delectus. Dicta rerum in expedita quo repellendus dolorum itaque qui. Porro tempore repellendus consequatur voluptas."
      },
      {
        id: 16,
        author: "Dr. Jaquelin McDermott IV",
        avatar: "https://secure.gravatar.com/avatar/97757b7a4f05972b72366c9b4915aeaacf871542344687b42b6ab3ca3e3c08bb?s=128&d=mm&r=g",
        date: "January 25, 2018 at 9:35 am",
        text: "Voluptatum a eos culpa vitae numquam non quia quae. Est expedita sunt accusamus ea. Corrupti vel veniam quis et molestiae sint."
      },
      {
        id: 17,
        author: "Cassandre Hermann",
        avatar: "https://secure.gravatar.com/avatar/b3b2d21c03969e01404a135d0bc87b8cc16f2b4c0b0dee33a9a75bb66b9d6890?s=128&d=mm&r=g",
        date: "January 25, 2018 at 9:35 am",
        text: "Blanditiis officiis et non et molestiae. Ipsum tenetur ab qui illo. Illo est quo quae aut soluta."
      }
    ],
    prevPostSlug: "5-signs-its-time-to-hire-a-professional-cleaning-service",
    prevPostTitle: "5 Signs It's Time to Hire a Professional Cleaning Service",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_04-160x160.jpg",
    nextPostSlug: "move-in-move-out-cleaning-checklist-for-a-stress-free-transition",
    nextPostTitle: "Move-In/Move-Out Cleaning Checklist for a Stress-Free Transition",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-160x160.jpg"
  },
  {
    id: "how-to-clean-all-types-of-cutting-boards",
    numericId: 1070,
    author: "BoldThemes",
    authorTitle: "Kitchen Care Specialist",
    title: "How to Clean All Types of Cutting Boards",
    date: "July 20, 2025",
    categories: ["DIY", "Guides"],
    tags: ["Cutting Boards", "Kitchen", "Disinfecting"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-1280x800.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-160x160.jpg",
    excerpt: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive.",
    content: `
      <p>Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
      
      <h3 class="text-xl font-bold text-zinc-900 mt-6 mb-3">1. Wooden Cutting Boards</h3>
      <p>Never submerge wooden cutting boards in water or place them in a dishwasher. Wash gently with warm soapy water, dry immediately, and apply food-grade mineral oil monthly to prevent drying and cracking.</p>
      
      <h3 class="text-xl font-bold text-zinc-900 mt-6 mb-3">2. Plastic & Composite Boards</h3>
      <p>Plastic boards can safely be sanitized in the dishwasher. Use coarse salt and lemon halves to scrub stubborn food stains without scratching the surface.</p>

      <blockquote class="my-6 p-6 bg-[#fffaf5] border-l-4 border-[#ff7f00] italic text-zinc-700 text-lg rounded-r-2xl font-serif">
        "Proper maintenance of wooden and plastic cutting boards extends their lifetime and keeps food preparation safe from harmful bacterial contamination."
      </blockquote>
    `,
    comments: [
      {
        id: 21,
        author: "Sarah Jenkins",
        avatar: "https://secure.gravatar.com/avatar/97757b7a4f05972b72366c9b4915aeaacf871542344687b42b6ab3ca3e3c08bb?s=128&d=mm&r=g",
        date: "July 21, 2025 at 10:15 am",
        text: "The tip about coarse salt and lemon worked wonders on my old wooden cutting board! Highly recommended."
      }
    ],
    prevPostSlug: "green-cleaning-eco-friendly-products-that-actually-work",
    prevPostTitle: "Green Cleaning: Eco-Friendly Products That Actually Work",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_03-160x160.jpg",
    nextPostSlug: "how-to-clean-and-maintain-your-sofa-bed",
    nextPostTitle: "How To Clean and Maintain Your Sofa Bed",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-160x160.jpg"
  },
  {
    id: "how-to-clean-and-maintain-your-sofa-bed",
    numericId: 1071,
    author: "BoldThemes",
    authorTitle: "Upholstery Expert",
    title: "How To Clean and Maintain Your Sofa Bed",
    date: "July 10, 2025",
    categories: ["Cleaning", "Services"],
    tags: ["Upholstery", "Furniture", "Maintenance"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-1280x800.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-160x160.jpg",
    excerpt: "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",
    content: `
      <p>Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
      
      <p>Vacuum fabric seams regularly using a soft brush attachment. Treat accidental liquid spills immediately with non-toxic enzyme cleaners to prevent deep mattress stains.</p>

      <blockquote class="my-6 p-6 bg-[#fffaf5] border-l-4 border-[#ff7f00] italic text-zinc-700 text-lg rounded-r-2xl font-serif">
        "Regular vacuuming and immediate spot treatment keep pull-out sofa beds fresh and inviting for overnight guests."
      </blockquote>
    `,
    comments: [],
    prevPostSlug: "how-to-clean-all-types-of-cutting-boards",
    prevPostTitle: "How to Clean All Types of Cutting Boards",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-160x160.jpg",
    nextPostSlug: "best-robot-vacuums-for-pet-hair-in-2025",
    nextPostTitle: "Best Robot Vacuums for Pet Hair in 2025",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-160x160.jpg"
  },
  {
    id: "best-robot-vacuums-for-pet-hair-in-2025",
    numericId: 1072,
    author: "BoldThemes",
    authorTitle: "Tech & Appliance Reviewer",
    title: "Best Robot Vacuums for Pet Hair in 2025",
    date: "June 30, 2025",
    categories: ["Guides", "Organising"],
    tags: ["Robotics", "Pet Hair", "Vacuum"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-1280x800.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-160x160.jpg",
    excerpt: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
    content: `
      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Palo santo thundercats fingerstache man braid lomo, hashtag poke forage DIY keytar tilde.</p>
      
      <p>Pet hair can clog traditional roll brushes. Modern robotic vacuums utilize rubberized dual tangle-free extractors to lift pet fur easily without manual intervention.</p>
    `,
    comments: [],
    prevPostSlug: "how-to-clean-and-maintain-your-sofa-bed",
    prevPostTitle: "How To Clean and Maintain Your Sofa Bed",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-160x160.jpg",
    nextPostSlug: "move-in-move-out-cleaning-checklist-for-a-stress-free-transition",
    nextPostTitle: "Move-In/Move-Out Cleaning Checklist for a Stress-Free Transition",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-160x160.jpg"
  },
  {
    id: "move-in-move-out-cleaning-checklist-for-a-stress-free-transition",
    numericId: 1073,
    author: "BoldThemes",
    authorTitle: "Move Cleaning Lead",
    title: "Move-In/Move-Out Cleaning Checklist for a Stress-Free Transition",
    date: "June 20, 2025",
    categories: ["Guides", "Tips & Tricks"],
    tags: ["Move Out", "Checklist", "Deep Cleaning"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-1280x800.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-160x160.jpg",
    excerpt: "Bespoke la croix portland tacos pork belly hot chicken scenester umami cliche vape poutine. PBR&B pickled wayfarers tilde.",
    content: `
      <p>Moving out of an apartment or home requires immaculate detail. Ensure baseboards, interior windows, light switches, and inside kitchen cabinets are fully wiped down before final key handoff.</p>
      
      <p>Bespoke la croix portland tacos pork belly hot chicken scenester umami cliche vape poutine. PBR&B pickled wayfarers tilde. Wayfarers biodiesel helvetica yr meh. Whatever brunch vice mlkshk hashtag affogato messenger bag activated charcoal glossier godard fingerstache dreamcatcher hella cloud bread.</p>
    `,
    comments: [],
    prevPostSlug: "best-robot-vacuums-for-pet-hair-in-2025",
    prevPostTitle: "Best Robot Vacuums for Pet Hair in 2025",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-160x160.jpg",
    nextPostSlug: "green-cleaning-eco-friendly-products-that-actually-work",
    nextPostTitle: "Green Cleaning: Eco-Friendly Products That Actually Work",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_03-160x160.jpg"
  },
  {
    id: "5-signs-its-time-to-hire-a-professional-cleaning-service",
    numericId: 1074,
    author: "BoldThemes",
    authorTitle: "Home Care Specialist",
    title: "5 Signs It’s Time to Hire a Professional Cleaning Service",
    date: "May 15, 2025",
    categories: ["Business", "Services"],
    tags: ["Professional Cleaning", "Time Saving", "Home Care"],
    image: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_04-1280x800.jpg",
    thumbnail: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_04-160x160.jpg",
    excerpt: "Recognizing when routine household chores become overwhelming can save you dozens of hours each month and preserve your peace of mind.",
    content: `
      <p>Recognizing when routine household chores become overwhelming can save you dozens of hours each month and preserve your peace of mind.</p>
      <p>1. Constant feeling of being behind on housework<br/>2. Visible buildup of dust and allergen triggers<br/>3. Lack of time for family and leisure activities<br/>4. Upcoming hosting duties or special events<br/>5. Specialized deep cleaning needs that standard tools can't handle.</p>
    `,
    comments: [],
    prevPostSlug: "move-in-move-out-cleaning-checklist-for-a-stress-free-transition",
    prevPostTitle: "Move-In/Move-Out Cleaning Checklist for a Stress-Free Transition",
    prevPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_02-160x160.jpg",
    nextPostSlug: "green-cleaning-eco-friendly-products-that-actually-work",
    nextPostTitle: "Green Cleaning: Eco-Friendly Products That Actually Work",
    nextPostImage: "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_03-160x160.jpg"
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

export default function BlogSinglePage({ postSlug = "green-cleaning-eco-friendly-products-that-actually-work", onNavigate }) {
  const post = BLOG_POSTS_DATA.find(p => p.id === postSlug) || BLOG_POSTS_DATA[0];

  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [commentForm, setCommentForm] = useState({
    comment: "",
    author: "",
    email: "",
    url: "",
    saveConsent: false
  });
  const [submittedComments, setSubmittedComments] = useState(post.comments || []);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.comment || !commentForm.author || !commentForm.email) return;

    const newComment = {
      id: Date.now(),
      author: commentForm.author,
      avatar: `https://secure.gravatar.com/avatar/${Math.random().toString(36).substring(7)}?s=128&d=mm&r=g`,
      date: "Just now",
      text: commentForm.comment
    };

    setSubmittedComments([newComment, ...submittedComments]);
    setCommentForm({ comment: "", author: "", email: "", url: "", saveConsent: false });
  };

  const handlePostClick = (targetSlug) => {
    if (onNavigate) {
      onNavigate(targetSlug);
    } else {
      window.location.hash = `#blog-single-${targetSlug}`;
    }
  };

  const prevPost = BLOG_POSTS_DATA.find(p => p.id === post.prevPostSlug);
  const nextPost = BLOG_POSTS_DATA.find(p => p.id === post.nextPostSlug);

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 font-sans pb-24">
      {/* =========================================================================
          1. PARALLAX/FEATURED PAGE HEADER
          Matches exact style: background image with centered title and Curved Header
         ========================================================================= */}
      <header 
        className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center text-center overflow-hidden pt-24 pb-12 px-6 mt-[68px] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <span className="font-['Caveat'] text-white text-3xl sm:text-4xl block drop-shadow-md">
            Blog Article
          </span>
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN CONTENT & SIDEBAR CONTAINER
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT MAIN ARTICLE COLUMN (8 COLS) */}
          <main className="lg:col-span-8 space-y-10">

            <article className="space-y-6">
              
              {/* Article Content */}
              <div 
                className="prose max-w-none text-zinc-700 leading-relaxed text-base sm:text-lg space-y-5"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* ARTICLE FOOTER: Share Options & Tags */}
              <footer className="pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                
                {/* Social Share Icons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500 mr-2">Share</span>
                  
                  {/* Copy Link Circle */}
                  <button
                    onClick={handleCopyUrl}
                    className="w-8 h-8 rounded-full bg-[#ff7f00] text-white flex items-center justify-center text-xs hover:bg-[#e67200] transition cursor-pointer shadow-xs"
                    title="Copy current URL to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>

                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition shadow-xs"
                    title="Share on Facebook"
                  >
                    f
                  </a>

                  {/* Twitter / X */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition shadow-xs"
                    title="Share on Twitter (X)"
                  >
                    X
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#ff7f00] text-white font-bold flex items-center justify-center text-xs hover:bg-[#e67200] transition shadow-xs"
                    title="Share on WhatsApp"
                  >
                    wa
                  </a>
                </div>

                {/* Tags Links */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600">
                  <Tag className="w-4 h-4 text-[#ff7f00]" />
                  <span>Tags:</span>
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-[#ff7f00] font-semibold">
                      {tag}{idx < post.tags.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>

              </footer>

            </article>

            {/* =========================================================================
                3. COMMENTS SECTION
               ========================================================================= */}
            <section className="pt-10 border-t border-zinc-200 space-y-8">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                {submittedComments.length} thoughts on “<span>{post.title}</span>”
              </h2>

              {/* Comments List */}
              <ol className="space-y-6">
                {submittedComments.map((cmt) => (
                  <li key={cmt.id} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={cmt.avatar} 
                          alt={cmt.author} 
                          className="w-12 h-12 rounded-full object-cover border border-zinc-200"
                        />
                        <div>
                          <b className="text-zinc-900 font-bold block">{cmt.author}</b>
                          <span className="text-xs text-zinc-400">{cmt.date}</span>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-[#ff7f00] hover:underline cursor-pointer">
                        Reply
                      </button>
                    </div>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pl-15">
                      {cmt.text}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Comment Response Form */}
              <div className="pt-6 bg-[#fffaf5] p-6 sm:p-8 rounded-3xl border border-orange-100 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  Leave a Reply
                </h3>
                
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <p className="text-xs text-zinc-500">
                    Your email address will not be published. Required fields are marked <span className="text-rose-500">*</span>
                  </p>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700">Comment *</label>
                    <textarea 
                      rows="5"
                      required
                      value={commentForm.comment}
                      onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                      className="w-full p-4 bg-white border border-zinc-300 rounded-2xl text-sm focus:ring-2 focus:ring-[#ff7f00] focus:outline-none"
                      placeholder="Write your comment here..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-700">Name *</label>
                      <input 
                        type="text"
                        required
                        value={commentForm.author}
                        onChange={(e) => setCommentForm({ ...commentForm, author: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm focus:ring-2 focus:ring-[#ff7f00] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-700">Email *</label>
                      <input 
                        type="email"
                        required
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm focus:ring-2 focus:ring-[#ff7f00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700">Website</label>
                    <input 
                      type="url"
                      value={commentForm.url}
                      onChange={(e) => setCommentForm({ ...commentForm, url: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm focus:ring-2 focus:ring-[#ff7f00] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input 
                      type="checkbox"
                      id="wp-cookies"
                      checked={commentForm.saveConsent}
                      onChange={(e) => setCommentForm({ ...commentForm, saveConsent: e.target.checked })}
                      className="rounded text-[#ff7f00] focus:ring-[#ff7f00]"
                    />
                    <label htmlFor="wp-cookies" className="text-xs text-zinc-600 cursor-pointer">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="bg-[#ff7f00] hover:bg-[#e67200] text-white font-bold px-8 py-3 rounded-full text-sm transition shadow-md cursor-pointer"
                    >
                      Post Comment
                    </button>
                  </div>

                </form>
              </div>

            </section>

            {/* =========================================================================
                4. POST NAVIGATION (Previous & Next Article Controls)
               ========================================================================= */}
            <nav className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {prevPost ? (
                <button
                  onClick={() => handlePostClick(prevPost.id)}
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-zinc-50 transition text-left cursor-pointer group w-full sm:w-1/2"
                >
                  <img 
                    src={prevPost.thumbnail} 
                    alt={prevPost.title} 
                    className="w-14 h-14 rounded-xl object-cover group-hover:scale-105 transition"
                  />
                  <div>
                    <span className="text-xs text-zinc-400 font-semibold uppercase block">Previous Post</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-800 group-hover:text-[#ff7f00] transition line-clamp-1">
                      {prevPost.title}
                    </span>
                  </div>
                </button>
              ) : <div />}

              {nextPost ? (
                <button
                  onClick={() => handlePostClick(nextPost.id)}
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-zinc-50 transition text-right cursor-pointer group justify-end w-full sm:w-1/2"
                >
                  <div>
                    <span className="text-xs text-zinc-400 font-semibold uppercase block">Next Post</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-800 group-hover:text-[#ff7f00] transition line-clamp-1">
                      {nextPost.title}
                    </span>
                  </div>
                  <img 
                    src={nextPost.thumbnail} 
                    alt={nextPost.title} 
                    className="w-14 h-14 rounded-xl object-cover group-hover:scale-105 transition"
                  />
                </button>
              ) : <div />}

            </nav>

          </main>

          {/* RIGHT SIDEBAR (4 COLS) */}
          <aside className="lg:col-span-4 space-y-10 pl-0 lg:pl-4">

            {/* 1. SEARCH WIDGET */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search …"
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
                {BLOG_POSTS_DATA.map((rp) => (
                  <div 
                    key={rp.id}
                    onClick={() => handlePostClick(rp.id)}
                    className="flex items-center gap-3.5 group cursor-pointer"
                  >
                    <img
                      src={rp.thumbnail}
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
                ))}
              </div>
            </div>

            {/* 3. CATEGORIES WIDGET */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight pb-1">
                Categories
              </h3>
              <ul className="divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80">
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        window.location.hash = "#blog-standard";
                      }}
                      className="w-full py-2.5 text-left text-xs sm:text-sm font-semibold text-zinc-700 hover:text-[#ff7f00] transition-all cursor-pointer block"
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
    </div>
  );
}
