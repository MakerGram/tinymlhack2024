import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamData = [
  {
    name: 'Abhay P A',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFgKInOvMJQ4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708096385953?e=1738800000&v=beta&t=QHxI5A-Ri58grsbAhzzwC4GaibwouUYFgaT5Pc0Jrg4',
    linkedin: 'https://www.linkedin.com/in/abhay-pa/'
  },
  
  {
    name: 'Alosh Denny',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFjsdIbsE93nw/profile-displayphoto-shrink_200_200/B56ZPepLNQHQAc-/0/1734607157710?e=1741824000&v=beta&t=MH5h8M6fsSwR_z3ES1f5ggyN5AXsJzxenCqS3Vw6lfw',
    linkedin: 'https://www.linkedin.com/in/aloshdenny/'
  },
  {
    name: 'Jasim',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGFM0jxtD-7Mg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730136127703?e=1738800000&v=beta&t=ttWWX0I80d6CE1vy3RDO89k85oGSt7dckonuzziRt10',
    linkedin: 'https://www.linkedin.com/in/jasim-cm/'
  },
  {
    name: 'Ishika Ishani',
    role: 'Web Developer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGDvTRVE0Xk2w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718221867398?e=1738800000&v=beta&t=6Jf1M4cZrOlTB-_F5wafo7EOa7o4uty_BWKpxSnpvDg',
    linkedin: 'https://www.linkedin.com/in/ishika-ishani/'
  },
  {
    name: 'Nandana V S',
    role: 'Media Lead',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQHrV-O1hl4LVg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714020106254?e=1741824000&v=beta&t=_1eEwmbosntDVSfLXwl5N99wB2F3GhM6R90KW5mxm1I',
    linkedin: 'https://www.linkedin.com/in/nandana-vs/'
  },
  {
    name: 'Swalah Amani',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGcKPsCJ8glWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719734895384?e=1738800000&v=beta&t=mqXU4o4L9RqUxiTNjcHd76bDlkU8XZesrz9_BErEUPU',
    linkedin: 'https://www.linkedin.com/in/swalahamani/'
  },
  {
    name: 'Reema Shaji',
    role: 'Space Manager',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFCbaDHDxQyPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710872377193?e=1738800000&v=beta&t=v8UznwEFoERJfhKNa0G9ogjyMDYU5zQUoUXg1tDayl8',
    linkedin: 'https://www.linkedin.com/in/reemashaji/?originalSubdomain=in'
  },
  {
    name: 'Johnson Regi',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFjqoLnaz1poA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686313035521?e=1742428800&v=beta&t=yXA47oC_iZDqvjuN2TKJ4PGFsjUPkW7VYXfFpJOEhjk',
    linkedin: 'https://www.linkedin.com/in/johnson-regi-acca/'
  },
  {
    name: 'Salman Faris',
    role: 'Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEdYT8xFXXPQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681062639796?e=1738800000&v=beta&t=fRsOvBejLXpmfoqWRpJ_-m88MH8ZZ1AjnoMBRF8-1O8',
    linkedin: 'https://www.linkedin.com/in/salmanfarisvp/'
  },
  {
    name: 'Hazin',
    role: 'Video Editor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFnyKbssr3lIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729970909107?e=1738800000&v=beta&t=1hgGxHhNuaRJd6GXvsj18TQDYaXZd6IDSgSJ-E7XZHw',
    linkedin: 'https://www.linkedin.com/in/muhammed-hasin-6a1968270'
  },
  {
    name: 'Dheeraj Kurungadath',
    role: 'Designer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFedK6HAwEX9A/profile-displayphoto-shrink_200_200/B56ZRQfpLYGsAc-/0/1736517261254?e=1742428800&v=beta&t=xL13zY6m4Saf0Aen2SNyDgVSXI1y_YjF_4OjyHRpzSo',
    linkedin: 'https://www.linkedin.com/in/dheeraj-kurungadath-268bb3294/'
  },
  {
    name: 'Adithyan Pramod',
    role: 'Designer',
    image: 'https://i.ibb.co/0ByPZN4/Screenshot-2024-12-03-at-8-24-24-AM.png',
    linkedin: 'https://www.linkedin.com/in/adithyan-pramod-73b81527b/'
  },

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
