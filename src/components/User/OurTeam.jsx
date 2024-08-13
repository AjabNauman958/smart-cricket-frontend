import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import uzair from '../images/uzair.png'
import umer from '../images/umer.png'
import ajab from '../images/ajab.png'
const teamMembers = [
  {
    image: uzair,
    name: 'Muhammad Uzair Nisar',
    designation: 'React Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  {
    image: ajab,
    name: 'Ajab Nauman',
    designation: 'Backend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  {
    image: umer,
    name: 'Umer Hassan Khan',
    designation: 'Backend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },

];

const OurTeam = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-6">Our <span className='text-green-500'> Team</span></h2>
      <p className="text-center mb-12">Meet our amazing team members who make everything possible.</p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-[#00A09A] duration-500 hover:text-white">
            <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4  border-4 border-gray-500" />
            <h2 className='text-xl'> {member.name}</h2>
            <h3 className="text-md font-semibold mb-2">{member.designation}</h3>
            <hr className="border-t-2 border-gray-200 my-2" />
            <p className=" mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4">
              <a href={member.github} className=" hover:text-black">
                <FaGithub size={24} />
              </a>
              <a href={member.linkedin} className=" hover:text-blue-600">
                <FaLinkedin size={24} />
              </a>
              <a href={member.instagram} className=" hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
