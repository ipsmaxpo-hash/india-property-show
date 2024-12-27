import React from "react";

const BlogsIntroduction: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Welcome to Our Blog
        </h2>

        {/* Section Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Stay updated with the latest trends in real estate, insightful articles, 
          and highlights from our past events. Whether you're a first-time visitor or 
          a regular reader, you'll find something valuable to explore.
        </p>
      </div>

      {/* Decorative Divider */}
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default BlogsIntroduction;
