import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/Tech_banner.jpg" alt="Technology background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div ref={sectionRef} className="max-w-3xl opacity-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Building the Future of Business Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            From startups to enterprises, we help organizations accelerate their digital transformation by building, modernizing, and scaling apps that deliver results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
            >
              Talk to a specialist
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            <a
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">View our work</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}