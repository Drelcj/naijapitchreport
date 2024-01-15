"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  ctaLink: string;
}

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides: Slide[] = [
    {
      title: 'Latest Match Analysis',
      description: 'Dive into our comprehensive match reports and analyses.',
      imageUrl: 'https://www.naijanews.com/wp-content/uploads/2023/08/F4tSj9FawAAOrFp.jpeg.webp',
      ctaLink: '/match-analysis',
    },
    // ... other slides
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex justify-center my-4 sm:my-6 md:my-12">
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'block' : 'hidden'}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </figure>
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
