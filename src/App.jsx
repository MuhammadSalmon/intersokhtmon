import AboutUs from "./components/About";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ActiveProjects from "./components/ActiveProjects ";
import Statistics from "./components/Statistics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nedvizhimost from "./components/nedzh";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className=" ">
        <HeroSection />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>
      
      {/* Statistics Section */}
      <section id="statistics">
        <Statistics />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Completed Projects Section */}
      <section id="projects">
        <ActiveProjects />
      </section>

      {/* Nedvizhimost Section */}
      <section id="nedzh" >
        <Nedvizhimost />
      </section>

      {/* Footer Section */}
      <Footer className="w-full bg-gray-800 text-white" />
    </div>
  );
}
