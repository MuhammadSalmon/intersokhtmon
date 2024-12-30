import React from 'react';

const realEstateServices = [
  { name: 'Продажа квартир', description: 'Широкий выбор квартир в новостройках и на вторичном рынке', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Аренда жилья', description: 'Аренда квартир и домов на любой срок', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' },
  { name: 'Коммерческая недвижимость', description: 'Офисы, магазины и производственные помещения', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { name: 'Загородная недвижимость', description: 'Дома, коттеджи и земельные участки', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Оценка недвижимости', description: 'Профессиональная оценка стоимости вашей недвижимости', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Юридические услуги', description: 'Сопровождение сделок и консультации по недвижимости', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
];

export default function Nedvizhimost() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-orange-400 font-bold text-center mb-4 animate-fade-in">НЕДВИЖИМОСТЬ</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Мы предлагаем полный спектр услуг в сфере недвижимости. От покупки и продажи до аренды и управления - доверьте нам ваши потребности в недвижимости.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realEstateServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl text-orange-500 font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

