import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size: number }>;
}

const ServiceCard = ({ title, subtitle, icon: Icon }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export default ServiceCard;