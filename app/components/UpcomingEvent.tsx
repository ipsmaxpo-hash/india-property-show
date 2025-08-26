'use client';

import React from "react";
import Countdown from "react-countdown";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import singapore from '@/public/images/singapore-ips.jpg';
import dubai from '@/public/images/dubai-ips.jpg';

interface Event {
  id: string;
  name: string;
  location: string;
  date: string;
  eventDate: Date;
  image: string | StaticImageData;
  link: string;
  logo: string;
}

const events: Event[] = [
  {
    id: "1",
    name: "Gulf News presents India Property Show ",
    location:
      "Singapore",
    date: "15-16 November 2025",
    eventDate: new Date("2025-11-17T00:00:00"),
    image: singapore,
    link: "",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    name: "Gulf News presents India Edu-Fair",
    location: "Dubai",
    date: "06-07 December 2025",
    eventDate: new Date("2025-12-17T00:00:00"),
    image: dubai,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[640px] w-96">
      {/* Image */}
      <div className="relative w-full h-72">
        <Link href={event.link}>
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title with clamp */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">
          {event.name}
        </h3>

        <div className="text-gray-600 text-sm mb-3 flex items-start gap-2 line-clamp-2">
          <FaMapMarkerAlt className="text-blue-600 mt-1" />
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              event.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {event.location}
          </Link>
        </div>

        <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-gray-700" />
          {event.date}
        </p>

        {/* Countdown */}
        <Countdown
          date={event.eventDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="bg-blue-50 rounded-md p-2">
                <div className="text-lg font-bold text-blue-600">{days}</div>
                <div className="text-xs text-blue-600">Days</div>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <div className="text-lg font-bold text-blue-600">{hours}</div>
                <div className="text-xs text-blue-600">Hours</div>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <div className="text-lg font-bold text-blue-600">{minutes}</div>
                <div className="text-xs text-blue-600">Mins</div>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <div className="text-lg font-bold text-blue-600">{seconds}</div>
                <div className="text-xs text-blue-600">Secs</div>
              </div>
            </div>
          )}
        />

        {/* Button pinned at bottom ...ssss...*/}
        <div className="mt-auto">
          <a
            href="/exhibitorregistration"
            className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

const MultipleEventCountdown: React.FC = () => {
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Upcoming Events</h2>

        {/* Centered layout */}
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleEventCountdown;

















//   {
  //   id: "1",
  //   name: "Gulf News presents India Property Show",
  //   location: "Millennium Plaza Downtown Hotel, Sheikh Zayed Road - Dubai (Formerly known as Crowne Plaza Hotel)",
  //   date: "17-18 May 2025",
  //   eventDate: new Date("2025-05-17T00:00:00"),
  //   image: img1,
  //   link: "https://bahrain-maxpo-exhibitions.vercel.app/",
  //   logo: "/placeholder.svg?height=100&width=200",
  // },
