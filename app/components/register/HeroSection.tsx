import React from "react";
import Image from "next/image";
import Hero from '@/app/images/contact&register/regimg.png'

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={Hero} // Replace with your actual image path
        alt="Event background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div className="px-6 md:px-12">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Register for the Event
          </h1>
          <p className="text-xl mb-8">
            Join us for an unforgettable experience! Secure your spot today.
          </p>
          <a
            href="#registration-form"
            className="inline-block px-8 py-3 bg-blue-600 text-lg text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;