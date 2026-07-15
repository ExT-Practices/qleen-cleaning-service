import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/Howworks";
import CleaningServicesStack from "./Components/Plans";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />  
      <Hero />
      <HowItWorks />
      <CleaningServicesStack />
    </div>
    
  );
}

export default App;