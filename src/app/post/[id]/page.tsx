import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "@/lib/prisma";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  if (!post) {
    notFound();
  }

  const title = post.published ? post.title : `${post.title} (Draft)`;

  return (
    <article className="panel">
      <h1>{title}</h1>
      <p className="meta">By {post.author?.name ?? "Unknown author"}</p>
      {post.content ? <ReactMarkdown>{post.content}</ReactMarkdown> : null}
    </article>
  );
}
