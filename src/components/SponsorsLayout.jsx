import React from 'react';

const SponsorsLayout = () => {
  const sponsors = [
    {
      image: "https://robu.in/wp-content/uploads/2023/11/seeed-Studio.png",
      name: "Seeed Studio",
      description: "Seeed Technology (also known as, Seeed Studio) is an innovative IoT technology company, which specializes in hardware research, production and sales for edge computing, network communication, and smart sensing applications. Moreover, the company provides a wide variety of R&D support and services for customized products.
"
    },
    {
      image: "https://pbs.twimg.com/profile_images/1428037478871617536/ZD_JAMuu_400x400.jpg",
      name: "Edge Impulse", 
      description: "Edge Impulse is ushering in the future of embedded machine learning by empowering developers to create and optimize solutions with real-world data. We are making the process of building, deploying, and scaling embedded ML applications easier and faster than ever, unlocking massive value across every industry, with millions of developers making billions of devices smarter.
"
    }
  ];

  return (
    <section section id="sponsors" className="
      bg-gradient-to-b from-black via-gray-900 to-black 
      py-4 px-4 
      min-h-screen 
      flex items-center justify-center
    ">
      <div className="
        w-full 
        max-w-6xl 
        bg-gray-900/30 
        rounded-2xl 
        p-8 
        md:p-12 
        shadow-2xl 
        border border-gray-800
      ">
        

        <div className="
          grid 
          md:grid-cols-2 
          gap-8 lg:gap-12
          items-stretch
        ">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="
                flex 
                flex-col 
                items-center 
                text-center 
                group 
                transition-all 
                duration-300 
                ease-in-out
                hover:scale-105
                hover:shadow-2xl
                rounded-xl
                overflow-hidden
                bg-gray-800/50
                p-6
              "
            >
              <div className="
                w-full 
                mb-6 
                overflow-hidden 
                rounded-lg 
                shadow-lg 
                transform 
                transition-transform 
                duration-300 
                group-hover:scale-110
              ">
                <img 
                  loading="lazy" 
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  className="
                    w-full 
                    h-auto 
                    object-cover 
                    aspect-video 
                    transition-transform 
                    duration-100
                  "
                />
              </div>

              <h3 className="
                text-xl md:text-2xl 
                font-bold 
                tracking-[9px]
                leading-10
              
                
                mb-4
                text-white mt-4
              ">
                {sponsor.name}
              </h3>

              <p className="
                text-sm md:text-base 
                text-gray-300 
                max-w-prose
                mt-2.5 text-m leading-5 text-justify text-gray-300
              ">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsLayout;
