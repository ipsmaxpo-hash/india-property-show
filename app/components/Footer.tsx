"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle newsletter subscription
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
      } else {
        const { error } = await response.json();
        setMessage(error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      setMessage("An error occurred. Please try again.");
    }

    setEmail(""); // Clear the email input
  };

  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/officialindiapropertyshow"
                className="text-white hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/officialindiapropertyshow/"
                className="text-white hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/showcase/india-property-show"
                className="text-white hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/officialindiapropertyshow/"
                className="text-white hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                className="text-white hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-gray-400">Stay updated with the latest news and offers!</p>
            <form onSubmit={handleSubscription} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
