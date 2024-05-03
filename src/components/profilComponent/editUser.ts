"use server";

import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
import { ProfilFormGeneraleValue } from "./ProfilFormGenerale";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const editUSer = async (values: ProfilFormGeneraleValue) => {
    const session =  await getCurrentUser();

    if (!session?.id) {
        // throw new Error("You must be logged in to do this.");
        redirect("/");
      }

      const user = await prisma.user.findUnique({
        where: {
          id: session?.id,
        },
      });

      
    const users = await prisma.user.update({
        where: {
          id: session?.id,
        },
  
        data: {
        
          name: values.name,
          title: values.title,
          country: values.country,
          bio: values.bio,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      redirect(`/dev/${users.id}`);
    } catch (error) {
      return `/dev/${users.id}`;
    }
    
}