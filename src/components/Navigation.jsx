import avatar from '../assets/images/avatar.jpg';

const Navigation = () => (
  <div className="navbar bg-base-100 sticky top-0">
    <div className="avatar">
      <div className="w-10 rounded-full">
        <img
          src={avatar}
          style={{
            backgroundSize: 'cover',
            transform: 'scale(1.2)',
          }}
        />
      </div>
    </div>
    <div>
      <a className="btn btn-ghost text-xl">Sima Games</a>
    </div>
    <div className="dropdown hidden sm:visible">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Games</a>
        </li>
      </ul>
    </div>
    <div className="visible sm:hidden">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>Games</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
