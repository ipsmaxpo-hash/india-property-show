import Image from 'next/image';
import Img from '@/app/images/edu-fsir 2023.jpeg';

const MaxpoExhibitions = () => {
  const items = [
    'EXHIBITIONS',
    'CONFERENCES',
    'SPECIAL EVENTS',
    'AWARDS & RECOGNITION',
    'ACCREDITATIONS',
    'TRADE SHOWS',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Card with Classic Look */}
          <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Leading the Exhibition Industry with Excellence
            </h1>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-3">
              India Property Show
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Elevating Businesses Globally, Where Opportunities Meet Excellence.
            </p>
            <p className="text-gray-600 mt-4">
              Maxpo Exhibitions Private Limited crafts success through premium trade shows, 
              offering a strategic gateway to global business expansion. Elevate your brand, 
              forge meaningful connections, and seize unparalleled opportunities in international markets.
            </p>

            {/* Classic Styled Grid with Hover Effects */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg border border-gray-300 text-center 
                  transition-transform duration-300 ease-in-out transform hover:scale-105 
                  hover:bg-gray-200 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mt-6">
              Experience tailored excellence with our world-class exhibitions, transformative 
              conferences, and prestigious special events. Trust Maxpo Exhibitions Private 
              Limited for industry-leading expertise in global event management.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative h-[550px] rounded-lg overflow-hidden shadow-lg">
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
  );
};

export default MaxpoExhibitions;
