import React from "react";
import Image from "next/image";
import Hero from '@/app/images/contact&register/Hero.jpg'

const ContactUsHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={Hero} // Replace with your actual image path
        alt="Contact Us background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl sm:text-6xl font-semibold leading-tight mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Have questions or want to learn more about our services? We're here to help. Contact us today!
          </p>
          <a
            href="#contact-form"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHeroSection;