import React from "react";
import Link from "next/link";
import Image from "next/image";
// Example blog data
const blogs = [
  {
    title: "Exploring the Future of Real Estate",
    description:
      "A deep dive into the future of real estate and the innovations shaping the industry.",
    image: "/images/blogs/blog1.jpg",
    link: "/blogs/exploring-future-real-estate",
  },
  {
    title: "Top 10 Property Investment Tips",
    description:
      "Learn the best strategies for property investment that can boost your portfolio.",
    image: "/images/blogs/blog2.jpg",
    link: "/blogs/top-10-property-investment-tips",
  },
  {
    title: "The Rise of Smart Cities",
    description:
      "How smart technologies are revolutionizing the urban landscape and reshaping cities.",
    image: "/images/blogs/blog3.jpg",
    link: "/blogs/rise-smart-cities",
  },
];

const FeaturedBlogs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Featured Blogs
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Stay ahead with our latest articles covering the most important topics
          in real estate and property investment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            {/* Blog Image */}
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <Link href={blog.link}>
                  <p className="hover:text-blue-600 transition-colors">{blog.title}</p>
                </Link>
              </h3>
              <p className="text-gray-600 text-base mb-4">{blog.description}</p>
              <Link href={blog.link}>
                <p className="text-blue-600 hover:text-blue-800 font-semibold">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
