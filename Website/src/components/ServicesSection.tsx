import { useEffect, useRef } from 'react';
import { FaMobileAlt, FaGlobe, FaCloud, FaCode, FaMicrochip, FaVrCardboard } from 'react-icons/fa';

const services = [
  { title: 'Web Applications', subtitle: 'Modern, responsive web apps using React, Angular, and Vue.js with robust backend systems.', icon: FaGlobe },
  { title: 'API Development', subtitle: 'Scalable REST and GraphQL APIs that power your applications and integrate with existing systems.', icon: FaCloud },
  { title: 'Full Stack Development', subtitle: 'End-to-end development for front-end and back-end systems, using the latest technologies.', icon: FaCode },
  { title: 'Real-Time Mobile Apps', subtitle: 'Native iOS, Android, and cross-platform solutions for real-time chat, gaming, and collaboration.', icon: FaMobileAlt },
  { title: 'Cloud Migration', subtitle: 'Seamlessly migrate your applications and data to the cloud for scalability and cost-efficiency.', icon: FaCloud },
  { title: 'AI/ML Solutions', subtitle: 'Leverage the power of artificial intelligence and machine learning to automate repetitive tasks and streamline processes.', icon: FaMicrochip },
  { title: 'AR/VR Apps', subtitle: 'Develop innovative augmented and virtual reality applications to create highly immersive and interactive experiences for users.', icon: FaVrCardboard }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.children;
    if (childElements) {
      Array.from(childElements).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (childElements) {
        Array.from(childElements).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            We Build for All Platforms
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of experts works with you to build custom software that meets your unique business needs, from web and mobile apps to APIs and backend systems.
          </p>
        </div>
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((_service, index) => (
            <div key={index} className="opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}