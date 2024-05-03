"use server";

import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ProfilFormPreferenceValue } from "./ProfilFormPreference";
 

export const editPreference = async (values: ProfilFormPreferenceValue) => {
    const session =  await getCurrentUser();
    if (!session?.id) {
        redirect("/");
      }

      
  const data = await prisma.preference.findFirstOrThrow({
    where: {
      userId: session.id,
      NOT: {
        id: session.id
      },
    }
  });


  
  if (!data) {
    try {
      const post = await prisma.preference.create({
        data: {
            visible: values.visible,
            emploi: values.emploi,
            remote: values.remote,
            onsite: values.onsite,
            leveljunior: values.leveljunior,
            levelmid: values.levelmid,
            levelsenior: values.levelsenior,
            levelhith: values.levelhith,
            type: values.type,
            model: values.model,
            montant: values.montant,
          userId: session.id,
        },
      });
      return  redirect("profile/research");
    } catch (error) {
        
      console.log(error);
    }
  } else {
    try {
      const post = await prisma.preference.update({
        where: {
          id: data.id,
        },
        data: {
            visible: values.visible,
            emploi: values.emploi,
            remote: values.remote,
            onsite: values.onsite,
            leveljunior: values.leveljunior,
            levelmid: values.levelmid,
            levelsenior: values.levelsenior,
            levelhith: values.levelhith,
            type: values.type,
            model: values.model,
            montant: values.montant,
        },
      });
      return  redirect("profile/research");
    } catch (error) {
      console.log(error);
    }
  }
    console.log(values);
    
}