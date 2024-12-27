// import BecomeASponsor from "../components/sponsors/BecomeASponsor";
import HeroSection from "../components/sponsors/HeroSection";
import Introduction from "../components/sponsors/Introduction";
// import OurSponsors from "../components/sponsors/OurSponsors";
import Sponsors from "../components/sponsors/Sponsors";
// import SubscriptionCTA from "../components/sponsors/SubscriptionCTA";


export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
      <HeroSection />
      <Introduction />
      {/* <OurSponsors /> */}
      <Sponsors />
      {/* <BecomeASponsor /> */}
      {/* <SubscriptionCTA /> */}
      </main>
    )
  }