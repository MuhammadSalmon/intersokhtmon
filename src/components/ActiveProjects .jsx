import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";
import img1 from "../assets/back_activ.jpg";

const projects = [
  {
      title: "Национальный центр управления кризисными ситуациями в КЧС и ГО",
      description:
        "Построен современный центр управления для эффективного реагирования на кризисные ситуации.",
      images: [image1],
      progress: 100,
      category: "completed",
    },
    {
      title: "Строительство здания ТВ Сафина",
      description:
        "Масштабное строительство и модернизация инфраструктуры для национального телевидения.",
      images: [image2],
      progress: 100,
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
      category: "completed",
      progress: 100,
    },
    {
      title:
        "Строительство здания общежития со столовой для компании \u201cСГЭМ\u201d в городе Нурек",
      description:
        "Создание комфортных условий проживания и питания для сотрудников компании.",
      images: ["https://via.placeholder.com/400x300?text=Project+5"],
      category: "completed",
      progress: 100,
    },
    {
      title: "Кайраккумская ГЭС",
      description:
        "Реконструкция гидроэлектростанции для увеличения мощности и устойчивости энергосистемы.",
      images: ["https://via.placeholder.com/400x300?text=Project+6"],
      category: "completed",
      progress: 100,
    },
  {
    title: "ЖК «МЕХРГОН »",
    description: "Строительство современного жилого комплекса...",
    progress: 70,
    images: [image1, image2, image3, image4],
    category: "active", // Category for active projects
  },
  {
    title: "Детское дошкольное учреждение",
    description: "Строительство нового детского дошкольного учреждения...",
    progress: 60,
    images: ["https://via.placeholder.com/400x300?text=Smart+City+1"],
    category: "active", // Category for completed projects
  },
  {
    title: "Строительство административного здания прокуратуры города Рогун",
    description: "Проектирование и строительство административного здания...",
    progress: 40,
    images: ["https://via.placeholder.com/400x300?text=Urban+Farming+1"],
    category: "active",
  },
];

const ActiveProjects = () => {
  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("all"); // Filter state

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

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className="py-12 bg-gray-100 h-auto dark:bg-gray-900"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 text-center dark:text-slate-100 mb-6">
          НАШИ ПРОЕКТЫ
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            Все Проекты
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg ${
              filter === "active" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            АКТИВНЫЕ ПРОЕКТЫ
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg ${
              filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            ЗАВЕРШЕННЫЕ ПРОЕКТЫ
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
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
                  className="text-blue-500 hover:underline text-sm font-medium mt-4 block"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleCloseModal}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {modalData.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {modalData.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ActiveProjects;
