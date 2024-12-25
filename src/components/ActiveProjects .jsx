import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";
const projects = [
  {
    title: "Green Energy Initiative",
    description:
      "A renewable energy project focusing on solar and wind power. This project aims to revolutionize the way energy is consumed, making it sustainable and eco-friendly.",
    progress: 70,
    images: [
      image1, image2, image3, image4
    ],
    category: "Energy",
  },
  {
    title: "Smart City Infrastructure",
    description:
      "Building IoT-enabled infrastructure for a smart city to ensure efficient resource management and a seamless urban experience for its residents.",
    progress: 40,
    images: [
      "https://via.placeholder.com/400x300?text=Smart+City+1",
      "https://via.placeholder.com/400x300?text=Smart+City+2",
    ],
    category: "Infrastructure",
  },
];

const ActiveProjects = () => {
  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Active Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
            >
              <img
                src={project.images[0]} // Display the first image as a thumbnail
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {project.description.length > 150
                    ? `${project.description.slice(0, 150)}...`
                    : project.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      project.progress < 50
                        ? "text-red-500"
                        : project.progress < 80
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {project.progress}% Completed
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-blue-500 hover:underline text-sm font-medium"
                  >
                    Подробнее
                  </button>
                  <FaChevronRight className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ✖
            </button>

            {/* Image Slider */}
            <div className="relative">
              <img
                src={modalData.images[currentImageIndex]}
                alt={`${modalData.title} Slide ${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
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
        </div>
      )}
    </section>
  );
};

export default ActiveProjects;
