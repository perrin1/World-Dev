import React from "react";
import { Section } from "./Section";
import UserElement from "./UserElement";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { getAllUser,getAllUsersData,getUserP } from "@/querys/user.query";
import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";

const UserContent = async () => {
  const session = await getCurrentUser();
  const posts = await getAllUsersData();
  posts.forEach(user => {
    console.log(user.preferences); // Cela affichera les préférences de chaque utilisateur
  });
  
  if (!posts) {
    return null;
  }
  return (
    <Section>
      <h2 className="scroll-m-20 mt-1 mb-2  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Nouvelle sortie
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {posts.map((posts) => {
          return <UserElement posts={posts} key={posts.id} />;
        })}

        {/* <UserElement />
        <UserElement />
        <UserElement />
        <UserElement />
        <UserElement /> */}
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <Link
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          href="/profile"
        >
          <Boxes size={12} />
          <span className="">Voir d'autre</span>
        </Link>
      </div>
    </Section>
  );
};

export default UserContent;
