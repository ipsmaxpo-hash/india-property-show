"use client";

import React from "react";
import { FaBullhorn, FaEye } from "react-icons/fa"; // Icons for Mission and Vision

const MissionAndVision: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-12">
          Our Mission and Vision
        </h2>

        {/* Mission Block */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 mb-16">
          <div className="flex-1 p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4 text-indigo-600 text-4xl">
              <FaBullhorn />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Our mission is to create a platform that fosters innovation, collaboration, and knowledge sharing
              in the real estate and property sectors. We aim to bring together industry leaders, experts, and
              enthusiasts under one roof to discuss the latest trends, showcase cutting-edge technologies, and
              offer valuable networking opportunities.
            </p>
          </div>

          {/* Vision Block */}
          <div className="flex-1 p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4 text-indigo-600 text-4xl">
              <FaEye />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              Our vision is to revolutionize the real estate industry by promoting sustainable growth, advancing
              smart solutions, and connecting professionals from various sectors. We aspire to become the leading
              property show that sets trends and influences the future of the industry on a global scale.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12">
          <a
            href="/exhibitorregistration"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:bg-indigo-700"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
