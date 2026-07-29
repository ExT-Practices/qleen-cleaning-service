import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    pageKey: "home",
    subMenu: [
      { name: "Home 01", href: "#home" },
      { name: "Home 02", href: "#home" },
    ],
  },
  {
    name: "About",
    href: "#about-page",
    pageKey: "about",
    subMenu: [
      { name: "About Us", href: "#about-page" },
      { name: "Testimonials", href: "#about-page" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    name: "Services",
    href: "#services",
    pageKey: "services",
    subMenu: [
      { name: "Our Services", href: "#services" },
      { name: "Single Service", href: "#services" },
      { name: "Prices", href: "#prices" },
      { name: "Get Quote", href: "#quote" },
    ],
  },
  {
    name: "Pages",
    href: "#",
    isMegaMenu: true,
    subMenu: [
      {
        name: "Blog",
        href: "#",
        childMenu: [
          { name: "Standard View", href: "#" },
          { name: "Columns View", href: "#" },
          { name: "Grid View", href: "#" },
        ],
      },
      {
        name: "Portfolio",
        href: "#",
        childMenu: [
          { name: "Standard View", href: "#" },
          { name: "Columns View", href: "#" },
          { name: "Grid View", href: "#" },
        ],
      },
      {
        name: "Shop",
        href: "#",
        childMenu: [
          { name: "Products", href: "#" },
          { name: "Cart", href: "#" },
          { name: "Checkout", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Elements",
    href: "#",
    isMegaMenu: true,
    subMenu: [
      {
        name: "Base",
        href: "#",
        childMenu: [
          { name: "Headlines", href: "#" },
          { name: "Buttons", href: "#" },
          { name: "Icons", href: "#" },
        ],
      },
    ],
  },
];

export default function Navbar({ currentPage = "home", setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  // Force solid white navbar on About page, Services page, or when scrolled
  const isWhiteHeader = currentPage === "about" || currentPage === "services" || isScrolled;

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
      window.location.hash = href.replace('#', '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isWhiteHeader
          ? "bg-white shadow-sm border-b border-zinc-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            if (setCurrentPage) setCurrentPage("home");
            window.location.hash = "home";
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="transition transform hover:scale-105 duration-300 focus:outline-none cursor-pointer"
        >
          <img
            src={
              isWhiteHeader
                ? "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/logo_black.png"
                : "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/09/logo_white.png"
            }
            className="h-10 w-auto object-contain transition-all duration-300"
            alt="Qleen Logo"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;
            const isMega = item.isMegaMenu;
            const isActive =
              (currentPage === "about" && item.name === "About") ||
              (currentPage === "services" && item.name === "Services") ||
              (currentPage === "home" && item.name === "Home");

            return (
              <div key={item.name} className={`${isMega ? "static" : "relative"} group py-2`}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.pageKey, item.href)}
                  className={`flex items-center gap-1 font-semibold text-[15px] transition-colors duration-200 relative py-1 ${
                    isWhiteHeader
                      ? "text-zinc-800 hover:text-[#ff7f00]"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  {item.name}
                  {hasSubMenu && <ChevronDown className="w-4 h-4 opacity-70" />}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#ff7f00] rounded-full" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {hasSubMenu && !isMega && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="w-56 bg-white border border-zinc-100 rounded-2xl shadow-xl py-3">
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={(e) => {
                            if (sub.name.includes("About")) {
                              handleNavClick(e, "about", "#about-page");
                            } else if (sub.name.includes("Service") || sub.name.includes("Prices") || sub.name.includes("Quote") || sub.name.includes("Services")) {
                              handleNavClick(e, "services", "#services");
                            } else if (sub.name.includes("Home")) {
                              handleNavClick(e, "home", "#home");
                            }
                          }}
                          className="block px-6 py-2.5 text-[14px] font-medium text-zinc-700 hover:text-[#ff7f00] hover:bg-zinc-50 transition duration-200"
                        >
                          {sub.name}
                        </a>
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
          {/* Phone Number Widget matching theme screenshot */}
          <a
            href="tel:8442429464"
            className="inline-flex items-center gap-2.5 group transition duration-200"
          >
            <span className="w-10 h-10 rounded-full bg-[#ff7f00] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
              <Phone className="w-4 h-4" />
            </span>
            <span
              className={`font-bold text-[15px] ${
                isWhiteHeader ? "text-zinc-900" : "text-white"
              }`}
            >
              (844) 242-9464
            </span>
          </a>

          {/* Request Service Button */}
          <a
            href="#contact"
            className="bg-[#ff7f00] hover:bg-[#e06f00] active:scale-95 text-white px-7 py-3 rounded-full text-[14px] font-bold tracking-wide shadow-md hover:shadow-orange-500/30 transition-all duration-300"
          >
            Request Service
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 rounded-xl transition ${
            isWhiteHeader
              ? "text-zinc-800 hover:bg-zinc-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
