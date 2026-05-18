"use client";
import { useState } from "react";
import Link from "next/link";
import { UserAvatar } from "../UserAvatar";
import { Input } from "./Input";
import { Mail, Bell, Menu, X } from "lucide-react";
const NAV_LINKS = ["browse", "forums", "users", "archive"];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-30 bg-surface-lowest border-b-2 border-on-surface">
      <section className="px-4 h-14 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <h1 className="font-heading font-bold text-headline-md tracking-tight border-2 border-on-surface shadow-hard px-2 py-0.5 flex items-center gap-1">
          <span className="text-primary">{">"}</span>
          Nerdii
          <span className="text-primary animate-pulse">_</span>
        </h1>

        <nav className="hidden md:flex gap-0 uppercase font-bold font-heading text-body-md">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={item}
              className="px-3 py-1 border-2 border-transparent hover:border-on-surface hover:shadow-hard-sm hover:bg-surface-low transition-none"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 justify-end">
          <Input
            className="font-heading text-body-sm w-48"
            placeholder="SEARCH_PROJECTS..."
          />
          <button className="p-1 border-2 border-transparent hover:border-on-surface hover:shadow-hard-sm cursor-pointer transition-none">
            <Mail size={18} />
          </button>
          <button className="p-1 border-2 border-transparent hover:border-on-surface hover:shadow-hard-sm cursor-pointer transition-none">
            <Bell size={18} />
          </button>
          <UserAvatar />
        </div>

        {/* Mobile  */}
        <button
          className="md:hidden cursor-pointer w-fit h-fit ml-auto p-1 border-2 border-on-surface shadow-hard-sm"
          onClick={() => setIsNavOpen(true)}
        >
          <Menu size={20} />
        </button>
      </section>

      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsNavOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-60 bg-surface-lowest border-l-2 border-on-surface z-50 transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-primary border-b-2 border-on-surface">
          <span className="font-heading font-bold text-on-primary uppercase text-body-md">
            Menu
          </span>
          <button
            onClick={() => setIsNavOpen(false)}
            className="text-on-primary cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col font-heading font-bold uppercase">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href=""
              onClick={() => setIsNavOpen(false)}
              className="px-4 py-3 border-b-2 border-on-surface hover:bg-primary hover:text-on-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="p-4 flex gap-3 border-t-2 border-on-surface absolute bottom-0 w-full">
          <button className="hover:text-primary cursor-pointer">
            <Mail />
          </button>
          <button className="hover:text-primary cursor-pointer">
            <Bell />
          </button>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
