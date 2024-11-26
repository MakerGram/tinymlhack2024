import React, { useEffect, useRef, useState } from 'react';

const HackathonTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  const timeline = [
    {
      day: 'Day 1',
      events: [
        { time: '09:00', description: 'Event Kickoff and Introduction' },
        { time: '10:00', description: 'Presentation of Challenges' },
        { time: '11:00', description: 'Team Formation' },
        { time: '12:30', description: 'Workshops and Hands-on Sessions' },
        { time: '15:00', description: 'Check-in and Solution Building' },
        { time: '18:00', description: 'Progress Update' },
        { time: '00:00', description: 'Midnight Checkpoint' }
      ]
    },
    {
      day: 'Day 2',
      events: [
        { time: '08:00', description: 'Morning Checkpoint' },
        { time: '12:00', description: 'Hackathon Concludes' },
        { time: '13:00', description: 'Team Presentations' },
        { time: '15:00', description: 'Winners Announcement' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current = timelineRefs.current.slice(0, timeline.length * 10);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [timeline.length]);

  return (
    <div className="bg-black py-[100px] px-4 relative">
      {/* Timeline Heading */}
      <h1 className="text-white text-4xl font-bold tracking-[20px] uppercase py-3 text-center mb-10  animate-slide-up">
  Timeline
</h1>


      <div className="max-w-xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full opacity-50 z-0"></div>

        {timeline.map((daySchedule, dayIndex) => (
          <div key={dayIndex} className="mb-12 relative">
            {/* Day Label - Positioned outside the line */}
            <h2
              className="
                text-3xl font-bold absolute -left-16 top-0 
                text-indigo-700 uppercase tracking-widest
                transform -rotate-90 origin-left
                max-md:hidden
              "
            >
              {daySchedule.day}
            </h2>

            <h2 className="text-2xl font-bold text-center mb-6 text-white uppercase tracking-widest md:hidden">
              {daySchedule.day}
            </h2>

            {daySchedule.events.map((event, eventIndex) => {
              const itemIndex = dayIndex * 10 + eventIndex;
              return (
                <div
                  ref={(el) => (timelineRefs.current[itemIndex] = el)}
                  key={eventIndex}
                  className={`
                    flex items-center mb-4 w-full 
                    ${eventIndex % 2 === 0 ? 'flex-row-reverse' : ''}
                    opacity-0 translate-y-10
                    ${visibleItems.includes(itemIndex)
                      ? 'animate-fade-in-up opacity-100 translate-y-0'
                      : ''}
                    transition-all duration-600 ease-out
                  `}
                >
                  {/* Time Marker */}
                  <div
                    className={`
                      absolute left-1/2 transform -translate-x-1/2 
                      w-5 h-5 rounded-full 
                      bg-indigo-600 
                      flex items-center justify-center
                      z-10
                      ${visibleItems.includes(itemIndex) ? 'animate-pulse' : ''}
                    `}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`
                      w-[calc(50%-30px)] p-3 
                      bg-gray-800/80 rounded-md shadow-lg
                      ${eventIndex % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                      relative
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:bg-gray-700/90
                      transform origin-center
                    `}
                  >
                    <div
                      className={`
                        absolute top-1/2 transform -translate-y-1/2 
                        w-0 h-0 border-y-4 border-y-transparent 
                        ${eventIndex % 2 === 0
                          ? 'right-full border-r-4 border-r-gray-800/80'
                          : 'left-full border-l-4 border-l-gray-800/80'}
                      `}
                    ></div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-indigo-600">
                        {event.time}
                      </span>
                    </div>

                    <p className="text-white text-xs leading-tight">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
