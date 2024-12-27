"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img1 from "@/app/images/testimonials/purvankara.jpg"
import Img2 from "@/app/images/testimonials/testimonial-2.jpg"
import Img3 from "@/app/images/testimonials/3.jpg"

// Sample Testimonial Data
const testimonials = [
  {
    name: "Purvankara",
    title: "General Manager (International Market)",
    image: Img1,
    testimonial: "Maxpo Exhibitions Private Limited truly stands out as a powerhouse in the events industry. As a General Manager (International Market), I've had the pleasure of witnessing their exceptional work firsthand.",
  },
  {
    name: "MVN iNFRA",
    title: "Sales And Marketing Specialist",
    image: Img2,
    testimonial: "MVN INFRA sets the standard for excellence in the field of Sales and Marketing. As a seasoned professional in the industry, I've had the privilege of witnessing their unparalleled commitment to innovation and client satisfaction through Maxpo Exhibtions Private Limited.",
  },
  {
    name: "Brigade Group",
    title: "Sales Executive",
    image: Img3,
    testimonial: "I'm from Brigade. We had serious property buyers walking inn for the show and we closed 7 confirmed bookings, in 2 days. The Response is excelent. Thanks to Maxpo Exhibtions Private Limited.",
  },
];

const ScrollingTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">What Our Attendees Say</h2>
        <p className="text-lg mb-12 text-gray-700">
          Hear directly from our past attendees about their experiences.
        </p>

        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentTestimonial ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 italic">{`"${testimonial.testimonial}"`}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingTestimonials;