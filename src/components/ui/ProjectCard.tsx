import { cn } from "@/lib/utils";
import type { Project } from "../../../generated/prisma/client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
type ProjectProps = {
  project: Project;
};
export default function ProjectCard({ project }: ProjectProps) {
  const colors = ["bg-lime-800", "bg-blue-700", "bg-gray-700"];
  const max = 2;
  const randomValue = Math.floor(Math.random() * max);
  return (
    <div className="shadow-hard border-2 border-on-surface hover:-translate-x-0.2">
      <div
        className={cn(
          "w-full h-12 items-center px-2 flex justify-between",
          colors[randomValue],
        )}
      >
        <h1 className="font-bold uppercase text-white font-heading">
          {project.projectName}
        </h1>
        <button className="bg-transparent items-center justify-center w-4 h-4">
          <EllipsisVertical className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Image section */}
      <div className="border-t-2 border-b-2 border-on-surface">
        <Image
          src={project.imageUrl!}
          alt="Project Image"
          width={294}
          height={162}
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <div
            className={cn(
              "italic font-extrabold bg-lime-300 w-20 border-2 border-on-background uppercase items-center font-heading ",
            )}
          >
            <h1 className="text-center">{project.niche}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
