import React from 'react';
import { motion } from 'framer-motion';

const ContinuousMarquee = () => {
  const tracks = [
    "TRACKS", 
    "TRACKS", 
    "TRACKS", 
    "TRACKS", 
    "TRACKS", 
    "TRACKS", 
  ];

  return (
    <div className="w-full overflow-hidden relative py-4 bg-white">
      <div className="relative w-full">
        <div className="animate-marquee flex space-x-8 items-center">
          {[...Array(10)].map((_, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {tracks.map((track, index) => (
                <span 
                  key={`${rowIndex}-${index}`} 
                  className="text-sm md:text-xl lg:text-2xl font-bold text-indigo-600 whitespace-nowrap 
                  transition-transform duration-300 hover:scale-110 hover:text-indigo-400 cursor-pointer"
                >
                  {track}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousMarquee;

// Add to global CSS or tailwind.config.js
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// 
// .animate-marquee {
//   animation: marquee 15s linear infinite;
//   display: flex;
//   width: max-content;
// }