"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import all images manually
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
import Img11 from '@/app/images/sponsers/img (11).png'
import Img12 from '@/app/images/sponsers/img (12).png'
import Img13 from '@/app/images/sponsers/img (13).png'
import Img14 from '@/app/images/sponsers/img (14).png'
import Img15 from '@/app/images/sponsers/img (15).png'
import Img16 from '@/app/images/sponsers/img (16).png'
import Img17 from '@/app/images/sponsers/img (17).png'
import Img18 from '@/app/images/sponsers/img (18).png'
import Img19 from '@/app/images/sponsers/img (19).png'
import Img21 from '@/app/images/sponsers/img (21).png'
import Img22 from '@/app/images/sponsers/img (22).png'
import Img23 from '@/app/images/sponsers/img (23).png'
import Img24 from '@/app/images/sponsers/img (24).png'
import Img25 from '@/app/images/sponsers/img (25).png'
import Img26 from '@/app/images/sponsers/img (26).png'
import Img27 from '@/app/images/sponsers/img (27).png'
import Img28 from '@/app/images/sponsers/img (28).png'
import Img29 from '@/app/images/sponsers/img (29).png'
import Img30 from '@/app/images/sponsers/img (30).png'
import Img31 from '@/app/images/sponsers/img (31).png'
import Img32 from '@/app/images/sponsers/img (32).png'
import Img33 from '@/app/images/sponsers/img (33).png'
import Img34 from '@/app/images/sponsers/img (34).png'
import Img35 from '@/app/images/sponsers/img (35).png'
import Img36 from '@/app/images/sponsers/img (36).png'
import Img37 from '@/app/images/sponsers/img (37).png'
import Img38 from '@/app/images/sponsers/img (38).png'
import Img39 from '@/app/images/sponsers/img (39).png'
import Img40 from '@/app/images/sponsers/img (40).png'
import Img41 from '@/app/images/sponsers/img (41).png'
import Img42 from '@/app/images/sponsers/img (42).png'
import Img43 from '@/app/images/sponsers/img (43).png'
import Img44 from '@/app/images/sponsers/img (44).png'
import Img45 from '@/app/images/sponsers/img (45).png'
import Img46 from '@/app/images/sponsers/img (46).png'
import Img47 from '@/app/images/sponsers/img (47).png'
import Img48 from '@/app/images/sponsers/img (48).png'
import Img49 from '@/app/images/sponsers/img (49).png'
import Img50 from '@/app/images/sponsers/img (50).png'
import Img51 from '@/app/images/sponsers/img (51).png'

// Store all imported images in an array
const sponsors = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
  Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19,
  Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30,
  Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40,
  Img41, Img42, Img43, Img44, Img45, Img46, Img47, Img48, Img49, Img50,
  Img51
];

// Split sponsors into two rows
const sponsorsRow1 = sponsors.slice(0, 26);
const sponsorsRow2 = sponsors.slice(26, 51);

const FeaturedSponsors: React.FC = () => {
  return (
    <section className="bg-gray-800 py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Featured Sponsors</h2>
        <p className="text-lg mb-8">
          A huge thank you to our incredible sponsors who are making this event a success!
        </p>

        {/* Moving Sponsor Rows */}
        <div className="space-y-6">
          {/* Top Row (Left to Right) */}
          <div className="relative flex w-full overflow-hidden group">
            <div className="flex min-w-full animate-scroll-left group-hover:paused">
              {sponsorsRow1.concat(sponsorsRow1).map((img, index) => (
                <div key={`top-${index}`} className="flex justify-center min-w-[150px] px-4">
                  <Image src={img} alt={`Sponsor ${index + 1}`} className="max-h-24 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row (Right to Left) */}
          <div className="relative flex w-full overflow-hidden group">
            <div className="flex min-w-full animate-scroll-right group-hover:paused">
              {sponsorsRow2.concat(sponsorsRow2).map((img, index) => (
                <div key={`bottom-${index}`} className="flex justify-center min-w-[150px] px-4">
                  <Image src={img} alt={`Sponsor ${index + 26}`} className="max-h-24 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More button */}
        <Link href="sponsors" className="inline-block bg-white text-gray-800 px-6 py-3 mt-8 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          View More Sponsors
        </Link>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          animation: scroll-right 30s linear infinite;
        }
        .group:hover .animate-scroll-left,
        .group:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FeaturedSponsors;
