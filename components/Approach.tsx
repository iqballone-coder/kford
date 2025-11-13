
import React from 'react';

const transformationSteps = [
    { number: 1, title: 'Empower Vulnerable Groups', description: 'Providing inclusive programs to uplift underprivileged children, women, and persons with disabilities.' },
    { number: 2, title: 'Uphold Transparency', description: 'Ensuring accountability and ethical practices in all operations.' },
    { number: 3, title: 'Build Institutional Capital', description: 'Strengthening organizational structures and resources for long-term impact.' },
    { number: 4, title: 'Develop Human Capital', description: 'Enhancing skills and knowledge within communities to foster self-reliance.' },
    { number: 5, title: 'Achieve Social Transformation', description: 'Creating lasting positive change in society through collective efforts.' },
];

const Approach: React.FC = () => {
    return (
        <section id="approach" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Our Approach to Lasting Change
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        A structured path towards achieving meaningful and sustained social transformation.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-cyan-200" aria-hidden="true"></div>
                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
                        {transformationSteps.map((step, index) => (
                            <div key={index} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 px-2">
                                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-cyan-600 text-white font-bold text-xl ring-8 ring-white z-10">
                                    {step.number}
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-4">
                                    <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
