
import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FreeCoursePopup } from './FreeCoursePopup';
import { User, ChildProfile } from '../types';

// Lazy Load Pages for Performance
const HomePage = React.lazy(() => import('./Hero').then(module => ({ default: module.HomePage })));
const AeronauticsPage = React.lazy(() => import('./Services').then(module => ({ default: module.AeronauticsPage })));
const RocketSciencePage = React.lazy(() => import('./RocketSciencePage').then(module => ({ default: module.RocketSciencePage })));
const SatellitesPage = React.lazy(() => import('./WhySpeedMatters').then(module => ({ default: module.SatellitesPage })));
const FreeCoursesPage = React.lazy(() => import('./WeekendCourses').then(module => ({ default: module.FreeCoursesPage })));
const AboutUsPage = React.lazy(() => import('./AboutUs').then(module => ({ default: module.AboutUsPage })));
const AgeCategoryPage = React.lazy(() => import('./AgeCategory').then(module => ({ default: module.AgeCategoryPage })));
const FaqPage = React.lazy(() => import('./FaqPage').then(module => ({ default: module.FaqPage })));
const ContactPage = React.lazy(() => import('./ContactPage').then(module => ({ default: module.ContactPage })));
const DataMathematicsPage = React.lazy(() => import('./DataMathematicsPage').then(module => ({ default: module.DataMathematicsPage })));
const QuantumPhysicsPage = React.lazy(() => import('./QuantumPhysicsPage').then(module => ({ default: module.QuantumPhysicsPage })));
const MolecularChemistryPage = React.lazy(() => import('./MolecularChemistryPage').then(module => ({ default: module.MolecularChemistryPage })));
const AstrobiologyPage = React.lazy(() => import('./AstrobiologyPage').then(module => ({ default: module.AstrobiologyPage })));
const Differentiators = React.lazy(() => import('./Differentiators').then(module => ({ default: module.Differentiators })));
const CoursesPage = React.lazy(() => import('./CoursesPage').then(module => ({ default: module.CoursesPage })));
const AstronomyPage = React.lazy(() => import('./AstronomyPage').then(module => ({ default: module.AstronomyPage })));
const LoginPage = React.lazy(() => import('./LoginPage').then(module => ({ default: module.LoginPage })));
const SignUpPage = React.lazy(() => import('./SignUpPage').then(module => ({ default: module.SignUpPage })));
const DashboardPage = React.lazy(() => import('./DashboardPage').then(module => ({ default: module.DashboardPage })));
const CertificateFormPage = React.lazy(() => import('./CertificateFormPage').then(module => ({ default: module.CertificateFormPage })));
const CourseDetailPage = React.lazy(() => import('./CourseDetailPage').then(module => ({ default: module.CourseDetailPage })));
const AdvancedCourseDetailPage = React.lazy(() => import('./AdvancedCourseDetailPage').then(module => ({ default: module.AdvancedCourseDetailPage })));
const VrWorkshopPage = React.lazy(() => import('./VrWorkshopPage').then(module => ({ default: module.VrWorkshopPage })));
const CheckoutPage = React.lazy(() => import('./CheckoutPage').then(module => ({ default: module.CheckoutPage })));
const PaymentSuccessPage = React.lazy(() => import('./PaymentSuccessPage').then(module => ({ default: module.PaymentSuccessPage })));
const PrivacyPolicy = React.lazy(() => import('./PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsAndConditions = React.lazy(() => import('./TermsAndConditions').then(module => ({ default: module.TermsAndConditions })));
const RefundPolicy = React.lazy(() => import('./RefundPolicy').then(module => ({ default: module.RefundPolicy })));
const EnrollmentForm = React.lazy(() => import('./Contact').then(module => ({ default: module.EnrollmentForm })));

// Optimized Loading Component
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-50">
    <div className="relative">
        <div className="w-20 h-20 border-4 border-slate-200 border-t-brand-space rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl animate-pulse">🚀</span>
        </div>
    </div>
    <p className="mt-6 text-brand-space font-bold tracking-widest uppercase text-sm animate-pulse">Initializing Mission Control...</p>
  </div>
);

// Error Boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-center p-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-t-4 border-red-500">
                <div className="text-6xl mb-4">🛸</div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Houston, we have a problem.</h1>
                <p className="text-slate-600 mb-6">A small glitch in the system. Please reload to continue the mission.</p>
                <button onClick={() => window.location.reload()} className="bg-brand-space hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full transition-all w-full shadow-lg">
                    Reload Application
                </button>
            </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  // Initialize state directly from URL to prevent "Home flash" or routing errors
  const [currentPage, setCurrentPage] = useState(() => {
    try {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const pageParam = params.get('page');
            return pageParam ? pageParam.toLowerCase() : 'home';
        }
        return 'home';
    } catch (e) {
        return 'home';
    }
  });

  const [showPopup, setShowPopup] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    // 1. Double check URL params on mount to catch redirects cleanly
    const checkUrlParams = () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const pageParam = params.get('page');
            
            // Only update if different to prevent re-renders
            if (pageParam && pageParam.toLowerCase() !== currentPage) {
                setCurrentPage(pageParam.toLowerCase());
            }

            // Popup logic: Show only if NOT on enrollment/checkout/success pages
            const restrictedPages = ['enrollment', 'checkout', 'payment-success'];
            const popupShown = sessionStorage.getItem('popupShown');
            const isOnRestrictedPage = pageParam && restrictedPages.includes(pageParam.toLowerCase());

            if (!popupShown && !isOnRestrictedPage) { 
                const timer = setTimeout(() => {
                    setShowPopup(true);
                    sessionStorage.setItem('popupShown', 'true');
                }, 4000); // Delayed slightly to not annoy immediately
                return () => clearTimeout(timer);
            }
        } catch (e) {
            console.error("Routing error:", e);
        }
    };

    const cleanupPopup = checkUrlParams();

    // 2. Handle Browser Back/Forward buttons
    const handlePopState = () => {
        const newParams = new URLSearchParams(window.location.search);
        const newPage = newParams.get('page');
        setCurrentPage(newPage ? newPage.toLowerCase() : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
        window.removeEventListener('popstate', handlePopState);
        if (typeof cleanupPopup === 'function') cleanupPopup();
    };
  }, []); // Empty dependency array means this runs once on mount

  const navigate = (page: string, data: any = null) => {
    if (page === 'checkout') {
        setCheckoutItem(data);
    }
    if (page === 'payment-success' && data) {
        setTransactionData(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    try {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url);
    } catch (e) {
        // Fallback
    }
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
    const activePage = currentPage.toLowerCase();

    // Ensure enrollment matching is case-insensitive and robust
    switch (activePage) {
      case 'aeronautics': return <AeronauticsPage {...pageProps} />;
      case 'rocket-science': return <RocketSciencePage {...pageProps} />;
      case 'satellites': return <SatellitesPage {...pageProps} />;
      case 'data-mathematics': return <DataMathematicsPage {...pageProps} />;
      case 'quantum-physics': return <QuantumPhysicsPage {...pageProps} />;
      case 'molecular-chemistry': return <MolecularChemistryPage {...pageProps} />;
      case 'astrobiology': return <AstrobiologyPage {...pageProps} />;
      case 'astronomy': return <AstronomyPage {...pageProps} />;
      case 'philosophy': return <Differentiators navigate={navigate} />;
      case 'courses': return <CoursesPage {...pageProps} />;
      case 'weekend-rocket-blast-off': return <CourseDetailPage {...pageProps} />;
      case 'advanced-rocketry-workshop': return <AdvancedCourseDetailPage {...pageProps} />;
      case 'vr-workshop': return <VrWorkshopPage {...pageProps} />;
      case 'checkout': return <CheckoutPage item={checkoutItem} navigate={navigate} />;
      case 'payment-success': return <PaymentSuccessPage navigate={navigate} transactionData={transactionData} />;
      
      // Explicit check for enrollment
      case 'enrollment': return <EnrollmentForm />;
      
      case 'freecourses': return <FreeCoursesPage navigate={navigate} activeChild={null} />;
      case 'about': return <AboutUsPage />;
      case 'age': return <AgeCategoryPage navigate={navigate} />;
      case 'faq': return <FaqPage />;
      case 'contact': return <ContactPage />;
      case 'certificate': return <CertificateFormPage navigate={navigate} />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsAndConditions />;
      case 'refund': return <RefundPolicy />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <ErrorBoundary>
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
          {showPopup && <FreeCoursePopup onClose={handleClosePopup} onRedirect={handlePopupRedirect} />}
          <Header navigate={navigate} currentPage={currentPage} isLoggedIn={false} onLogout={() => {}} currentUser={null} activeChild={null} />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
                {renderPage()}
            </Suspense>
          </main>
          <Footer navigate={navigate}/>
        </div>
    </ErrorBoundary>
  );
}
