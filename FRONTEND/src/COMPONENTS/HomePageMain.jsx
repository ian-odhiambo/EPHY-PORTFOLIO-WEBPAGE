import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import HomeCards from './Homepage-subcomponents/HomeCards';


const HomePageMain = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="relative">
          
          <Hero />
          
          {/* Black space for components - moves with scroll */}
          <div 
            className={`relative z-30 bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out ${
              scrollPosition > 0 ? 'translate-y-0' : ''
            }`}
            style={{ backgroundColor: 'black' }}
          >
            {/* Home Cards Component */}
            <HomeCards />
            
            {/* Space for future components */}
            <div className="mt-20">
              {/* Additional components will go here */}
            </div>
          </div>
        </div>
      );
  
}

export default HomePageMain