import React from 'react';
import ServiceCard from './ServiceCard';  // Importing the ServiceCard component

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Mobile Apps', subtitle: 'iOS, Android, cross-platform', imageUrl: 'https://cdn.usegalileo.ai/stability/7ace45d5-cab5-4b0b-b45b-1e2760d73100.png' },
    { title: 'Web Apps', subtitle: 'React, Angular, Vue, Node.js', imageUrl: 'https://cdn.usegalileo.ai/stability/d8cea2bc-0a8b-47ab-aea3-476742d349ff.png' },
    { title: 'APIs', subtitle: 'REST, GraphQL, gRPC', imageUrl: 'https://cdn.usegalileo.ai/stability/1a3f31c3-ee3d-404b-9ab0-7d02180390e4.png' },
    { title: 'Full stack development', subtitle: 'Frontend, Backend, Database', imageUrl: 'https://cdn.usegalileo.ai/stability/b212abd4-30d5-45e7-b78c-d83046e0888d.png' },
    { title: 'Real-time apps', subtitle: 'WebSockets, Pub/Sub', imageUrl: 'https://cdn.usegalileo.ai/stability/d1a03125-b213-475f-9cf8-251dce74f314.png' },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0d131c] tracking-light text-[32px] font-bold leading-tight max-w-[720px]">We build for all platforms</h1>
        <p className="text-[#0d131c] text-base font-normal leading-normal max-w-[720px]">
          Our team of experts works with you to build custom software that meets your unique business needs, from web and mobile apps to APIs and backend systems.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} subtitle={service.subtitle} imageUrl={service.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
