import React from "react";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 items-center">
        {/* Text Content */}
        <div className="col-span-2 md:col-span-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 relative pb-4">
          О нас
          <div className="absolute bottom-0 left-0 w-64 border-b-4 border-blue-800"></div> {/* Thick line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
            <div className="w-3 h-1 bg-blue-800"></div>
            <div className="w-3 h-1 bg-blue-800"></div>
            <div className="w-3 h-1 bg-blue-800"></div>
          </div> {/* Three mini lines */}
        </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          <span className="font-extrabold text-3xl text-blue-800  tracking-wider text-shadow-md">
  ИНТЕРСОХТМОН
</span>
 – это инженерно-строительная компания, предлагающая
            комплекс строительных услуг и технических консультаций по широкому
            спектру сфер применения.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            В 2005 году компания была основана как (Интерcтрой) дочерняя
            структура ИнтерРАО (Россия) для строительства Сангтудинской ГЭС 1.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
          В 2009 году компания была переименована в ООО «Интерсохтмон» для
          участия в строительстве Рогунской ГЭС.
          </p>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-2 list-disc pl-6">
  <li>В период 2005-2009 годы компания участвовала в строительстве Сангтудинской ГЭС-1.</li>
  <li>C 2009 по 2021 годы – ремонтновосстановительные работы Сангтудинской ГЭС-1.</li>
  <li>C 2008 года по настоящее время – участие в строительстве Рогунской ГЭС.</li>
  <li>
    Компания реализует проекты в сфере гражданского и инфраструктурного строительства на территории Республики Таджикистан.
  </li>
</ul>


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
