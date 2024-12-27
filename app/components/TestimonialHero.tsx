import React from "react";

const TestimonialHero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-75"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-12">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Hear From Those Who Made It Memorable
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Discover how our event impacted attendees, exhibitors, and sponsors. 
          Real stories from real experiences.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <a
            href="#testimonials"
            className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
          >
            Explore Testimonials
          </a>
          <a
            href="#submit-feedback"
            className="px-6 py-3 text-lg font-medium bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300"
          >
            Share Your Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;
