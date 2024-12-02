import React from 'react';
import { Award, Star, Rocket, Trophy, Globe, Shield } from 'lucide-react';

const ContinuousPrizes = () => {
  const items = [
    { 
      title: "Innovation Catalyst", 
      description: "Groundbreaking technological advancements",
      icon: Rocket,
      color: "bg-blue-900/70",
      accentColor: "text-blue-400"
    },
    { 
      title: "Strategic Leadership", 
      description: "Exceptional vision and transformative leadership",
      icon: Trophy,
      color: "bg-indigo-900/70",
      accentColor: "text-indigo-400"
    },
    { 
      title: "Research Frontier", 
      description: "Pushing boundaries of scientific discovery",
      icon: Star,
      color: "bg-blue-900/70",
      accentColor: "text-blue-400"
    },
    { 
      title: "Global Impact", 
      description: "Worldwide transformative potential",
      icon: Globe,
      color: "bg-indigo-900/70",
      accentColor: "text-indigo-400"
    }
  ];

  const renderContinuousRow = (direction = 'right') => {
    const animationClass = direction === 'right' 
      ? 'animate-slide-right' 
      : 'animate-slide-left';

    return (
      <div className="relative w-full overflow-hidden">
         <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-[10px] sm:tracking-[20px] uppercase py-3 text-center mb-6 sm:mb-10 animate-slide-up">
         PRIZES </h1>
        <div className={`flex ${animationClass} space-x-4 sm:space-x-8 py-4`}>
          {/* Original items */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.color} 
                flex-shrink-0 
                w-48 sm:w-72 
                rounded-xl sm:rounded-2xl 
                p-4 sm:p-6 
                border border-blue-800/30
                hover:scale-105 
                transition-transform duration-300
              `}
            >
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <item.icon 
                  className={`${item.accentColor} h-7 w-7 sm:h-10 sm:w-10`}
                  strokeWidth={1.5} 
                />
                <span className="text-2xl sm:text-3xl font-bold text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100 text-opacity-80">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* Duplicate items for continuous loop */}
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className={`
                ${item.color} 
                flex-shrink-0 
                w-48 sm:w-72 
                rounded-xl sm:rounded-2xl 
                p-4 sm:p-6 
                border border-blue-800/30
                hover:scale-105 
                transition-transform duration-300
              `}
            >
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <item.icon 
                  className={`${item.accentColor} h-7 w-7 sm:h-10 sm:w-10`}
                  strokeWidth={1.5} 
                />
                <span className="text-2xl sm:text-3xl font-bold text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100 text-opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-12 sm:py-20">
      <div className="container mx-auto space-y-8">
        {renderContinuousRow('right')}
      </div>
    </section>
  );
};

export default ContinuousPrizes;