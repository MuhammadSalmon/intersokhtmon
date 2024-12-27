import React, { useState } from "react";
import image1 from "../assets/about_1.webp";
import image2 from "../assets/about_2.jpg";
import image3 from "../assets/about_3.avif";
import img1 from '../assets/background.jpg';
const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section  className="bg-gray-100 bg-cover py-16 px-6 md:py-16 md:px-12 lg:px-24" 
    style={{
      backgroundImage: `url(${img1})`,
      height: "80vh;"
    }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 items-center ">
        {/* Text Content */}
        <div className="col-span-2 md:col-span-1 py-10 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white relative pb-4">
        О нас
        <div className="absolute bottom-0 left-0 w-64 border-b-4 border-white"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
          <div className="w-3 h-1 bg-white"></div>
          <div className="w-3 h-1 bg-white"></div>
          <div className="w-3 h-1 bg-white"></div>
        </div>
      </h2>
      <p className="text-white text-lg leading-relaxed">
        <span className="font-extrabold text-3xl text-white tracking-wider text-shadow-md">
          ИНТЕРСОХТМОН
        </span>{" "}
        – это инженерно-строительная компания, предлагающая комплекс
        строительных услуг и технических консультаций по широкому спектру сфер
        применения.
      </p>
      <p className="text-white text-lg leading-relaxed">
        В 2005 году компания была основана как (Интерcтрой) дочерняя структура
        ИнтерРАО (Россия) для строительства Сангтудинской ГЭС 1.
      </p>
      <p className="text-white text-lg leading-relaxed">
        В 2009 году компания была переименована в ООО «Интерсохтмон» для участия
        в строительстве Рогунской ГЭС.
      </p>

      {isExpanded && (
        <ul className="text-white text-lg leading-relaxed space-y-2 list-disc pl-6">
          <li>
            В период 2005-2009 годы компания участвовала в строительстве
            Сангтудинской ГЭС-1.
          </li>
          <li>
            C 2009 по 2021 годы – ремонтновосстановительные работы Сангтудинской
            ГЭС-1.
          </li>
          <li>
            C 2008 года по настоящее время – участие в строительстве Рогунской
            ГЭС.
          </li>
          <li>
            Компания реализует проекты в сфере гражданского и инфраструктурного
            строительства на территории Республики Таджикистан.
          </li>
        </ul>
      )}

      <button
        onClick={toggleExpand}
        className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:m-4 font-semibold px-6 py-2 rounded-md transition duration-300"
      >
        {isExpanded ? "Меньше" : "Больше"}
      </button>
    </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-6 col-span-2 md:col-span-1">
          {/* First Image */}
          <div className="row-span-2">
            <img
              src={image1}
              alt="Construction Project"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Second Image */}
          <div className="row-span-2">
            <img
              src={image2}
              alt="Project Detail 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Third Image */}
          <div className="col-span-2 flex justify-center items-center">
            <img
              src={image3}
              alt="Project Detail 2"
              className="w-2/3 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
