import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/navigation/Navigation';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Root;
