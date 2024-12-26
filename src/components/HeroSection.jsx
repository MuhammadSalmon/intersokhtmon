import React, { useState, useEffect } from "react";
import image3 from "../assets/2349.jpg";
import image2 from "../assets/2891.jpg";
import image1 from "../assets/background.jpg";
import Header from "./Navbar";

const slides = [
  {
    image: image3,
    title: "КЛИЕНТО ОРИЕНТИРОВАННАЯ ПОЛИТИКА",
    description:
      "Выполнение строительно -монтажных работ общегражданских, промышленных и инфраструктурных объектов",
  },
  {
    image: image2,
    title: "ПЕРСОНАЛЬНЫЙ МЕНЕДЖМЕНТ",
    description:
      "Выполнение строительно -монтажных работ инженерных сетей (водоснабжение , канализация, отопление, вентиляция, пожарная сигнализация и т . д.)",
  },
  {
    image: image1,
    title: "ОПТИМАЛЬНОЕ ЦЕНООБРАЗОВАНИЕ",
    description:
      "Выполнение строительно -монтажны х работ гидротехнических сооружений",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Slideshow */}
      <div className="relative w-full h-full">
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
        <div className="relative z-20 flex flex-col items-start justify-center h-full  text-white px-4">
          <h1
            key={slides[currentSlide].title}
            className="text-4xl md:text-3xl font-extrabold leading-tight mb-4 animate-fadeIn"
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
    </div>
  );
};

export default HeroSection;
