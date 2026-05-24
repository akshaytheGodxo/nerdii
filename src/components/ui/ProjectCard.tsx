"use client";
import { cn } from "@/lib/utils";
import type { Project, ProjectUpdate } from "../../../generated/prisma/client";
import { EllipsisVertical, MessageSquareText, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
type ProjectProps = {
  project: Project;
  updates: ProjectUpdate[];
};
export default function ProjectCard({ project, updates }: ProjectProps) {
  const router = useRouter();
  const colors = ["bg-lime-800", "bg-blue-700", "bg-gray-700"];
  const max = 2;
  const randomValue = Math.floor(Math.random() * max);
  const createdDate = project.createdAt;
  const latestUpdate = updates[0];
  const likes = 142;
  const comments = 28;
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
    <div
      className="shadow-hard border-2 border-on-surface hover:-translate-x-0.2"
      onClick={() => router.push(`/posts/${project.id}`)}
    >
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

        <div className="border-t-2 border-gray-300">
          <div className="mt-1 gap-4 flex flex-row">
            <label
              className="w-8 h-4 items-center flex justify-center gap-0.5 "
              htmlFor=""
            >
              <button className="text-xs hover:text-on-primary-fixed-variant cursor-pointer">
                <Heart className="" width={12} height={12} />
              </button>
              <span className="text-xs">{likes}</span>
            </label>
            <label
              className="w-8 h-4 items-center flex justify-center gap-0.5 "
              htmlFor=""
            >
              <button className="text-xs hover:text-on-primary-fixed-variant cursor-pointer">
                <MessageSquareText className="" width={12} height={12} />
              </button>
              <span className="text-xs">{comments}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
