import { cn } from "@/lib/utils";
import type { Project, ProjectUpdate } from "../../../generated/prisma/client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
type ProjectProps = {
  project: Project;
  updates: ProjectUpdate[];
};
export default function ProjectCard({ project, updates }: ProjectProps) {
  const colors = ["bg-lime-800", "bg-blue-700", "bg-gray-700"];
  const max = 2;
  const randomValue = Math.floor(Math.random() * max);
  const createdDate = project.createdAt;
  const latestUpdate = updates[0];
  function timeAgo(date: Date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  }
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

      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <div
            className={cn(
              "font-extrabold bg-lime-300 w-20 border-2 border-on-background uppercase items-center font-heading ",
            )}
          >
            <h1 className="text-center italic  font-black">{project.niche}</h1>
          </div>
          <span className="uppercase text-xs font-bold">
            {timeAgo(createdDate)}
          </span>
        </div>

        <div className="">
          <h3 className="text-base font-medium text-on-surface-variant">
            {latestUpdate?.content || "Update Posted"}
          </h3>
        </div>
      </div>
    </div>
  );
}
