"use client";

import React from "react";
import Image from "next/image";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This event was a game-changer for my business. The networking opportunities were phenomenal!",
    role: "CEO, TechCorp",
    image: "/images/testimonials/john.jpg", // Replace with your image paths
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "I was amazed by the organization and the valuable insights I gained from the sessions.",
    role: "Marketing Director, BizWorld",
    image: "/images/testimonials/jane.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback:
      "The perfect platform for learning, connecting, and growing. I'll be back next year for sure!",
    role: "Entrepreneur",
    image: "/images/testimonials/michael.jpg",
  },
];

const FeaturedTestimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
          Featured Testimonials
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-12">
          Hear what attendees, sponsors, and exhibitors have to say about our
          event.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;