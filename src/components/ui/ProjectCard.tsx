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
  const randomValue = Math.floor(Math.random() * colors.length);
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
      if (count >= 1)
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
    return "just now";
  }

  return (
    <div
      className="shadow-hard border-2 border-on-surface flex flex-col cursor-pointer hover:-translate-x-0.5 transition-transform"
      onClick={() => router.push(`/posts/${project.id}`)}
    >
      {/* Header */}
      <div
        className={cn(
          "w-full h-12 flex items-center px-3 justify-between shrink-0",
          colors[randomValue],
        )}
      >
        <h1 className="font-bold uppercase text-white font-heading truncate pr-2">
          {project.projectName}
        </h1>
        <button
          className="bg-transparent shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <EllipsisVertical className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Image — locked to 16:9, cropped to fill */}
      <div className="relative w-full h-44 border-t-2 border-b-2 border-on-surface overflow-hidden shrink-0">
        <Image
          src={project.imageUrl!}
          alt="Project Image"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Body — flex-col so footer always pins to bottom */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Niche badge + timestamp — both on same baseline */}
        <div className="flex justify-between items-start gap-3">
          {/* Badge: auto-width, no fixed w-, wraps text fully */}
          <div className="border-2 border-on-background bg-lime-300 px-1.5 py-0.5 shrink-0 max-w-[60%]">
            <span className="block italic font-black font-heading uppercase text-xs leading-tight break-words text-center">
              {project.niche}
            </span>
          </div>
          <span className="uppercase text-xs font-bold whitespace-nowrap mt-0.5">
            {timeAgo(project.createdAt)}
          </span>
        </div>

        {/* Update text — clamp to 2 lines so height is predictable */}
        <p className="text-base font-medium text-on-surface-variant line-clamp-2 flex-1">
          {latestUpdate?.content || "Update Posted"}
        </p>

        {/* Likes / comments — always at bottom */}
        <div className="border-t-2 border-gray-300 pt-2 flex flex-row gap-4">
          <label className="flex items-center gap-1">
            <button
              className="hover:text-on-primary-fixed-variant cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart width={12} height={12} />
            </button>
            <span className="text-xs">{likes}</span>
          </label>
          <label className="flex items-center gap-1">
            <button
              className="hover:text-on-primary-fixed-variant cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <MessageSquareText width={12} height={12} />
            </button>
            <span className="text-xs">{comments}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
