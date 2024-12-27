"use client";

import React from "react";

const milestones = [
  {
    year: "2018",
    title: "The Inception",
    description: "Our journey began with a vision to revolutionize the real estate sector.",
  },
  {
    year: "2019",
    title: "First Property Show",
    description: "Hosted our first-ever property show, attracting hundreds of industry leaders.",
  },
  {
    year: "2020",
    title: "Expansion to Global Events",
    description: "Expanded our reach, hosting events across multiple countries.",
  },
  {
    year: "2022",
    title: "Innovative Partnerships",
    description: "Collaborated with top tech companies to bring innovation to the forefront.",
  },
  {
    year: "2023",
    title: "Record-breaking Attendance",
    description: "Achieved record-breaking participation in our latest property show.",
  },
];

const OurJourney: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-gray-900 mb-12">
          Our Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-indigo-600">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="mb-10 ml-6 group transition-all duration-300 hover:scale-105"
            >
              {/* Circle Marker */}
              <div className="absolute -left-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-50"></div>

              {/* Timeline Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-indigo-600 mb-1">
                  {milestone.year}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
