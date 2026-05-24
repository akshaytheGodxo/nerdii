import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { error } from "console";
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

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();

  const project = await prisma.project.create({
    data: {
      projectName: body.projectName,
      description: body.description,
      niche: body.niche,
      repoUrl: body.repoUrl,
      liveUrl: body.liveUrl,
      imageUrl: body.imageUrl,
      version: body.version,
      startingDate: new Date(body.startingDate),
      finishedDate: body.finishedDate ? new Date(body.finishedDate) : null,
      status: body.status ?? "IN_PROGRESS",
      author: { connect: { email: session.user.email! } },
      updates: {
        create: {
          content: body.initialUpdate || "Project Initialized",
        },
      },
    },

    include: {
      updates: true,
    },
  });

  return NextResponse.json(project, { status: 201 });
}
