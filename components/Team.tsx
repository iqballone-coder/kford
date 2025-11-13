import React from 'react';
import type { TeamMember } from '../types';

const teamData: TeamMember[] = [
  {
    name: 'M. Iqbal Lone',
    designation: 'Founder & Director',
    bio: 'With over two decades of experience in social development, Mr. Lone provides strategic leadership and vision to KFORD.',
    imageUrl: 'https://picsum.photos/id/237/200/200',
  },
  {
    name: 'Bilal U. Rehman',
    designation: 'Co-Founder & Program Head',
    bio: 'Mr. Rehman oversees all program implementation, ensuring projects align with KFORD\'s mission and create lasting impact.',
    imageUrl: 'https://picsum.photos/id/238/200/200',
  },
  {
    name: 'Aisha Malik',
    designation: 'Lead, Child Protection',
    bio: 'Aisha is a passionate advocate for child rights, managing our Child Friendly Spaces and protection initiatives.',
    imageUrl: 'https://picsum.photos/id/239/200/200',
  },
  {
    name: 'Dr. Sameer Khan',
    designation: 'Head of Research & Advocacy',
    bio: 'Dr. Khan leads our research division, translating field data into actionable policy recommendations.',
    imageUrl: 'https://picsum.photos/id/240/200/200',
  },
  {
    name: 'Fatima Zahra',
    designation: 'Disability Inclusion Officer',
    bio: 'Fatima works to ensure all our programs are inclusive and accessible for persons with disabilities.',
    imageUrl: 'https://picsum.photos/id/241/200/200',
  },
  {
    name: 'Yusuf Ahmed',
    designation: 'Finance & Admin Manager',
    bio: 'Yusuf manages the financial health and administrative operations of the foundation with utmost transparency.',
    imageUrl: 'https://picsum.photos/id/242/200/200',
  },
];


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            The driving force behind our mission, dedicated to creating a better tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <div key={index} className="bg-slate-50 rounded-lg shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-white shadow-md"
              />
              <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-cyan-600 font-semibold my-1">{member.designation}</p>
              <p className="text-sm text-slate-600 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;