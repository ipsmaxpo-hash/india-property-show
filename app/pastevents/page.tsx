import EventHighlights from "../components/EventHighlites";
// import Testimonials from "../components/Eventtestimonials";
import EventVideos from "../components/EventVideos";
import Introduction from "../components/Introductionofpastevents";
import PastEvents from "../components/PastEvents";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
       <PastEvents />
       <Introduction />
       <EventHighlights />
       <EventVideos />
       {/* <Testimonials /> */}
      </main>
    )
  }