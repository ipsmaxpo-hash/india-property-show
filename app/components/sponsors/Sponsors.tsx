import React from "react";
import Image from "next/image";
// Import all sponsor images statically
import Img1 from "@/app/images/sponsers/img (1).png";
import Img2 from "@/app/images/sponsers/img (2).png";
import Img3 from "@/app/images/sponsers/img (3).png";
import Img4 from "@/app/images/sponsers/img (4).png";
import Img5 from "@/app/images/sponsers/img (5).png";
import Img6 from "@/app/images/sponsers/img (6).png";
import Img7 from "@/app/images/sponsers/img (7).png";
import Img8 from "@/app/images/sponsers/img (8).png";
import Img9 from "@/app/images/sponsers/img (9).png";
import Img10 from "@/app/images/sponsers/img (10).png";
import Img11 from "@/app/images/sponsers/img (11).png";
import Img12 from "@/app/images/sponsers/img (12).png";
import Img13 from "@/app/images/sponsers/img (13).png";
import Img14 from "@/app/images/sponsers/img (14).png";
import Img15 from "@/app/images/sponsers/img (15).png";
import Img16 from "@/app/images/sponsers/img (16).png";
import Img17 from "@/app/images/sponsers/img (17).png";
import Img18 from "@/app/images/sponsers/img (18).png";
import Img19 from "@/app/images/sponsers/img (19).png";
// import Img20 from "@/app/images/sponsers/img (20).png";
import Img21 from "@/app/images/sponsers/img (21).png";
import Img22 from "@/app/images/sponsers/img (22).png";
import Img23 from "@/app/images/sponsers/img (23).png";
import Img24 from "@/app/images/sponsers/img (24).png";
import Img25 from "@/app/images/sponsers/img (25).png";
import Img26 from "@/app/images/sponsers/img (26).png";
import Img27 from "@/app/images/sponsers/img (27).png";
import Img28 from "@/app/images/sponsers/img (28).png";
import Img29 from "@/app/images/sponsers/img (29).png";
import Img30 from "@/app/images/sponsers/img (30).png";
import Img31 from "@/app/images/sponsers/img (31).png";
import Img32 from "@/app/images/sponsers/img (32).png";
import Img33 from "@/app/images/sponsers/img (33).png";
import Img34 from "@/app/images/sponsers/img (34).png";
import Img35 from "@/app/images/sponsers/img (35).png";
import Img36 from "@/app/images/sponsers/img (36).png";
import Img37 from "@/app/images/sponsers/img (37).png";
import Img38 from "@/app/images/sponsers/img (38).png";
import Img39 from "@/app/images/sponsers/img (39).png";
import Img40 from "@/app/images/sponsers/img (40).png";
import Img41 from "@/app/images/sponsers/img (41).png";
import Img42 from "@/app/images/sponsers/img (42).png";
import Img43 from "@/app/images/sponsers/img (43).png";
import Img44 from "@/app/images/sponsers/img (44).png";
import Img45 from "@/app/images/sponsers/img (45).png";
import Img46 from "@/app/images/sponsers/img (46).png";
import Img47 from "@/app/images/sponsers/img (47).png";
import Img48 from "@/app/images/sponsers/img (48).png";
import Img49 from "@/app/images/sponsers/img (49).png";
import Img50 from "@/app/images/sponsers/img (50).png";

// Create an array of sponsor images
const sponsorImages = [
  { name: "Sponsor 1", src: Img1 },
  { name: "Sponsor 2", src: Img2 },
  { name: "Sponsor 3", src: Img3 },
  { name: "Sponsor 4", src: Img4 },
  { name: "Sponsor 5", src: Img5 },
  { name: "Sponsor 6", src: Img6 },
  { name: "Sponsor 7", src: Img7 },
  { name: "Sponsor 8", src: Img8 },
  { name: "Sponsor 9", src: Img9 },
  { name: "Sponsor 10", src: Img10 },
  { name: "Sponsor 11", src: Img11 },
  { name: "Sponsor 12", src: Img12 },
  { name: "Sponsor 13", src: Img13 },
  { name: "Sponsor 14", src: Img14 },
  { name: "Sponsor 15", src: Img15 },
  { name: "Sponsor 16", src: Img16 },
  { name: "Sponsor 17", src: Img17 },
  { name: "Sponsor 18", src: Img18 },
  { name: "Sponsor 19", src: Img19 },
//   { name: "Sponsor 20", src: Img20 },
  { name: "Sponsor 21", src: Img21 },
  { name: "Sponsor 22", src: Img22 },
  { name: "Sponsor 23", src: Img23 },
  { name: "Sponsor 24", src: Img24 },
  { name: "Sponsor 25", src: Img25 },
  { name: "Sponsor 26", src: Img26 },
  { name: "Sponsor 27", src: Img27 },
  { name: "Sponsor 28", src: Img28 },
  { name: "Sponsor 29", src: Img29 },
  { name: "Sponsor 30", src: Img30 },
  { name: "Sponsor 31", src: Img31 },
  { name: "Sponsor 32", src: Img32 },
  { name: "Sponsor 33", src: Img33 },
  { name: "Sponsor 34", src: Img34 },
  { name: "Sponsor 35", src: Img35 },
  { name: "Sponsor 36", src: Img36 },
  { name: "Sponsor 37", src: Img37 },
  { name: "Sponsor 38", src: Img38 },
  { name: "Sponsor 39", src: Img39 },
  { name: "Sponsor 40", src: Img40 },
  { name: "Sponsor 41", src: Img41 },
  { name: "Sponsor 42", src: Img42 },
  { name: "Sponsor 43", src: Img43 },
  { name: "Sponsor 44", src: Img44 },
  { name: "Sponsor 45", src: Img45 },
  { name: "Sponsor 46", src: Img46 },
  { name: "Sponsor 47", src: Img47 },
  { name: "Sponsor 48", src: Img48 },
  { name: "Sponsor 49", src: Img49 },
  { name: "Sponsor 50", src: Img50 },
];

const Sponsors: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Esteemed Sponsors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsorImages.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={sponsor.src.src} // Use .src for imported images in Next.js
                alt={sponsor.name}
                className="max-w-full h-auto object-contain transition transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
