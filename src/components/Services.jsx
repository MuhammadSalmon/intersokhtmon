import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";

const projects = [
  {
    title: "УПРАВЛЕНИЕ ПРОЕКТОМ",
    description:
      "УПРАВЛЕНИЕ ПРОЕКТОМ – от разработки концепции проекта до ввода объекта в эксплуатацию",
    progress: 70,
    images: [image1, image2, image3, image4],
    category: "УПРАВЛЕНИЕ ПРОЕКТОМ",
  },
  {
    title: "ПРОЕКТИРОВАНИЕ",
    description:
      "ПРОЕКТИРОВАНИЕ - от разработки эскизного проекта до получения положительного заключения экспертизы и авторского надзора",
    progress: 40,
    images: [
      "https://via.placeholder.com/400x300?text=Smart+City+1",
      "https://via.placeholder.com/400x300?text=Smart+City+2",
    ],
    category: "ПРОЕКТИРОВАНИЕ",
  },
  {
    title: "СТРОИТЕЛЬНЫЙ КОНТРОЛЬ",
    description:
      "СТРОИТЕЛЬНЫЙ КОНТРОЛЬ - управление качеством и сроками реализации проекта от начала строительства до ввода объекта в эксплуатацию",
    progress: 85,
    images: [
      "https://via.placeholder.com/400x300?text=Urban+Farming+1",
      "https://via.placeholder.com/400x300?text=Urban+Farming+2",
    ],
    category: "Agriculture",
  },
  {
    title: "УПРАВЛЕНИЕ БЮДЖЕТОМ",
    description:
      "УПРАВЛЕНИЕ БЮДЖЕТОМ - от анализа сметной стоимости проекта и управления стоимостью проекта на протяжении строительного процесса",
    progress: 60,
    images: [
      "https://via.placeholder.com/400x300?text=AI+Healthcare+1",
      "https://via.placeholder.com/400x300?text=AI+Healthcare+2",
    ],
    category: "УПРАВЛЕНИЕ БЮДЖЕТОМ",
  },
];

const ServicesPage = () => {
  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleOpenModal = (project) => {
    setModalData(project);
    setCurrentImageIndex(0); // Reset to the first image
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

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center dark:text-gray-100 mb-6">
        НАШИ УСЛУГ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
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
                  src={project.images[0]} // Thumbnail
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

        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShow}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              {showAll ? "Показат менше" : "Показат болше"}
            </button>
          </div>
        )}
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
    </section>
  );
};

export default ServicesPage;
