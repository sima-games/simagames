import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpg';
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
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        <nav className={`navbar w-full bg-base-100 ${!top && `shadow-lg`}`}>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
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
          <Link to="/" className="flex-0 gap-1 px-2 md:gap-2">
            <div className="btn btn-ghost">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={avatar}
                    style={{
                      backgroundSize: 'cover',
                      transform: 'scale(1.3)',
                    }}
                  />
                </div>
              </div>
              <span className="text-lg md:text-2xl">Sima Games</span>
            </div>
          </Link>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <NavigationContent />
            </ul>
          </div>
        </nav>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <NavigationContent />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
