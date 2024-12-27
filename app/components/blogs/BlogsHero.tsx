import React from "react";

const BlogsHero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-20">
        {/* Heading Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Welcome to Our Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Dive into insightful articles, real estate trends, and highlights from past events. 
          Stay informed and inspired with our latest updates.
        </p>

        {/* Call-to-Action Section */}
        <div className="mt-8">
          <a
            href="#latest-blogs"
            className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
          >
            Explore Articles
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30 translate-x-16 translate-y-16"></div>
    </section>
  );
};

export default BlogsHero;
