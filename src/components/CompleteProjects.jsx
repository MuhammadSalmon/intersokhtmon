import React, { useEffect, useState } from "react";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";

const projects = [
  {
    title: "Национальный центр управления кризисными ситуациями в КЧС и ГО",
    description:
      "Построен современный центр управления для эффективного реагирования на кризисные ситуации.",
    image: image1,
  },
  {
    title: "Строительство здания ТВ Сафина",
    description:
      "Масштабное строительство и модернизация инфраструктуры для национального телевидения.",
    image: image2,
  },
  {
    title: "Рогунская ГЭС",
    description:
      "Ключевой проект гидроэнергетики, обеспечивающий энергоснабжение страны.",
    image: image3,
  },
  {
    title: "Сангтудинская ГЭС-1",
    description:
      "Энергетический проект, важный для стабилизации энергосистемы региона.",
    image: image4,
  },
  {
    title:
      "Строительство здания общежития со столовой для компании \u201cСГЭМ\u201d в городе Нурек",
    description:
      "Создание комфортных условий проживания и питания для сотрудников компании.",
    image: "https://via.placeholder.com/400x300?text=Project+5",
  },
  {
    title: "Кайраккумская ГЭС",
    description:
      "Реконструкция гидроэлектростанции для увеличения мощности и устойчивости энергосистемы.",
    image: "https://via.placeholder.com/400x300?text=Project+6",
  },
];

const CompletedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <div className="relative w-full h-[80vh] overflow-hidden">
    
      {/* Background Slides */}
      {projects.map((slide, index) => (
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <h1
          key={projects[currentSlide].title}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeIn"
        >
          {projects[currentSlide].title}
        </h1>
        <p
          key={projects[currentSlide].description}
          className="text-lg md:text-xl max-w-2xl mb-6 animate-fadeIn"
        >
          {projects[currentSlide].description}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-500"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
};

export default CompletedProjects;
