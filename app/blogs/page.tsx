import BlogList from "../components/blogs/BlogList";
import BlogsHero from "../components/blogs/BlogsHero";
import BlogsIntroduction from "../components/blogs/BlogsIntroduction";
import CategoriesTags from "../components/blogs/CategoriesTags";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs";
import SubscriptionCTA from "../components/blogs/SubscriptionCTA";


export default function Home() {
    return (
      <main className="flex min-h-screen flex-col">
      <BlogsHero />
      <BlogsIntroduction />
      <FeaturedBlogs />
      <BlogList />
      <CategoriesTags />
      <SubscriptionCTA />
      </main>
    )
  }