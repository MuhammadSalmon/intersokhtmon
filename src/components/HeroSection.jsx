import React, { useState, useEffect } from "react";
import image3 from "../assets/blog-2.jpg";
import image2 from "../assets/blog-1.jpg";
import image1 from "../assets/blog-3.jpg";
const slides = [
  {
    image: image3, // Replace with your image URL
    title: "КЛИЕНТО ОРИЕНТИРОВАННАЯ ПОЛИТИКА",
    description: "Выполнение строительно -монтажных работ общегражданских, промышленных и инфраструктурных объектов",
    },
  {
    image: image2, // Replace with your image URL
    title: "ПЕРСОНАЛЬНЫЙ МЕНЕДЖМЕНТ",
    description: "Выполнение строительно -монтажных работ инженерных сетей (водоснабжение , канализация, отопление, вентиляция, пожарная сигнализация и т . д.)",
  },
  {
    image: image1, // Replace with your image URL
    title: "ОПТИМАЛЬНОЕ ЦЕНООБРАЗОВАНИЕ",
    description: "Выполнение строительно -монтажны х работ гидротехнических сооружений",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          key={slides[currentSlide].title}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeIn"
        >
          {slides[currentSlide].title}
        </h1>
        <p
          key={slides[currentSlide].description}
          className="text-lg md:text-xl max-w-2xl mb-6 animate-fadeIn"
        >
          {slides[currentSlide].description}
        </p>
        <div className="flex space-x-4 animate-fadeIn">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-medium transition duration-300"
          >
           О нас
          </a>
          <a
            href="#projects"
            className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg shadow-md font-medium transition duration-300"
          >
            Активные Проекты
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
