import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

useEffect(() => {
  setTimeout(() => setShowText(true), 500);
}, []);

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  speed: 4000,
  arrows: false,
};


  const [showText, setShowText] = useState(false);
  

  return (
    <div className="relative w-full  h-screen overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Slideshow */}
      <Slider {...settings}>
  {slides.map((item, index) => (
    <div className="h-[120vh]" key={index}>
      <div
        className="relative flex items-center justify-center md:justify-start h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center md:text-left px-4 md:px-10 max-w-2xl">
          <motion.h1
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            variants={textVariants}
            className="text-orange-400 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug"
          >
            {item.title}
          </motion.h1>
          <motion.h3
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            variants={textVariants}
            className="text-orange-400 text-lg sm:text-xl md:text-xl lg:text-xl font-bold mb-4 md:mb-6 leading-snug"
          >
            {item.description}
          </motion.h3>

          <motion.div
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            variants={buttonVariants}
            className="flex justify-center md:justify-start"
          >
            <a
              href="#about"
              className="px-6 py-3 text-sm font-medium text-orange-400 bg-blue-600 rounded-md hover:bg-white hover:m-4 hover:text-blue-500 transition"
            >
              Подробнее
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
};

export default HeroSection;
