
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/Hero';
import { AeronauticsPage } from './components/Services';
import { AstronauticsPage } from './components/OurProcess';
import { SatellitesPage } from './components/WhySpeedMatters';
import { DronesPage } from './components/Testimonials';
import { FreeCoursesPage } from './components/WeekendCourses';
import { AboutUsPage } from './components/AboutUs';
import { AgeCategoryPage } from './components/AgeCategory';
import { StreamsPage } from './components/Streams';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'aeronautics':
        return <AeronauticsPage />;
      case 'astronautics':
        return <AstronauticsPage />;
      case 'satellites':
        return <SatellitesPage />;
      case 'drones':
        return <DronesPage />;
      case 'freecourses':
        return <FreeCoursesPage />;
      case 'about':
        return <AboutUsPage />;
      case 'age':
        return <AgeCategoryPage />;
      case 'streams':
        return <StreamsPage />;
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
        {currentPage === 'home' && <FAQ />}
        {currentPage === 'freecourses' && <Contact />}
      </main>
      <Footer navigate={navigate}/>
    </div>
  );
}

export default App;
