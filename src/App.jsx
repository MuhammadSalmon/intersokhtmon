import AboutUs from "./components/About";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./components/Services";
import Navbar from "./components/Navbar";
import CompletedProjects from "./components/CompleteProjects";
import Footer from "./components/Footer";
import ActiveProjects from "./components/ActiveProjects ";
import ContactPage from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <HeroSection />
      </section>

      {/* About Us Section */}
      <section id="about" className="">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="">
        <ServicesPage />
      </section>

      {/* Completed Projects Section */}
      <section id="projects" className="">
        <CompletedProjects />
      </section>
      <section id="projects" className="">
        <ActiveProjects />
      </section>
      

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-800 text-gray-200">
        <Footer />
      </footer>
    </>
  );
}
