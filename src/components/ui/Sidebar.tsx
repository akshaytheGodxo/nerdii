"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  MessageSquare,
  Users,
  Archive,
  Settings,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import Button from "./Button";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "My Projects", href: "/my-projects", icon: MessageSquare },
  { name: "Niches", href: "/niches", icon: Users },
  { name: "Saved", href: "/saved", icon: Bookmark },
];

const latestProject = {
  name: "",
  version: "V.2.0.4",
  image: "/project_dummy.png",
  url: "",
};

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside
      className={cn(
        "min-h-full bg-surface-lowest border-r-2 border-on-surface flex flex-col transition-all duration-300 ease-in-out relative shrink-0",
        open ? "w-56" : "w-12",
      )}
    >
      <div
        className={cn(
          " border-b-2 border-on-surface flex items-center overflow-hidden shrink-0",
          open ? "min-h-10" : "h-10 justify-center",
        )}
      >
        {open ? (
          <div className="flex flex-col w-full p-3 gap-2">
            <div className="flex items-center gap-2">
              <div className="border-2 border-on-background shrink-0">
                <Image
                  src={latestProject.image}
                  height={36}
                  width={36}
                  alt="Project Image"
                  className="block"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-bold text-xl text-black text-label-caps uppercase whitespace-nowrap">
                  PROJECT_LOG
                </span>
                <a
                  href={latestProject.url}
                  className="text-blue-600 text-label-caps uppercase whitespace-nowrap hover:underline"
                >
                  {latestProject.version} · Online
                </a>
              </div>
            </div>

            <button className="w-full bg-on-primary-fixed-variant border-2 border-on-surface shadow-hard text-on-primary font-heading font-bold text-label-caps uppercase py-2 px-4  transition-colors hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              Post_Update
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <Image
              src={latestProject.image}
              height={24}
              width={24}
              alt="Project Image"
              className="block border-2 border-on-background shrink-0"
            />
          </div>
        )}
      </div>

      <nav className="flex flex-col flex-1 overflow-hidden">
        {NAV_LINKS.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "flex items-center gap-3 border-b-2 border-on-surface font-heading font-bold text-body-sm uppercase hover:bg-primary hover:text-on-primary transition-colors shrink-0",
              open ? "px-3 py-2.5" : "px-0 py-2.5 justify-center",
            )}
          >
            <Icon size={16} className="shrink-0" />
            {open && (
              <span className="whitespace-nowrap overflow-hidden">{name}</span>
            )}
          </Link>
        ))}
      </nav>

      <Link
        href="/settings"
        className={cn(
          "flex items-center gap-3 border-t-2 border-on-surface font-heading font-bold text-body-sm uppercase hover:bg-primary hover:text-on-primary transition-colors shrink-0",
          open ? "px-3 py-2.5" : "px-0 py-2.5 justify-center",
        )}
      >
        <Settings size={16} className="shrink-0" />
        {open && <span>Settings</span>}
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        className="absolute -right-[13px] top-1/2 -translate-y-1/2 w-6 h-6 bg-surface-lowest border-2 border-on-surface shadow-hard-sm flex items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary z-10"
      >
        {open ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
      </button>
    </aside>
  );
}
