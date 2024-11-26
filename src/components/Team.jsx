import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamData = [
  {
    name: 'Jane Cooper',
    role: 'Creative Director',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/janecooper'
  },
  {
    name: 'Ronald Richards',
    role: 'Lead Product Designer',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/ronaldrichards'
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Visual Designer',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/brooklynsimmons'
  },
  {
    name: 'Kristin Watson',
    role: 'Lead UX Designer',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/kristinwatson'
  },
  {
    name: 'Darlene Robertson',
    role: 'Javascript Developer',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/darlenerobertson'
  },
  {
    name: 'Leslie Alexander',
    role: 'Customer Service Manager',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/lesliealexander'
  },
  {
    name: 'Ralph Edwards',
    role: 'Business Advisor',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/ralphedwards'
  },
  {
    name: 'Floyd Miles',
    role: 'Senior Developer',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
    linkedin: 'https://www.linkedin.com/in/floydmiles'
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
      <h2 className=" text-white 
          text-3xl 
          sm:text-4xl 
          font-bold 
          tracking-[20px] 
          uppercase 
          py-3 
          text-center 
          mb-10 
          animate-slide-up">
        OUR TEAM
      </h2>
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