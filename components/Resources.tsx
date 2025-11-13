import React from 'react';
import type { ResourceDocument } from '../types';
import { PdfIcon, WordIcon } from './Icons';

const resourcesData: ResourceDocument[] = [
  {
    title: 'KFORD Annual Report 2023',
    description: 'A comprehensive overview of our activities, impact, and financial performance over the last year.',
    fileType: 'PDF',
    url: '/docs/kford-annual-report-2023.pdf',
  },
  {
    title: 'Research Paper: The Impact of CFS',
    description: 'An in-depth study on the effectiveness of Child Friendly Spaces in conflict zones.',
    fileType: 'PDF',
    url: '/docs/research-paper-cfs-impact.pdf',
  },
  {
    title: 'Policy Brief: Rights of Orphan Children in J&K',
    description: 'A summary of the key findings and policy recommendations from our work with orphan children.',
    fileType: 'Word',
    url: '/docs/policy-brief-orphan-rights.docx',
  },
  {
    title: 'Community Needs Assessment Toolkit',
    description: 'A practical guide and set of tools for conducting a needs assessment in vulnerable communities.',
    fileType: 'Word',
    url: '/docs/community-needs-assessment-toolkit.docx',
  },
];

const FileIcon: React.FC<{ type: 'PDF' | 'Word' }> = ({ type }) => {
  if (type === 'PDF') {
    return <PdfIcon className="h-8 w-8 text-red-600" />;
  }
  return <WordIcon className="h-8 w-8 text-blue-600" />;
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Resources & Publications
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Access our reports, research papers, and toolkits to learn more about our work.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {resourcesData.map((doc, index) => (
              <li key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5 mt-1">
                    <FileIcon type={doc.fileType} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{doc.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{doc.description}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resources;