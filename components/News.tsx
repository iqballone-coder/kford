
import React from 'react';
import type { NewsArticle } from '../types';
import { FacebookIcon, TwitterIcon, LinkedInIcon } from './Icons';

const newsData: NewsArticle[] = [
  {
    title: 'KFORD Launches New Mental Health Initiative for Adolescents',
    category: 'News',
    date: 'October 26, 2023',
    excerpt: 'In partnership with local health authorities, we have rolled out a new program focused on providing mental health support and counseling to adolescents in remote areas.',
    readMoreUrl: '#',
  },
  {
    title: 'The Critical Role of Community in Child Protection',
    category: 'Views',
    date: 'October 15, 2023',
    excerpt: 'Our director, Mr. M. Iqbal Lone, shares his perspective on why community involvement is non-negotiable for creating a safe environment for children.',
    readMoreUrl: '#',
  },
  {
    title: 'Q3 2023 Program Update: WASH Campaign Reaches 5,000 Households',
    category: 'Update',
    date: 'October 5, 2023',
    excerpt: 'Our recent Water, Sanitation, and Hygiene (WASH) awareness campaign has successfully reached over 5,000 households, promoting better health practices.',
    readMoreUrl: '#',
  },
];

const categoryStyles = {
  News: 'bg-blue-100 text-blue-800',
  Views: 'bg-purple-100 text-purple-800',
  Update: 'bg-green-100 text-green-800',
};

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            News, Views & Updates
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest developments and stories from our work on the ground.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[article.category]}`}>
                    {article.category}
                  </span>
                  <p className="text-xs text-slate-500">{article.date}</p>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                  <a href={article.readMoreUrl} className="hover:text-cyan-600 transition-colors duration-300">{article.title}</a>
                </h3>
                <p className="text-slate-600 text-base flex-grow">{article.excerpt}</p>
              </div>
              <div className="p-6 bg-slate-50 flex justify-between items-center">
                 <a href={article.readMoreUrl} className="font-semibold text-cyan-600 hover:text-cyan-700 transition-colors duration-300">
                  Read More &rarr;
                </a>
                <div className="flex items-center space-x-3">
                  <a href="#" aria-label="Share on Facebook" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                   <a href="#" aria-label="Share on Twitter" className="text-slate-400 hover:text-sky-500 transition-colors duration-300">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                   <a href="#" aria-label="Share on LinkedIn" className="text-slate-400 hover:text-blue-700 transition-colors duration-300">
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
