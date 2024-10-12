import React from 'react';
import ServiceCard from './ServiceCard'; // Ensure correct import path

const ServicesSection = () => {
  const services = [
    { 
      title: 'Mobile Apps', 
      subtitle: 'Native iOS, Android, and cross-platform solutions built for performance and user experience.',
      icon: ({ size }: { size: number }) => ( // Explicitly type size
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: 'Web Applications', 
      subtitle: 'Modern, responsive web apps using React, Angular, and Vue.js with robust backend systems.',
      icon: ({ size }: { size: number }) => ( // Explicitly type size
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      title: 'API Development', 
      subtitle: 'Scalable REST and GraphQL APIs that power your applications and integrate with existing systems.',
      icon: ({ size }: { size: number }) => ( // Explicitly type size
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
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
            <ServiceCard 
              key={index} 
              title={service.title} 
              subtitle={service.subtitle} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
