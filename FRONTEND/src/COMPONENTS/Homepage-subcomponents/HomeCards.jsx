import React from 'react';
import fashionCards from '../../data/fashionCards.json';

const HomeCards = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main heading */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
            WE CONDUCT EXPERIMENTS THAT<br className="hidden sm:block" />
            MAY OR MAY NOT SERIOUSLY<br className="hidden sm:block" />
            BREAK THE UNIVERSE
          </h2>
        </div>

        {/* Cards with alternating layout */}
        <div className="space-y-12 sm:space-y-16">
          {fashionCards.map((card, index) => (
            <div 
              key={card.id} 
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Image on left for desktop, on top for mobile */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img 
                      src={card.image} 
                      alt={card.alt}
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-sm transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                    />
                  </div>
                  {/* Content on right for desktop, below for mobile */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                      {card.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Content on left for desktop, on top for mobile */}
                  <div className="w-full md:w-1/2 text-center md:text-right order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:ml-auto md:mr-0">
                      {card.description}
                    </p>
                  </div>
                  {/* Image on right for desktop, below for mobile */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                    <img 
                      src={card.image} 
                      alt={card.alt}
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-sm transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section - centered */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            GET SHADY WITH SCIENCE
          </h3>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-4">
            Vive saquae dictum etiam semper magnis enim Magni amet curabitur tempor orci penatibus. 
            Tellus erat mauri sume fermentum etiam vivamus eget. Nam sibi morbi quis facer lacus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;