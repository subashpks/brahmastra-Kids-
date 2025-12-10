
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
import { CoursesPage } from './CoursesPage';
import { AstronomyPage } from './AstronomyPage';
import { FreeCoursePopup } from './FreeCoursePopup';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { DashboardPage } from './DashboardPage';
import { CertificateFormPage } from './CertificateFormPage';
import { CourseDetailPage } from './CourseDetailPage';
import { AdvancedCourseDetailPage } from './AdvancedCourseDetailPage';
import { VrWorkshopPage } from './VrWorkshopPage';
import { CheckoutPage } from './CheckoutPage';
import { PaymentSuccessPage } from './PaymentSuccessPage';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsAndConditions } from './TermsAndConditions';
import { RefundPolicy } from './RefundPolicy';
import { User, ChildProfile } from '../types';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPopup, setShowPopup] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    // Popup logic
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
    
  }, []);

  const navigate = (page: string, data: any = null) => {
    if (page === 'checkout') {
        setCheckoutItem(data);
    }
    if (page === 'payment-success' && data) {
        setTransactionData(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePopupRedirect = (page: string) => {
    navigate(page);
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
      case 'checkout':
        return <CheckoutPage item={checkoutItem} navigate={navigate} />;
      case 'payment-success':
        return <PaymentSuccessPage navigate={navigate} transactionData={transactionData} />;
      case 'freecourses':
        return <FreeCoursesPage navigate={navigate} activeChild={null} />;
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
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsAndConditions />;
      case 'refund':
        return <RefundPolicy />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {showPopup && <FreeCoursePopup onClose={handleClosePopup} onRedirect={handlePopupRedirect} />}
      <Header navigate={navigate} currentPage={currentPage} isLoggedIn={false} onLogout={() => {}} currentUser={null} activeChild={null} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate}/>
    </div>
  );
}
