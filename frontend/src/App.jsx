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
      } else if (hash === "#blog-standard" || hash === "#blog") {
        setCurrentPage("blog-standard");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
        <BlogStandardPage />
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