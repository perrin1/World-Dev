"use client";
import { FC } from "react";
import { Button } from "../ui/button";

interface NavButtonProps {
  name: string;
  className: string;
}

const NavButton: FC<NavButtonProps> = ({ name , className }) => {
  return <Button className={className} variant="link"> {name} </Button>;
};

export default NavButton;
