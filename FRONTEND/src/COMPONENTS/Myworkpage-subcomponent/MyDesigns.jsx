import React from 'react';
import sketchesData from '../../data/sketches.json';

// Image mapping - maps JSON keys to actual image paths
const sketchImages = {
  sketch1: "/src/assets/sketches/sketch1.png",
  sketch2: "/src/assets/sketches/sketch2.png",
  sketch3: "/src/assets/sketches/sketch3.png",
  sketch4: "/src/assets/dsketches/sketch4.png",
  sketch5: "/src/assets/sketches/sketch5.png",
  sketch6: "/src/assets/sketches/sketch6.png",
  sketch7: "/src/assets/sketches/sketch7.png",
};

const MyDesigns = () => {
  return (
    <div className="w-full py-12 bg-neutral-900 overflow-hidden">
      <h2 className="text-3xl font-bold text-amber-400 text-center mb-8">
        My Design Sketches
      </h2>
      
      {/* Continuous scrolling carousel - right to left */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6 w-max">
          {/* First set of cards */}
          {sketchesData.map((sketch) => (
            <div 
              key={sketch.id} 
              className="w-80 flex-shrink-0 bg-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={sketchImages[sketch.src]} 
                  alt={sketch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-amber-400 font-bold text-xl mb-2">
                  {sketch.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {sketch.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {sketchesData.map((sketch) => (
            <div 
              key={`dup-${sketch.id}`} 
              className="w-80 flex-shrink-0 bg-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={sketchImages[sketch.src]} 
                  alt={sketch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-amber-400 font-bold text-xl mb-2">
                  {sketch.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {sketch.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for continuous scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MyDesigns;
