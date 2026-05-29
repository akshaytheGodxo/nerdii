import prisma from "@/lib/prisma";
import ProjectCard from "./ui/ProjectCard";
import Button from "./ui/Button";
export default async function PopularProjects() {
  const projects = await prisma.project.findMany({
    include: {
      updates: true,
    },
  });
  console.log(projects);
  return (
    <section className="flex flex-col gap-9">
      <div className="border-b-3 border-on-background flex flex-row justify-between items-center py-2">
        <h1 className="uppercase font-normal text-base text-black font-heading">
          recent_uploads
        </h1>
        <div className="gap-4 font-heading">
          <Button className="bg-black text-white hover:text-black">
            SORT: CHRONO
          </Button>
          <Button className="uppercase">Filter</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-2 grid-cols-1 items-start">
        {projects.map((item) => (
          <ProjectCard project={item} key={item.id} updates={item.updates} />
        ))}
      </div>
    </section>
  );
}
