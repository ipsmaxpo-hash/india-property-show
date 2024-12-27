"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    year: 2023,
    name: "International Property Expo",
    date: "March 15-18, 2023",
    location: "Dubai, UAE",
    image: "/images/events/event1.jpg", // Replace with your image paths
    achievements: ["10,000+ Attendees", "500+ Deals Closed", "50+ Speakers"],
  },
  {
    year: 2022,
    name: "Global Real Estate Summit",
    date: "June 10-12, 2022",
    location: "New York, USA",
    image: "/images/events/event2.jpg",
    achievements: ["8,000+ Attendees", "300+ Deals Closed", "40+ Exhibitors"],
  },
  {
    year: 2021,
    name: "Property Show Asia",
    date: "November 20-22, 2021",
    location: "Singapore",
    image: "/images/events/event3.jpg",
    achievements: ["5,000+ Attendees", "200+ Deals Closed", "30+ Workshops"],
  },
];

const EventHighlights: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Event Highlights
        </h2>
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Event Image */}
              <div className="w-full lg:w-1/2 h-64 relative">
                <Image
                  src={event.image}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform transform hover:scale-105 duration-300"
                />
              </div>

              {/* Event Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {event.name}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Location:</strong> {event.location}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {event.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
