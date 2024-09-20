import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import NavigationContent from './NavigationContent';
import content from '../../services/content';

const Navigation = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 5 ? setTop(false) : setTop(true);
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
              <div className="flex items-center pl-2 gap-2">
                <div className="w-10">
                  <img
                    src={logo}
                    style={{
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <span className="text-lg font-medium md:text-2xl">
                  Sima Games
                </span>
              </div>
            </Link>
            <div className="flex-none md:hidden">
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
            <li className="flex-1 bg-inherit"></li>
            <li />
            <li>
              <a
                href={`mailto:${content.mail}`}
                className="text-base text-blue-600 hover:underline"
              >
                {content.mail}
              </a>
            </li>
            <li className="menu-horizontal">
              <a href={content.telegram.url} target="__blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  className="fill-current"
                >
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg>
              </a>
              <a
                href={content.youtube.url}
                target="__blank"
                className="pl-0 pr-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
