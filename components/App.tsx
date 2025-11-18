
import React, { useState, useEffect } from 'react';
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
import { CoursesPage } from './Streams';
import { AstronomyPage } from './AstronomyPage';
import { FreeCoursePopup } from './FreeCoursePopup';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { DashboardPage } from './DashboardPage';
import { CertificateFormPage } from './CertificateFormPage';
import { CourseDetailPage } from './CourseDetailPage';
import { AdvancedCourseDetailPage } from './AdvancedCourseDetailPage';
import { VrWorkshopPage } from './VrWorkshopPage';
import { User, ChildProfile } from '../types';

const FomoBanner: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div 
        onClick={onClick}
        className="bg-amber-400 text-amber-900 py-2.5 px-4 text-center text-sm font-bold cursor-pointer hover:bg-amber-500 transition-colors animate-pulse-fomo"
        style={{ animationDuration: '3s' }}
    >
        <span role="img" aria-label="hourglass" className="mr-2">⏳</span>
        10 Seats Only Per Batch! Click Here to Secure Your Spot.
    </div>
);


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPopup, setShowPopup] = useState(false);
  const [showFomoBanner, setShowFomoBanner] = useState(false);
  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  // const [activeChild, setActiveChild] = useState<ChildProfile | null>(null);

  useEffect(() => {
    // Check for logged in user in session storage
    // const loggedInUser = sessionStorage.getItem('brahmastra_user');
    // if (loggedInUser) {
    //     const user = JSON.parse(loggedInUser);
    //     setCurrentUser(user);
    // }
    
    // const storedActiveChild = sessionStorage.getItem('brahmastra_active_child');
    // if(storedActiveChild) {
    //     setActiveChild(JSON.parse(storedActiveChild));
    // }

    // Popup logic
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
    
    const fomoClicked = sessionStorage.getItem('fomoBannerClicked');
    if (fomoClicked !== 'true') {
        setShowFomoBanner(true);
    }

  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleFomoClick = () => {
    sessionStorage.setItem('fomoBannerClicked', 'true');
    setShowFomoBanner(false);
    navigate('courses');
  };

  /*
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem('brahmastra_user', JSON.stringify(user));
    navigate('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveChild(null);
    sessionStorage.removeItem('brahmastra_user');
    sessionStorage.removeItem('brahmastra_active_child');
    navigate('home');
  };

  const handleSet_activeChild = (child: ChildProfile | null) => {
    setActiveChild(child);
    if (child) {
        sessionStorage.setItem('brahmastra_active_child', JSON.stringify(child));
    } else {
        sessionStorage.removeItem('brahmastra_active_child');
    }
  }
  */

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePopupRedirect = () => {
    navigate('freecourses');
    setShowPopup(false);
  };

  const renderPage = () => {
    const pageProps = { navigate, activeChild: null };
    switch (currentPage) {
      case 'aeronautics':
        return <AeronauticsPage {...pageProps} />;
      case 'rocket-science':
        return <RocketSciencePage {...pageProps} />;
      case 'satellites':
        return <SatellitesPage {...pageProps} />;
      case 'data-mathematics':
        return <DataMathematicsPage {...pageProps} />;
      case 'quantum-physics':
        return <QuantumPhysicsPage {...pageProps} />;
      case 'molecular-chemistry':
        return <MolecularChemistryPage {...pageProps} />;
      case 'astrobiology':
        return <AstrobiologyPage {...pageProps} />;
      case 'astronomy':
        return <AstronomyPage {...pageProps} />;
      case 'philosophy':
        return <Differentiators navigate={navigate} />;
      case 'courses':
        return <CoursesPage {...pageProps} />;
      case 'weekend-rocket-blast-off':
        return <CourseDetailPage {...pageProps} />;
      case 'advanced-rocketry-workshop':
        return <AdvancedCourseDetailPage {...pageProps} />;
      case 'vr-workshop':
        return <VrWorkshopPage {...pageProps} />;
      case 'freecourses':
        // FIX: Pass activeChild prop to FreeCoursesPage.
        return <FreeCoursesPage activeChild={null} />;
      case 'about':
        return <AboutUsPage />;
      case 'age':
        return <AgeCategoryPage navigate={navigate} />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'certificate':
        return <CertificateFormPage navigate={navigate} />;
      /*
      case 'login':
        return <LoginPage navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
      case 'signup':
        return <SignUpPage navigate={navigate} />;
      case 'dashboard':
        // FIX: Pass correct props to DashboardPage.
        return currentUser ? <DashboardPage currentUser={currentUser} activeChild={activeChild} setActiveChild={handleSet_activeChild} navigate={navigate} /> : <LoginPage navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
      */
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {showFomoBanner && <FomoBanner onClick={handleFomoClick} />}
      {showPopup && <FreeCoursePopup onClose={handleClosePopup} onRedirect={handlePopupRedirect} />}
      <Header navigate={navigate} currentPage={currentPage} isLoggedIn={false} onLogout={() => {}} currentUser={null} activeChild={null} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate}/>
    </div>
  );
}

export default App;
