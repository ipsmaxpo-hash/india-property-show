import React from "react";
import Image from "next/image";

// Sponsor logos
import platinumLogo1 from "@/app/images/sponsers/img (1).png";
import platinumLogo2 from "@/app/images/sponsers/img (10).png";
import goldLogo1 from "@/app/images/sponsers/img (11).png";
import goldLogo2 from "@/app/images/sponsers/img (12).png";
import silverLogo1 from "@/app/images/sponsers/img (13).png";
import silverLogo2 from "@/app/images/sponsers/img (14).png";

const OurSponsors: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          Our Sponsors
        </h2>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Platinum Sponsors</h3>
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <div className="flex items-center">
              <Image
                src={platinumLogo1}
                alt="Platinum Sponsor 1"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center">
              <Image
                src={platinumLogo2}
                alt="Platinum Sponsor 2"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gold Sponsors</h3>
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <div className="flex items-center">
              <Image
                src={goldLogo1}
                alt="Gold Sponsor 1"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center">
              <Image
                src={goldLogo2}
                alt="Gold Sponsor 2"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Silver Sponsors</h3>
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <div className="flex items-center">
              <Image
                src={silverLogo1}
                alt="Silver Sponsor 1"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center">
              <Image
                src={silverLogo2}
                alt="Silver Sponsor 2"
                className="max-h-24 object-contain mx-4"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
