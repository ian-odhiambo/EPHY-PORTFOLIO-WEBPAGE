// import React, { useEffect, useState } from "react";
// import Hero from "./Hero";
// import HomeCards from "./Homepage-subcomponents/HomeCards";

// const HomePageMain = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative">
//       <Hero />

//       {/* Main Content Section */}
//       <div className="relative z-30 bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
//         {/* Home Cards Component */}
//         <HomeCards />

//         {/* Call-to-Action Section */}
//         <div className="mt-24 mb-16 text-center max-w-3xl mx-auto">
//           <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Ready to Explore Visions?
//           </h3>
//           <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//             Dive deeper into our collections, designs, and creative process.
//             Every piece tells a story of tradition meeting modernity.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/mywork"
//               className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-sm transition-colors duration-300"
//             >
//               View Collections
//             </a>
//             <a
//               href="/whoiam"
//               className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-sm transition-colors duration-300 border border-amber-600"
//             >
//               Learn My Story
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageMain;
