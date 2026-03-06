import React, { useState, useEffect } from 'react';
import carouselImages from '../data/carouselImages.json';

const WhoIAmMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
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
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-purple-700/50 z-10" />
      </div>

      {/* First Section - Meet Ephy */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ">
            {/* Left Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Meet <span className="text-amber-400 italic">Ephy</span> — The Designer Behind The Vision
                </h1>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Ephy is a visionary fashion designer whose journey began with a deep appreciation for African heritage and culture. Growing up surrounded by the rich traditions of woven baskets, calabash art, and natural hair artistry, she found inspiration in the everyday beauty of her roots.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Her designs are more than just clothing—they are a celebration of identity, storytelling through fabric, and a bridge between the ancient and the modern. Every piece she creates connects to the cultural stories passed down through generations.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  Through this portfolio, Ephy invites you to explore a world where tradition meets contemporary fashion, where each garment tells a story of heritage, resilience, and artistic expression.
                </p>
                
                <div className="border-t border-white/30 pt-4">
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">Design Philosophy</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">"Fashion is the art of wearing your culture with pride"</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">— Ephy</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image Grid - Classic Masonry Style */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-3 gap-4 h-[500px]">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/about.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/about2.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/about3.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Sketches */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">

            {/* left Column - Sketches Grid - Asymmetric Masonry Style */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-5 gap-3 h-[500px]">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/sketches/sketch1.png" 
                    alt="Ephy's Fashion Sketch - Elegant Drape"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/sketches/sketch2.png" 
                    alt="Ephy's Fashion Sketch - Royal Ankara"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/sketches/sketch3.png" 
                    alt="Ephy's Fashion Sketch - Tribal Fusion"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/sketches/sketch4.png" 
                    alt="Ephy's Fashion Sketch - Additional"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/sketches/sketch5.png" 
                    alt="Ephy's Fashion Sketch - Additional"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
              </div>
            </div>

            {/*The second right Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Ephy believes that fashion is a collaborative art form. She has worked closely with talented local models who bring her imaginative designs to life, transforming sketches into stunning runway moments that capture the essence of African elegance.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Each design begins as a sketch—a spark of inspiration captured on paper. Through countless hours of collaboration with local artisans, seamstresses, and models, these sketches evolve into wearable art that tells a story of heritage, creativity, and community.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  The synergy between Ephy's vision and her local collaborators results in collections that celebrate both individual artistry and the collective spirit of African fashion.
                </p>
                <div className="border-t border-white/30 pt-4">
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">Creative Process</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Sketch → Collaborate → Create → Showcase</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Every piece is a team effort</p>
                </div>
               
              </div>
            </div>
            
            {/*right Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic">
                  Bringing <span className="text-amber-400 italic">Vision</span> To Life With Local Talent
                </h1>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Ephy believes that fashion is a collaborative art form. She has worked closely with talented local models who bring her imaginative designs to life, transforming sketches into stunning runway moments that capture the essence of African elegance.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Each design begins as a sketch—a spark of inspiration captured on paper. Through countless hours of collaboration with local artisans, seamstresses, and models, these sketches evolve into wearable art that tells a story of heritage, creativity, and community.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  The synergy between Ephy's vision and her local collaborators results in collections that celebrate both individual artistry and the collective spirit of African fashion.
                </p>
                
                
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Third Section - Mood Board */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ">
            {/* Left Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic">
                  The <span className="text-amber-400 italic">Emotions</span> Behind The MoodBoard 
                </h1>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Imagine you're trying to describe the perfect outfit to a friend. You could say, "It's elegant, but with a bit of an edgy, urban feel, maybe in dark, moody tones."

                  
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Your friend might picture something completely different from what you have in mind. But if you showed them a mood board with a photo of a leather jacket, a picture of a sleek black building, a swatch of velvet fabric, and the color of a stormy sky, they'd instantly understand the exact "vibe" you're going for.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                   Ephy invites you to explore a world where tradition meets contemporary fashion, where each garment tells a story of heritage, resilience, and artistic expression.
                </p>
                
                <div className="border-t border-white/30 pt-4">
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">Design Philosophy</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">"Fashion is the art of wearing your culture with pride"</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">— Ephy</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image Grid - Modern Mosaic Masonry Style */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-4 gap-3 h-[500px]">
                <div className="col-span-1 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/ephy.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/ephy4.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/ephy3.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/images/ephy2.png" 
                    alt="Ephy's Design Work"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Blogs */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">

            {/* left Column - Inconsistent Blog Cards - Asymmetric Masonry Style */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-4 gap-4 h-[500px]">
                {/* Large card - spans 2 columns and 2 rows */}
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog1.png" 
                    alt="Blog Post - Design Inspiration"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Small card - 1 column, 1 row */}
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog2.png" 
                    alt="Blog Post - Cultural Heritage"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Medium card - spans 1 column and 2 rows */}
                <div className="col-span-1 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog3.png" 
                    alt="Blog Post - Artisan Collaboration"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Wide card - spans 2 columns, 1 row */}
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog4.png" 
                    alt="Blog Post - Sustainable Fashion"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Small card - 1 column, 1 row */}
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog5.png" 
                    alt="Blog Post - Runway Stories"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
              </div>
            </div>
            
            {/* right Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic">
                  Documenting The <span className="text-amber-400 italic">Journey</span> Through Blogs
                </h1>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  In the fast-paced world of fashion, it's easy for the stories behind each creation to fade into memory. That's where blogging becomes invaluable—a digital diary that captures not just the final designs, but the entire creative journey.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Through these blogs, Ephy shares the inspiration behind each collection, the challenges of working with traditional techniques, and the moments of breakthrough that make it all worthwhile. From sourcing sustainable fabrics in local markets to collaborating with artisans, every detail is documented.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  These blog posts serve as a bridge between the designer and the audience, offering an intimate look at the creative process and the cultural influences that shape each piece.
                </p>
                
                <div className="border-t border-white/30 pt-4">
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">Stay Connected</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Read, Reflect, and be Inspired</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Every story matters</p>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>

      {/* Fifth Section - More Blogs */}
      <div className="relative z-20 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            
            {/* Left Column - Text in translucent card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic">
                  Exploring <span className="text-amber-400 italic">Stories</span> Through Writing
                </h1>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  Beyond creating stunning fashion pieces, Ephy uses her blog as a platform to explore deeper narratives about culture, identity, and the evolution of African aesthetics in the modern world. Each post is a journey into the heart of creativity.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  From behind-the-scenes glimpses of the design process to interviews with fellow artists and artisans, these writings paint a comprehensive picture of the vibrant fashion ecosystem that inspires her daily work.
                </p>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  Whether you're a fellow designer seeking inspiration or a fashion enthusiast curious about the stories behind the clothes, these blogs offer a window into a world where tradition and innovation dance in beautiful harmony.
                </p>
                
                <div className="border-t border-white/30 pt-4">
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">Keep Exploring</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Every post is a new adventure</p>
                  <p className="text-white/80 text-xs sm:text-sm italic">Stories waiting to be discovered</p>
                </div>
              </div>
            </div>

            {/* Right Column - Inconsistent Blog Cards - Different Asymmetric Masonry Style */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-3 gap-4 h-[500px]">
                {/* Tall card - spans 1 column and 3 rows */}
                <div className="col-span-1 row-span-3 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog3.png" 
                    alt="Blog Post - Creative Process"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Wide card - spans 2 columns, 1 row */}
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog1.png" 
                    alt="Blog Post - Design Journey"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Medium card - spans 1 column and 1 row */}
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog5.png" 
                    alt="Blog Post - Fashion Trends"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Large square card - spans 1 column and 2 rows */}
                <div className="col-span-1 row-span-2 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog2.png" 
                    alt="Blog Post - Cultural Roots"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
                {/* Wide card - spans 1 column, 1 row */}
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/src/assets/blogs/blog4.png" 
                    alt="Blog Post - Sustainable Practices"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default WhoIAmMain;
