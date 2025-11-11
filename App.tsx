import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/Hero';
import { AeronauticsPage } from './components/Services';
import { AstronauticsPage } from './components/OurProcess';
import { SatellitesPage } from './components/WhySpeedMatters';
import { DronesPage } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

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
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header navigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
        {currentPage === 'home' && (
          <>
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer navigate={navigate}/>
    </div>
  );
}

export default App;