import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
// GET /api/projects/:id
export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: { id: true, name: true, username: true, image: true },
      },
      updates: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

// PATCH /api/projects/:id
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const project = await prisma.project.update({
    where: { id: params.id },
    data: body,
  });

  return NextResponse.json(project);
}

// DELETE /api/projects/:id
export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.project.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
