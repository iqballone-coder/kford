
import React from 'react';
import type { Initiative } from '../types';

const initiativesData: Initiative[] = [
  { project: 'Child Friendly Spaces (CFS)', partner: 'UNICEF, APPI', outcome: 'Safe and inclusive spaces for children; psychosocial and educational support for 20,000+ children.' },
  { project: 'Psychosocial Rehabilitation & Child Protection (2022–2025)', partner: 'Azim Premji Philanthropic Initiatives (APPI)', outcome: 'Strengthening community-based mental health, youth counselling, and ECCE interventions.' },
  { project: 'Jal Jeevan Mission (2020-2022)', partner: 'Govt. of J&K', outcome: 'Community capacity building on water and sanitation; public health awareness.' },
  { project: 'Child Protection Needs Assessment & District Child Protection Plan (2017–18)', partner: 'UNICEF & Leher', outcome: 'Research-led framework for strengthening ICPS implementation in Budgam district.' },
  { project: 'Policy on Orphanages & Orphan Children (2017)', partner: 'Ministry of Law & Justice, Govt. of India', outcome: 'Drafted the first policy framework for orphan children in J&K.' },
  { project: 'Livelihood Impact Study (Kupwara & Anantnag)', partner: 'ECHO / Save the Children / DFID', outcome: 'Protection and economic resilience for conflict-affected families.' },
  { project: 'COTPA Implementation in J&K (2019–2020)', partner: 'Gray Matter & Govt. of J&K', outcome: 'Anti-tobacco law enforcement and awareness.' },
  { project: 'Emergency Response – J&K Floods 2014', partner: 'Pure Gold (CSR) & AmeriCares India', outcome: 'Humanitarian relief and rehabilitation.' },
];

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Background of Projects and Initiatives
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our key initiatives span more than 15 years, integrating protection, research, and development.
          </p>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-cyan-600">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Partner/Donor</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Focus/Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {initiativesData.map((initiative, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-slate-900">{initiative.project}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">{initiative.partner}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">{initiative.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
