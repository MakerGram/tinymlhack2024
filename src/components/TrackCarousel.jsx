import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tracksData = [
  { 
    id: 1, 
    name: 'BEST USE OF XIAO',
    description: 'Innovative solutions using XIAO microcontrollers in cutting-edge projects'
  },
  { 
    id: 2, 
    name: 'BEST USE OF AI',
    description: 'Transformative AI technologies pushing the boundaries of intelligent systems'
  },
  { 
    id: 3, 
    name: 'BEST PRODUCT',
    description: 'Seamless integration of intelligent network systems with breakthrough design'
  }
];

const TrackCarousel = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalTracks = tracksData.length;

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentTrackIndex, isAutoPlaying]);

  const handlePrev = () => {
    setCurrentTrackIndex(prev => (prev === 0 ? totalTracks - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrackIndex(prev => (prev === totalTracks - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const currentTrack = tracksData[currentTrackIndex];

  return (
    <section section id="tracks" className="relative bg-black/90 overflow-hidden py-12 md:py-20 min-h-[500px] flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 
        bg-gradient-to-br 
        from-gray-900/60 
        via-black/80 
        to-gray-900/60 
        opacity-90 
        animate-gradient-shift
      "></div>
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/5 rounded-full animate-particle-float"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 110}%`,
              top: `${Math.random() * 110}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 
        transition-all duration-500 ease-in-out">
        {/* Track Content Container */}
        <div className="max-w-4xl mx-auto text-center space-y-6 
          transform transition-all duration-700 
          animate-fade-in-up">
          {/* Track Name */}
          <div className="relative group">
          <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-[10px] sm:tracking-[20px] uppercase py-3 text-center mb-6 sm:mb-10 animate-slide-up">
        
              {currentTrack.name}
            </h1>
            <div className="
              absolute 
              -bottom-2 
              left-1/2 
              -translate-x-1/2 
              w-1/2 
              h-1 
              bg-gradient-to-r 
              from-indigo-500 
              to-purple-600 
              rounded-full 
              opacity-70 
              blur-sm 
              group-hover:w-3/4 
              transition-all 
              duration-500
            "></div>
          </div>

          {/* Track Description */}
          <p className="
            text-gray-300 
            text-base 
            md:text-lg 
            max-w-2xl 
            mx-auto 
            leading-relaxed 
            tracking-wide
            px-4
            min-h-[80px]
          ">
            {currentTrack.description}
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-12">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="
              absolute 
              left-0 
              md:left-[-80px] 
              z-10 
              text-white/30 
              hover:text-indigo-400 
              transition-all 
              duration-500 
              transform 
              hover:-translate-x-2 
              group
            "
            aria-label="Previous track"
          >
            <ChevronLeft className="
              w-12 h-12 
              md:w-16 md:h-16 
              group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]
              transition-all 
              duration-300
            " />
          </button>

          {/* Next Arrow */}
         
          <button
  onClick={handleNext}
  className="
    absolute 
    right-4  // Added right padding to move from extreme corner
    md:right-[-80px] 
    top-1/2  // Center vertically
    -translate-y-1/2  // Adjust for precise vertical centering
    z-10 
    text-white/30 
    hover:text-indigo-400 
    transition-all 
    duration-500 
    transform 
    hover:translate-x-2 
    group
  "
  aria-label="Next track"
>
  <ChevronRight className="
    w-10 h-10  // Slightly reduced default size
    md:w-16 md:h-16 
    group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]
    transition-all 
    duration-300
  " />
</button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 md:mt-16 gap-3">
          {tracksData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`
                transition-all 
                duration-700 
                ease-in-out 
                ${
                  currentTrackIndex === index 
                    ? 'bg-indigo-500 w-10 h-3 rounded-xl' 
                    : 'bg-gray-700 w-3 h-3 rounded-full hover:bg-indigo-400'
                }
              `}
              aria-label={`Go to ${tracksData[index].name} track`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackCarousel;