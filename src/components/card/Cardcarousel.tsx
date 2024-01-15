"use client"

import React, { useEffect, useState } from 'react';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: 'Latest Match Analysis',
      description: 'Dive into our comprehensive match reports and analyses.',
      imageUrl: 'https://newscentral.africa/wp-content/uploads/NPFL-Commences-Mid-Season-Transfer-Window-News-Central-TV-1024x576.webp', // Replace with actual image URL
      ctaLink: '/match-analysis',
    },
    {
      title: 'Player Interviews',
      description: 'Get exclusive insights from the players themselves.',
      imageUrl: 'https://www.naijanews.com/wp-content/uploads/2023/03/Victor-Osimhen-nodding-ball.webp', // Replace with actual image URL
      ctaLink: '/player-interviews',
    },
    {
      title: 'Transfer News',
      description: 'Stay updated with the latest transfer news and rumors.',
      imageUrl: 'https://app.bsnsports.com.ng/images/post/2023/Jan/05/63b6fd4882293.png', // Replace with actual image URL
      ctaLink: '/transfer-news',
    },
    {
      title: 'Upcoming Matches',
      description: 'Never miss a game with our upcoming match schedules.',
      imageUrl: 'https://lineupfor.info/wp-content/uploads/2023/08/Cape-Town-Spurs-vs-Chippa-United.png', // Replace with actual image URL
      ctaLink: '/upcoming-matches',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex justify-center my-4 sm:my-6 md:my-12 ">
      <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-item ${index === activeIndex ? 'block' : 'hidden'}`}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={slide.imageUrl} alt={slide.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{slide.title}</h2>
              <p>{slide.description}</p>
              <div className="card-actions justify-end">
                <a href={slide.ctaLink} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-item ${index === activeIndex ? 'block' : 'hidden'}`}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={slide.imageUrl} alt={slide.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{slide.title}</h2>
              <p>{slide.description}</p>
              <div className="card-actions justify-end">
                <a href={slide.ctaLink} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Carousel;
