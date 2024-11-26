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
         <h1 className=" text-white 
          text-3xl 
          sm:text-4xl 
          font-bold 
          tracking-[20px] 
          uppercase 
          py-3 
          text-center 
          mb-10 
          animate-slide-up">
         PRIZES </h1>
        <div className={`flex ${animationClass} space-x-8 py-4`}>
          {/* Original items */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.color} 
                flex-shrink-0 w-72 
                rounded-2xl p-6 
                border border-blue-800/30
                hover:scale-105 
                transition-transform duration-300
              `}
            >
              <div className="flex justify-between items-center mb-4">
                <item.icon 
                  className={`${item.accentColor}`} 
                  size={40} 
                  strokeWidth={1.5} 
                />
                <span className="text-3xl font-bold text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-blue-100 text-opacity-80">
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
                flex-shrink-0 w-72 
                rounded-2xl p-6 
                border border-blue-800/30
                hover:scale-105 
                transition-transform duration-300
              `}
            >
              <div className="flex justify-between items-center mb-4">
                <item.icon 
                  className={`${item.accentColor}`} 
                  size={40} 
                  strokeWidth={1.5} 
                />
                <span className="text-3xl font-bold text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-blue-100 text-opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
/* bg-gradient-to-br from-blue-950 to-indigo-950 */
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto space-y-8">
        {/* First Row - Sliding Right */}
        {renderContinuousRow('right')}

        {/* Second Row - Sliding Left 
        {renderContinuousRow('left')}
        */}
      </div>
    </section>
  );
};

export default ContinuousPrizes;