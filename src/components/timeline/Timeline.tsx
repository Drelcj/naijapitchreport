import React from 'react';

interface TimelineEvent {
  year: string;
  event: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '1949',
      event: 'Formation of the Nigerian national football team, known as the Red Devils, which later became the Super Eagles.',
    },
    {
      year: '1963',
      event: 'Nigeria\'s first appearance in the Africa Cup of Nations.',
    },
    {
      year: '1976 & 1978',
      event: 'Nigeria achieves 3rd-place finishes in the African Cup of Nations.',
    },
    {
      year: '1994',
      event: 'The Super Eagles win the Africa Cup of Nations and qualify for their first FIFA World Cup.',
    },
    {
      year: '2013',
      event: 'Nigeria wins the Africa Cup of Nations for the third time.',
    },
    // Add more events as needed
  ];

  return (
    <div className="my-4 sm:my-6 md:my-12 bg-gradient-to-r from-blue-200 to-blue-50 shadow-lg rounded-md">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {events.map((event, index) => (
          <li key={index}>
            <div className="timeline-middle">
              {/* Timeline icon */}
            </div>
            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-end mb-10`}>
              <time className="font-mono italic">{event.year}</time>
              <div className="text-lg font-black">{event.event}</div>
            </div>
            {index < events.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
