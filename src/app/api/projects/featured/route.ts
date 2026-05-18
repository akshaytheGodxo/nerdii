import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const featured = await prisma.project.findFirst({
    where: { status: "IN_PROGRESS" },
    orderBy: { updatedAt: "desc" },
    include: {
      author: {
        select: { id: true, name: true, username: true, image: true },
      },
      updates: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  if (!featured) {
    return NextResponse.json({ error: "No featured project" }, { status: 404 });
  }

  return NextResponse.json(featured);
}
