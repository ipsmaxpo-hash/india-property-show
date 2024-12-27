"use client";

import React from "react";
import Image from "next/image";
import Hero from '@/app/images/events/img (2).webp'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden">
      <Image
        src={Hero} // Replace with your actual image path
        alt="Background image of past events"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          Past Events
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
          Discover the milestones, achievements, and memories that have shaped
          our journey. Relive the most memorable moments from our events.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;