import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <section id="social-media-links" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay connected with us on social media for the latest updates and news!
        </p>

        <div className="flex justify-center gap-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/officialindiapropertyshow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaFacebookF size={30} />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/maxpoae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <FaTwitter size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/showcase/india-property-show"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-300"
          >
            <FaLinkedinIn size={30} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/officialindiapropertyshow/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
