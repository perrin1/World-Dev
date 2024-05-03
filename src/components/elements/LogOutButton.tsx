"use client";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { Loader } from "./Loader";
import InfoLogOut from "./InfoLogOut";

const LogOutButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button variant="blue" onClick={() => startTransition(() => signOut())}>
    {isPending ? <Loader /> : <InfoLogOut /> } 
 </Button>
  )
}

export default LogOutButton
