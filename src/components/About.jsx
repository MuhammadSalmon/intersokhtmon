import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            О нас
          </h2>
          <p className="text-gray-600 text-lg">
            ИНТЕРСОХТМОН – это инженерно-строительная компания, предлагающая
            комплекс строительных услуг и технических консультаций по широкому
            спектру сфер применения.
          </p>
          <p className="text-gray-600 text-lg">
            В 2005 году компания была основана как (Интерcтрой) дочерняя
            структура ИнтерРАО (Россия) для строительства Сангтудинской ГЭС 1.
          </p>
          <p className="text-gray-600 text-lg">
            В 2009 году компания была переименована в ООО «Интерсохтмон» для
            участия в строительстве Рогунской ГЭС.
          </p>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Construction Company"
            className="w-full rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-40 transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
