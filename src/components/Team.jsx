import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamData = [
  {
    name: 'Abhay P A',
    role: 'PoC TinyML',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFgKInOvMJQ4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708096385953?e=1738800000&v=beta&t=QHxI5A-Ri58grsbAhzzwC4GaibwouUYFgaT5Pc0Jrg4',
    linkedin: 'https://www.linkedin.com/in/abhay-pa/'
  },
  {
    name: 'Salman Faris',
    role: 'Sponsorship Team',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEdYT8xFXXPQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681062639796?e=1738800000&v=beta&t=fRsOvBejLXpmfoqWRpJ_-m88MH8ZZ1AjnoMBRF8-1O8',
    linkedin: 'https://www.linkedin.com/in/salmanfarisvp/'
  },
  {
    name: 'Swalah Amani',
    role: 'MakerGram',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGcKPsCJ8glWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719734895384?e=1738800000&v=beta&t=mqXU4o4L9RqUxiTNjcHd76bDlkU8XZesrz9_BErEUPU',
    linkedin: 'https://www.linkedin.com/in/swalahamani/'
  },
  {
    name: 'Alosh Denny',
    role: 'PoC TinyML',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEgM1ISjqjxpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729781922307?e=1738800000&v=beta&t=z6vVF2SphG4KqU6tVQasN520GdNIdHQ4jUc5dVCTdWU',
    linkedin: 'https://www.linkedin.com/in/aloshdenny/'
  },
  {
    name: 'Jasim',
    role: 'PoC TinyML',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGFM0jxtD-7Mg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730136127703?e=1738800000&v=beta&t=ttWWX0I80d6CE1vy3RDO89k85oGSt7dckonuzziRt10',
    linkedin: 'https://www.linkedin.com/in/jasim-cm/'
  },
 
  {
    name: 'Hazin',
    role: 'Video Editor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFnyKbssr3lIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729970909107?e=1738800000&v=beta&t=1hgGxHhNuaRJd6GXvsj18TQDYaXZd6IDSgSJ-E7XZHw',
    linkedin: 'https://www.linkedin.com/in/muhammed-hasin-6a1968270'
  },
  {
    name: 'Ishika Ishani',
    role: 'Tech Team',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGDvTRVE0Xk2w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718221867398?e=1738800000&v=beta&t=6Jf1M4cZrOlTB-_F5wafo7EOa7o4uty_BWKpxSnpvDg',
    linkedin: 'https://www.linkedin.com/in/ishika-ishani/'
  }
];

const TeamMember = ({ name, role, image, linkedin }) => {
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <div className="rounded-full w-20 h-20 overflow-hidden ">
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
      items: 4
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
         OUR TEAM </h1>
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
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </Carousel>
    </div>
  );
}
