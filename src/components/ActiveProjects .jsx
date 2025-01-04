import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";
import img1 from "../assets/back_activ.jpg";
import DescriptionWithToggle from "./DescriptionWithToggle";

const projects = [
  {
      title: "Национальный центр управления кризисными ситуациями в КЧС и ГО",
      description:
        "Построен современный центр управления для эффективного реагирования на кризисные ситуации.",
      images: [image1],
      size: "",
      progress: 100,
      category: "completed",
    },
    {
      title: "Комплекс современных зданий для размещения государственного  учреждения «ТВ Сафина»",
      description:
        "Строительство комплекса зданий ТВ «Сафина»   Общей площадью - 8 615,1м2;  Состоит из 4-х этажных блоков A и B, 2-х этажных студийных блоков C, C-1 и D, D-1, 1-но этажных студийных блоков  E, F и технических блоков G, H. Строительство нового здания для телевидения 'Сафина' стало образцом современного архитектурного и строительного мастерства. Проект реализован с использованием высококачественных материалов, обеспечивающих надежность и долговечность конструкции. В процессе строительства применялись передовые методы и технологии строительства. Особое внимание уделено инновационным архитектурным решениям, которые не только подчеркивают эстетическую привлекательность здания, но и обеспечивают функциональность и комфорт для всех сотрудников. Новое здание телевидения 'Сафина' олицетворяет современный подход к строительству, где гармонично сочетаются качество, инновации и стиль.",
      images: [image2],
      progress: 100,
      size: "8 615,1",
      category: "completed",
    },
    {
      title: "Рогунская ГЭС",
      description:
        "Ключевой проект гидроэнергетики, обеспечивающий энергоснабжение страны.",
      images: [image3],
      category: "completed",
      progress: 100,
    },
    {
      title: "Сангтудинская ГЭС-1",
      description:
        "Энергетический проект, важный для стабилизации энергосистемы региона.",
      images: [image4],
      size: "8 615,1",
      category: "completed",
      progress: 100,
    },
    {
      title:
        "Строительство здания общежития со столовой для компании \u201cСГЭМ\u201d в городе Нурек",
      description:"Создание комфортных условий проживания и питания для сотрудников компании.",
      images: ["https://via.placeholder.com/400x300?text=Project+5"],
      category: "completed",
      size: "8 615,1",
      progress: 100,
    },
    {
      title: "Кайраккумская ГЭС",
      description:
        "Реконструкция гидроэлектростанции для увеличения мощности и устойчивости энергосистемы.",
      images: ["https://via.placeholder.com/400x300?text=Project+6"],
      category: "completed",
      size: "8 615,1",
      progress: 100,
    },
  {
    title: "ЖК «МЕХРГОН »",
    description: "Строительство современного жилого комплекса осуществляется с использованием самых передовых технологий и инновационных решений. Особое внимание уделяется внедрению умных систем управления, обеспечивающих высокий уровень комфорта и безопасности для жителей. В процессе строительства используются экологически чистые материалы и энергоэффективные технологии, что позволяет значительно снизить воздействие на окружающую среду . Общая площадь строительства: 55 891 м Этажность 16 и 18 Здание состоит из 6 блоков: 1 и 2 блок – по 16 этажей; 3, 4 и 5 блок по 18 этажей; 6 блок – парковка 6 этажей надземных и 2 этажей подземных",
    progress: 70,
    size: "8 615,1",
    images: [image1, image2, image3, image4],
    category: "active", // Category for active projects
  },
  {
    title: "Детское дошкольное учреждение",
    description: "Строительство нового детского дошкольного учреждения выполнено с применением самых современных строительных технологий. В проекте использованы инновационные материалы и инженерные решения, которые обеспечивают высокую энергоэффективность и экологическую безопасность здания. Общая площадь строительства : 2500 м 2 Финансирование: АБР",
    progress: 60,
    images: ["https://via.placeholder.com/400x300?text=Smart+City+1"],
    category: "active", // Category for completed projects
    size: "8 615,1",
  },
  {
    title: "Строительство административного здания прокуратуры города Рогун",
    description: "Проектирование и строительство административного здания прокуратуры в городе Рогун",
    progress: 40,
    size: "8 615,1",
    images: ["https://via.placeholder.com/400x300?text=Urban+Farming+1"],
    category: "active",
  },
];

const ActiveProjects = () => {
  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("active"); // Filter state
  
  const handleOpenModal = (project) => {
    setModalData(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (modalData) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % modalData.images.length
      );
    }
  };

  const handlePrevImage = () => {
    if (modalData) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + modalData.images.length) % modalData.images.length
      );
    }
  };
  //  HI 

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className="py-12 h-auto from-white to-blue-800 "
      
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-customPurple text-center  mb-6">
          НАШИ ПРОЕКТЫ
        </h2>

        {/* Filter Component */}
<div className="mb-6">
  {/* For Desktop */}
  <div className="hidden md:flex justify-center space-x-4">
    <button
      onClick={() => setFilter("all")}
      className={`px-4 py-2 rounded-lg ${
        filter === "all"
          ? "bg-customPurple text-white"
          : "bg-white border-solid border-2 border-gray-300 text-customPurple "
      }`}
    >
      Все Проекты
    </button>
    <button
      onClick={() => setFilter("active")}
      className={`px-4 py-2 rounded-lg ${
        filter === "active"
          ? "bg-customPurple text-white"
          : "bg-white border-solid border-2 border-gray-300 text-customPurple "
      }`}
    >
      АКТИВНЫЕ ПРОЕКТЫ
    </button>
    <button
      onClick={() => setFilter("completed")}
      className={`px-4 py-2 rounded-lg ${
        filter === "completed"
          ? "bg-customPurple text-white"
          : "bg-white border-solid border-2 border-gray-300 text-customPurple "
      }`}
    >
      ЗАВЕРШЕННЫЕ ПРОЕКТЫ
    </button>
  </div>

  {/* For Mobile */}
  <div className="md:hidden">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full px-4 py-2 rounded-lg border-solid  border-customPurple border-2 text-customPurple bg-white"
    >
      <option className="border-customPurple border-2" value="all">Все Проекты</option>
      <option className="border-customPurple border-2" value="active">АКТИВНЫЕ ПРОЕКТЫ</option>
      <option className="border-customPurple border-2" value="completed">ЗАВЕРШЕННЫЕ ПРОЕКТЫ</option>
    </select>
  </div>
</div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white  rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-customPurple ">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description.length > 150
                    ? `${project.description.slice(0, 150)}...`
                    : project.description}
                </p>
                <div className="mt-4">
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.progress < 50
                          ? "bg-red-500"
                          : project.progress < 80
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium mt-2 inline-block">
                    {project.progress}% Выполнено
                  </span>
                </div>
                <button
                  onClick={() => handleOpenModal(project)}
                  className="text-customPurple hover:underline text-sm font-medium mt-4 block"
                >
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {modalData && (
          <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative mx-4 sm:mx-6 lg:mx-8 max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ✖
            </button>
            <div className="relative">
              <img
                src={modalData.images[currentImageIndex]}
                alt={`${modalData.title} Slide ${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                aria-label="Previous Image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                aria-label="Next Image"
              >
                <FaChevronRight />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-customPurple mb-4">{modalData.title}</h3>
        
            {/* Description with Show More / Show Less */}
            <DescriptionWithToggle description={modalData.description} />
        
            {/* Uncomment for Size Information */}
            {/* <p className="text-gray-700 mt-4">
              <span className="text-xl text-black">ПЛОШАДЬ:</span> {modalData.size}
            </p> */}
          </div>
        </motion.div>
        
        )}
      </div>
    </section>
  );
};

export default ActiveProjects;
