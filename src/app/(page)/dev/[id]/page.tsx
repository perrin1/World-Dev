import { Section } from "@/components/elements/Section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import clsx from "clsx";
import { Boxes, Heading1, Loader } from "lucide-react";
import React from "react";

export default function page() {
  const toto = "pp";

  return (
    <Section className="py-6">
      <div className="py-10 ">
        <CardHeader>
          <div className={clsx("flex w-full flex-row items-start px-4 py-2")}>
            <Avatar className="mt-2">
              {/* {posts.user.image ? (
              <AvatarImage src={posts.user.image} alt="user" />
            ) : null} */}
              <AvatarFallback>{toto.slice(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex w-full flex-col gap-2">
              <h1 className="font-bold">{toto}</h1>
              <span className="text-sm text-accent-foreground ">{toto}</span>
            </div>
          </div>
        </CardHeader>
      </div>

      <div className="flex max-md:flex-col items-start gap-6 ">
        <div className="flex-[3] w-full">
          <Card className=" flex flex-col gap-2 w-full p-4">
            <CardContent>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                delectus? Voluptatum suscipit nemo fugit est, iusto eligendi
                ipsa accusantium eum officiis facere magnam excepturi. Deserunt
                aperiam aliquid at maxime saepe.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                delectus? Voluptatum suscipit nemo fugit est, iusto eligendi
                ipsa accusantium eum officiis facere magnam excepturi. Deserunt
                aperiam aliquid at maxime saepe.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                delectus? Voluptatum suscipit nemo fugit est, iusto eligendi
                ipsa accusantium eum officiis facere magnam excepturi. Deserunt
                aperiam aliquid at maxime saepe.
              </p>
            </CardContent>
            <hr className="mx-3" />
            <div className="p-2 mx-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Loader />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Loader />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Loader />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4  items-baseline">
                <Loader />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
            </div>

            <hr className="mx-3" />

            <div className="p-2 mx-2 grid grid-cols-5 gap-4 text-center items-center">
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
              <Badge variant="outline" className="text-primary text-center">
                {" "}
                info{" "}
              </Badge>
            </div>
          </Card>
        </div>

        <div className="flex-[2] gap-4 flex flex-col w-full ">
          <Card className="p-2 flex-1 ">
            <CardHeader>
              <div className={clsx("flex w-full flex-row items-start ")}>
                <Avatar className="mt-2">
                  {/* {posts.user.image ? (
              <AvatarImage src={posts.user.image} alt="user" />
                ) : null} */}
                  <AvatarFallback>
                    {toto.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 flex w-full flex-col gap-2">
                  <h1 className="font-bold">{toto}</h1>
                  <span className="text-sm text-accent-foreground ">
                    {toto}
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <Badge className="px-2 py-2 mx-2 mt-1  ">Lorem </Badge>
            <div className="p-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4  items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
            </div>
          </Card>
          <Card>
            <Badge className="px-2 py-2 mx-2 mt-1  ">Lorem </Badge>
            <div className="p-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
            </div>
          </Card>
          <Card>
            <Badge className="px-2 py-2 mx-2 mt-1  ">Lorem </Badge>
            <div className="p-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
            </div>
          </Card>
          <Card>
            <Badge className="px-2 py-2 mx-2 mt-1  ">Lorem </Badge>
            <div className="p-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
