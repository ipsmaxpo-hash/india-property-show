"use client";

import React from "react";
import Image from "next/image";
import HeroImage from "@/app/images/hero-event.jpg"; // Replace with your image path

const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <Image
          src={HeroImage}
          alt="Event Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Welcome to the Event of the Year!
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Join us for an unforgettable experience. Discover the latest in
            technology, innovation, and industry insights. Be part of something
            amazing!
          </p>
          <a
            href="#introduction"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all hover:bg-indigo-700"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            About the Event
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            This event is designed to bring together leaders and innovators from
            across industries to share their knowledge, inspire new ideas, and
            collaborate for a brighter future. From keynote speeches to hands-on
            workshops, this event is your chance to engage with the best in the
            field.
          </p>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Purpose
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Our mission is to create a platform where ideas can thrive. We aim to
            foster collaboration, build lasting partnerships, and ignite change in
            the industries we touch.
          </p>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Our History
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            This event has been a tradition for over a decade. What began as a
            small gathering has grown into a global celebration of innovation,
            bringing together thousands of people from around the world each year.
          </p>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-lg sm:text-xl text-gray-600">
            Our mission is to empower individuals and organizations by providing
            them with the tools, knowledge, and connections they need to succeed.
            Through this event, we seek to drive positive change and build a
            sustainable future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
