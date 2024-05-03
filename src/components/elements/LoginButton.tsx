"use client";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";
import { signIn }  from "next-auth/react";
import { Loader } from "./Loader";
import InfoLogIn from "./InfoLogIn";

const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button variant="blue" onClick={() => startTransition(() => signIn())}>
    {isPending ? <Loader /> : <InfoLogIn /> } 
 </Button>
  )
}

export default LoginButton
