import React from "react";
import Header from './components/Header';  // Importing Header component
import HeroSection from './components/HeroSection';  // Importing HeroSection component
import ServicesSection from './components/ServicesSection';  // Importing ServicesSection component
import './tailwind.css';
import './App.css';


const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Landing;