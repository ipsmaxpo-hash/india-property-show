import React from "react";

const TestimonialIntroduction: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Why Testimonials Matter
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Testimonials reflect the heart and soul of any event. They showcase the genuine 
          experiences of attendees, exhibitors, and sponsors, helping us improve, inspire, 
          and build trust for future collaborations.
        </p>

        {/* Divider */}
        <div className="mt-10">
          <span className="inline-block w-24 h-1 bg-blue-600 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialIntroduction;
