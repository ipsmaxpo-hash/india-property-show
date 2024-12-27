import FeaturedTestimonials from "../components/FeaturedTestimonials";
import MasonryTestimonials from "../components/MasonryTestimonials";
import SubmitTestimonialForm from "../components/SubmitTestimonialForm";
import TestimonialHero from "../components/TestimonialHero";
import TestimonialIntroduction from "../components/TestimonialIntroduction";


export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
      <TestimonialHero />
      <TestimonialIntroduction />
      <FeaturedTestimonials />
      <MasonryTestimonials />
      <SubmitTestimonialForm />
      </main>
    )
  }