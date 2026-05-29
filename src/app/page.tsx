import { redirect } from "next/navigation";
export default async function HomePage() {
  redirect("/browse");
  return <div className=""></div>;
}
