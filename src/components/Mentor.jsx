import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamData = [
  {
    name: 'Muhammed Zain',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQG9kUghLVeOXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669191931988?e=1738800000&v=beta&t=k5C5wVzoTSZHMHRB5nn2HnAbY2Vg2nq9Y-oJdch39VE',
    linkedin: 'https://www.linkedin.com/in/zainmfd/'
  },
  {
    name: 'Salman Faris',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEdYT8xFXXPQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681062639796?e=1738800000&v=beta&t=fRsOvBejLXpmfoqWRpJ_-m88MH8ZZ1AjnoMBRF8-1O8',
    linkedin: 'https://www.linkedin.com/in/salmanfarisvp/'
  },
  {
    name: 'Saheen Palayi',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQEGZ6RLQ8iyWw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1620924580345?e=1738800000&v=beta&t=UdKsaNoltVFTR54yr7OEeUZmvivjZaFtBjOeUGEcq0M',
    linkedin: 'https://www.linkedin.com/in/saheenpalayi/?originalSubdomain=in'
  },
  {
    name: 'Akhil',
    role: 'Mentor',
    image: 'https://i.ibb.co/T8yL7qH/IMG-20241203-WA0010.jpg',
    linkedin: 'https://www.linkedin.com/in/abhay-pa/'
  },
  {
    name: 'Nekhil',
    role: 'Mentor',
    image: 'https://hackster.imgix.net/uploads/attachments/1641618/_MYKn6ydlyl.blob?auto=compress%2Cformat&w=200&h=200&fit=min&dpr=2',
    linkedin: 'https://www.hackster.io/DkMt'
  },
  {
    name: 'Sibin K S ',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHabX52AVrOZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681462417358?e=1740009600&v=beta&t=55NiPZo3N5EeYM-bA5a6ZcJZPrTAIeefu9K6j9WBstQ',
    linkedin : 'https://www.linkedin.com/in/sibin-k-s-084081113/'
  },

  {
    name: 'Shamsudheen K C',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEu3bibpZBSgg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719014235809?e=1740009600&v=beta&t=1q8_wp64v9ySZ0PSLRopM_F6oXK6u8PQNP85q9VL5F8',
    linkedin: 'https://www.linkedin.com/in/shamsu-musthafa/'
  },
  {
    name: 'Rafi Rasheed T C ',
    role: 'Mentor',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQG-tc6ObmRv4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1610905646014?e=1740009600&v=beta&t=6jwrE4XAwo4a4HOdsaE1ViP_IwsDww2WkTu92CnPu9s',
    linkedin: 'https://www.linkedin.com/in/rafitc/'
  },
  {
    name: 'Amal',
    role: 'Mentor',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/swalahamani/'
  },
  
];

const TeamMember = ({ name, role, image, linkedin }) => {
  return (
    <div className="flex flex-col items-center space-y-2 ">
      <div className="rounded-full w-40 h-40 overflow-hidden ">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <h3 className=" text-white text-md leading-5 text-justify px-6 whitespace-pre-line animate-fade-in">{name}</h3>
      <p className="text-white text-sm leading-5 text-justify  whitespace-pre-line animate-fade-in">{role}</p>
      <a href={linkedin} className="text-blue-500 hover:text-blue-700">
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default function TeamSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="bg-black mx-auto px-4 py-8">
     <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-[10px] sm:tracking-[20px] uppercase py-3 text-center mb-6 sm:mb-10 animate-slide-up">
        OUR MENTORS</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {teamData.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
           
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </Carousel>
    </div>
  );
}
