export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_image_02.jpg")',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content Container (Centered horizontally and vertically) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center px-4 py-8">

          {/* Small Top Text / Cursive Badge with connecting line */}
          <div className="relative self-start ml-4 sm:ml-12 md:ml-16 mb-6 select-none w-[340px] h-[50px]">
            {/* The Badge Line Artwork */}
            <svg className="absolute inset-0 w-full h-full text-[#f2871b]" viewBox="0 0 340 50" fill="none">
              {/* Outer halo */}
              <circle cx="16" cy="34" r="10" fill="currentColor" fillOpacity="0.25" />
              {/* Inner circle */}
              <circle cx="16" cy="34" r="4.5" fill="currentColor" />
              {/* Connector line, underline, and tick */}
              <path
                d="M 16 34 L 44 14 L 320 14 L 320 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Tiny dot on top of tick */}
              <circle cx="320" cy="4" r="2.5" fill="currentColor" />
            </svg>
            
            {/* The Text */}
            <span className="absolute left-[48px] bottom-[34px] text-white text-2xl sm:text-3xl font-normal font-['Caveat'] tracking-wide leading-none">
              Window Cleaning from $29
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-tight">
            We Clean, You Relax.
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl leading-8">
            Professional residential and commercial cleaning services with
            experienced cleaners, affordable prices, and guaranteed quality.
          </p>

          {/* Button with shrinking outer glow/halo on hover */}
          <div className="relative mt-10 inline-block group">
            {/* Glow / Halo Effect */}
            <div className="absolute inset-[-10px] bg-[#f2871b]/30 rounded-full transition-all duration-300 ease-out group-hover:inset-0 group-hover:opacity-0 pointer-events-none"></div>

            <button className="relative bg-[#f2871b] hover:bg-[#d97715] text-white font-semibold px-10 py-4 rounded-full transition duration-300 shadow-2xl active:scale-95">
              Get a Quote
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}