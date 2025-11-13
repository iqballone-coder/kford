
import React from 'react';
import type { Milestone } from '../types';

const milestonesData: Milestone[] = [
  { period: '2009–2013', title: 'Formation & Partnerships', description: 'Established and partnered with UNICEF and Save the Children, focusing on child rights.' },
  { period: '2014–2016', title: 'Flood Relief & Rehabilitation', description: 'Provided flood relief and psychosocial support with ECHO and DFID funding.' },
  { period: '2017–2019', title: 'Child Protection Expansion', description: 'Expanded child protection programs and collaborated with the Indian government and UNICEF.' },
  { period: '2020–2021', title: 'COVID-19 Response', description: 'Responded to the emergency, established a care facility, and expanded CFS network.' },
  { period: '2022–2023', title: 'Psychosocial Rehabilitation', description: 'Launched APPI-supported psychosocial rehabilitation and protection program for vulnerable children.' },
  { period: '2023–2025', title: 'Consolidation & Registration', description: 'Consolidated operations, established disability center, and registered with The National Trust.' },
];

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Journey: Key Milestones (2009–2025)
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Tracing our path of impact and growth through the years.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-200 rounded-full" aria-hidden="true"></div>
          <div className="space-y-12">
            {milestonesData.map((milestone, index) => (
              <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-cyan-100 transition-shadow duration-300">
                    <p className="text-sm font-semibold text-cyan-600 mb-1">{milestone.period}</p>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-600 rounded-full ring-4 ring-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
