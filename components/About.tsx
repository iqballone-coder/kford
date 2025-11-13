
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Story, Vision, and Mission
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Founded in 2009 in Srinagar, Jammu & Kashmir.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-slate-600 max-w-none">
            <h3>History and Background</h3>
            <p>
              Kashmir Foundation for Organization Research & Development (KFORD) was founded as a Non-Profit Foundation under the Jammu & Kashmir Trusts Act, 1920. It was established by Mr. M. Iqbal Lone and Mr. Bilal U. Rehman, with a mission to enable inclusive, research-based social development, particularly in areas of child rights, disability inclusion, women's empowerment, and psychosocial rehabilitation.
            </p>
            <p>
              KFORD emerged as a response to the protracted conflict and social instability in Jammu & Kashmir, recognizing the urgent need for institutionalized community rehabilitation and rights-based development models.
            </p>
          </div>
          <div className="space-y-8">
            <div className="p-6 bg-slate-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">Our Vision</h3>
              <p className="text-slate-600">
                "To strengthen the weakest links of society — underprivileged children, women, and persons with disabilities — with urgency, empathy, and zeal; as a bridge to self-reliance, a model for reinvestment, and an inspiration for others to serve."
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">Our Mission</h3>
              <p className="text-slate-600">
                To create meaningful, lasting change through research, capacity-building, and community action by empowering vulnerable groups, upholding transparency, and building institutional and human capital for sustained social transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
