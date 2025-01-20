import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/shared/profile-form";
import { Container } from "@/components/shared/container";

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/");
  }

  const user = await prisma.user.findFirst({
    where: { id: Number(session?.id) },
  });

  if (!user) {
    return redirect("/");
  }

  return (
    <Container>
      <ProfileForm data={user} />
    </Container>
  );
}
