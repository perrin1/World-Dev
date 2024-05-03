"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import clsx from "clsx";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { User } from "@prisma/client";
interface UserElementProps {
  posts: User;
}

const UserElement: React.FC<UserElementProps> = ({ posts }) => {
  const toto = "pp";
  const data =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in  voluptates deserunt excepturi quasi officiis at delectus quibusdam,  recusandae assumenda vel natus sapiente dolor totam voluptas maiores";
  return (
    <Card className="">
      <Link href="/dev/1" className="  ">
        <CardHeader>
          <div className={clsx("flex w-full flex-row items-start px-4 py-2")}>
            <Avatar className="mt-2">
              {posts.image ? (
                <AvatarImage src={posts.image} alt="user" />
              ) : (
                <AvatarFallback>
                  {toto.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="ml-4 flex w-full flex-col gap-2">
              <span className="text-sm text-accent-foreground ">
           
              </span>

              <h1 className="font-bold">{posts.title}</h1>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="px-4 ">
            <Badge variant="outline" className="p-1">
              Lorem ipsum
            </Badge>
            <Badge variant="outline" className="p-1">
              Lorem ipsum
            </Badge>
            <Badge variant="outline" className="p-1">
              Lorem ipsum
            </Badge>
          </div>
          <div className="px-4 py-2 ">{data.substring(0, 100)}......</div>
          <div className="px-4 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
            <Badge variant="blue" className="p-1">
              Lorem ipsum
            </Badge>
            <Badge variant="amber" className="p-1 b ">
              Lorem ipsum
            </Badge>
            <Badge variant="purple" className="p-1 0 ">
              Lorem ipsum
            </Badge>
            <Badge variant="blue" className="p-1">
              Lorem ipsum
            </Badge>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default UserElement;
