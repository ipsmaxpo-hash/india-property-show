"use client";

import React, { useState } from "react";

const SubmitTestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    photo: null as File | null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage("Thank you for your feedback!");
      setFormData({
        name: "",
        email: "",
        feedback: "",
        photo: null,
      });
    }, 1000);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Submit Your Testimonial
        </h2>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-center mb-4">{successMessage}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Feedback Field */}
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 h-32 resize-none"
              placeholder="Write your feedback"
              required
            ></textarea>
          </div>

          {/* Photo Upload */}
          <div>
            <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
              Upload a Photo (Optional)
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitTestimonialForm;
