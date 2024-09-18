import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/navigation/Navigation';

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectTo = urlParams.get('?') || '/';

    if (redirectTo && redirectTo !== window.location.pathname) {
      navigate(redirectTo, { replace: true });
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
