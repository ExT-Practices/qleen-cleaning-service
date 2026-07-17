import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import HowItWorks from "./Components/Howworks";
import CleaningServicesStack from "./Components/Plans";
import Cards from "./Components/Cards";
import Multiple from "./Components/Multiple-section";
import ServicePriceList from "./Components/Service-price-list";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CleaningServicesStack />
      <AboutUs />
      <Cards />
      <Multiple />
      <ServicePriceList />
    </div>

  );
}

export default App;