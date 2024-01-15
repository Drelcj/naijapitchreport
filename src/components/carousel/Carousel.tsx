"use client"

import React, { useEffect, useState } from 'react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides: Slide[] = [
    {
      image: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
      title: 'Slide One Title',
      subtitle: 'This is the first slide subtitle',
      ctaText: 'Learn More',
      ctaLink: '/slide-one-link',
    },
    {
      image: 'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
      title: 'Slide Two Title',
      subtitle: 'This is the second slide subtitle',
      ctaText: 'Discover',
      ctaLink: '/slide-two-link',
    },
    {
      image: 'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
      title: 'Slide Three Title',
      subtitle: 'This is the third slide subtitle',
      ctaText: 'Join Us',
      ctaLink: '/slide-three-link',
    },
    {
      image: 'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
      title: 'Slide Four Title',
      subtitle: 'This is the fourth slide subtitle',
      ctaText: 'Sign Up',
      ctaLink: '/slide-four-link',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`}>
          <img src={slide.image} className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl font-bold">{slide.title}</h1>
            <h2 className="text-2xl">{slide.subtitle}</h2>
            <a href={slide.ctaLink} className="btn btn-primary mt-4">{slide.ctaText}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

