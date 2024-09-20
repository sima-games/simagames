import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/navigation/Navigation';
import { useEffect } from 'react';
import Skillset from '../components/skills/Skillset';
import briefcase from '../assets/images/briefcase.png';
import moon from '../assets/images/moon_face.png';

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectTo = urlParams.get('url') || '/';

    if (redirectTo && redirectTo !== window.location.pathname) {
      navigate(redirectTo, { replace: true });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <Skillset />
      <section
        id="games"
        className="w-full py-12 md:py-24 lg:py-32 bg-base-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center pl-2 gap-4">
            <div className="w-16 pb-10">
              <img
                src={briefcase}
                style={{
                  backgroundSize: 'cover',
                }}
              />
            </div>
            <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Мои проекты
            </span>
          </div>
          <p className="mt-4 max-w-xl md:text-xl lg:text-base xl:text-xl">
            Ознакомьтесь с некоторыми из моих проектов. Каждый из них
            представляет собой уникальный вызов и опыт, демонстрируя мои навыки.
          </p>

          <div className="mt-8">
            <Link to="/games">
              <button className="btn btn-primary flex items-center">
                Смотреть проекты
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center pl-2 gap-4">
            <div className="w-16 pb-6">
              <img
                src={moon}
                style={{
                  backgroundSize: 'cover',
                }}
              />
            </div>
            <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Моя жизнь
            </span>
          </div>
          <p className="mt-4 max-w-xl md:text-xl lg:text-base xl:text-xl">
            Также, я веду таймлайн событий своей жизни. Отмечаю то, что оставило
            заметный отпечаток в моем личностном развитии. Можно глянуть, что
            интересного я успел натворить!
          </p>
          <div className="mt-8">
            <Link to="/timeline">
              <button className="btn btn-primary flex items-center">
                Смотреть таймлайн
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Root;
