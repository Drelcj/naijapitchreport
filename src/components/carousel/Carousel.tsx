"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
      image: '/photo-1625726411847-8cbb60cc71e6.jpg',
      title: 'Slide One Title',
      subtitle: 'This is the first slide subtitle',
      ctaText: 'Learn More',
      ctaLink: '/slide-one-link',
    },
    // ... other slides
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
          <Image
            src={slide.image}
            alt={slide.title} // Added alt attribute for accessibility
            layout='fill' // Adjusted layout to fill for responsive images
            objectFit='cover' // Adjusted objectFit to cover to maintain aspect ratio
            className="w-full"
          />
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
