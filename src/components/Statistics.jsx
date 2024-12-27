import React, { useEffect, useRef } from 'react';
import product from '../assets/product.svg';
import worker from '../assets/worker.svg';
import clients from '../assets/clients.svg';
import img from '../assets/stats.jpg';

// Sample statistics data


const Statistics = () => {
  const numberRefs = useRef([]);

  const statisticsData = [
    {
      icon: clients,
      title: "Выполненные проекты",
      value: 100,
    },
    {
      icon: product,
      title: "Активные проекти",
      value: 100,
    },
    {
      icon: worker,
      title: "Работники",
      value: 100,
    },
  ];
  useEffect(() => {
    const animateNumber = (el, endValue) => {
      const duration = 6000; // 3 seconds
      const increment = endValue / (duration / 16); // Increment based on 60fps (16ms per frame)
      let currentValue = 0;

      const updateNumber = () => {
        if (currentValue < endValue) {
          currentValue += increment;
          el.innerText = Math.ceil(currentValue);
          requestAnimationFrame(updateNumber);
        } else {
          el.innerText = `${endValue}+`; // Display the target value with "+" at the end
        }
      };
      updateNumber();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            const endValue = parseInt(target.getAttribute('data-stop'), 10);
            animateNumber(target, endValue);
            observer.unobserve(target); // Unobserve once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-12 bg-gradient-to-r from-white to-blue-800"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          <span className="absolute -left-20 right-full border-b-2 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
          <span className="absolute -left-20 right-full mt-1 border-b-2 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
          Статистика
          <span className="absolute right-0 left-full border-b-2 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
          <span className="absolute right-0 mt-1 left-full border-b-2 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="w-72 p-6 bg-gradient-to-br from-white  to-blue-700 bg-opacity-80 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 flex items-center"
            >
              {/* Left Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={stat.icon}
                  alt={stat.title}
                  className="w-16 h-16 rounded-full bg-orange-500 p-2 shadow-md"
                />
              </div>

              {/* Right Content Section */}
              <div className="ml-6">
                <p className="text-lg font-semibold text-gray-200">{stat.title}</p>
                <p
                  className="text-3xl font-extrabold text-white"
                  ref={(el) => (numberRefs.current[index] = el)}
                  data-stop={stat.value}
                >
                  0
                </p>
              </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Statistics;
