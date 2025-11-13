
import React from 'react';
import type { Partner } from '../types';

const partnersData: Partner[] = [
  { name: 'UNICEF, APPI', description: 'Drives global advocacy and resource mobilization for Child Rights.' },
  { name: 'Azim Premji Initiatives', description: 'Invests in long-term social impact.' },
  { name: 'ECHO / Save the Children / DFID', description: 'Offers comprehensive humanitarian assistance.' },
  { name: 'UNICEF & Leher', description: 'Implements joint programs and campaigns.' },
  { name: 'Gray Matter & Govt. of J&K', description: 'Collaborates on research and development.' },
  { name: 'Pure Gold & AmeriCares', description: 'Funds specific projects and initiatives.' },
  { name: 'Ministry of Law & Justice', description: 'Supports legal and policy frameworks.' },
  { name: 'Government of J&K', description: 'Provides essential infrastructure support and capacity building.' },
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Valued Partners and Supporters
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Collaboration is at the heart of our success. We are grateful for the support of our partners.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnersData.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-cyan-700">{partner.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
