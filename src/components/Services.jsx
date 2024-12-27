const services = [
    {
      icon: "https://via.placeholder.com/64",
      title: "Web Development",
      description: "We create responsive and high-performing websites tailored to your needs.",
      link: "/web-development",
    },
    {
      icon: "https://via.placeholder.com/64",
      title: "Mobile Apps",
      description: "Build user-friendly mobile applications for both Android and iOS.",
      link: "/mobile-apps",
    },
    {
      icon: "https://via.placeholder.com/64",
      title: "UI/UX Design",
      description: "Craft visually appealing and intuitive user experiences for your product.",
      link: "/ui-ux-design",
    },
  ];
  

const ServicesPage = () => {
return (
    <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:scale-105"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href={service.link}
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

)

}

export default ServicesPage;