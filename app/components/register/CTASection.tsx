import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Don’t Miss Out on the Event of the Year!
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Register now to secure your spot at the event and connect with industry leaders, innovators, and visionaries.
        </p>
        {/* <a
          href="#register"
          className="inline-block bg-yellow-500 text-gray-900 font-semibold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Register Now
        </a> */}
      </div>
    </section>
  );
};

export default CTASection;
