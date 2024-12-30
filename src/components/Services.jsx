import React from 'react';
import './animations.css'
const services = [
  { name: 'УПРАВЛЕНИЕ ПРОЕКТОМ', description: '– от разработки концепции проекта до ввода объекта в эксплуатацию', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'ПРОЕКТИРОВАНИЕ', description: '- от разработки эскизного проекта до получения положительного заключения экспертизы и авторского надзора', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { name: 'СТРОИТЕЛЬНЫЙ КОНТРОЛЬ', description: '- управление качеством и сроками реализации проекта от начала строительства до ввода объекта в эксплуатацию', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { name: 'УПРАВЛЕНИЕ БЮДЖЕТОМ', description: '- от анализа сметной стоимости проекта и управления стоимостью проекта на протяжении строительного процесса.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { name: 'МАТЕРИАЛЬНО ТЕХНИЧЕСКАЯ БАЗА', description: 'ООО «Интерсохтмон» имеет собственную материально-техническую базу и автотранспорт различных типов в городе Рогун.', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { name: 'Завод МБСУ №1 (GURIS)', description: 'Производительность бетона: 120м3/час', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { name: 'Завод ТДСУ-90 (ДСХ)', description: 'роизводительность инертных материалов: 120м3/час', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { name: 'Завод по изготовлению железобетонных колодцев', description: '', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { name: 'Завод по изготовлению железобетонных лотков', description: '', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { name: 'Лабораторные услуги', description: 'Испытания строительных материалов ', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
];

export default function Services() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-4 animate-fade-in">НАШИ УСЛУГИ</h2>
        <p className="text-center text-gray-600 mb-8 max-w-5xl mx-auto animate-fade-in animation-delay-200">
        ООО «Интерсохтмон», объединяя опыт и знания специалистов высокого класса, современное программное обеспечение и высокоточные приборы последнего поколения, интегрируемые с новейшими технологиями и уникальными решениями, осуществляет полный комплекс профессиональных строительных и инжиниринговых услуг различного уровня сложности и предоставляет качественные результаты работ, строго соответствующие нормативным требованиям
             </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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

