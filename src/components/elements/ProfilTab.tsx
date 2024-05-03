
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfilTab = () => {

  
  
  return (
    <>

      <hr className=" font-bold " />
      <div className="flex justify-between items-baseline mx-1 p-2">
        <Link href="/profile" className=" bg-neurtral-400  rounded-lg p-2 text-md hover:underline hover:text-purple-600 focus:text-purple-800  " >Général</Link>
        <Link href="/profile/research" className=" bg-neurtral-400  rounded-lg p-2 text-md hover:underline hover:text-purple-600 focus:text-purple-800  " >Préférence</Link>
        <Link href="/profile/socials" className=" bg-neurtral-400  rounded-lg p-2 text-md hover:underline hover:text-purple-600 focus:text-purple-800  " >Social</Link>
      </div>
      <hr className="pt-2 font-bold " />
    </>
  );
};

export default ProfilTab;
