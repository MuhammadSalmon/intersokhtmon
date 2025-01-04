import React, { useState } from "react";
import image1 from "../assets/about_1.webp";
import image2 from "../assets/about_2.jpg";
import image3 from "../assets/about_3.avif";
import img1 from '../assets/background.jpg';
const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: "ИСТОРИЯ",
      content: [
        "В 2005 году компания была основана как (Интерcтрой) дочерняя структура ИнтерРАО (Россия) для строительства Сангтудинской ГЭС 1.",
        "В 2009 году компания была переименована в ООО «Интерсохтмон» для участия в строительстве Рогунской ГЭС.",
        "В период 2005-2009 годы компания участвовала в строительстве Сангтудинской ГЭС-1.",
        "C 2009 по 2021 годы – ремонтно-восстановительные работы Сангтудинской ГЭС-1.",
        "C 2008 года по настоящее время – принимает участие в строительстве Рогунской ГЭС.",
        "Также, в настоящее время, компания реализует проекты в сфере гражданского и инфраструктурного строительства на территории Республики Таджикистан.",
      ],
    },
    {
      title: "НАШ ОПЫТЬ",
      content: [
        "Выполнение строительно-монтажных работ гражданских, промышленных и инфраструктурных объектов.",
        "Выполнение строительно-монтажных работ инженерных сетей (водоснабжение, канализация, отопление, вентиляция, пожарная сигнализация и т.д.).",
        "Производство строительных материалов (в том числе инертных материалов, товарного бетона и железобетонных изделий).",
        "Выполнение строительно-монтажных работ гидротехнических сооружений.",
        "Предоставление транспортных услуг: (самосвалы, миксеры-бетоновозы, экскаваторы, погрузчики, автомобильные и башенные краны и т.д.).",
      ],
    },
    {
      title: "НАША МИССИЯ",
      content: [
        "Мы стремимся быть одной из лучших отечественных компаний, предлагая эффективные решения, которые способствуют развитию бизнеса наших клиентов и росту общественного благосостояния.",
        "Творческая и благоприятная атмосфера, пронизывающая всю работу нашей Компании, в которой сотрудники могут максимально раскрыть и развивать свои способности, приобрести новые знания и навыки, является предпосылкой для успеха и плодотворной работы нашей команды профессионалов.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  className="bg-white bg-cover py-16 px-6 md:py-16 md:px-12 lg:px-24" 
    
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 items-center ">
        {/* Text Content */}
        <div className="col-span-2 md:col-span-1 py-10 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-customPurple relative pb-4">
        О нас
        <div className="absolute bottom-0 left-0 w-64 border-b-4 border-orange-500"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
          <div className="w-3 h-1 bg-orange-500"></div>
          <div className="w-3 h-1 bg-orange-500"></div>
          <div className="w-3 h-1 bg-orange-500"></div>
        </div>
        
      </h2>
      <p className="text-xl text-gray-600"><span className="text-2xl text-customPurple">ИНТЕРСОХТМОН</span> – это инженерно-строительная компания, предлагающая комплекс строительных услуг и технических консультаций по широкому спектру сфер применения.</p>

      <div className="max-w-2xl mx-auto my-8">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-orange-500">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-customPurple"
          >
            {section.title}
            <span
              className={`transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 text-gray-600 space-y-2">
              {section.content.map((sentence, i) => (
                <p key={i}>{sentence}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
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
