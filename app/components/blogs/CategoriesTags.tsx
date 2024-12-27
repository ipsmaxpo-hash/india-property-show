import React from "react";
import Link from "next/link";

const categories = [
  { name: "Real Estate Trends", slug: "/blogs/real-estate-trends" },
  { name: "Market Insights", slug: "/blogs/market-insights" },
  { name: "Investment Tips", slug: "/blogs/investment-tips" },
  { name: "Property Development", slug: "/blogs/property-development" },
  { name: "Smart Cities", slug: "/blogs/smart-cities" },
  { name: "Sustainability", slug: "/blogs/sustainability" },
];

const CategoriesTags: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Explore Our Blog Categories
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Stay updated with the latest insights in the real estate world. Explore
          different topics that interest you.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.slug}>
            <p className="px-6 py-3 mb-4 text-lg font-semibold text-gray-800 bg-blue-100 rounded-full hover:bg-blue-200 transition duration-300 transform hover:scale-105">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesTags;
