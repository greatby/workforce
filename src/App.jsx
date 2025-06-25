import HeroSection from "./components/Hero";
import WindsurfNav from "./components/Navbar";
import ImageHighlightSlider from "./components/Slider";
import { slides } from "../utils/data";
import FeatureCards from "./components/FeatureCards";

import WindsurfStatsLayout from "./components/StatsSection";
import CaseStudyTestimonials from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
  return (
   <>
   <WindsurfNav />
   <HeroSection />
   <ImageHighlightSlider slides={slides}/>
   <FeatureCards />
   <WindsurfStatsLayout/>
   <CaseStudyTestimonials />
   <Footer />
   </>
  );
}
export default App;
