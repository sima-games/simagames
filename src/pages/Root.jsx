import { redirect, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/navigation/Navigation';
import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectTo = urlParams.get('?') || '/';

    if (redirectTo && redirectTo !== window.location.pathname) {
      redirect(redirectTo);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Root;
