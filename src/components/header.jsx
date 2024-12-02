import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navigationItems = [
  { id: 1, label: "ABOUT", section: "about" },
  { id: 2, label: "TRACKS", section: "tracks" },
  { id: 3, label: "SPONSORS", section: "sponsors" },
  { id: 4, label: "FAQS", section: "faqs" }
];

// Enhanced Register Button Component with more responsive sizes
const RegisterButton = ({ className }) => (
  <a 
    href="https://lu.ma/cdet5suw" 
    target="_blank" 
    rel="noopener noreferrer"
    className={className}
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 
                 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base lg:text-lg
                 border-2 border-indigo-700 border-solid bg-white bg-opacity-10 text-white
                 transition-all duration-300"
      tabIndex={0}
    >
      REGISTER NOW
    </motion.button>
  </a>
);

// Navigation Component
export function Navbarlinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <>
      {/* Mobile Menu Toggle - Adjusted position */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        className="lg:hidden z-50 fixed top-4 sm:top-6 right-4 sm:right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 
          <X size={24} color="white" className="h-6 w-6 sm:h-8 sm:w-8" /> : 
          <Menu size={24} color="white" className="h-6 w-6 sm:h-8 sm:w-8" />
        }
      </motion.button>

      {/* Desktop Navigation - Enhanced responsive gaps */}
      <nav className="hidden lg:flex gap-6 xl:gap-[60px] items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
        {navigationItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => scrollToSection(item.section)}
            className="self-stretch my-auto text-white hover:text-indigo-300 transition-colors cursor-pointer
                       text-sm xl:text-base 2xl:text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
          >
            {item.label}
          </motion.div>
        ))}
      </nav>

      {/* Mobile Navigation - Adjusted text sizes */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-stone-950 z-40 flex flex-col justify-center items-center lg:hidden"
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className="text-xl sm:text-2xl md:text-3xl text-white py-3 sm:py-4 cursor-pointer"
                variants={linkVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Main Header Component
function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url('https://i.ibb.co/7gRWxqK/Screenshot-2024-11-20-at-7-44-23-PM.png')` }}
    >
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 
                   py-4 sm:py-6 md:py-7 lg:py-8 bg-stone-950 text-white"
      >
        {/* First Logo - Adjusted sizes */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2ab850804b89467986bf6d3429dba897/a00abd21834cc6c981d48b9cdeccfb2794a178108acd85652ab8986dadc30252?apiKey=2ab850804b89467986bf6d3429dba897&"
          alt="Company Logo"
          className="object-contain w-[80px] sm:w-[100px] md:w-[130px] lg:w-[162px] aspect-[4.63]"
        />

        {/* Second Logo - Adjusted sizes */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://i.ibb.co/Xj2vBBD/Screenshot-2024-11-26-at-9-55-18-AM-removebg-preview.png"
          alt="Company Logo"
          className="object-contain w-[80px] sm:w-[100px] md:w-[130px] lg:w-[162px] aspect-[2.63]"
        />

        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-16">
          <Navbarlinks />
          <div className="hidden lg:block">
            <RegisterButton />
          </div>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center justify-center mt-10 text-center text-white h-full px-4"
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm md:text-2xl leading-none text-center text-white tracking-[10px] md:tracking-[39px] mb-4 "
        >
          DECEMBER 21 | 22
        </motion.div>
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="self-center font-medium leading-none border border-black border-solid text-5xl md:text-[120px] tracking-[10px] md:tracking-[52px]"
        >
          TINYML
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="pt-6 md:pt-12 w-full font-bold text-3xl md:text-6xl leading-none mx-4 text-center text-white tracking-[4px] md:tracking-[8px] whitespace-nowrap"
        >
          24-HR
        </motion.div>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="self-center py-4 md:py-5 text-xl md:text-4xl leading-none tracking-[4px] md:tracking-[8px] text-center text-white w-full max-w-[1290px]"
        >
          HACK WHERE AI MEET HARDWARE
        </motion.div>

        {/* Mobile Register Button */}
        <div className="lg:hidden mt-6 sm:mt-8">
          <RegisterButton />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;