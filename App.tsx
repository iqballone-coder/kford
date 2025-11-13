import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreAreas from './components/CoreAreas';
import Initiatives from './components/Initiatives';
import Milestones from './components/Milestones';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Approach from './components/Approach';
import Gallery from './components/Gallery';
import Resources from './components/Resources';
import News from './components/News';
import Team from './components/Team';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreAreas />
        <Approach />
        <Initiatives />
        <Milestones />
        <Team />
        <News />
        <Partners />
        <Resources />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;