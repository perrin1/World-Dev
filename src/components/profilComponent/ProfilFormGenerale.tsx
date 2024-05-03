"use client";
import { User } from "@prisma/client";
import React from "react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage, useZodForm } from "../ui/form";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TextArea } from "../elements/TextArea";
import { User2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormShema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  country: z.string().min(1),
  bio: z.string().min(1).max(30),
});

export type ProfilFormGeneraleValue = z.infer<typeof FormShema>;

type ProfilFormGeneraleProps = {
  user: User;
  onSubmit: (values: ProfilFormGeneraleValue) => Promise<string | void>;
};

const ProfilFormGenerale = ({ user, onSubmit }: ProfilFormGeneraleProps) => {
  const form = useZodForm({
    schema: FormShema,
    defaultValues: {
      name: user?.name ?? " ",
      title: user?.title ?? " ",
      country: user?.country ?? " ",
      bio: user?.bio ?? " ",
    },
  });

  const router = useRouter();

  return (
    <Form
      form={form}
      onSubmit={async (values) => {
        const url = await onSubmit(values);
        if (url) {
          router.push(url);
        }
      }}
    >
      <div className="divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 first:*:pt-2 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">
                Profile
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                General information about yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 ">
          <div className="">
            <div className="flex content-center items-center justify-between text-sm">
              <label className="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">
                <Label>Nom et Prenom</Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Will appear on your developer page.
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 ">
          <div className="">
            <div className="flex content-center items-center justify-between text-sm">
              <label className="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">
                <Label>Titre (ce que vous faites) </Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Will appear on your developer page.
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 ">
          <div className="">
            <div className="flex content-center items-center justify-between text-sm">
              <label className="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">
                <Label>Pays</Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Will appear on your developer page.
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  {/* <Input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      {...field}
                    /> */}

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 ">
          <div className="">
            <div className="flex content-center items-center justify-between text-sm">
              <label className="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">
                <Label>Bio</Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Will appear on your developer page.
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <TextArea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex w-full mt-4 justify-end">
          <Button size="sm">Enregistrer</Button>
        </div>
      </div>
    </Form>
  );
};

export default ProfilFormGenerale;
