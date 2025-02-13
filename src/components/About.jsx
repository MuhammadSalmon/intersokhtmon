import React, { useState } from "react";
import image1 from "../assets/about_img1.jpg";
import image2 from "../assets/about_img2.jpg";
import image3 from "../assets/about_img3.jpg";
import Slider from "react-slick"; // Import Slick Slider

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({
    image1: false,
    image2: false,
    image3: false,
  });

  const handleImageLoad = (imageKey) => {
    setLoadedImages((prev) => ({ ...prev, [imageKey]: true }));
  };

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

  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white bg-cover py-16 px-6 md:py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-customPurple relative pb-4">
            О нас
            <div className="absolute bottom-0 left-0 w-64 border-b-4 border-orange-500"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
              <div className="w-3 h-1 bg-orange-500"></div>
              <div className="w-3 h-1 bg-orange-500"></div>
              <div className="w-3 h-1 bg-orange-500"></div>
            </div>
          </h2>
          <p className="text-xl text-gray-600">
            <span className="text-2xl text-customPurple">ИНТЕРСОХТМОН</span> – это инженерно-строительная компания, предлагающая
            комплекс строительных услуг и технических консультаций по широкому спектру сфер применения.
          </p>

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

        {/* Desktop Grid Images (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top Left Image */}
          <div>
            {!loadedImages.image1 && (
              <div className="w-full h-[200px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
            <img
              src={image1}
              alt="Construction Project"
              className={`w-full h-[200px] object-cover rounded-lg shadow-lg ${
                !loadedImages.image1 ? "hidden" : ""
              }`}
              onLoad={() => handleImageLoad("image1")}
            />
          </div>
          {/* Top Right Image */}
          <div>
            {!loadedImages.image2 && (
              <div className="w-full h-[200px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
            <img
              src={image2}
              alt="Project Detail 1"
              className={`w-full h-[200px] object-cover rounded-lg shadow-lg ${
                !loadedImages.image2 ? "hidden" : ""
              }`}
              onLoad={() => handleImageLoad("image2")}
            />
          </div>
          {/* Bottom Full-Width Image */}
          <div className="col-span-2">
            {!loadedImages.image3 && (
              <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
            <img
              src={image3}
              alt="Project Detail 2"
              className={`w-full h-[300px] object-cover rounded-lg shadow-lg ${
                !loadedImages.image3 ? "hidden" : ""
              }`}
              onLoad={() => handleImageLoad("image3")}
            />
          </div>
        </div>

        {/* Mobile Slider (Hidden on larger screens) */}
        <div className="lg:hidden">
          <Slider {...settings}>
            <div>
              {!loadedImages.image1 && (
                <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                  <span className="text-gray-500">Loading...</span>
                </div>
              )}
              <img
                src={image1}
                alt="Construction Project"
                className={`w-full h-[300px] object-cover rounded-lg shadow-lg ${
                  !loadedImages.image1 ? "hidden" : ""
                }`}
                onLoad={() => handleImageLoad("image1")}
              />
            </div>
            <div>
              {!loadedImages.image2 && (
                <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                  <span className="text-gray-500">Loading...</span>
                </div>
              )}
              <img
                src={image2}
                alt="Project Detail 1"
                className={`w-full h-[300px] object-cover rounded-lg shadow-lg ${
                  !loadedImages.image2 ? "hidden" : ""
                }`}
                onLoad={() => handleImageLoad("image2")}
              />
            </div>
            <div>
              {!loadedImages.image3 && (
                <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
                  <span className="text-gray-500">Loading...</span>
                </div>
              )}
              <img
                src={image3}
                alt="Project Detail 2"
                className={`w-full h-[300px] object-cover rounded-lg shadow-lg ${
                  !loadedImages.image3 ? "hidden" : ""
                }`}
                onLoad={() => handleImageLoad("image3")}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;