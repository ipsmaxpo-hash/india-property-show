import React from "react";

const EventDetails: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="event-details">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Event Details
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get ready to experience the most anticipated event of the year! Join us for an exciting journey that brings together industry leaders, exhibitors, and attendees from across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Date</h3>
            <p className="text-lg text-gray-600">January 25, 2025</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Location</h3>
            <p className="text-lg text-gray-600">Dubai World Trade Center, Dubai, UAE</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Type</h3>
            <p className="text-lg text-gray-600">Real Estate Expo & Networking Event</p>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          This year’s event promises to bring you the latest industry trends, innovative solutions, and numerous networking opportunities. Whether you are looking to showcase your products or find new business prospects, this event has something for everyone.
        </p>
      </div>
    </section>
  );
};

export default EventDetails;
