import FeaturedNiche from "@/components/FeaturedNiche";
import PopularProjects from "@/components/PopularProjects";
export default function BrowsePage() {
  return (
    <section className="px-6">
      <FeaturedNiche />
      <PopularProjects />
    </section>
  );
}
