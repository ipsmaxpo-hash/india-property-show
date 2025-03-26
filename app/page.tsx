// import Image from 'next/image'
// import Link from 'next/link'
// import Header from '@/app/components/Header'
// import HeroCarousel from '@/app/components/HeroCarousel'
// import UpcomingEvents from './components/UpcomingEvents'
// import About from './components/About'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

// import EventHighlights from "./components/EventHighlites";
import FeaturedSponsors from "./components/FeaturedSponsors";
// import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import ManagementTeam from "./components/ManagementTeam";
// import KeyCategories from "./components/KeyCategories";
import MaxpoExhibitions from "./components/MaxpoExhibitions";
import PopularExhibitions from "./components/PopularExhibitions";
import Testimonials from "./components/Testimonials"
import MultipleEventCountdown from "./components/UpcomingEvent";
// import UpcomingEventCountdown from "./components/UpcomingEvent";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <EventHighlights /> */}
      {/* <UpcomingEventCountdown /> */}
      <MultipleEventCountdown />
      <MaxpoExhibitions />
      <PopularExhibitions />
      {/* <KeyCategories /> */}
      <FeaturedSponsors />
      {/* <ManagementTeam /> */}
      <Testimonials />
     
      {/* <Header /> */}
      {/* <HeroCarousel /> */}
      {/* <UpcomingEvents />
      <About />
      <Services />
      <Testimonials />
      <Footer /> */}
    </main>
  )
}

