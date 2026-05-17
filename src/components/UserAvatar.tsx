"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import Button from "./ui/Button";
import Image from "next/image";
import { useState } from "react";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function UserAvatar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!session) {
    return (
      <Button
        className="uppercase font-bold font-heading"
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    );
  }

  const username = session.user?.name ?? "User";
  const image = session.user?.image;
  const initials = username.slice(0, 2).toUpperCase();

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setDropdownOpen((v) => !v)}
        className="border-2 border-on-surface shadow-hard-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-none"
      >
        {image ? (
          <img
            src={image}
            alt={username}
            width={32}
            height={32}
            className="block"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-8 h-8 bg-primary text-on-primary font-heading font-bold text-body-sm flex items-center justify-center">
            {initials}
          </div>
        )}
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <>
          {/* Click outside to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setDropdownOpen(false)}
          />

          <div className="absolute right-0 top-[calc(100%+6px)] w-48 border-2 border-on-surface shadow-hard bg-surface-lowest z-50">
            {/* Title bar */}
            <div className="bg-primary px-3 py-1 border-b-2 border-on-surface">
              <p className="font-heading font-bold text-on-primary text-label-caps uppercase truncate">
                {username}
              </p>
              {session.user?.email && (
                <p className="text-on-primary-container text-body-sm truncate">
                  {session.user.email}
                </p>
              )}
            </div>

            {/* Items */}
            <Link
              href={`/profile/${username}`}
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-2 px-3 py-2 border-b-2 border-on-surface font-heading font-bold text-body-sm uppercase hover:bg-primary hover:text-on-primary"
            >
              <User size={14} />
              Profile
            </Link>

            <button
              onClick={() => signOut()}
              className="w-full flex items-center gap-2 px-3 py-2 font-heading font-bold text-body-sm uppercase hover:bg-error hover:text-on-error cursor-pointer"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
