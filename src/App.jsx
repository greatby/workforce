import HeroSection from "./components/Hero";
import WindsurfNav from "./components/Navbar";
import ImageHighlightSlider from "./components/Slider";
import { sectionData,partnerData} from "../utils/data";
import FeatureCards from "./components/FeatureCards";

import WindsurfStatsLayout from "./components/StatsSection";
import CaseStudyTestimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import FadeInWhenVisible from "./components/FadeEffects";
import VisionSection from "./components/VisionSection";

function App() {
  return (
    <>
      <WindsurfNav />
      <FadeInWhenVisible>
        <HeroSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="zoom-in" delay={0.1}>
        <ImageHighlightSlider sectionData={sectionData} />
      </FadeInWhenVisible>
      <VisionSection />
      <FadeInWhenVisible type="slide-right" delay={0.2}>
        <FeatureCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ImageHighlightSlider sectionData={partnerData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-left" delay={0.3}>
        <WindsurfStatsLayout />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible type="fade-down" delay={0.4}>
        <CaseStudyTestimonials />
      </FadeInWhenVisible> */}
      <Footer />
    </>
  );
}
export default App;
