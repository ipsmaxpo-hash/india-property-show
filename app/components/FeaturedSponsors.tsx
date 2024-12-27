"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Img1 from '@/app/images/sponsers/img (1).png'
import Img2 from '@/app/images/sponsers/img (2).png'
import Img3 from '@/app/images/sponsers/img (3).png'
import Img4 from '@/app/images/sponsers/img (4).png'
import Img5 from '@/app/images/sponsers/img (5).png'
import Img6 from '@/app/images/sponsers/img (6).png'
import Img7 from '@/app/images/sponsers/img (7).png'
import Img8 from '@/app/images/sponsers/img (8).png'
import Img9 from '@/app/images/sponsers/img (9).png'
import Img10 from '@/app/images/sponsers/img (10).png'

const FeaturedSponsors: React.FC = () => {
  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Featured Sponsors</h2>
        <p className="text-lg mb-8">
          A huge thank you to our incredible sponsors who are making this event
          a success!
        </p>

        {/* Grid layout for sponsor logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
          {/* Sponsor 1 */}
          <div className="flex justify-center">
            <Image
              src={Img1}
              alt="Sponsor 1"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex justify-center">
            <Image
              src={Img2}
              alt="Sponsor 2"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex justify-center">
            <Image
              src={Img3}
              alt="Sponsor 3"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>

          {/* Sponsor 4 */}
          <div className="flex justify-center">
            <Image
              src={Img4}
              alt="Sponsor 4"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>

          {/* Sponsor 5 */}
          <div className="flex justify-center">
            <Image
              src={Img5}
              alt="Sponsor 5"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Img6}
              alt="Sponsor 6"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Img7}
              alt="Sponsor 7"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Img8}
              alt="Sponsor 8"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Img9}
              alt="Sponsor 9"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Img10}
              alt="Sponsor 10"
              className="max-h-24 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </div>
        </div>

        {/* View More button */}
        <Link href="sponsors" className="inline-block bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          View More Sponsors
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSponsors;

