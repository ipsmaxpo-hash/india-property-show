import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="bg-white py-16 text-center px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          Why Sponsor Our Event?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Sponsoring our event will put your brand at the forefront of the real
          estate industry. With exposure to a highly targeted audience, you'll
          benefit from brand visibility, increased credibility, and opportunities
          for networking with key decision-makers.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-bullhorn fa-2x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Increased Brand Awareness
            </h3>
            <p className="text-gray-600 text-center">
              Your brand will be seen by thousands of attendees, both online and offline, creating long-lasting recognition.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-handshake fa-2x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Networking Opportunities
            </h3>
            <p className="text-gray-600 text-center">
              Connect with key industry leaders, potential clients, and other businesses to forge valuable partnerships.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="bg-purple-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-chart-line fa-2x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Generate New Leads
            </h3>
            <p className="text-gray-600 text-center">
              Sponsorship gives you the chance to engage with a highly relevant audience, driving new business and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
