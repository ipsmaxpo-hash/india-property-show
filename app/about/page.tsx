"use client";

import React from "react";
import Image from "next/image";
import MissionAndVision from "../components/MissionAndVision";
import Gallery from "../components/Gallery";
// import ManagementTeam from "../components/ManagementTeam";
import Hero from "@/app/images/about/hero.jpg"

const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen">
        <Image
          src={Hero} // Replace with your image path
          alt="Background image of India Property Show"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            About India Property Show
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Join us for an unforgettable experience. Discover the latest in
            technology, innovation, and industry insights. Be part of something
            amazing!
          </p>
          <a
            href="#introduction"
            className="bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all hover:bg-indigo-800"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            About the Events
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            This event is designed to bring together leaders and innovators from
            across industries to share their knowledge, inspire new ideas, and
            collaborate for a brighter future. From keynote speeches to hands-on
            workshops, this event is your chance to engage with the best in the
            field.
          </p>
        </div>
      </section>
      <MissionAndVision />
      {/* <ManagementTeam /> */}
      <Gallery />
    </div>
  );
};

export default About;