import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import NavigationContent from './NavigationContent';

const Navigation = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className="w-full sticky flex top-0 z-50 max-h-16">
      <div className="drawer drawer-end">
        <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav
            className={`navbar bg-base-100 transition-shadow duration-300 ${
              !top && `shadow-lg`
            }`}
          >
            <Link to="/">
              <div className="btn btn-ghost flex-0">
                <div className="w-10">
                  <img
                    src={logo}
                    style={{
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <span className="text-lg md:text-2xl">Sima Games</span>
              </div>
            </Link>
            <div className="flex-1 md:hidden">
              <label
                htmlFor="navbar-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="hidden md:flex md:items-center md:ml-4">
              <ul className="menu menu-horizontal">
                <NavigationContent />
              </ul>
            </div>
          </nav>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="navbar-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <NavigationContent />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
