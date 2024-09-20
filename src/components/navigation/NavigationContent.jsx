import { Link } from 'react-router-dom';

const NavigationContent = () => (
  <>
    <li>
      <p className="text-base">
        <Link to="/games">Games</Link>
      </p>
    </li>
    <li>
      <p className="text-base">
        <Link to="/timeline">Timeline</Link>
      </p>
    </li>
  </>
);

export default NavigationContent;
