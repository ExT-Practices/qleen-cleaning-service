import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import UnderConstructionPage from "./pages/UnderConstruction/UnderConstructionPage";
import SingleService from "./pages/Services/Single-service";
import PricesPage from "./pages/Services/PricesPage";
import GetQuotePage from "./pages/Services/GetQuotePage";
import BlogStandardPage from "./pages/Blog/BlogStandardPage";
import BlogSinglePage from "./pages/Blog/BlogSinglePage";
import ShopPage from "./pages/Shop/ShopPage";
import CartPage from "./pages/Shop/CartPage";
import CheckoutPage from "./pages/Shop/CheckoutPage";
import ProductDetailPage from "./pages/Shop/ProductDetailPage";
import MyAccountPage from "./pages/Shop/MyAccountPage";
import OrderTrackingPage from "./pages/Shop/OrderTrackingPage";
import AdminPage from "./pages/AdminPage";
import HowItWorks from "./Components/Howworks";
import CleaningServicesStack from "./Components/Plans";
import Cards from "./Components/Cards";
import Multiple from "./Components/Multiple-section";
import QuickEstimate from "./Components/QuickEstimate";
import ServicePriceList from "./Components/Service-price-list";
import FAQSection from "./Components/FAQSection";
import CleaningTips from "./Components/CleaningTips";
import JoinTeam from "./Components/JoinTeam";
import Footer from "./Components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentBlogSlug, setCurrentBlogSlug] = useState("green-cleaning-eco-friendly-products-that-actually-work");
  const [selectedProductId, setSelectedProductId] = useState("prod-4");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#about" || hash === "#about-page") {
        setCurrentPage("about");
      } else if (hash === "#services" || hash === "#services-page") {
        setCurrentPage("services");
      } else if (hash === "#single-service" || hash === "#single-services") {
        setCurrentPage("single-services");
      } else if (hash === "#testimonials" || hash === "#testimonials-page") {
        setCurrentPage("testimonials");
      } else if (hash === "#contact" || hash === "#contact-page") {
        setCurrentPage("contact");
      } else if (hash === "#prices") {
        setCurrentPage("prices");
      } else if (hash === "#quote") {
        setCurrentPage("quote");
      } else if (hash === "#404") {
        setCurrentPage("404");
      } else if (hash === "#construction") {
        setCurrentPage("construction");
      } else if (hash.startsWith("#blog-single-")) {
        const slug = hash.replace("#blog-single-", "");
        setCurrentBlogSlug(slug);
        setCurrentPage("blog-single");
      } else if (hash === "#blog-single") {
        setCurrentPage("blog-single");
      } else if (hash === "#blog-standard" || hash === "#blog") {
        setCurrentPage("blog-standard");
      } else if (hash.startsWith("#product-")) {
        const pId = hash.replace("#product-", "");
        setSelectedProductId(pId);
        setCurrentPage("product-detail");
      } else if (hash === "#product-detail") {
        setCurrentPage("product-detail");
      } else if (hash === "#cart" || hash === "#shop-cart") {
        setCurrentPage("cart");
      } else if (hash === "#checkout") {
        setCurrentPage("checkout");
      } else if (hash === "#my-account" || hash === "#account") {
        setCurrentPage("account");
      } else if (hash === "#order-tracking" || hash === "#tracking") {
        setCurrentPage("tracking");
      } else if (hash === "#admin" || hash === "#admin-panel") {
        setCurrentPage("admin");
      } else if (hash === "#shop" || hash === "#products") {
        setCurrentPage("shop");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigateBlogSingle = (slug) => {
    setCurrentBlogSlug(slug);
    setCurrentPage("blog-single");
    window.location.hash = `#blog-single-${slug}`;
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage("product-detail");
    window.location.hash = `#product-${productId}`;
  };

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
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== "construction" && (
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "about" ? (
        <AboutPage />
      ) : currentPage === "services" ? (
        <ServicesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === "single-services" ? (
        <SingleService />
      ) : currentPage === "prices" ? (
        <PricesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === "quote" ? (
        <GetQuotePage setCurrentPage={setCurrentPage} />
      ) : currentPage === "testimonials" ? (
        <TestimonialsPage />
      ) : currentPage === "contact" ? (
        <ContactPage />
      ) : currentPage === "404" ? (
        <NotFoundPage setCurrentPage={setCurrentPage} />
      ) : currentPage === "construction" ? (
        <UnderConstructionPage setCurrentPage={setCurrentPage} />
      ) : currentPage === "blog-standard" ? (
        <BlogStandardPage onSelectPost={handleNavigateBlogSingle} />
      ) : currentPage === "blog-single" ? (
        <BlogSinglePage postSlug={currentBlogSlug} onNavigate={handleNavigateBlogSingle} />
      ) : currentPage === "product-detail" ? (
        <ProductDetailPage
          productId={selectedProductId}
          onNavigate={(page, id) => {
            if (page === 'product-detail' && id) {
              handleSelectProduct(id);
            } else {
              setCurrentPage(page);
              window.location.hash = page;
            }
          }}
          onAddToCart={handleAddToCart}
        />
      ) : currentPage === "cart" ? (
        <CartPage
          cartItems={cartItems}
          onNavigateShop={() => {
            setCurrentPage("shop");
            window.location.hash = "shop";
          }}
        />
      ) : currentPage === "checkout" ? (
        <CheckoutPage cartItems={cartItems} />
      ) : currentPage === "account" ? (
        <MyAccountPage />
      ) : currentPage === "tracking" ? (
        <OrderTrackingPage />
      ) : currentPage === "admin" ? (
        <AdminPage />
      ) : currentPage === "shop" ? (
        <ShopPage onSelectProduct={handleSelectProduct} />
      ) : (
        <>
          <Hero />
          <HowItWorks />
          <CleaningServicesStack />
          <AboutUs />
          <Cards />
          <Multiple />
          <QuickEstimate />
          <FAQSection />
          <ServicePriceList />
          <CleaningTips />
          <JoinTeam />
        </>
      )}

      {currentPage !== "construction" && <Footer />}
    </div>
  );
}

export default App;