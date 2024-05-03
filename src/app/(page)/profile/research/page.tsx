import ProfilTab from '@/components/elements/ProfilTab'
import { Section } from '@/components/elements/Section'
import { Spacing } from '@/components/elements/Spacing'
import ProfilFormPreference from '@/components/profilComponent/ProfilFormPreference'
import { editPreference } from '@/components/profilComponent/editPreference'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/pages/api/auth/[...nextauth]'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const session = await getCurrentUser();
  if (!session?.id) {
    await signIn();
    return null;
  }


  const data = await prisma.preference.findFirstOrThrow({
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
    <Spacing size='sm' />
    <ProfilTab />
    <ProfilFormPreference data={data} onSubmit={editPreference} />
  </Section>
  )
}
