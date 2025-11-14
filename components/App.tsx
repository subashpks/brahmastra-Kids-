
import React, { useState } from 'react';
import { Header } from './Header';
import { HomePage } from './Hero';
import { AeronauticsPage } from './Services';
import { AstronauticsPage } from './OurProcess';
import { SatellitesPage } from './WhySpeedMatters';
import { DronesPage } from './Testimonials';
import { FreeCoursesPage } from './WeekendCourses';
import { AboutUsPage } from './AboutUs';
import { AgeCategoryPage } from './AgeCategory';
import { FaqPage } from './FaqPage';
import { ContactPage } from './ContactPage';
import { Footer } from './Footer';
import { MathsPage } from './MathsPage';
import { PhysicsPage } from './PhysicsPage';
import { ChemistryPage } from './ChemistryPage';
import { AstrobiologyPage } from './AstrobiologyPage';
import { Differentiators } from './Differentiators';
import { StreamsPage } from './Streams';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'aeronautics':
        return <AeronauticsPage navigate={navigate} />;
      case 'rocketry':
        return <AstronauticsPage navigate={navigate} />;
      case 'satellites':
        return <SatellitesPage navigate={navigate} />;
      case 'drones':
        return <DronesPage navigate={navigate} />;
      case 'maths':
        return <MathsPage navigate={navigate} />;
      case 'physics':
        return <PhysicsPage navigate={navigate} />;
      case 'chemistry':
        return <ChemistryPage navigate={navigate} />;
      case 'astrobiology':
        return <AstrobiologyPage navigate={navigate} />;
      case 'philosophy':
        return <Differentiators navigate={navigate} />;
      case 'courses':
        return <StreamsPage navigate={navigate} />;
      case 'freecourses':
        return <FreeCoursesPage />;
      case 'about':
        return <AboutUsPage />;
      case 'age':
        return <AgeCategoryPage navigate={navigate} />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header navigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate}/>
    </div>
  );
}

export default App;
