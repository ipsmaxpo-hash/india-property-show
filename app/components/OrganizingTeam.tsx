"use client";

import React from "react";
import Image from "next/image";

// Team Data
const teamMembers = [
  {
    name: "John Doe",
    title: "Event Director",
    bio: "Leading the team with over 10 years of experience in organizing world-class events.",
    photo: "/images/team/john.jpg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Head",
    bio: "Crafting effective marketing strategies to make every event a grand success.",
    photo: "/images/team/jane.jpg",
  },
  {
    name: "Michael Lee",
    title: "Operations Manager",
    bio: "Ensuring smooth and seamless execution of all event operations.",
    photo: "/images/team/michael.jpg",
  },
  {
    name: "Sophia Brown",
    title: "Design Lead",
    bio: "Creating visually stunning designs for a memorable event experience.",
    photo: "/images/team/sophia.jpg",
  },
];

const OrganizingTeam: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          Meet Our Organizing Team
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          The talented professionals behind the success of our events.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingTeam;
