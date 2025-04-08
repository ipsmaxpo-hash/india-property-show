import React from "react";
import Image from "next/image";
import logo1 from "@/public/images/gulfnews logo white logo 2.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/video/Shows.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

    
      
      {/* Content on top of video */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
          {/* Logo Image */}
      <div className="relative w-[150px] h-[50px] mx-auto mt-10 z-10">
        <Image
          src={logo1}
          alt="Proptech Expo 2025 Logo"
          fill
          className="object-contain"
          sizes="150px"
        />
      </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          India Property Show
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the best properties in India!
        </p>
        <div className="flex gap-4">
          <a
            href="/exhibitorregistration"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
