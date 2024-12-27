"use client";

import React from "react";

const videos = [
  {
    title: "International Property Expo 2023 Highlights",
    url: "https://youtu.be/7XRHMrTSK5g?si=KiZXOl0OxipXnzuf",
    thumbnail: "https://img.youtube.com/vi/7XRHMrTSK5g/0.jpg", // Replace with YouTube thumbnail
  },
  {
    title: "Global Real Estate Summit 2022 Recap",
    url: "https://www.youtube.com/watch?v=sq3va_W3y7c",
    thumbnail: "https://img.youtube.com/vi/sq3va_W3y7c/0.jpg",
  },
  {
    title: "Property Show Asia 2021 Overview",
    url: "https://www.youtube.com/watch?v=7XRHMrTSK5g",
    thumbnail: "https://img.youtube.com/vi/7XRHMrTSK5g/0.jpg",
  },
];

const EventVideos: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Event Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Video Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto"
                />
                {/* Video Title */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">
                    {video.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventVideos;
