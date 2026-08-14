import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    pageKey: "home",
    subMenu: [
      { name: "Home 01", href: "#home", pageKey: "home" },
      { name: "Home 02", href: "#home", pageKey: "home" },
    ],
  },
  {
    name: "About",
    href: "#about-page",
    pageKey: "about",
    subMenu: [
      { name: "About Us", href: "#about-page", pageKey: "about" },
      { name: "Testimonials", href: "#testimonials-page", pageKey: "testimonials" },
      { name: "Contact", href: "#contact", pageKey: "contact" },
      { name: "Error Page – 404", href: "#404", pageKey: "404" },
      { name: "Under Construction", href: "#construction", pageKey: "construction" },
    ],
  },
  {
    name: "Services",
    href: "#services",
    pageKey: "services",
    subMenu: [
      { name: "Our Services", href: "#services", pageKey: "services" },
      { name: "Single Service", href: "#single-service", pageKey: "single-services" },
      { name: "Prices", href: "#prices" },
      { name: "Get Quote", href: "#quote" },
    ],
  },
  {
    name: "Pages",
    href: "#pages",
    isMegaMenu: true,
    columns: [
      {
        title: "Blog",
        items: [
          { name: "Standard View (Title on top)", href: "#blog-standard", pageKey: "blog-standard" },
          { name: "Standard View (Image on top)", href: "#blog-standard", pageKey: "blog-standard" },
          { name: "Columns View", href: "#blog-standard", pageKey: "blog-standard" },
          { name: "Zig-Zag View", href: "#blog-standard", pageKey: "blog-standard" },
          { name: "Simple View", href: "#blog-standard", pageKey: "blog-standard" },
          { name: "Grid View", href: "#blog-standard", pageKey: "blog-standard" },
        ],
      },
      {
        title: "Portfolio",
        items: [
          { name: "Standard View (Title on top)", href: "#" },
          { name: "Standard View (Image on top)", href: "#" },
          { name: "Columns View", href: "#" },
          { name: "Zig-Zag View", href: "#" },
          { name: "Simple View", href: "#" },
          { name: "Grid View", href: "#" },
        ],
      },
      {
        title: "Shop",
        items: [
          { name: "Products", href: "#shop", pageKey: "shop" },
          { name: "On Sale", href: "#shop", pageKey: "shop" },
          { name: "Cart", href: "#cart", pageKey: "cart" },
          { name: "Checkout", href: "#shop", pageKey: "shop" },
          { name: "Order Tracking Form", href: "#shop", pageKey: "shop" },
          { name: "My Account", href: "#shop", pageKey: "shop" },
        ],
      },
    ],
  },
  {
    name: "Elements",
    href: "#elements",
    isMegaMenu: true,
    columns: [
      {
        title: "Base",
        items: [
          { name: "Headlines", href: "#" },
          { name: "Buttons", href: "#" },
          { name: "Icons", href: "#" },
          { name: "Service", href: "#" },
          { name: "Images", href: "#" },
          { name: "Inner Row & Column", href: "#" },
          { name: "Countdown & Counter", href: "#" },
        ],
      },
      {
        title: "Common",
        items: [
          { name: "Progress Bar", href: "#" },
          { name: "Price List & Price", href: "#" },
          { name: "Google Maps", href: "#" },
          { name: "Accordion", href: "#" },
          { name: "Tabs", href: "#" },
          { name: "Card Icon", href: "#" },
          { name: "Card Image", href: "#" },
        ],
      },
      {
        title: "Presentational",
        items: [
          { name: "Dropdown", href: "#" },
          { name: "Interactive Item", href: "#" },
          { name: "Moving Cards", href: "#" },
          { name: "Slider", href: "#" },
          { name: "Testimonial", href: "#" },
          { name: "Row Layouts", href: "#" },
          { name: "Blog Layouts", href: "#" },
        ],
      },
    ],
  },
];

export default function Navbar({ currentPage = "home", setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  // Header is transparent at top for home, shop, and cart pages
  const isTransparent = (currentPage === "home" || currentPage === "shop" || currentPage === "cart") && !isScrolled;
  const isDarkText = currentPage === "shop" || currentPage === "cart" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, pageKey, href) => {
    if (pageKey && setCurrentPage) {
      e.preventDefault();
      setCurrentPage(pageKey);
      window.location.hash = href.replace("#", "");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${!isTransparent
        ? "bg-white shadow-sm border-b border-zinc-100 py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            if (setCurrentPage) setCurrentPage("home");
            window.location.hash = "home";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="transition transform hover:scale-105 duration-300 focus:outline-none cursor-pointer"
        >
          <img
            src={
              isDarkText
                ? "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/logo_black.png"
                : "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/09/logo_white.png"
            }
            className="h-10 w-auto object-contain transition-all duration-300"
            alt="Qleen Logo"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;
            const isMega = item.isMegaMenu;
            const isActive =
              (currentPage === "about" && item.name === "About") ||
              (currentPage === "services" && item.name === "Services") ||
              (currentPage === "testimonials" && item.name === "About") ||
              (currentPage === "contact" && item.name === "About") ||
              (currentPage === "shop" && item.name === "Pages") ||
              (currentPage === "home" && item.name === "Home");

            return (
              <div key={item.name} className="relative group py-2">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.pageKey, item.href)}
                  className={`flex items-center gap-1.5 font-semibold text-[15px] px-4 py-2 rounded-t-2xl transition-all duration-200 relative ${isDarkText
                    ? "text-zinc-800 group-hover:text-[#ff7f00] group-hover:bg-zinc-50"
                    : "text-white group-hover:text-[#ff7f00] group-hover:bg-white group-hover:shadow-md"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-[#ff7f00] rounded-full" />
                  )}
                </a>

                {/* Standard Dropdown Menu (For Home, About, Services) */}
                {hasSubMenu && !isMega && (
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-50 pt-0">
                    <div className="w-64 bg-white border border-zinc-100 rounded-b-2xl rounded-tr-2xl shadow-2xl py-2 divide-y divide-zinc-100/80">
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={(e) => {
                            if (sub.pageKey) {
                              handleNavClick(e, sub.pageKey, sub.href);
                            }
                          }}
                          className="block px-6 py-3 text-[14.5px] font-medium text-zinc-800 hover:text-[#ff7f00] hover:bg-orange-50/40 transition duration-200"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu Dropdown (For Pages & Elements) */}
                {isMega && (
                  <div className="absolute -left-36 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-50 pt-0">
                    <div className="w-[840px] bg-white border border-zinc-100 rounded-b-3xl rounded-tr-3xl shadow-2xl p-8 grid grid-cols-3 gap-8">
                      {item.columns.map((col, idx) => (
                        <div key={idx} className="space-y-3">
                          {/* Column Title with Orange Underline */}
                          <div className="pb-2 border-b-2 border-[#ff7f00] mb-3">
                            <h4 className="font-bold text-zinc-900 text-[15px] tracking-wide">
                              {col.title}
                            </h4>
                          </div>

                          {/* Column Links */}
                          <div className="space-y-1.5 divide-y divide-zinc-100/60">
                            {col.items.map((subItem, sIdx) => (
                              <a
                                key={sIdx}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.pageKey, subItem.href)}
                                className="block pt-2 text-[14px] font-medium text-zinc-700 hover:text-[#ff7f00] transition duration-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Phone Number Widget */}
          <a
            href="tel:8442429464"
            className="inline-flex items-center gap-2.5 group transition duration-200"
          >
            <span className="w-10 h-10 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
              <Phone className="w-4 h-4" />
            </span>
            <span
              className={`font-bold text-[15px] ${isDarkText ? "text-zinc-900" : "text-white"
                }`}
            >
              (844) 242-9464
            </span>
          </a>

          {/* Request Service Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact", "#contact")}
            className="group relative flex items-center justify-center overflow-hidden rounded-full border-2 border-[#ff7f00] bg-[#ff7f00] px-7 py-3 text-[14px] font-bold tracking-wide text-white shadow-md active:scale-95 transition-transform duration-300 cursor-pointer"
          >
            {/* Center pill that grows in width + height */}
            <span
              className="
      absolute left-1/2 top-1/2
      h-full w-full
      -translate-x-1/2 -translate-y-1/2
      scale-0
      rounded-full bg-white
      transition-transform duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-100
    "
            />

            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#ff7f00]">
              Request Service
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 rounded-xl transition ${isDarkText
            ? "text-zinc-800 hover:bg-zinc-100"
            : "text-white hover:bg-white/10"
            }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="space-y-2">
              <button
                onClick={() =>
                  setActiveMobileMenu(
                    activeMobileMenu === item.name ? null : item.name
                  )
                }
                className="w-full flex items-center justify-between font-bold text-zinc-900 text-lg py-2 border-b border-zinc-100"
              >
                <span>{item.name}</span>
                {(item.subMenu || item.isMegaMenu) && (
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 transition-transform ${activeMobileMenu === item.name ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Mobile Submenu */}
              {activeMobileMenu === item.name && (
                <div className="pl-4 space-y-2 py-2">
                  {item.subMenu &&
                    item.subMenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => {
                          if (sub.pageKey) {
                            handleNavClick(e, sub.pageKey, sub.href);
                            setIsMobileOpen(false);
                          }
                        }}
                        className="block text-zinc-700 font-medium text-sm py-1.5 hover:text-[#ff7f00]"
                      >
                        {sub.name}
                      </a>
                    ))}

                  {item.isMegaMenu &&
                    item.columns.map((col, idx) => (
                      <div key={idx} className="space-y-1 pt-2">
                        <div className="font-bold text-xs text-[#ff7f00] uppercase tracking-wider">
                          {col.title}
                        </div>
                        {col.items.map((subItem, sIdx) => (
                          <a
                            key={sIdx}
                            href={subItem.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block text-zinc-600 font-medium text-sm py-1 pl-2 hover:text-[#ff7f00]"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
