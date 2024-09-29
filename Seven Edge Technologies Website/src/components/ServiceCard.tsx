import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div>
        <p className="text-[#0d131c] text-base font-medium leading-normal">{title}</p>
        <p className="text-[#49699c] text-sm font-normal leading-normal">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
