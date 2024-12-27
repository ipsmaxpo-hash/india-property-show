'use client'

import React, { useState } from "react";

const SubscriptionCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate the subscription process (e.g., send to API or save to DB)
    setIsSubscribed(true);
    setEmail(""); // Clear the email input
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Stay Updated with Our Latest Blogs
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Subscribe to our newsletter and get the latest real estate insights and event updates directly in your inbox.
        </p>

        {/* Subscription Form */}
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="flex justify-center items-center space-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 w-80 sm:w-96 text-gray-900 rounded-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <p className="text-lg text-green-400">
            Thank you for subscribing! You will receive updates soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default SubscriptionCTA;
