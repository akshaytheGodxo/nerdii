"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="border px-4 py-2 rounded"
    >
      Sign In with Google
    </button>
  );
}
