import Image, { StaticImageData } from 'next/image'
import Img1 from '@/app/images/team/inayat.png'
import Img2 from '@/app/images/team/zia.png'
import Img3 from '@/app/images/team/anu.jpg'

interface TeamMember {
  name: string
  position: string
  image: string | StaticImageData
}

const teamMembers: TeamMember[] = [
  {
    name: 'Inayat Sait',
    position: 'CMD',
    image: Img1,
  },
  {
    name: 'Zia Sait',
    position: 'MD & Co-Founder',
    image: Img2,
  },
  {
    name: 'Annu Muddusetti',
    position: 'International Sales Director',
    image: Img3,
  },
]

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-md text-gray-600">{member.position}</p>
    </div>
  )
}

const ManagementTeam: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          We Have Professional & Expert Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManagementTeam

