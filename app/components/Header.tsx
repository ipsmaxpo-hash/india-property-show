import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative">
      {/* Top Info Bar */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center text-sm">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <span className="block text-gray-600">OUR OFFICE</span>
                <span className="block text-gray-800">Dubai, Saudi Arabia, India</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <span className="block text-gray-600">EMAIL US</span>
                <span className="block text-gray-800">info@maxpo.ae</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <span className="block text-gray-600">CALL US</span>
                <span className="block text-gray-800">+91 98451 14655</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#040B1C] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/logo.png"
              alt="India Property Show"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-amber-500 transition-colors">HOME</Link>
            <Link href="/about" className="text-white hover:text-amber-500 transition-colors">ABOUT</Link>
            <Link href="/past-events" className="text-white hover:text-amber-500 transition-colors">PAST EVENTS</Link>
            <Link href="/testimonial" className="text-white hover:text-amber-500 transition-colors">TESTIMONIAL</Link>
            <Link href="/blogs" className="text-white hover:text-amber-500 transition-colors">BLOGS</Link>
            <Link href="/sponsors" className="text-white hover:text-amber-500 transition-colors">SPONSORS</Link>
            <Link href="/contact" className="text-white hover:text-amber-500 transition-colors">CONTACT US</Link>
            <Link 
              href="/register" 
              className="bg-amber-500 text-white px-6 py-2 rounded hover:bg-amber-600 transition-colors"
            >
              REGISTER HERE
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/exhibition-hall.jpg"
          alt="Exhibition Hall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
              LEADING THE FUTURE OF{' '}
              <span className="text-amber-500">INNOVATIVE</span>{' '}
              <span className="text-amber-500">EXHIBITIONS, DYNAMIC CONFERENCES</span>{' '}
              AND{' '}
              <span className="text-amber-500">MEMORABLE EXPERIENCES</span>
            </h1>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 space-y-4">
          <Link href="https://www.linkedin.com" className="block text-white hover:text-amber-500 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" className="block text-white hover:text-amber-500 transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" className="block text-white hover:text-amber-500 transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://youtube.com" className="block text-white hover:text-amber-500 transition-colors">
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}

