import AboutUs from "./components/About";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./components/Services_1";
import Footer from "./components/Footer";
import ActiveProjects from "./components/ActiveProjects ";
import Statistics from "./components/Statistics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <HeroSection />
      </section>

      {/* About Us Section */}
      <section id="about" className="">
        <AboutUs />
      </section>
      <section id="statistics" className="">
        <Statistics />
      </section>
      {/* Services Section */}
      {/* <section id="services" style={{"height": "80vh;"}} className="">
        <ServicesPage />
      </section> */}

      {/* Completed Projects Section */}
      
      <section id="active"  className="">
        <ActiveProjects />
      </section>

      {/* Footer Section */}
        <Footer className="w-full bg-gray-800 text-white" />
    </div>
  );
}
