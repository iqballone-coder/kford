
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1074')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Strengthening the Weakest Links of Society
          </h2>
          <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
            KFORD is a non-profit enabling inclusive, research-based social development for underprivileged children, women, and persons with disabilities.
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-block bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-700 transition-transform transform hover:scale-105 duration-300"
            >
              Discover Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
