import Image from 'next/image'
import Img from '@/app/images/edu-fsir 2023.jpeg'

const MaxpoExhibitions = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              We are the Leader in Exhibition Industry
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600">
              India Property Show
            </h2>
            <p className="text-lg text-gray-600">
              Elevating Businesses Globally, Where Opportunities Meet Excellence.
            </p>
            <p className="text-gray-700">
              Maxpo Exhibitions Private Limited orchestrates success through expertly curated trade shows, providing a strategic gateway to global business growth. Elevate your brand, forge meaningful connections, and seize opportunities in the dynamic landscape of international markets.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['EXHIBITIONS', 'CONFERENCES', 'SPECIAL EVENTS', 'AWARDS AND RECOGNITION', 'ACCREDITATIONS', 'TRADE SHOWS'].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              We Are Crafting Success Through Tailored Experiences. Elevate your brand with our professionally managed exhibitions, transformative conferences, and unforgettable special events. Choose Maxpo Exhibitions Private Limited for unmatched expertise in organizing award-worthy ceremonies and securing event accreditations worldwide.
            </p>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={Img}
              alt="Maxpo Exhibitions showcase"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaxpoExhibitions

