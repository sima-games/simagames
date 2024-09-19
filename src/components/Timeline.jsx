const Timeline = ({ data }) => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {data.map((item, i) => {
        const date = new Date(item.date + 'T00:00:00');
        const monthName = date.toLocaleString('default', { month: 'long' });
        const dateString = `${date.getDate()} ${monthName} ${date.getFullYear()}`;
        const sideClassname =
          i % 2 ? 'timeline-end mb-10' : 'timeline-start mb-10 md:text-end';
        return (
          <li key={item.id}>
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
  );
};

export default Timeline;
