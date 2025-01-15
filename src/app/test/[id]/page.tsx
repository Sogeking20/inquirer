import TestBanner from "@/components/shared/test-banner";
import TestForm from "@/components/shared/test-form";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function TestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const test = await prisma.test.findFirst({
    where: { id: Number((await params).id) },
    include: {
      questions: {
        include: {
          answers: true,
        },
      },
      results: {
        include: {
          strengths: true,
        },
      },
    },
  });

  if (!test) {
    return notFound();
  }

  const randomIndex = Math.floor(Math.random() * test.results.length);
  let result = test.results[randomIndex];

  return <TestForm test={test} result={result} />;
}
