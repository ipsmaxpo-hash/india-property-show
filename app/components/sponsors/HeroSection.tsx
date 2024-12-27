import React from "react";
import Image from "next/image";
import Hero from "@/app/images/sponsers/hero/img (1).webp"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden">
      {/* Background Image */}
      <Image
        src={Hero} // Replace with your actual image path
        alt="Background image of the event"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Animated Background Decoration */}
      {/* <div className="absolute inset-0">
        <div className="w-96 h-96 bg-yellow-400 opacity-30 rounded-full blur-3xl absolute -top-16 -left-16 animate-pulse"></div>
        <div className="w-80 h-80 bg-purple-500 opacity-40 rounded-full blur-3xl absolute -bottom-16 -right-16 animate-pulse"></div>
      </div> */}

      <div className="relative text-center z-10 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Become a Sponsor of Our Prestigious Event
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Partner with us to create an unforgettable experience. Supporting the
          industry&apos;s biggest property show places your brand in front of a global
          audience and provides unparalleled exposure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <a
            href="#sponsor-info"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-md text-lg transition transform hover:scale-105 duration-300 shadow-md"
          >
            Learn More About Sponsorship
          </a> */}
          <a
            href="/contact"
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-4 rounded-md text-lg transition transform hover:scale-105 hover:bg-yellow-500 hover:text-gray-900 duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;