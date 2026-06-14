import React, { useState, useEffect } from 'react';
import carouselImages from '../data/carouselImages.json';
import workImagesData from '../data/calabash.json';
import basketImagesData from '../data/baskets.json';
import hairImagesData from '../data/afroHair.json';
import MyDesigns from './Myworkpage-subcomponent/MyDesigns';
import reereeImg from '../assets/images/Reeree.png';
import model2Img from '../assets/images/model2.png';
import calabash1Img from '../assets/images/calabash1.png';
import model4Img from '../assets/images/model4.png';
import calabash3Img from '../assets/images/calabash3.png';
import calabash2Img from '../assets/images/calabash2.png';
import basket3Img from '../assets/images/basket3.png';
import basket2Img from '../assets/images/basket2.png';
import womanbasketImg from '../assets/images/womanbasket.png';
import basket4Img from '../assets/images/basket4.png';
import basket1Img from '../assets/images/basket1.png';
import basketImg from '../assets/images/basket.png';
import afroImg from '../assets/images/afro.png';
import afro3Img from '../assets/images/afro3.png';
import reeree4Img from '../assets/images/reeree4.png';
import afro1Img from '../assets/images/afro1.png';
import afro2Img from '../assets/images/afro2.png';
import aboutephy2Img from '../assets/images/aboutephy2.png';

// Map image filenames to actual imports
const imageMap = {
  work1: reereeImg,
  work2: model2Img,
  work3: calabash1Img,
  work4: model4Img,
  work5: calabash3Img,
  work6: calabash2Img,

  basket1: basket3Img,
  basket2: basket2Img,
  basket3: womanbasketImg,
  basket4: basket4Img,
  basket5: basket1Img,
  basket6: basketImg,

  afro1: afroImg,
  afro2: afro3Img,
  afro3: reeree4Img,
  afro4: afro1Img,
  afro5: afro2Img,
  afro6: aboutephy2Img
};

const MyWorkMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Define different card sizes
  const getCardSize = (index) => {
    const sizes = [
      "row-span-2 col-span-2",
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
      "row-span-1 col-span-2",
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
    ];
    return sizes[index % sizes.length];
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background Carousel */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-purple-700/50 z-10" />
      </div>

      {/* Content - Paragraph left, Cards right */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left Column - Paragraph */}
            <div className="w-full lg:w-5/12 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                The <span className="text-amber-400 italic">Calabash</span> As A Symbol Of Cultural Heritage
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                a design sanctuary where the ancient soul of the calabash meets the rhythm of the urban landscape.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Browse our quality canvases, then adorn them with your own art, words, and slogans.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Design a statement as resilient and organic as the calabash itself.
              </p>
              
              <div className="border-t border-white/30 pt-4 mt-4">
                <p className="text-amber-400 font-semibold text-sm sm:text-base">In cultural names</p>
                <p className="text-white/80 text-xs sm:text-sm italic">'Agwata' in dholuo</p>
                <p className="text-white/80 text-xs sm:text-sm italic">'ciihuri' in Agikuyu</p>
                <p className="text-white/80 text-xs sm:text-sm italic">'sotet' in Kalenjin</p>
              </div>
            </div>
            
            {/* Right Column - Masonry Style Image Grid */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-3 grid-rows-3 gap-3 auto-rows-fr h-[600px]">
                {workImagesData.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`${getCardSize(index)} overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <img 
                      src={imageMap[image.src]} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Baskets */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mt-[10vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">
            {/* Right Column - Paragraph */}
            <div className="w-full lg:w-5/12 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                The Art Of <span className="text-amber-400 italic">Woven Baskets</span> And Cultural Stories
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Discover the timeless craftsmanship of woven baskets, where every thread tells a story.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                From functional storage to stunning decor, these woven masterpieces bring warmth.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Design a statement piece that transcends time.
              </p>
              
              <div className="border-t border-white/30 pt-4 mt-4">
                <p className="text-amber-400 font-semibold text-sm sm:text-base">Cultural significance</p>
                <p className="text-white/80 text-xs sm:text-sm italic">Passed down through generations</p>
                <p className="text-white/80 text-xs sm:text-sm italic">Symbol of unity and heritage</p>
              </div>
            </div>
            
            {/* Left Column - Masonry Style Image Grid for Baskets */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-3 grid-rows-3 gap-3 auto-rows-fr h-[600px]">
                {basketImagesData.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`${getCardSize(index)} overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <img 
                      src={imageMap[image.src]} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Natural African Hair */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mt-[10vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">
            {/* Right Column - Masonry Style Image Grid for women with African hair */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-3 grid-rows-3 gap-3 auto-rows-fr h-[600px]">
                {hairImagesData.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`${getCardSize(index)} overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <img 
                      src={imageMap[image.src]} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Left Column - Paragraph */}
            <div className="w-full lg:w-5/12 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                The Beauty in natural <span className="text-amber-400 italic">African Hair</span> in femininity 
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Inspired by visionaries like Laetitia Ky and Taiba Akhuetie, who transform strands into wearable art.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Natural African hair meets the soul of EVE cultural heritage.
              </p>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Design a statement as textured and unapologetic as your coils.
              </p>
              
              <div className="border-t border-white/30 pt-4 mt-4">
                <p className="text-amber-400 font-semibold text-sm sm:text-base">Key Cultural Reference</p>
                <p className="text-white/80 text-xs sm:text-sm italic">#Hair as a conduit</p>
                <p className="text-white/80 text-xs sm:text-sm italic">#Braids as maps</p>
                <p className="text-white/80 text-xs sm:text-sm italic">#Afro & Black power</p>
                <p className="text-white/80 text-xs sm:text-sm italic">#Natural Hair</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Design Sketches Carousel  */}
      <div className="relative z-20">
        <MyDesigns />
      </div>
    </section>
  );
};

export default MyWorkMain;