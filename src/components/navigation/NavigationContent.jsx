import { Link } from 'react-router-dom';

const NavigationContent = () => (
  <>
    <li>
      <Link to="/games">Games</Link>
    </li>
    <li>
      <Link to="/timeline">Timeline</Link>
    </li>
  </>
);

export default NavigationContent;
