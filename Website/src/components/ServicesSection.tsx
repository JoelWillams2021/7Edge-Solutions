import { FaMobileAlt, FaGlobe, FaCloud, FaCode, FaMicrochip, FaArrowsAltH, FaCogs, FaVrCardboard } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    { 
      title: 'Mobile Apps', 
      subtitle: 'Native iOS, Android, and cross-platform solutions built for performance and user experience.',
      icon: FaMobileAlt
    },
    { 
      title: 'Web Applications', 
      subtitle: 'Modern, responsive web apps using React, Angular, and Vue.js with robust backend systems.',
      icon: FaGlobe
    },
    { 
      title: 'API Development', 
      subtitle: 'Scalable REST and GraphQL APIs that power your applications and integrate with existing systems.',
      icon: FaCloud
    },
    { 
      title: 'Full Stack Development', 
      subtitle: 'End-to-end development for front-end and back-end systems, using the latest technologies.',
      icon: FaCode
    },
    { 
      title: 'Real-Time Apps', 
      subtitle: 'Build real-time applications for chat, gaming, or live collaboration using WebSocket and more.',
      icon: FaArrowsAltH
    },
    { 
      title: 'Cloud Migration', 
      subtitle: 'Seamlessly migrate your applications and data to the cloud for scalability and cost-efficiency.',
      icon: FaCloud
    },
    { 
      title: 'AI/ML Solutions', 
      subtitle: 'Leverage artificial intelligence and machine learning to automate tasks and gain insights.',
      icon: FaMicrochip
    },
    { 
      title: 'AR/VR Apps', 
      subtitle: 'Develop augmented and virtual reality applications to create immersive experiences.',
      icon: FaVrCardboard
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            We build for all platforms
          </h2>
          <p className="text-lg text-gray-600">
            Our team of experts works with you to build custom software that meets your unique business needs, 
            from web and mobile apps to APIs and backend systems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <service.icon size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
