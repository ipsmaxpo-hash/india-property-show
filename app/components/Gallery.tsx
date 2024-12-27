"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Img1 from '@/app/images/gallery/a1.jpg'
import Img2 from '@/app/images/gallery/a6.jpg'
import Img3 from '@/app/images/gallery/g1.jpg'
import Img4 from '@/app/images/gallery/g4.jpg'
import Img5 from '@/app/images/gallery/g7.jpg'
import Img6 from '@/app/images/gallery/g8.jpg'

// Updated interface for gallery images
interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

// Sample Images
const galleryImages: GalleryImage[] = [
  { src: Img1, alt: "Event 1" },
  { src: Img2, alt: "Event 2" },
  { src: Img3, alt: "Event 3" },
  { src: Img4, alt: "Event 4" },
  { src: Img5, alt: "Event 5" },
  { src: Img6, alt: "Event 6" },
];

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: StaticImageData | null }>({
    isOpen: false,
    src: null,
  });

  const openLightbox = (src: StaticImageData) => {
    setLightbox({ isOpen: true, src });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: null });
  };

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          Event Highlights
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Relive some of the most memorable moments from our past events.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">View Image</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && lightbox.src && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <Image
            src={lightbox.src}
            alt="Lightbox Image"
            width={1000}
            height={600}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;