import React from "react";

const ContactDetails: React.FC = () => {
  return (
    <section id="contact-details" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Details</h2>
        <p className="text-lg text-gray-600 mb-12">
          Reach out to us through any of the following ways. We are here to assist you.
        </p>

        {/* Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center place-items-center">
          {/* Phone Number */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Phone</h3>
            <p className="text-lg text-gray-600">
              <a href="tel:+971509431529" className="text-blue-600 hover:underline">
                +971 50 943 1529
              </a>
            </p>
            <p className="text-lg text-gray-600">
              <a href="tel:+919845114655" className="text-blue-600 hover:underline">
                +91 9845114655
              </a>
            </p>
          </div>

          {/* Email Address */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
            <p className="text-lg text-gray-600">
              <a href="mailto:dubai@maxpo.ae" className="text-blue-600 hover:underline">
                dubai@maxpo.ae
              </a>
            </p>
            <p className="text-lg text-gray-600">
              <a href="mailto:info@maxpo.ae" className="text-blue-600 hover:underline">
                info@maxpo.ae
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
