import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import HomeCards from "./Homepage-subcomponents/HomeCards";

const HomePageMain = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Hero />
      {/* Main Brand Experience Content */}
      <div className="relative z-30 bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            AWUOR VISIONS
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            AWUOR VISIONS blends Luo cultural heritage with contemporary
            fashion. We craft collections that honor tradition, champion
            artisanship, and deliver modern silhouettes that resonate globally.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/mywork"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-sm"
            >
              Explore Collections
            </a>
            <a
              href="/whoiam"
              className="px-6 py-3 border border-amber-600 text-white bg-transparent hover:bg-white/5 rounded-sm"
            >
              Meet the Designer
            </a>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="max-w-6xl mx-auto py-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Featured Work
          </h3>
          <HomeCards />
        </section>

        {/* Secondary CTA */}
        <section className="mt-12 text-center max-w-3xl mx-auto py-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Join The Journey
          </h3>
          <p className="text-gray-300 mb-6">
            Collaborate, commission, or simply follow the collections —
            subscribe for updates and showings.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-sm"
            >
              Contact
            </a>
            <a
              href="/mywork"
              className="px-6 py-3 border border-amber-600 text-white rounded-sm"
            >
              Shop Lookbook
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageMain;
