"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/public/images/ips exhibitor registration.jpg";

export default function ExhibitorRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    designation: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch("/api/exhibitor-registeration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
  
      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to submit the form. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-50"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Heading Section */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
       <h2 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg mt-6 mb-2">
  Gulf News Presents
</h2>
<h3 className="text-3xl font-semibold text-white tracking-wide drop-shadow-md">
  India Property Show
</h3>
      </motion.div>

      {/* Form Section */}
      <motion.section
        className="bg-white p-8 md:p-12 rounded-3xl w-full max-w-3xl mx-auto shadow-xl mt-10 border border-gray-200 bg-opacity-90 backdrop-blur-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!submitted ? (
          <>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Exhibitor Registration
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {["fullName", "phone", "email", "company", "designation", "city"].map((field, index) => (
                <motion.div
                  key={field}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <label className="text-gray-700 font-medium capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                  />
                </motion.div>
              ))}

              {error && <p className="text-red-500 text-center">{error}</p>}

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            className="p-8 bg-gray-50 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-green-600 mb-3">Thank You!</h3>
            <p className="text-gray-700">Your registration has been submitted successfully.</p>
          </motion.div>
        )}
      </motion.section>

      {/* Additional Spacing Below */}
      <div className="h-20"></div>
    </div>
  );
}
