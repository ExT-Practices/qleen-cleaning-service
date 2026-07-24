import React from 'react';

const blogPosts = [
  {
    id: 1,
    date: 'July 20, 2025',
    title: 'How to Clean All Types of Cutting Boards',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-925x660.jpg',
    link: '#',
    cardStyle: 'bg-white p-4 shadow-sm text-left',
    imageAspect: 'aspect-[4/3]',
    titleColor: 'text-[#1f2937]',
    dateColor: 'text-[#ff7a00] italic font-serif',
    overlay: false
  },
  {
    id: 2,
    date: 'July 10, 2025',
    title: 'How To Clean and Maintain Your Sofa Bed',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_12-600x750.jpg',
    link: '#',
    cardStyle: 'relative overflow-hidden text-left text-white min-h-[360px] flex flex-col justify-end p-6',
    imageAspect: 'absolute inset-0 w-full h-full object-cover',
    titleColor: 'text-white font-bold',
    dateColor: 'text-white/90 italic font-serif',
    overlay: true
  },
  {
    id: 3,
    date: 'June 30, 2025',
    title: 'Best Robot Vacuums for Pet Hair in 2025',
    image: 'https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-925x660.jpg',
    link: '#',
    cardStyle: 'bg-white p-4 shadow-sm text-left',
    imageAspect: 'aspect-[4/3]',
    titleColor: 'text-[#1f2937]',
    dateColor: 'text-[#ff7a00] italic font-serif',
    overlay: false
  }
];

const CleaningTips = () => {
  return (
    <section className="bg-[#faf8f5] py-16 sm:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <span 
          className="text-[#ff7a00] text-xl md:text-2xl font-serif italic mb-2 block"
          style={{ fontFamily: "'Dancing Script', 'Caveat', cursive, serif" }}
        >
          Get to know our
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1f2937] mb-10 sm:mb-12 tracking-tight">
          Cleaning Tips And Hacks
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10 sm:mb-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {post.overlay ? (
                /* Card 2: Full Image with Text Overlay */
                <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] flex flex-col justify-end p-6 bg-slate-900/30">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative z-10 text-left">
                    <span className="text-white/90 italic font-serif text-sm block mb-1">
                      {post.date}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ) : (
                /* Card 1 & 3: Standard Card Layout */
                <div className="bg-white p-5 rounded-3xl flex flex-col h-full">
                  <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <span className="text-[#ff7a00] italic font-serif text-sm block mb-1 text-left">
                    {post.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1f2937] text-left leading-snug">
                    {post.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <a
          href="#blog"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#ff7a00] text-white font-medium text-base shadow-md hover:bg-[#e06b00] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default CleaningTips;
