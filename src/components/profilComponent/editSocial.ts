"use server";

import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
import { ProfilFormSocialValue } from "./ProfilFormSocial";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const editSocial = async (values: ProfilFormSocialValue) => {
  const session = await getCurrentUser();
  if (!session?.id) {
    redirect("/");
  }

  const data = await prisma.social.findFirstOrThrow({
    where: {
      userId: session.id,
      NOT: {
        id: session.id,
      },
    },
  });

  if (!data) {
    try {
      const post = await prisma.social.create({
        data: {
          linkedin: values.linkedin,
          github: values.github,
          website: values.website,
          email: values.email,
          userId: session.id,
        },
      });
      return  redirect("profile/socials");
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const post = await prisma.social.update({
        where: {
          id: data.id,
        },
        data: {
          linkedin: values.linkedin,
          github: values.github,
          website: values.website,
          email: values.email,
        },
      });
      return  redirect("profile/socials");
    } catch (error) {
      console.log(error);
    }
  }


};
