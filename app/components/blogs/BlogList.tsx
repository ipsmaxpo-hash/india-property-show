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
    date: "March 15, 2024",
    readTime: "5 min read",
    link: "/blogs/exploring-future-real-estate",
  },
  {
    title: "Top 10 Property Investment Tips",
    description:
      "Learn the best strategies for property investment that can boost your portfolio.",
    image: "/images/blogs/blog2.jpg",
    date: "April 10, 2024",
    readTime: "7 min read",
    link: "/blogs/top-10-property-investment-tips",
  },
  {
    title: "The Rise of Smart Cities",
    description:
      "How smart technologies are revolutionizing the urban landscape and reshaping cities.",
    image: "/images/blogs/blog3.jpg",
    date: "May 20, 2024",
    readTime: "6 min read",
    link: "/blogs/rise-smart-cities",
  },
];

const BlogList: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Latest Articles
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Discover our latest articles covering trends, tips, and insights into
          the real estate world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
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
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="mt-4">
                <Link href={blog.link}>
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
