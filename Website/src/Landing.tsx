import React from "react";
import Header from './components/Header';  
import HeroSection from './components/HeroSection';  
import ServicesSection from './components/ServicesSection'; 
import Footer from './components/Footer';
import './tailwind.css';
import './App.css';


const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer/>
    </div>
  );
};

export default Landing;