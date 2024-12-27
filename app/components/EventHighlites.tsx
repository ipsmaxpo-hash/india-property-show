"use client";

import React from "react";
import { FaUserTie, FaBuilding, FaMicrophoneAlt } from "react-icons/fa";

const EventHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <FaBuilding size={40} className="text-blue-500" />,
      title: "100+ Exhibitors",
      description: "Top real estate brands from across the country.",
    },
    {
      icon: <FaUserTie size={40} className="text-green-500" />,
      title: "50+ Industry Experts",
      description: "Gain insights from renowned speakers and experts.",
    },
    {
      icon: <FaMicrophoneAlt size={40} className="text-yellow-500" />,
      title: "Live Panels & Workshops",
      description: "Interactive sessions to help you make informed decisions.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Event Highlights
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Explore the key features of the India Property Show and what makes it
          the most awaited event in the real estate industry.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-100">
                {highlight.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {highlight.title}
              </h3>
              <p className="mt-2 text-center text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
