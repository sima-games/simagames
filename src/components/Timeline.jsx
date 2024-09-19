import { useEffect, useRef } from 'react';

const Timeline = ({ data }) => {
  const leftSideRef = useRef(null);

  useEffect(() => {
    const element = leftSideRef.current;

    if (!element) return;

    let isSyncingElementScroll = false;
    let isSyncingPageScroll = false;

    const syncElementScroll = () => {
      if (!isSyncingElementScroll) {
        isSyncingPageScroll = true;
        const elementScrollPercentage =
          element.scrollTop / (element.scrollHeight - element.clientHeight);
        window.scrollTo({
          top:
            elementScrollPercentage *
            (document.documentElement.scrollHeight - window.innerHeight),
          behavior: 'auto',
        });
      }
      isSyncingElementScroll = false;
    };

    const syncPageScroll = () => {
      if (!isSyncingPageScroll) {
        isSyncingElementScroll = true;
        const pageScrollPercentage =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);
        element.scrollTop =
          pageScrollPercentage * (element.scrollHeight - element.clientHeight);
      }
      isSyncingPageScroll = false;
    };

    element.addEventListener('scroll', syncElementScroll);
    window.addEventListener('scroll', syncPageScroll);

    return () => {
      element.removeEventListener('scroll', syncElementScroll);
      window.removeEventListener('scroll', syncPageScroll);
    };
  }, []);

  const groupedData = data.reduce((acc, item) => {
    const date = new Date(item.date + 'T00:00:00');
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];

    acc[year][month].push({ day, title: item.title, id: item.id });
    return acc;
  }, {});

  return (
    <div className="flex">
      {/* Left navigation (scrollable) */}
      <nav
        ref={leftSideRef}
        className="hidden w-1/4 h-screen overflow-y-auto sm:block border-r border-gray-300 sticky top-16"
      >
        <ul>
          {Object.keys(groupedData).map((year) => (
            <li key={`year-${year}`} className="relative">
              {/* Sticky year */}
              <div className="text-xl font-bold w-full bg-base-100 z-10 pt-4 pl-4 h-12 border-b border-gray-300 sticky top-0">
                {year}
              </div>
              <ul>
                {Object.keys(groupedData[year]).map((month) => (
                  <li key={`month-${month}`} className="relative">
                    {/* Sticky month */}
                    <div className="text-lg font-semiboldw-full bg-base-100 border-b border-gray-300 z-5 pl-4  sticky top-12">
                      {month}
                    </div>
                    <ul className="space-y-1 pt-2 pl-4 pr-4 pb-4">
                      {groupedData[year][month].map((item) => (
                        <li key={`day-${item.id}`} className="flex space-x-2">
                          <p className="font-medium">
                            {item.day.toString().padStart(2, '0')}
                          </p>
                          <a
                            href={`#timeline-item-${item.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            <p className="">{item.title}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right timeline (scrollable) */}

      <section className="md:w-3/4 w-full p-4" id="timelineContainer">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {data.map((item, i) => {
            const date = new Date(item.date + 'T00:00:00');
            const monthName = date.toLocaleString('default', { month: 'long' });
            const dateString = `${date.getDate()} ${monthName} ${date.getFullYear()}`;
            const sideClassname =
              i % 2
                ? 'timeline-start md:timeline-end mb-10'
                : 'timeline-start mb-10 md:text-end';
            return (
              <li key={item.id} id={`timeline-item-${item.id}`}>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={sideClassname}>
                  <time className="font-mono italic">{dateString}</time>
                  <div className="text-lg font-black">
                    {item.url ? (
                      <a className="underline" href={item.url}>
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </div>
                  <p className="max-w-[512px]">{item.description}</p>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
