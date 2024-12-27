import React from "react";
import { FaHome, FaBuilding, FaStar } from "react-icons/fa";

const KeyCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Key Property Categories</h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore the wide range of property categories featured at the show.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Residential */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              <FaHome size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Residential</h3>
            <p className="mt-2 text-gray-500">
              Discover various residential properties for sale and rent.
            </p>
          </div>

          {/* Commercial */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              <FaBuilding size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Commercial</h3>
            <p className="mt-2 text-gray-500">
              Explore commercial spaces including offices, retail, and industrial properties.
            </p>
          </div>

          {/* Luxury */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              <FaStar size={40} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Luxury</h3>
            <p className="mt-2 text-gray-500">
              Experience the finest luxury properties available at the show.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyCategories;
