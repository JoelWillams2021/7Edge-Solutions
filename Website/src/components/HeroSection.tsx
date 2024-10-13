import React from 'react';
import Button from './Button';  // Importing the Button component
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="relative bg-gray-800 text-white">
    <img 
      // <a href="https://lovepik.com/images/backgrounds-abstract-dark.html">Abstract Dark Png vectors by Lovepik.com</a>
      // Credit for the image
      src="/images/Tech_banner.jpg" 
      alt="Technology background" 
      className="w-full h-[60vh] object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            We build technology solutions for demanding businesses
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From startups to enterprises, we help organizations accelerate their digital transformation 
            by building, modernizing, and scaling apps that deliver results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button 
                label="Talk to a specialist"
                variant="primary" onClick={function (): void {
                  throw new Error('Function not implemented.');
                } }              
                />
            </Link>

            <Link to="/portfolio">
              <Button 
                label="View our work"
                variant="secondary" onClick={function (): void {
                  throw new Error('Function not implemented.');
                } }              
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
;

export default HeroSection;
