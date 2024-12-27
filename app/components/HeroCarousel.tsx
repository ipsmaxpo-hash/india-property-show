'use client'

import { useState } from 'react'
import Image from 'next/image'

const carouselItems = [
  {
    image: '/img/maxpo/SLIDE-1-1-1-1-1.jpg',
    title: 'Leading the Future of Innovative Exhibitions, Dynamic Conferences and Memorable Experiences',
  },
  {
    image: '/img/maxpo/4T5B9834.jpeg',
    title: 'Empowering Global Connections through Innovative Solutions and Transformative Events',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="relative w-full h-[600px]">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              {item.title}
            </h1>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  )
}

