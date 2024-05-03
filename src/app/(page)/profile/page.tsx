import ProfilTab from "@/components/elements/ProfilTab";
import { Section } from "@/components/elements/Section";
import { Spacing } from "@/components/elements/Spacing";
import ProfilFormGenerale from "@/components/profilComponent/ProfilFormGenerale";
import { editUSer } from "@/components/profilComponent/editUser";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default async function page() {
  const session = await getCurrentUser();
  if (!session?.id) {
    await signIn();
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id,
    },
  });

  if (!user) {
    return null;
  }
  return (
    <Section>
      <Spacing size="sm" />
      <ProfilTab />
      <Spacing size="sm" />
      <ProfilFormGenerale user={user} onSubmit={editUSer} />
    </Section>
  );
}
