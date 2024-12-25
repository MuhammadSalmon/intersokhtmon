import React, { useState } from "react";
import img1 from "../assets/upravlenie_1.jpg";
import image1 from "../assets/about.jpg";
import image2 from "../assets/blog-1.jpg";
import image3 from "../assets/blog-2.jpg";
import image4 from "../assets/blog-3.jpg";
const services = [
  {
    title: "Управление проектом",
    description: "От разработки концепции проекта до ввода объекта в эксплуатацию",
    images: [
      img1,
      image1,
      image2,
      image3,
      image4,
    ],
  },
  {
    title: "Проектирование",
    description:
      "От разработки эскизного проекта до получения положительного заключения экспертизы и авторского надзора",
    images: [
      "https://via.placeholder.com/300x200?text=Design+1",
      "https://via.placeholder.com/300x200?text=Design+2",
      "https://via.placeholder.com/300x200?text=Design+3",
    ],
  },
  {
    title: "Строительный контроль",
    description:
      "Управление качеством и сроками реализации проекта от начала строительства до ввода объекта в эксплуатацию",
    images: [
      "https://via.placeholder.com/300x200?text=Control+1",
      "https://via.placeholder.com/300x200?text=Control+2",
    ],
  },
  {
    title: "Управление бюджетом",
    description:
      "От анализа сметной стоимости проекта и управления стоимостью проекта на протяжении строительного процесса",
    images: [
      "https://via.placeholder.com/300x200?text=Budget+1",
      "https://via.placeholder.com/300x200?text=Budget+2",
    ],
  },
  {
    title: "Материально-техническая база",
    description:
      "ООО «Интерсохтмон» имеет собственную материально-техническую базу и автотранспорт различных типов в городе Душанбе, включая самосвалы, автопогрузчики, автобетоносмесители, автокраны и автобетононасосы.",
    images: [
      "https://via.placeholder.com/300x200?text=Equipment+1",
      "https://via.placeholder.com/300x200?text=Equipment+2",
    ],
  },
  {
    title: "Завод МБСУ №1 (GURIS)",
    description:
      "Производительность бетона: 120м3/час. Производительность инертных материалов: 120м3/час.",
    images: [
      "https://via.placeholder.com/300x200?text=Plant+1",
      "https://via.placeholder.com/300x200?text=Plant+2",
    ],
  },
  {
    title: "Завод железобетонных изделий",
    description:
      "Завод по изготовлению железобетонных колодцев и лотков. Дополнительно доступны экскаваторы (колёсные и гусеничные), башенные краны и служебные легковые автомашины.",
    images: [
      "https://via.placeholder.com/300x200?text=Concrete+1",
      "https://via.placeholder.com/300x200?text=Concrete+2",
    ],
  },
];
const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  const openModal = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div className="bg-gray-100 min-h-[80vh] py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Наши Услуги
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            onClick={() => openModal(service.images)}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div>
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleShow}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          {showAll ? "Показать меньше" : "Показать больше"}
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Prevent closing the modal when clicking on the modal content */}
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
           
            <img
              src={currentImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[80vh] object-contain"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevImage}
                className="text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
              >
                &lt;
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextImage}
                className="text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
