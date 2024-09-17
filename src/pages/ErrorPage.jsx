import { useRouteError } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/Footer';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="mb-5 text-5xl font-bold">Oops!</h1>
            <p className="mb-5">Sorry, an unexpected error has occurred.</p>
            <p className="mb-5">
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
