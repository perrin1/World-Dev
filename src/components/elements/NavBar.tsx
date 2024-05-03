import Link from "next/link";
import React from "react";
import { Boxes, LogIn, LogInIcon } from "lucide-react";
import { ThemeToggle } from "../themes/ThemeToggle";
import NavButton from "./NavButon";
import { Section } from "./Section";
import { Button } from "../ui/button";
import LoginButton from "./LoginButton";
import { getCurrentUser } from "@/pages/api/auth/[...nextauth]";
import LogOutButton from "./LogOutButton";

const NavBar = async () => {
  const users = await getCurrentUser();
  console.log(users);

  return (
    <header className=" sticky bg-accent/70 border border-b-4  top-0 py-6">
      <Section className="flex items-baseline justify-between ">
        <Link href="/" className="flex items-baseline">
          <Boxes />{" "}
          <span className="text-2xl font-bold text-purple-800 dark:text-purple-500 mx-1 px-1 ">
            World DeV
          </span>
        </Link>

        <ul className="flex items-center gap-2 ">
          <Link href="/dev">
            <NavButton className="" name="Nos Développeurs" />
          </Link>
          <Link href="/pricing">
            <NavButton className="" name="Tarifs" />
          </Link>
          <Link href="/profile">
            <NavButton className="" name="Profile" />
          </Link>
        </ul>
        <ul className="flex items-center gap-2 ">
          {users?.name ? <LogOutButton /> : <LoginButton />}
          {/* <LoginButton /> <LogOutButton /> */}
          <ThemeToggle />
        </ul>
      </Section>
    </header>
  );
};

export default NavBar;
