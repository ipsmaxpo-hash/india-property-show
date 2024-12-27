'use client'

import React, { useState } from "react";

const SubscriptionCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would integrate with your backend to store the email.
    // For now, we're simulating a successful subscription.
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Stay Updated with Our Latest Blogs!
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for the latest updates and insightful
          articles in the real estate world.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-6 py-3 w-80 sm:w-96 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-lg font-semibold text-green-300 mt-4">
            Thank you for subscribing! Stay tuned for updates.
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscriptionCTA;
