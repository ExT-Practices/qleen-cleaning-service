import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "https://qleen.bold-themes.com/demo-01/",
    subMenu: [
      { name: "Home 01", href: "https://qleen.bold-themes.com/demo-01/" },
      { name: "Home 02", href: "https://qleen.bold-themes.com/demo-01/home/home-02/" },
    ],
  },
  {
    name: "About",
    href: "https://qleen.bold-themes.com/demo-01/about/",
    subMenu: [
      { name: "About Us", href: "https://qleen.bold-themes.com/demo-01/about/" },
      { name: "Testimonials", href: "https://qleen.bold-themes.com/demo-01/about/testimonials/" },
      { name: "Contact", href: "https://qleen.bold-themes.com/demo-01/about/contact/" },
      { name: "Error Page – 404", href: "https://qleen.bold-themes.com/demo-01/services/404-error/" },
      { name: "Under Construction", href: "https://qleen.bold-themes.com/demo-01/services/under-construction/" },
    ],
  },
  {
    name: "Services",
    href: "https://qleen.bold-themes.com/demo-01/services/",
    subMenu: [
      { name: "Our Services", href: "https://qleen.bold-themes.com/demo-01/services/" },
      { name: "Single Service", href: "https://qleen.bold-themes.com/demo-01/services/single-service/" },
      { name: "Prices", href: "https://qleen.bold-themes.com/demo-01/services/prices/" },
      { name: "Get Quote", href: "https://qleen.bold-themes.com/demo-01/services/get-quote/" },
    ],
  },
  {
    name: "Pages",
    href: "#",
    isMegaMenu: true,
    subMenu: [
      {
        name: "Blog",
        href: "https://qleen.bold-themes.com/demo-01/blog/",
        childMenu: [
          { name: "Standard View (Title on top)", href: "https://qleen.bold-themes.com/demo-01/blog/" },
          { name: "Standard View (Image on top)", href: "/demo-01/blog/?blog_list_view=standard-top-image" },
          { name: "Columns View", href: "/demo-01/blog/?blog_list_view=columns&sidebar_position=none&blog_list_headline_size=medium" },
          { name: "Zig-Zag View", href: "/demo-01/blog/?blog_list_view=zig-zag&sidebar_position=none&blog_list_headline_size=medium" },
          { name: "Simple View", href: "/demo-01/blog/?blog_list_view=simple" },
          { name: "Grid View", href: "https://qleen.bold-themes.com/demo-01/blog/blog-grid/" },
        ],
      },
      {
        name: "Portfolio",
        href: "https://qleen.bold-themes.com/demo-01/portfolio/",
        childMenu: [
          { name: "Standard View (Title on top)", href: "https://qleen.bold-themes.com/demo-01/portfolio/" },
          { name: "Standard View (Image on top)", href: "/demo-01/portfolio/?pf_list_view=standard-top-image" },
          { name: "Columns View", href: "/demo-01/portfolio/?pf_list_view=columns&sidebar_position=none&pf_list_headline_size=medium" },
          { name: "Zig-Zag View", href: "/demo-01/portfolio/?pf_list_view=zig-zag&sidebar_position=none&pf_list_headline_size=medium" },
          { name: "Simple View", href: "/demo-01/portfolio/?pf_list_view=simple&sidebar_position=right" },
          { name: "Grid View", href: "https://qleen.bold-themes.com/demo-01/portfolio-grid/" },
        ],
      },
      {
        name: "Shop",
        href: "https://qleen.bold-themes.com/demo-01/shop/",
        childMenu: [
          { name: "Products", href: "https://qleen.bold-themes.com/demo-01/shop/" },
          { name: "On Sale", href: "https://qleen.bold-themes.com/demo-01/shop/on-sale/" },
          { name: "Cart", href: "https://qleen.bold-themes.com/demo-01/shop/cart/" },
          { name: "Checkout", href: "https://qleen.bold-themes.com/demo-01/shop/checkout/" },
          { name: "Order Tracking Form", href: "https://qleen.bold-themes.com/demo-01/shop/order-tracking-form/" },
          { name: "My Account", href: "https://qleen.bold-themes.com/demo-01/shop/my-account/" },
        ],
      },
    ],
  },
  {
    name: "Elements",
    href: "https://qleen.bold-themes.com/demo-01/elements/",
    isMegaMenu: true,
    subMenu: [
      {
        name: "Base",
        href: "#",
        childMenu: [
          { name: "Headlines", href: "https://qleen.bold-themes.com/demo-01/elements/headlines/" },
          { name: "Buttons", href: "https://qleen.bold-themes.com/demo-01/elements/buttons/" },
          { name: "Icons", href: "https://qleen.bold-themes.com/demo-01/elements/icons/" },
          { name: "Service", href: "https://qleen.bold-themes.com/demo-01/elements/service-element/" },
          { name: "Images", href: "https://qleen.bold-themes.com/demo-01/elements/images/" },
          { name: "Inner Row & Column", href: "https://qleen.bold-themes.com/demo-01/elements/inner-row-column/" },
          { name: "Countdown & Counter", href: "https://qleen.bold-themes.com/demo-01/elements/countdown-counter/" },
        ],
      },
      {
        name: "Common",
        href: "#",
        childMenu: [
          { name: "Progress Bar", href: "https://qleen.bold-themes.com/demo-01/elements/progress-bar/" },
          { name: "Price List & Price", href: "https://qleen.bold-themes.com/demo-01/elements/price-list-price/" },
          { name: "Google Maps", href: "https://qleen.bold-themes.com/demo-01/elements/google-maps/" },
          { name: "Accordion", href: "https://qleen.bold-themes.com/demo-01/elements/accordion/" },
          { name: "Tabs", href: "https://qleen.bold-themes.com/demo-01/elements/tabs/" },
          { name: "Card Icon", href: "https://qleen.bold-themes.com/demo-01/elements/card-icon/" },
          { name: "Card Image", href: "https://qleen.bold-themes.com/demo-01/elements/card-image/" },
        ],
      },
      {
        name: "Presentational",
        href: "#",
        childMenu: [
          { name: "Dropdown", href: "https://qleen.bold-themes.com/demo-01/elements/dropdown/" },
          { name: "Interactive Item", href: "https://qleen.bold-themes.com/demo-01/elements/interactive-item/" },
          { name: "Moving Cards", href: "https://qleen.bold-themes.com/demo-01/elements/moving-cards/" },
          { name: "Slider", href: "https://qleen.bold-themes.com/demo-01/elements/slider/" },
          { name: "Testimonial", href: "https://qleen.bold-themes.com/demo-01/elements/testimonial/" },
          { name: "Row Layouts", href: "https://qleen.bold-themes.com/demo-01/elements/row-layouts/" },
          { name: "Blog Layouts", href: "https://qleen.bold-themes.com/demo-01/elements/blog-layouts/" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (menuName) => {
    if (activeMobileMenu === menuName) {
      setActiveMobileMenu(null);
      setActiveMobileSubMenu(null);
    } else {
      setActiveMobileMenu(menuName);
      setActiveMobileSubMenu(null);
    }
  };

  const toggleMobileSubMenu = (subMenuName) => {
    if (activeMobileSubMenu === subMenuName) {
      setActiveMobileSubMenu(null);
    } else {
      setActiveMobileSubMenu(subMenuName);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      {/* Full-width white background layer with rounded bottom corners when scrolled */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-md rounded-b-[40px]"
            : "bg-transparent"
        }`}
      ></div>

      {/* The relative container serves as the anchor for the absolute mega menu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="transition transform hover:scale-105 duration-300">
          <img
            src={
              isScrolled
                ? "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/logo_black.png"
                : "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/09/logo_white.png"
            }
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            alt="Qleen Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;
            const isMega = item.isMegaMenu;

            return (
              <div key={item.name} className={`${isMega ? "static" : "relative"} group py-2`}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1 font-semibold text-[15px] uppercase tracking-wider transition-colors duration-300 ${
                    isScrolled
                      ? "text-zinc-800 hover:text-orange-500"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  {item.name}
                  {hasSubMenu && <ChevronDown className="w-4 h-4 opacity-70" />}
                </a>

                {/* Standard Dropdown Menu */}
                {hasSubMenu && !isMega && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="w-56 bg-white border border-zinc-100 rounded-2xl shadow-xl py-4">
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-2.5 text-[14px] font-medium text-zinc-700 hover:text-orange-500 hover:bg-orange-50/50 transition duration-200"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu Dropdown */}
                {hasSubMenu && isMega && (
                  <div className="absolute left-6 right-6 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 pointer-events-none">
                    <div className="w-full bg-white border border-zinc-100 rounded-3xl shadow-2xl p-8 grid grid-cols-3 gap-8 pointer-events-auto">
                      {item.subMenu.map((sub) => (
                        <div key={sub.name} className="flex flex-col gap-4">
                          <h4 className="text-zinc-950 font-bold uppercase tracking-wider text-[14px] border-b border-zinc-100 pb-2 flex items-center justify-between">
                            <span>{sub.name}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {sub.childMenu?.map((child) => (
                              <li key={child.name}>
                                <a
                                  href={child.href}
                                  className="group/link inline-flex items-center gap-1.5 text-[14px] text-zinc-600 hover:text-orange-500 transition-colors duration-200"
                                >
                                  <span className="w-1.5 h-[1.5px] bg-orange-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-200"></span>
                                  {child.name}
                                </a>
                              </li>
                            ))}
                          </ul>
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
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+13801006789"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-[14px] font-bold tracking-wider uppercase transition-all duration-300 ${
              isScrolled
                ? "border-zinc-300 text-zinc-800 hover:border-orange-500 hover:text-orange-500"
                : "border-white/30 text-white hover:border-orange-400 hover:text-orange-400"
            }`}
          >
            <Phone className="w-4 h-4" />
            +1 (380) 100 6789
          </a>

          <a
            href="https://qleen.bold-themes.com/demo-01/services/"
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-7 py-3.5 rounded-full text-[14px] font-bold tracking-wider uppercase shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300"
          >
            Request Service
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 rounded-xl transition ${
            isScrolled
              ? "text-zinc-800 hover:bg-zinc-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[80px] bottom-0 bg-white z-40 transition-all duration-300 lg:hidden overflow-y-auto border-t border-zinc-100 ${
          isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              const isExpanded = activeMobileMenu === item.name;

              return (
                <div key={item.name} className="border-b border-zinc-100 py-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href === "#" ? undefined : item.href}
                      onClick={() => item.href === "#" && toggleMobileMenu(item.name)}
                      className="text-[16px] font-bold uppercase tracking-wider text-zinc-800 hover:text-orange-500 py-1 flex-grow"
                    >
                      {item.name}
                    </a>
                    {hasSubMenu && (
                      <button
                        onClick={() => toggleMobileMenu(item.name)}
                        className="p-2 text-zinc-500 hover:text-orange-500 transition-colors"
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Container */}
                  {hasSubMenu && isExpanded && (
                    <div className="mt-3 pl-4 flex flex-col gap-2 border-l-2 border-orange-100">
                      {!item.isMegaMenu
                        ? item.subMenu.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="block py-2 text-[15px] font-medium text-zinc-600 hover:text-orange-500"
                            >
                              {sub.name}
                            </a>
                          ))
                        : item.subMenu.map((sub) => {
                            const isSubExpanded = activeMobileSubMenu === sub.name;
                            return (
                              <div key={sub.name} className="py-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-[14px] font-bold text-zinc-800 uppercase tracking-wide">
                                    {sub.name}
                                  </span>
                                  <button
                                    onClick={() => toggleMobileSubMenu(sub.name)}
                                    className="p-1 text-zinc-400 hover:text-orange-500"
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform duration-300 ${
                                        isSubExpanded ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>
                                </div>
                                {isSubExpanded && (
                                  <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-zinc-100">
                                    {sub.childMenu?.map((child) => (
                                      <a
                                        key={child.name}
                                        href={child.href}
                                        className="block py-1.5 text-[14px] text-zinc-500 hover:text-orange-500"
                                      >
                                        {child.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Quick Contacts */}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-zinc-100">
            <a
              href="tel:+13801006789"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-zinc-300 text-zinc-800 text-[14px] font-bold tracking-wider uppercase hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Phone className="w-4 h-4" />
              +1 (380) 100 6789
            </a>

            <a
              href="https://qleen.bold-themes.com/demo-01/services/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-full text-[14px] font-bold tracking-wider uppercase shadow-lg shadow-orange-500/20 transition"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
