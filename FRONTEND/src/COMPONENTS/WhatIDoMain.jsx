import React, { useState, useEffect } from "react";
import carouselImages from "../data/carouselImages.json";
import fashionModels from "../data/fashionModels.json";
import ephyImg from "../assets/images/ephy.png";
import reeree3Img from "../assets/images/reeree3.png";
import ephy3Img from "../assets/images/ephy3.png";
import model7Img from "../assets/images/model7.png";
import reereeImg from "../assets/images/Reeree.png";
import model2Img from "../assets/images/model2.png";
import model8Img from "../assets/images/model8.png";
import model3Img from "../assets/images/model3.png";
import model9Img from "../assets/images/model9.png";
import model4Img from "../assets/images/model4.png";
import reeree2Img from "../assets/images/reeree2.png";
import model5Img from "../assets/images/model5.png";
import model6Img from "../assets/images/model6.png";
import model10Img from "../assets/images/model10.png";

const modelImageMap = {
  "/assets/images/ephy.png": ephyImg,
  "/assets/images/reeree3.png": reeree3Img,
  "/assets/images/ephy3.png": ephy3Img,
  "/assets/images/model7.png": model7Img,
  "/assets/images/Reeree.png": reereeImg,
  "/assets/images/model2.png": model2Img,
  "/assets/images/model8.png": model8Img,
  "/assets/images/model3.png": model3Img,
  "/assets/images/model9.png": model9Img,
  "/assets/images/model4.png": model4Img,
  "/assets/images/reeree2.png": reeree2Img,
  "/assets/images/model5.png": model5Img,
  "/assets/images/model6.png": model6Img,
  "/assets/images/model10.png": model10Img,
};

const WhatIDoMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 py-20 text-white">
        {/* Header Section - Fashion Blog Style */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Express Your <span className="text-amber-400">Vibrant</span> Self
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            Welcome to the Awuor Visions Atelier - a space where fashion meets
            authentic self-expression. Each garment tells a story, each style
            celebrates the richness of being undeniably you while bridging the
            gap between urban aesthetic and traditional customs
          </p>
        </div>

        {/* Fashion Blog Intro Paragraph */}
        <div className="max-w-2xl mx-auto text-center mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-lg">
          <p className="text-sm sm:text-base italic leading-relaxed">
            "Fashion is the armor to survive the reality of everyday life. Here,
            we don't just dress people — we curate identities. Every stitch,
            every fabric choice speaks to the soul of the wearer. These are the
            stories of those who dared to wear their truth."
          </p>
          <p className="text-xs sm:text-sm mt-3 text-amber-300 font-semibold">
            — AWOUR VISIONS ATELIER
          </p>
        </div>

        {/* Cards Grid - Bouncing Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {fashionModels.map((card, index) => (
            <div
              key={card.id}
              className="group bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 animate-bounce-slow"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={modelImageMap[card.image] ?? card.image}
                  alt={card.alt || card.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with model name on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-amber-400 font-bold text-sm">
                    {card.style}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {card.name}
                </h3>
                <p className="text-xs text-amber-300 uppercase tracking-wider mb-2">
                  {card.style}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-white/90 italic">
            "Wealth means living out loud. Design a statement as vivid as your
            spirit."
          </p>
          <p className="text-xs sm:text-sm text-amber-300 mt-2 font-semibold">
            love lives here • love yourself
          </p>
          <div className="flex justify-center gap-2 mt-2 text-xs text-white/70">
            <span>love yourself.</span>
            <span>love yourself.</span>
            <span>love yourself.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoMain;
