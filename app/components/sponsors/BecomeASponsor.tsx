import React from "react";
import Link from "next/link";

const BecomeASponsor: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          Become a Sponsor
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Join us as a sponsor and make an impact at one of the premier real estate events. Choose from our tailored sponsorship packages to showcase your brand and reach a large, engaged audience.
        </p>

        {/* Sponsorship Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Platinum Package */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Platinum Sponsor</h3>
            <p className="text-lg text-gray-300 mb-6">
              The top-tier sponsorship package offering maximum visibility at the event.
            </p>
            <ul className="list-disc list-inside text-left text-gray-300 mb-6">
              <li>Exclusive branding on event materials</li>
              <li>Premium booth space</li>
              <li>Speaking opportunity at the event</li>
              <li>Social media shout-outs and website promotion</li>
            </ul>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Become a Platinum Sponsor
            </button>
          </div>

          {/* Gold Package */}
          <div className="bg-yellow-500 p-8 rounded-xl shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Gold Sponsor</h3>
            <p className="text-lg text-yellow-100 mb-6">
              A highly visible package with excellent benefits for your brand exposure.
            </p>
            <ul className="list-disc list-inside text-left text-yellow-100 mb-6">
              <li>Branding on event materials</li>
              <li>Standard booth space</li>
              <li>Social media mentions</li>
              <li>Website listing</li>
            </ul>
            <button className="bg-white text-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-100 transition">
              Become a Gold Sponsor
            </button>
          </div>

          {/* Silver Package */}
          <div className="bg-gray-400 p-8 rounded-xl shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Silver Sponsor</h3>
            <p className="text-lg text-gray-100 mb-6">
              A great entry-level sponsorship for businesses looking for brand exposure.
            </p>
            <ul className="list-disc list-inside text-left text-gray-100 mb-6">
              <li>Logo on event materials</li>
              <li>Booth space</li>
              <li>Website listing</li>
            </ul>
            <button className="bg-white text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Become a Silver Sponsor
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Have Questions? Contact Us!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Our team is happy to provide additional details about each sponsorship package. Let us help you choose the best fit for your business.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Contact Us for More Information
      </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeASponsor;