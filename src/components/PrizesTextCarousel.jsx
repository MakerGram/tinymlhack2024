import React from 'react';

const ContinuousMarquee = () => {
  return (
    <div className="w-full overflow-hidden relative mt-1 mb-4">
      <div className="animate-marquee flex">
        <div className="flex space-x-7 min-w-full">
          {[...Array(13)].map((_, index) => (
            <span 
              key={index} 
              className="text-2xl font-bold text-indigo-600 whitespace-nowrap"
            >
              REGISTER NOW
            </span>
          ))}
        </div>
        <div className="flex space-x-8 min-w-full absolute top-0 left-full">
          {[...Array(10)].map((_, index) => (
            <span 
              key={`repeat-${index}`} 
              className="text-2xl font-bold text-indigo-600 whitespace-nowrap"
            >
              PRIZES
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousMarquee;