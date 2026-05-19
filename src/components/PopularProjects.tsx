import prisma from "@/lib/prisma";
import ProjectCard from "./ui/ProjectCard";
export default async function PopularProjects() {
  const projects = await prisma.project.findMany();
  console.log(projects);
  return (
    <section>
      {projects.map((item) => (
        <ProjectCard project={item} key={item.id} />
      ))}
    </section>
  );
}
