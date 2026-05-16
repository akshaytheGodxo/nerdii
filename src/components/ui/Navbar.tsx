import Link from "next/link";
import { Input } from "./Input";
import { Mail, Bell } from "lucide-react";
export default function Navbar() {
  return (
    <section className="px-4 grid grid-cols-3 items-center">
      <h1 className="text font-bold font-heading text-headline-xl">Nerdii</h1>

      <div className="flex gap-2 uppercase font-bold font-heading group">
        <Link
          href={""}
          className="group-active:bg-blue-600  group-active:border-2  px-2 py-1"
        >
          Browse
        </Link>
        <Link href={""}>Forums</Link>
        <Link href={""}>Users</Link>
        <Link href={""}>Archive</Link>
      </div>

      <div className="md:flex flex-row hidden gap-4">
        <Input className="font-heading" placeholder="SEARCH_PROJECTS..." />

        <button className="hover:text-primary cursor-pointer">
          <Mail />
        </button>

        <button className="hover:text-primary cursor-pointer">
          <Bell />
        </button>
      </div>
    </section>
  );
}
