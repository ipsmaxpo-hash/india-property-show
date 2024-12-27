"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Img1 from "@/app/images/sponsers/img (1).png";

// Dynamically import Slider for client-side rendering
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    name: "John Doe",
    designation: "Exhibitor, Global Realty",
    feedback:
      "The event exceeded my expectations! We closed multiple deals and made valuable connections.",
    image: Img1,
  },
  {
    name: "Jane Smith",
    designation: "Attendee, Property Investor",
    feedback:
      "This property show was insightful and inspiring. I look forward to attending next year!",
    image: "/images/testimonials/jane.jpg",
  },
  {
    name: "Alex Johnson",
    designation: "Sponsor, RealtyCorp",
    feedback:
      "Amazing organization and great footfall. It was an excellent platform for showcasing our brand.",
    image: "/images/testimonials/alex.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What People Say
        </h2>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 md:p-12 text-center"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              {/* Feedback */}
              <p className="text-lg text-gray-700 italic mb-4">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              {/* Name and Designation */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;