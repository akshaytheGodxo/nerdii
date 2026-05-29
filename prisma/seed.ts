import prisma from "@/lib/prisma";
import { ProjectStatus } from "../generated/prisma/client";
import "dotenv/config";
async function main() {
  // get first user
  const user = await prisma.user.findFirst();

  if (!user) {
    throw new Error("No user found");
  }

  await prisma.project.createMany({
    data: [
      {
        projectName: "Nebula Engine",
        description:
          "Custom 2D game engine made with C++ and SDL2 focused on lighting and particle systems.",
        niche: "Game Development",
        repoUrl: "https://github.com/akshay/nebula-engine",
        liveUrl: "https://nebula-engine.vercel.app",
        imageUrl:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        version: "v0.9.2",
        status: ProjectStatus.IN_PROGRESS,
        startingDate: new Date("2025-01-12"),
        authorId: user.id,
      },

      {
        projectName: "Cryptic",
        description:
          "Gamified fintech platform teaching crypto and stock market concepts.",
        niche: "Fintech",
        repoUrl: "https://github.com/akshay/cryptic",
        liveUrl: "https://cryptic.app",
        imageUrl:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        version: "v1.2.0",
        status: ProjectStatus.IN_PROGRESS,
        startingDate: new Date("2025-03-01"),
        authorId: user.id,
      },

      {
        projectName: "RetroVault",
        description:
          "Website for reviewing nostalgic PC games like GTA Vice City and San Andreas.",
        niche: "Content Creation",
        repoUrl: "https://github.com/akshay/retro-vault",
        liveUrl: "https://retrovault.vercel.app",
        imageUrl:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
        version: "v0.5.1",
        status: ProjectStatus.PAUSED,
        startingDate: new Date("2024-11-15"),
        authorId: user.id,
      },

      {
        projectName: "SFML Terminal",
        description:
          "A fully custom terminal emulator built using SFML rendering pipeline.",
        niche: "Systems Programming",
        repoUrl: "https://github.com/akshay/sfml-terminal",
        imageUrl:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        version: "v0.2.0",
        status: ProjectStatus.IN_PROGRESS,
        startingDate: new Date("2025-04-18"),
        authorId: user.id,
      },

      {
        projectName: "BridgeIn Dashboard",
        description:
          "Startup networking and grants dashboard built during internship.",
        niche: "Web Development",
        repoUrl: "https://github.com/akshay/bridgein-dashboard",
        liveUrl: "https://bridgein.io",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        version: "v2.0.0",
        status: ProjectStatus.FINISHED,
        startingDate: new Date("2024-05-10"),
        finishedDate: new Date("2024-08-28"),
        authorId: user.id,
      },
    ],
  });

  console.log("Seeded projects");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
