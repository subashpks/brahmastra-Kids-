
import React, { useState } from 'react';
import { Header } from './Header';
import { HomePage } from './Hero';
import { AeronauticsPage } from './Services';
import { RocketSciencePage } from './RocketSciencePage';
import { SatellitesPage } from './WhySpeedMatters';
import { FreeCoursesPage } from './WeekendCourses';
import { AboutUsPage } from './AboutUs';
import { AgeCategoryPage } from './AgeCategory';
import { FaqPage } from './FaqPage';
import { ContactPage } from './ContactPage';
import { Footer } from './Footer';
import { DataMathematicsPage } from './DataMathematicsPage';
import { QuantumPhysicsPage } from './QuantumPhysicsPage';
import { MolecularChemistryPage } from './MolecularChemistryPage';
import { AstrobiologyPage } from './AstrobiologyPage';
import { Differentiators } from './Differentiators';
import { StreamsPage } from './Streams';
import { AstronomyPage } from './AstronomyPage';

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
      case 'rocket-science':
        return <RocketSciencePage navigate={navigate} />;
      case 'satellites':
        return <SatellitesPage navigate={navigate} />;
      case 'data-mathematics':
        return <DataMathematicsPage navigate={navigate} />;
      case 'quantum-physics':
        return <QuantumPhysicsPage navigate={navigate} />;
      case 'molecular-chemistry':
        return <MolecularChemistryPage navigate={navigate} />;
      case 'astrobiology':
        return <AstrobiologyPage navigate={navigate} />;
      case 'astronomy':
        return <AstronomyPage navigate={navigate} />;
      case 'philosophy':
        return <Differentiators navigate={navigate} />;
      case 'streams':
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
