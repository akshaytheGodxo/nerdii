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
  { name: "Settings", href: "/settings", icon: Settings },
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
        "bg-surface-lowest border-on-surface flex transition-all duration-300 ease-in-out z-50",

        "fixed bottom-0 left-0 w-full h-16 border-t-2 flex-row z-40",

        "md:relative md:min-h-screen md:h-screen md:border-t-0 md:border-r-2 md:flex-col md:shrink-0",
        open ? "md:w-56" : "md:w-12",
      )}
    >
      <div
        className={cn(
          " border-b-2 border-on-surface hidden md:flex items-center overflow-hidden shrink-0",
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

      <nav
        className={cn(
          "flex flex-1 overflow-hidden",

          // mobile
          "flex-row items-center justify-around",

          // desktop
          "md:flex-col md:items-stretch md:justify-start",
        )}
      >
        {NAV_LINKS.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "flex items-center font-heading font-bold uppercase hover:bg-primary hover:text-on-primary transition-colors",

              // mobile
              "flex-col justify-center gap-1 text-[10px] flex-1 h-full",

              // desktop
              "md:flex-row md:gap-3 md:border-b-2 md:border-on-surface md:text-body-sm md:flex-none md:h-auto",
              open
                ? "md:px-3 md:py-2.5"
                : "md:px-0 md:py-2.5 md:justify-center",
            )}
          >
            <Icon size={18} className="shrink-0" />

            {/* mobile always visible */}
            <span className={cn("md:hidden text-[10px]", "whitespace-nowrap")}>
              {name}
            </span>

            {/* desktop only when open */}
            {open && (
              <span className="hidden md:block whitespace-nowrap overflow-hidden">
                {name}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden md:flex absolute -right-[13px] top-1/2 -translate-y-1/2 w-6 h-6 bg-surface-lowest border-2 border-on-surface shadow-hard-sm items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary z-10"
      >
        {open ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
      </button>
    </aside>
  );
}
