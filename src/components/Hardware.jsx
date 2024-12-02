import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Camera, Bluetooth, Zap } from 'lucide-react';

const HardwareSection = () => {
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

  const hardwareItems = [
    {
      name: "SeeedStudio XIAO-ESP32S3 Sense",
      description: "Powerful development board with onboard Camera and PDM Mic for rapid TinyML prototyping.",
      icon: <Camera className="text-indigo-600 w-12 h-12" />,
      features: [
        "Onboard Camera",
        "PDM Microphone",
        "ESP32S3 Chipset"
      ]
    },
    {
      name: "SeeedStudio XIAO nRF52840 Sense",
      description: "Compact development board with nRF52840 chipset, equipped with IMU and PDM Mic.",
      icon: <Bluetooth className="text-indigo-600 w-12 h-12" />,
      features: [
        "Compact Design",
        "IMU Sensor",
        "PDM Microphone"
      ]
    },
    {
      name: "SeeedStudio Grove Vision 2",
      description: "MCU-based vision AI module powered by Himax WiseEye2, supporting TensorFlow and PyTorch.",
      icon: <Cpu className="text-indigo-600 w-12 h-12" />,
      features: [
        "Arm Cortex-M55",
        "Ethos-U55",
        "Arduino IDE Compatible"
      ]
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        
      <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-[10px] sm:tracking-[20px] uppercase py-3 text-center mb-6 sm:mb-10 animate-slide-up">
    HARDWARE PROVIDED </h1>
        
        
        <div className="grid md:grid-cols-3 gap-8">
          {hardwareItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-stone-900 p-6 rounded-xl text-center transform transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl text-indigo-600 mb-3">{item.name}</h3>
              <p className="text-gray-300 mb-4 text-justify">{item.description}</p>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm uppercase tracking-wider mb-2 text-gray-400">Key Features</h4>
                <ul className="space-y-1">
                  {item.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="text-sm text-gray-300 flex items-center justify-center"
                    >
                      <Zap className="w-3 h-3 mr-2 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HardwareSection;