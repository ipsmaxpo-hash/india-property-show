import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import ContactUsHeroSection from "../components/contact/ContactUsHeroSection";
import EventLocation from "../components/contact/EventLocation";
import SocialMediaLinks from "../components/contact/SocialMediaLinks";



export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
       <ContactUsHeroSection />
       <ContactForm />
       <EventLocation />
       <ContactDetails />
       <SocialMediaLinks />
      </main>
    )
  }