import React from 'react';
import { motion } from 'framer-motion';

const HackathonLocation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-black text-white">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 p-4 lg:p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-base lg:text-lg text-gray-300 leading-6 mb-4 text-justify"
        >
          Join us for an exciting 24-hour offline TinyML hackathon on
          <strong> December 21-22, 2024</strong> at Tinkerspace, Kalamassery,
          Kerala. Organized by <strong>MakeGram</strong> in association with 
          Tinkerspace, this event will push the boundaries of innovation. 
        </motion.p>
        <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-300 mb-4 text-justify">
          The venue is just 100 meters from Seaport-Airport Road, with
          <strong> Kalamassery Metro Station</strong> nearby for easy access.
        </motion.p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <a
          href="https://www.google.com/maps/dir//TinkerSpace+21%2F258,+Cusat.P.O+Punnekkattumoola,+Seaport+-+Airport+Rd,+Vidya+Nagar+Colony,+Thrikkakara,+Kalamassery+Kochi,+Kerala+682022/@9.9819393,76.3242564,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b080d6f3a60778b:0x810be95c9816e984!2m2!1d76.3351998!2d10.0469797?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            variants={itemVariants}
            src="https://i.ibb.co/hWfxKVQ/Screenshot-2024-12-02-at-11-10-00-PM.png"
            alt="Hackathon Location"
            className="w-full h-auto max-w-md lg:max-w-lg shadow-lg rounded-lg"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default HackathonLocation;
