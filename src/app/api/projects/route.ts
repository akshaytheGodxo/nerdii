import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import type { Project } from "../../../../generated/prisma/client";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const niche = searchParams.get("niche") ?? undefined;
  const sort = searchParams.get("latest") ?? "latest";
  const limit = Number(searchParams.get("limit") ?? 10);

  const projects = await prisma.project.findMany({
    where: {
      ...(niche && { niche }),
    },
    orderBy: sort === "latest" ? { createdAt: "desc" } : { projectName: "asc" },
    take: limit,
    include: {
      author: {
        select: { id: true, name: true, username: true, image: true },
      },
      updates: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });

  return NextResponse.json(projects);
}
