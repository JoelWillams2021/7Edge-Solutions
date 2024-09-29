import React from 'react';
import Button from './Button';  // Importing the Button component

const HeroSection: React.FC = () => {
  return (
    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10"
         style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/5678a297-7d47-4bbb-a048-ed762ea7253a.png")' }}>
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          We build technology solutions for demanding businesses
        </h1>
        <h2 className="text-white text-sm font-normal leading-normal">
          From startups to enterprises, we help organizations accelerate their digital transformation by building, modernizing, and scaling apps that deliver results.
        </h2>
      </div>
      <div className="flex-wrap gap-3 flex">
        <Button label="Talk to a specialist" />
        <Button label="Get started" primary={false} />
      </div>
    </div>
  );
};

export default HeroSection;
