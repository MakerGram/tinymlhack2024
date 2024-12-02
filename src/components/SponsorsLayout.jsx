import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SponsorsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const sponsors = [
    {
      image: "https://robu.in/wp-content/uploads/2023/11/seeed-Studio.png",
      name: "Seeed Studio",
      description: "Seeed Technology (also known as, Seeed Studio) is an innovative IoT technology company, which specializes in hardware research, production and sales for edge computing, network communication, and smart sensing applications. Moreover, the company provides a wide variety of R&D support and services for customized products."
    },
    {
      image: "https://pbs.twimg.com/profile_images/1428037478871617536/ZD_JAMuu_400x400.jpg",
      name: "Edge Impulse", 
      description: "Edge Impulse is ushering in the future of embedded machine learning by empowering developers to create and optimize solutions with real-world data. We are making the process of building, deploying, and scaling embedded ML applications easier and faster than ever, unlocking massive value across every industry, with millions of developers making billions of devices smarter."
    }
  ];

  return (
    <section 
      id="sponsors" 
      className="text-center p-7 bg-black"
    >
      <motion.section 
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center px-16 pt-7 pb-3 w-full rounded-xl bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full"
      >
       

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-[1038px]">
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-stone-900 rounded-xl overflow-hidden"
            >
              <img 
                loading="lazy" 
                src={sponsor.image}
                alt={`${sponsor.name} logo`}
                className="w-full h-48 object-contain bg-white p-4"
              />
              
              <div className="p-6">
                <h3 className="text-xl tracking-[9px] text-indigo-600 mb-4 uppercase">
                  {sponsor.name}
                </h3>
                
                <p className="text-m leading-5 text-justify text-gray-300">
                  {sponsor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default SponsorsSection;