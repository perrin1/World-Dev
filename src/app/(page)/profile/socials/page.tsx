import ProfilTab from "@/components/elements/ProfilTab";
import { Section } from "@/components/elements/Section";
import { Spacing } from "@/components/elements/Spacing";
import ProfilFormSocial from "@/components/profilComponent/ProfilFormSocial";
import { editSocial } from "@/components/profilComponent/editSocial";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
 

import { signIn } from "next-auth/react";

import React from "react";

export default async function page() {
  const session = await getCurrentUser();
  if (!session?.id) {
    await signIn();
    return null;
  }

  const data = await prisma.social.findFirstOrThrow({
    where: {
      userId: session.id,
      NOT: {
        id: session.id
      },
    }
  });

  if(!data){
    return null;
  }
 

  return (
    <Section>
      <Spacing size="sm" />
      <ProfilTab />

      <ProfilFormSocial data={data} onSubmit={editSocial} />
    </Section>
  );
}
