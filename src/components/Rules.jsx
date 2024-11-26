import * as React from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

const rulesData = [
  {
    question: "WHAT ARE THE PREREQUISITES?",
    answer: "To participate in the hackathon, you'll need a laptop, basic programming knowledge (Arduino is recommended), enthusiasm for TinyML and embedded systems"
  },
  {
    question: "WHAT RESOURCES WILL BE PROVIDED?",
    answer: "We'll support you throughout the hackathon by providing access to online resources, datasets, expert mentors. You're also welcome to bring your own additional hardware and sensors."
  },
  {
    question: "WHO CAN PARTICIPATE?",
    answer: "Our hackathon is open to participants of all ages. If you are below the age of consent, you must submit a letter of consent acknowledged by your parents or guardians."
  },
  {
    question: "HOW CAN I REGISTER FOR A TEAM?",
    answer: "Team registration options include: Individual registration, Pre-formed team registration, On-spot registration. Maximum team size is 5 members."
  }
];

function FaqCard({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="
      bg-zinc-900 
      rounded-lg 
      shadow-lg 
      mb-2 
      overflow-hidden 
      transition-all 
      duration-300 
      ease-in-out 
      border 
      border-zinc-800
    ">
      <div 
        className="
          flex 
          justify-between 
          items-center 
          p-4 
          cursor-pointer 
          hover:bg-zinc-800
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="
          block 
          text-white 
          tracking-[5px] 
          uppercase 
          py-3 
          px-4 
          rounded-[5px] 
          w-fit 
          relative 
          transition-transform 
          duration-300 
          group-hover:scale-105 
          text-sm 
          sm:text-base
        ">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <ChevronDown className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </div>
      
      {isOpen && (
        <div 
          className="
            mt-2 
            text-xs 
            sm:text-sm 
            leading-5 
            text-justify 
            px-4 
            sm:px-6 
            py-4 
            whitespace-pre-line 
            animate-fade-in
          "
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function RulesSection() {
  return (
    <section className="
      bg-black 
      text-white 
      px-4 
      sm:px-6 
      lg:px-8
    ">
      <div className="
        max-w-7xl 
        mx-auto 
        px-1 
        py-[50px]
      ">
        <h1 className="
          text-white 
          text-3xl 
          sm:text-4xl 
          font-bold 
          tracking-[20px] 
          uppercase 
          py-3 
          text-center 
          mb-10 
          animate-slide-up
        ">
          RULES
        </h1>
        
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-5
        ">
          <div className="
            grid 
            grid-cols-1 
            gap-3
          ">
            {rulesData.slice(0, 2).map((rule, index) => (
              <FaqCard key={index} {...rule} />
            ))}
          </div>
          
          <div className="
            grid 
            grid-cols-1 
            gap-3
          ">
            {rulesData.slice(2).map((rule, index) => (
              <FaqCard key={index} {...rule} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}