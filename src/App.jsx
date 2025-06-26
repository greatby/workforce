import HeroSection from "./components/Hero";
import WindsurfNav from "./components/Navbar";
import ImageHighlightSlider from "./components/Slider";
import { slides } from "../utils/data";
import FeatureCards from "./components/FeatureCards";

import WindsurfStatsLayout from "./components/StatsSection";
import CaseStudyTestimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import FadeInWhenVisible from "./components/FadeEffects";

function App() {
  return (
    <>
      <WindsurfNav />
      <FadeInWhenVisible>
        <HeroSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="zoom-in" delay={0.1}>
        <ImageHighlightSlider slides={slides} />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-right" delay={0.2}>
        <FeatureCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-left" delay={0.3}>
        <WindsurfStatsLayout />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="fade-down" delay={0.4}>
        <CaseStudyTestimonials />
      </FadeInWhenVisible>
      <Footer />
    </>
  );
}
export default App;
