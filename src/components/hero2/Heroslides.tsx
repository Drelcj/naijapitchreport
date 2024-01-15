"use client";

import React, { useEffect, useState } from 'react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides: Slide[] = [
    {
      image: 'https://daisyui.com/images/stock/photo-1.jpg', // Replace with actual image URL
      title: 'Welcome to NaijaPitchReports',
      subtitle: 'Your home for the latest football news',
      ctaText: 'Read More',
      ctaLink: '/latest-news',
    },
    {
      image: 'https://daisyui.com/images/stock/photo-2.jpg', // Replace with actual image URL
      title: 'Explore Match Reports',
      subtitle: 'In-depth analysis of recent games',
      ctaText: 'Discover',
      ctaLink: '/match-reports',
    },
    {
      image: 'https://daisyui.com/images/stock/photo-3.jpg', // Replace with actual image URL
      title: 'Player Profiles',
      subtitle: 'Get to know your favorite players',
      ctaText: 'Learn More',
      ctaLink: '/player-profiles',
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero min-h-[75vh] mb-5">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-overlay bg-opacity-60 flex justify-center items-center transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
              <p className="mb-5">{slide.subtitle}</p>
              <a href={slide.ctaLink} className="btn btn-primary">{slide.ctaText}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
