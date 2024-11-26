import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleItems(prevVisible => Math.max(prevVisible, Number(index) + 1));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineCards = timelineRef.current?.querySelectorAll('.timeline-card') || [];
    timelineCards.forEach(card => observer.observe(card));

    return () => {
      timelineCards.forEach(card => observer.unobserve(card));
    };
  }, []);
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

  return (
    <section id="about" className="text-center p-7 bg-black">
     {/*
      <p className="gradient-bg text-2xl leading-none text-center text-white tracking-[20px] mx-5 mb-5 ">
        ABOUT US
      </p>
  */}
      
      <section className="flex flex-col items-center px-16 pt-7 pb-3 w-full rounded-xl bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <motion.section 
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center px-16 pt-7 pb-3 w-full rounded-xl bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full"
      >
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-[1038px] max-md:max-w-full"
        >
          <div className="flex gap-5 max-md:flex-col bg-black">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                loading="lazy" 
                src="https://i.ibb.co/FwhNN7f/Screenshot-2024-11-20-at-10-59-56-PM.png" 
                alt="Seeed Studio illustration"
                className="object-contain grow w-full aspect-[1.31] max-md:mt-10 max-md:max-w-full shadow-lg" 
              />
            </motion.div>
            <motion.article 
              variants={itemVariants}
              className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <motion.h1 
                  variants={itemVariants}
                  className="mr-6 text-2xl tracking-[9px] leading-10 text-white max-md:mr-2.5 max-md:max-w-full"
                >
                  WELCOME TO <span className="text-indigo-700">TINYML</span> HACKATHON
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="mt-2.5 text-m leading-5 text-justify text-gray-300 max-md:mr-0.5 max-md:max-w-full flex items-center"
                >
                  <ChevronRight className="text-indigo-700 mr-2 flex-shrink-0" />
                  Are you ready to embark on a journey into the exciting world of Tiny Machine Learning 
                  (TinyML)? <br/> <br/>
                  MakerGram, in collaboration with SeeedStudio and TinkerSpace, is thrilled to invite you to our 24-Hour Offline TinyML Hackathon. This event promises to be an exhilarating opportunity to unleash your creativity, innovation, 
                  and problem-solving skills while working with cutting-edge hardware.
                </motion.p>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.section>
      </section>
      
      <section 
        ref={timelineRef} 
        className="w-fit mx-auto mt-8 md:mt-8 px-4 sm:p-7 pt-16"
      >
        {timeline.map((item, index) => (
          <TimelineCard
            key={index}
            index={index}
            step={item.step}
            heading={item.heading}
            description={item.description}
            stepnumber={index + 1}
            lastStep={index === timeline.length - 1}
            isVisible={index < visibleItems}
          />
        ))}
      </section>
    </section>
  );
};

const TimelineCard = ({ 
  heading, 
  description, 
  step, 
  stepnumber, 
  lastStep,
  index,
  isVisible 
}) => {
  return (
    <div 
      data-index={index}
      className={`timeline-card relative px-5 lg:px-24 group ${
        !lastStep ? "border-l-2 border-dashed border-white/30 pb-24" : "pb-0"
      } transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <span className="absolute top-0 left-0 -translate-x-1/2 p-1 grid place-items-center w-10 h-10 aspect-square rounded-full text-white timelineStep">
        <span className="w-full h-full grid place-items-center rounded-full bg-stone-950">
          {stepnumber}
        </span>
      </span>
      
      <span className=" block text-white tracking-[9px] uppercase py-3 px-4 rounded-[5px] w-fit relative 
        transition-transform duration-300 group-hover:scale-105">
        {step}
      </span>
      
      <div className="bg-stone-900 text-white p-5 rounded-xl mt-4 sm:max-w-[250px] lg:max-w-[707px]
        transition-transform duration-300 group-hover:scale-[1.02]">
        <h3 className="text-2xl lg:text-left text-indigo-600">{heading}</h3>
        <p className="mt-3 text-m text-justify font-light text-gray-300 max-w-[640px] leading-6">
          {description}
        </p>
      </div>
    </div>
  );
  
};

const timeline = [
  {
    step: "What is TinyML?",
    heading: "Revolutionizing Intelligent Edge Devices",
    description: "Tiny Machine Learning (TinyML) represents a revolutionary approach to integrating machine learning into resource-constrained devices such as microcontrollers and embedded systems. This innovation enables intelligent operations on the edge, including smart sensors, wearable technology, and IoT devices, with a focus on minimal power consumption and efficient performance.",
  },
  {
    step: "What to Expect?",
    heading: "Immersive Challenges and Hands-On Learning",
    description: "The 24-Hour TinyML Hackathon offers an immersive experience where participants tackle engaging challenges in the TinyML domain. Attendees will work with cutting-edge hardware, including SeeedStudio XIAO development boards and Grove Vision AI modules, fostering hands-on learning. The event features workshops, collaborative team environments, expert guidance, and continuous project evaluations, culminating in prizes for the most innovative solutions.",
  },
  {
    step: "Why Participate?",
    heading: "Unleash Your Creativity and Innovate",
    description: "This hackathon is a unique opportunity to delve into the transformative field of TinyML. Participants can gain hands-on experience with state-of-the-art technology, collaborate with passionate innovators, and hone their skills in developing edge-based intelligent solutions. Whether you’re a seasoned developer or a curious beginner, the event promises a blend of learning, creativity, and competition, with rewarding outcomes for all.",
  },
];

export default Timeline;