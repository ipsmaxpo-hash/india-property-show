"use client";

import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto shadow-md rounded-lg p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Highlights of Our Journey
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Over the years, our events have set benchmarks in fostering
          innovation, building connections, and driving impactful
          conversations. Each event has been a stepping stone towards
          excellence, shaping our legacy in the industry. From engaging
          workshops to inspiring keynote sessions, our events have provided
          unparalleled opportunities for learning and networking.
        </p>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          We owe the success of these milestones to our incredible attendees,
          partners, and sponsors who have continuously supported our vision.
          Join us as we look back at some of the most unforgettable moments
          from our journey.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
