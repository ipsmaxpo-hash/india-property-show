import CTASection from "../components/register/CTASection";
// import EventDetails from "../components/register/EventDetails";
// import FAQSection from "../components/register/FAQSection";
import HeroSection from "../components/register/HeroSection";
import { RegistrationForms } from "../components/register/RegistrationForm";
// import RegistrationForms from "../components/register/RegistrationForm";



export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
      <HeroSection />
      {/* <EventDetails /> */}
      <RegistrationForms />
      {/* <FAQSection /> */}
      <CTASection />
      </main>
    )
  }