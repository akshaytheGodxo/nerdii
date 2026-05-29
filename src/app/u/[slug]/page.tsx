import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UserProfile({ params }: Props) {
  const { slug } = await params;

  const user = await prisma.user.findUnique({
    where: {
      username: slug,
    },

    include: {
      projects: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* PROFILE HEADER */}

        <section className="overflow-hidden border-2 border-black bg-white shadow-hard">
          {/* COVER */}

          <div className="relative h-56 border-b-2 border-black bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.06)_3px,rgba(0,0,0,0.06)_6px)]">
            <div className="absolute -bottom-16 left-8 h-32 w-32 overflow-hidden border-2 border-black bg-white p-1 shadow-hard">
              <img
                src={user.image || "https://ui-avatars.com/api/?name=User"}
                alt={user.username}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* USER INFO */}

          <div className="flex flex-col justify-between gap-6 px-8 pb-8 pt-20 md:flex-row md:items-end">
            <div>
              <h1 className="font-heading text-headline-xl uppercase text-primary">
                {user.name || user.username}
              </h1>

              <p className="mt-1 text-body-lg italic text-on-surface-variant">
                @{user.username}
              </p>

              <p className="mt-4 max-w-2xl text-body-md">
                {user.bio || "No bio added yet."}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="border-2 border-black bg-secondary-container px-5 py-2 font-heading text-sm font-bold uppercase text-on-secondary-container shadow-hard-sm transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                Follow
              </button>

              <button className="border-2 border-black bg-white px-5 py-2 font-heading text-sm font-bold uppercase shadow-hard-sm transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                Message
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* LEFT */}

          <div className="space-y-6 md:col-span-4">
            {/* ABOUT */}

            <div className="border-2 border-black bg-white shadow-hard">
              <div className="flex items-center justify-between border-b-2 border-black bg-primary px-4 py-2 text-white">
                <span className="font-heading text-sm font-bold uppercase">
                  About_Me
                </span>
              </div>

              <div className="space-y-4 p-4">
                <p className="text-body-md">
                  {user.bio || "This user hasn't added a bio yet."}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-zinc-300 py-1">
                    <span className="text-xs font-bold uppercase">
                      Username
                    </span>

                    <span className="text-xs">@{user.username}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-zinc-300 py-1">
                    <span className="text-xs font-bold uppercase">
                      Projects
                    </span>

                    <span className="text-xs">{user.projects.length}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-xs font-bold uppercase">Joined</span>

                    <span className="text-xs">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOOD */}

            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black bg-white shadow-hard">
                <div className="border-b-2 border-black bg-primary px-3 py-2 text-white">
                  <span className="text-xs font-bold uppercase">Mood</span>
                </div>

                <div className="flex flex-col items-center p-4">
                  <span className="text-4xl">⚡</span>

                  <p className="mt-2 text-xs font-bold uppercase">
                    {user.mood || "CODING"}
                  </p>
                </div>
              </div>

              <div className="border-2 border-black bg-white shadow-hard">
                <div className="border-b-2 border-black bg-primary px-3 py-2 text-white">
                  <span className="text-xs font-bold uppercase">Status</span>
                </div>

                <div className="flex h-full items-center justify-center p-4 text-center">
                  <p className="text-xs font-bold uppercase">
                    BUILDING COOL STUFF
                  </p>
                </div>
              </div>
            </div>

            {/* STATS */}

            <div className="border-2 border-black bg-white shadow-hard">
              <div className="flex items-center justify-between border-b-2 border-black bg-primary px-4 py-2 text-white">
                <span className="font-heading text-sm font-bold uppercase">
                  Stats
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4">
                <div className="border-2 border-black bg-zinc-100 p-4 text-center">
                  <p className="text-2xl font-black">{user.projects.length}</p>

                  <p className="mt-1 text-xs font-bold uppercase">Projects</p>
                </div>

                <div className="border-2 border-black bg-zinc-100 p-4 text-center">
                  <p className="text-2xl font-black">
                    {user.posts?.length || 0}
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase">Posts</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6 md:col-span-8">
            {/* PROJECTS */}

            <div className="border-2 border-black bg-white shadow-hard">
              <div className="flex items-center justify-between border-b-2 border-black bg-primary px-4 py-2 text-white">
                <span className="font-heading text-sm font-bold uppercase">
                  Project_Collection
                </span>

                <span className="text-xs uppercase">
                  {user.projects.length} Projects
                </span>
              </div>

              <div className="p-4">
                {user.projects.length === 0 ? (
                  <div className="border-2 border-dashed border-zinc-400 p-10 text-center">
                    <p className="font-bold uppercase text-zinc-500">
                      No projects yet
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {user.projects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/project/${project.id}`}
                        className="group border-2 border-black bg-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-primary"
                      >
                        {/* IMAGE */}

                        <div className="h-40 overflow-hidden border-b-2 border-black bg-zinc-200">
                          <img
                            src={
                              project.imageUrl || "https://placehold.co/600x400"
                            }
                            alt={project.projectName}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* CONTENT */}

                        <div className="space-y-3 p-4">
                          <div>
                            <h3 className="font-heading text-lg font-black uppercase">
                              {project.projectName}
                            </h3>

                            <p className="mt-2 line-clamp-2 text-body-sm text-on-surface-variant">
                              {project.description ||
                                "No description available."}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.niche && (
                              <span className="bg-primary px-2 py-1 text-[10px] font-bold uppercase text-white">
                                {project.niche}
                              </span>
                            )}

                            <span className="border-2 border-black px-2 py-1 text-[10px] font-bold uppercase">
                              {project.status}
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-2 text-[10px] uppercase text-zinc-500">
                            <span>
                              {new Date(project.createdAt).toLocaleDateString()}
                            </span>

                            <span>OPEN PROJECT</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RECENT ACTIVITY */}

            <div className="border-2 border-black bg-white shadow-hard">
              <div className="border-b-2 border-black bg-primary px-4 py-2 text-white">
                <span className="font-heading text-sm font-bold uppercase">
                  Recent_Activity
                </span>
              </div>

              <div className="space-y-4 p-4">
                {user.projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="border-l-4 border-primary pl-4"
                  >
                    <p className="text-xs font-bold uppercase">
                      Updated Project
                    </p>

                    <p className="mt-1 text-body-sm">
                      Working on{" "}
                      <span className="font-bold">{project.projectName}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
