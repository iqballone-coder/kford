
import React from 'react';
import type { CoreArea } from '../types';
import { ChildIcon, DisabilityIcon, WomenIcon, HealthIcon, EducationIcon, WashIcon, ResearchIcon } from './Icons';

const coreAreasData: CoreArea[] = [
  {
    icon: <ChildIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Child Rights and Protection',
    description: 'Implementation of ICPS, JJ Act, COTPA, and establishment of over 90+ Child Friendly Spaces (CFS).',
  },
  {
    icon: <DisabilityIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Disability Inclusion & Rehabilitation',
    description: 'Operating the KFORD Inclusive Centre, providing early intervention, therapy, and vocational readiness.',
  },
  {
    icon: <HealthIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Psychosocial Rehabilitation & Mental Health',
    description: 'Community-based psychosocial interventions, counselling, and parental support.',
  },
  {
    icon: <WomenIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Women\'s Empowerment & Livelihood',
    description: 'Skill-building and economic inclusion for women from conflict-affected families.',
  },
  {
    icon: <EducationIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Education and Health Care',
    description: 'Reintegration of out-of-school children and inclusive Early Childhood Care and Education (ECCE) initiatives.',
  },
  {
    icon: <WashIcon className="h-10 w-10 text-cyan-600" />,
    title: 'WASH (Water, Sanitation, and Hygiene)',
    description: 'Capacity-building and awareness campaigns under Swachh Bharat Mission and Jal Jeevan Mission.',
  },
   {
    icon: <ResearchIcon className="h-10 w-10 text-cyan-600" />,
    title: 'Research, Policy and Advocacy',
    description: 'Policy drafting for orphan children and governance of orphanages. Applied research in human rights and community development.',
  },
];

const CoreAreas: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Core Areas of Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            KFORD's thrust areas reflect its multidimensional approach to rights-based development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreAreasData.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex-shrink-0 mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{area.title}</h3>
              <p className="text-slate-600 text-base">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreAreas;
