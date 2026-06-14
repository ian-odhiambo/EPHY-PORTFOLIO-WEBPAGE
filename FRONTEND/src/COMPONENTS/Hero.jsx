import React, { useState, useEffect } from "react";
import carouselImages from "../data/carouselImages.json";
import logo from "../assets/images/logo.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        {/* Translucent purple glaze */}
        <div className="absolute top-0 left-0 w-full h-full bg-purple-700/50 z-10" />
      </div>

      {/* Content that moves on scroll */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-white text-center">
        <img
          src={logo}
          alt="Logo"
          className="w-40 sm:w-44 md:w-48 lg:w-56 xl:w-64 h-auto mb-6 md:mb-8 animate-bounce-slow"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-wider drop-shadow-lg">
          AWUOR VISIONS
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-semibold">
          <span className="text-amber-500">Cultural</span> Heritage Reimagined
          Through <span className="text-amber-500">Modern Design</span>
          <br className="hidden sm:block" />
          Discover where tradition meets contemporary vision
        </p>
      </div>
    </section>
  );
};

export default Hero;
