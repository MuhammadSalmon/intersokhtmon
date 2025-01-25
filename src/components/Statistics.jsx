import React, { useEffect, useRef } from 'react';
import product from '../assets/product.svg';
import worker from '../assets/worker.svg';
import clients from '../assets/clients.svg';
import img from '../assets/stats.jpg';
import img1 from '../assets/bg_stats.jpg';

// Sample statistics data


const Statistics = () => {
  const numberRefs = useRef([]);

  const statisticsData = [
    {
      icon: clients,
      title: "Выполненные проекты",
      value: 24,
    },
    {
      icon: product,
      title: "Активные проекти",
      value: 3,
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
          el.innerText = `${endValue}`; // Display the target value with "+" at the end
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

      <div className="container relative z-10 mx-auto text-center">
        <h2 className="text-3xl font-bold text-customPurple mb-4 relative inline-block">
          <span className="absolute -left-24 right-full mt-1 border-b-4 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
          Статистика
          <span className="absolute right-24 mt-1 left-full ml-4 border-b-4 border-orange-500 top-1/2 transform -translate-y-1/2 w-20"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="w-72 p-6 bg-customPurple rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 flex items-center"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              
              {/* Left Image Section */}
              <div className="flex-shrink-0">
              <p
                  className="text-5xl font-extrabold text-white"
                  ref={(el) => (numberRefs.current[index] = el)}
                  data-stop={stat.value}
                >
                  0
                </p>
              </div>

              {/* Right Content Section */}
              <div className="ml-6">
                <p className="text-2xl font-semibold text-white">{stat.title}</p>
               
              </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Statistics;
