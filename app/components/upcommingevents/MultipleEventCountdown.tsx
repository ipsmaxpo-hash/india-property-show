'use client'

import React from "react"
import EventCard from "./EventCard"
import img1 from '@/app/images/upcomming/1x.jpg'
import img2 from '@/app/images/upcomming/usa.jpg'

const events = [
  {
    id: "1",
    name: "India Property Show",
    location: "At King Faisal Road - Manama, Bahrain",
    date: "21st - 22nd February 2025",
    eventDate: new Date("2025-02-21T00:00:00"),
    image: img1,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
    floorPlanUrl: "#floorplan",
    brochureUrl: "#brochure",
  },
  {
    id: "2",
    name: "India Property Show",
    location: "At King Faisal Road - Manama, Bahrain",
    date: "21st - 22nd February 2025",
    eventDate: new Date("2025-02-21T00:00:00"),
    image: img2,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
    floorPlanUrl: "#floorplan",
    brochureUrl: "#brochure",
  },
]

const MultipleEventCountdown: React.FC = () => {
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MultipleEventCountdown

