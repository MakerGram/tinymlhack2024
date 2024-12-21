import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, FileText } from "lucide-react";

const navigationItems = [
  { id: 1, label: "ABOUT", section: "about" },
  { id: 2, label: "TRACKS", section: "tracks" },
  { id: 3, label: "SPONSORS", section: "sponsors" },
  { id: 4, label: "FAQS", section: "faqs" }
];

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("December 22, 2024 14:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6 md:space-x-8 mt-4 sm:mt-6 md:mt-8"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit} 
          className="flex flex-col items-center pt-4 sm:pt-6 md:pt-8"
        >
          <div className="self-center font-medium leading-none text-2xl xs:text-3xl sm:text-4xl md:text-[80px] tracking-[3px] xs:tracking-[4px] sm:tracking-[5px] md:tracking-[12px] text-white">
            {value < 10 ? `0${value}` : value}
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-xl text-white uppercase mt-1 sm:mt-2 tracking-[4px] sm:tracking-[7px]">
            {unit}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

// Registration Closed Button Component
const RegistrationClosedButton = ({ className }) => (
  <div 
    className={`${className} cursor-not-allowed`}
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 
                 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 
                 rounded-lg xs:rounded-xl sm:rounded-2xl 
                 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg
                 border-2 border-red-700 border-solid 
                 bg-red-950 bg-opacity-50 text-red-300
                 transition-all duration-300 opacity-70"
      tabIndex={0}
    >
      REGISTRATION CLOSED
    </motion.div>
  </div>
);

const DocButton = ({ isMobile }) => (
  <motion.a
    href="https://docs.tinymlhack.com"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      flex items-center gap-1.5 xs:gap-2
      text-white hover:text-indigo-300 
      transition-colors cursor-pointer
      font-medium tracking-wide
      ${isMobile ? 
        'text-lg xs:text-xl sm:text-2xl md:text-3xl py-2 xs:py-3 sm:py-4' : 
        'text-xs xs:text-sm sm:text-base'}
    `}
  >
    <FileText className={`
      ${isMobile ? 
        'w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' : 
        'w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6'}
    `} />
    <span>DOC.TINYML</span>
  </motion.a>
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
      <motion.button 
        whileTap={{ scale: 0.9 }}
        className="lg:hidden z-50 fixed top-4 xs:top-5 sm:top-6 right-4 xs:right-5 sm:right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 
          <X size={24} color="white" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8" /> : 
          <Menu size={24} color="white" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8" />
        }
      </motion.button>

      <nav className="hidden lg:flex gap-4 sm:gap-6 xl:gap-[60px] items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
        {navigationItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => scrollToSection(item.section)}
            className="self-stretch my-auto text-white hover:text-indigo-300 transition-colors cursor-pointer
                       text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
          >
            {item.label}
          </motion.div>
        ))}
        <DocButton isMobile={false} />
      </nav>

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
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white py-2 xs:py-3 sm:py-4 cursor-pointer"
                variants={linkVariants}
                custom={index}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.div>
            ))}
            {/* Mobile Doc Button */}
            <motion.div
              variants={linkVariants}
              custom={navigationItems.length}
              className="mt-2"
            >
              <DocButton 
                isMobile={true} 
                onClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
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
        className="flex items-center justify-between px-3 xs:px-4 sm:px-6 md:px-8 lg:px-11 
                   py-3 xs:py-4 sm:py-6 md:py-7 lg:py-8 bg-stone-950 text-white"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2ab850804b89467986bf6d3429dba897/a00abd21834cc6c981d48b9cdeccfb2794a178108acd85652ab8986dadc30252?apiKey=2ab850804b89467986bf6d3429dba897&"
          alt="Company Logo"
          className="object-contain w-[60px] xs:w-[70px] sm:w-[100px] md:w-[130px] lg:w-[162px] aspect-[4.63]"
        />

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src="https://i.ibb.co/Xj2vBBD/Screenshot-2024-11-26-at-9-55-18-AM-removebg-preview.png"
          alt="Company Logo"
          className="object-contain w-[60px] xs:w-[70px] sm:w-[100px] md:w-[130px] lg:w-[162px] aspect-[2.63]"
        />

        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-16">
          <Navbarlinks />
          <div className="hidden lg:block">
            <RegistrationClosedButton />
          </div>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center justify-center mt-6 xs:mt-8 sm:mt-10 text-center text-white h-full px-3 xs:px-4 sm:px-4"
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[10px] xs:text-xs sm:text-base md:text-2xl leading-none text-center text-white tracking-[5px] xs:tracking-[7px] sm:tracking-[10px] md:tracking-[39px] mb-2 xs:mb-3 sm:mb-4"
        >
          DECEMBER 21 | 22
        </motion.div>
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="self-center font-medium leading-none border border-black border-solid text-3xl xs:text-4xl sm:text-5xl md:text-[120px] tracking-[5px] xs:tracking-[7px] sm:tracking-[10px] md:tracking-[52px]"
        >
          TINYML
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="pt-3 xs:pt-4 sm:pt-6 md:pt-12 w-full font-bold text-xl xs:text-2xl sm:text-3xl md:text-6xl leading-none mx-2 text-center text-white tracking-[2px] xs:tracking-[3px] sm:tracking-[4px] md:tracking-[8px] whitespace-nowrap"
        >
          24-HR
        </motion.div>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="self-center py-2 xs:py-3 sm:py-4 md:py-5 text-sm xs:text-base sm:text-xl md:text-4xl leading-none tracking-[2px] xs:tracking-[3px] sm:tracking-[4px] md:tracking-[8px] text-center text-white w-full max-w-[1290px]"
        >
          HACK WHERE AI MEET HARDWARE
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Mobile Register Button */}
        <div className="lg:hidden mt-4 xs:mt-5 sm:mt-6">
          <RegistrationClosedButton />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
