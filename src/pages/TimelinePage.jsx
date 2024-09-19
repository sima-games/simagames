import { useLoaderData } from 'react-router-dom';
import Timeline from '../components/Timeline';
import { getTimeline } from '../services/timeline';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/Footer';

export async function dataLoader() {
  const data = getTimeline();
  return { data };
}

const TimelinePage = () => {
  const { data } = useLoaderData();
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Timeline data={data} />
      <Footer />
    </div>
  );
};

export default TimelinePage;
