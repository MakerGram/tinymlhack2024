
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navigationItems = [
  { id: 1, label: "ABOUT", section: "about" },
  { id: 2, label: "TRACKS", section: "tracks" },
  { id: 3, label: "SPONSORS", section: "sponsors" },
  { id: 4, label: "FAQS", section: "faqs" }
];

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
      {/* Mobile Menu Toggle */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        className="md:hidden z-50 fixed top-6 right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-[60px] items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
        {navigationItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => scrollToSection(item.section)}
            className="self-stretch my-auto text-white hover:text-indigo-300 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
          >
            {item.label}
          </motion.div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-stone-950 z-40 flex flex-col justify-center items-center md:hidden"
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className="text-3xl text-white py-4 cursor-pointer"
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
        className="flex items-center justify-between px-6 md:px-11 py-6 md:py-8 bg-stone-950 text-white"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2ab850804b89467986bf6d3429dba897/a00abd21834cc6c981d48b9cdeccfb2794a178108acd85652ab8986dadc30252?apiKey=2ab850804b89467986bf6d3429dba897&"
          alt="Company Logo"
          className="object-contain w-[100px] md:w-[162px] aspect-[4.63]"
        />

<motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://i.ibb.co/71Pv4Rp/Screenshot-2024-12-02-at-8-40-43-PM-Photoroom.png"
          alt="Company Logo"
          className="object-contain w-[300px] md:w-[500px] aspect-[6.63]"
        />

<div className="flex items-center space-x-8 md:space-x-16">
  <Navbarlinks />
  <a 
      href="https://lu.ma/cdet5suw" 
      target="_blank" 
      rel="noopener noreferrer"
    >
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hidden md:block px-2 md:px-7 py-1.5 md:py-2.5 rounded-2xl border-2 border-indigo-700 border-solid bg-white bg-opacity-10 text-sm md:text-base"
    tabIndex={0}
  >
    REGISTER NOW
  </motion.button>
  </a>
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
          className="text-sm md:text-2xl leading-none text-center text-white tracking-[10px] md:tracking-[39px]"
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
        <a 
      href="https://lu.ma/cdet5suw" 
      target="_blank" 
      rel="noopener noreferrer"
    >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden mt-8 px-6 py-3 rounded-2xl border-2 border-indigo-700 border-solid bg-white bg-opacity-10"
          tabIndex={0}
        >
          REGISTER NOW
        </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Header;