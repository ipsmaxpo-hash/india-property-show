import Image, { StaticImageData } from 'next/image'
import Img1 from "@/app/images/events/dubai 2023.jpeg"
import Img2 from "@/app/images/events/Ksa may 2023.jpg"
import Img3 from "@/app/images/events/us.jpg"
import Img4 from '@/app/images/events/us.jpeg'
import Img5 from '@/app/images/events/us 2023.jpeg'
import Img6 from '@/app/images/events/dunai pic.jpeg'

interface Event {
  id: string
  name: string
  location: string
  image: string | StaticImageData
}

const events: Event[] = [
  {
    id: '1',
    name: 'India Property Show (Bahrain) 2024',
    location: 'At Downtown Rotana Manama',
    image: Img6,
  },
  {
    id: '2',
    name: 'India Property Show (Singapore)',
    location: 'At Pan Pacific',
    image: Img4,
  },
  {
    id: '3',
    name: 'India Property Show (Riyadh) 2024',
    location: 'At Crowne Plaza',
    image: Img2,
  },
  {
    id: '4',
    name: 'India Property Show (Dubai)',
    location: 'At Ritz- Carlton',
    image: Img1,
  },
  {
    id: '5',
    name: 'India Property Show (US) 2023',
    location: 'At Frisco & Santa-Clara',
    image: Img3,
  },
  {
    id: '6',
    name: 'India Property Show (US) 2023',
    location: 'At Frisco & Santa-Clara',
    image: Img5,
  },
]

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.name}
          layout="fill"
        //   objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.name}</h3>
        <p className="text-sm text-gray-600">{event.location}</p>
      </div>
    </div>
  )
}

const PopularExhibitions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Some Of Our Popular Exhibition Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularExhibitions

