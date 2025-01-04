import React from 'react';

import {
  BriefcaseIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  TruckIcon,
  Cog6ToothIcon,
  BeakerIcon,
  CubeTransparentIcon,
  ClipboardIcon,
} from '@heroicons/react/24/outline';
// import './animations.css'
const services = [
  {
    name: 'УПРАВЛЕНИЕ ПРОЕКТОМ',
    description: '– от разработки концепции проекта до ввода объекта в эксплуатацию',
    icon: BriefcaseIcon,
  },
  {
    name: 'ПРОЕКТИРОВАНИЕ',
    description: '- от разработки эскизного проекта до получения положительного заключения экспертизы и авторского надзора',
    icon: PencilSquareIcon,
  },
  {
    name: 'СТРОИТЕЛЬНЫЙ КОНТРОЛЬ',
    description: '- управление качеством и сроками реализации проекта от начала строительства до ввода объекта в эксплуатацию',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'УПРАВЛЕНИЕ БЮДЖЕТОМ',
    description: '- от анализа сметной стоимости проекта и управления стоимостью проекта на протяжении строительного процесса.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'МАТЕРИАЛЬНО ТЕХНИЧЕСКАЯ БАЗА',
    description: 'ООО «Интерсохтмон» имеет собственную материально-техническую базу и автотранспорт различных типов в городе Рогун.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Завод МБСУ №1 (GURIS)',
    description: 'Производительность бетона: 120м3/час',
    icon: TruckIcon,
  },
  {
    name: 'Завод ТДСУ-90 (ДСХ)',
    description: 'Производительность инертных материалов: 120м3/час',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Завод по изготовлению железобетонных колодцев',
    description: '',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Завод по изготовлению железобетонных лотков',
    description: '',
    icon: ClipboardIcon,
  },
  {
    name: 'Лабораторные услуги',
    description: 'Испытания строительных материалов',
    icon: BeakerIcon,
  },
];




export default function Services() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-customPurple mb-4 animate-fade-in">НАШИ УСЛУГИ</h2>
        <p className="text-center text-gray-600 mb-8 max-w-5xl mx-auto animate-fade-in animation-delay-200">
        ООО «Интерсохтмон», объединяя опыт и знания специалистов высокого класса, современное программное обеспечение и высокоточные приборы последнего поколения, интегрируемые с новейшими технологиями и уникальными решениями, осуществляет полный комплекс профессиональных строительных и инжиниринговых услуг различного уровня сложности и предоставляет качественные результаты работ, строго соответствующие нормативным требованиям
             </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center ">
                  <service.icon className="h-8 w-16 text-white" />
                  </div>
                  <h3 className="text-xl text-customPurple font-semibold">{service.name}</h3>
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

