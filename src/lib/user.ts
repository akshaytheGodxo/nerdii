import prisma from "./prisma";
export async function getUser({ id }: { id: string }) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
    },
  });

  if (!user) {
    return Error("User was not found!");
  }

  return user;
}
