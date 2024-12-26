import AboutUs from "./components/About";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./components/Services";
import CompletedProjects from "./components/CompleteProjects";
import Footer from "./components/Footer";
import ActiveProjects from "./components/ActiveProjects ";

export default function App() {
  return (
    <>

      {/* Hero Section */}
      <section id="home" style={{"height": "80vh;"}} className="h-screen bg-gray-100 flex items-center justify-center">
        <HeroSection />
      </section>

      {/* About Us Section */}
      <section id="about" className="">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" style={{"height": "80vh;"}} className="">
        <ServicesPage />
      </section>

      {/* Completed Projects Section */}
      <section id="projects"  style={{"height": "80vh;"}} className="">
        <CompletedProjects />
      </section>
      <section id="active" style={{"height": "80vh;"}} className="">
        <ActiveProjects />
      </section>
      

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-800 text-gray-200">
        <Footer />
      </footer>
    </>
  );
}
