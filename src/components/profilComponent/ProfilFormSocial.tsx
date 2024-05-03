"use client";

import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from "../ui/form";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Social } from "@prisma/client";



const FormShema = z.object({
  linkedin: z.string().min(1).regex(/^https:\/\/.+/),
  github: z.string().min(1).regex(/^https:\/\/.+/),
  website: z.string().min(1).regex(/^https:\/\/.+/),
  email: z.string().email(),
});

export type ProfilFormSocialValue = z.infer<typeof FormShema>;

type ProfilFormSocialProps = {
  data: Social;
  onSubmit: (values: ProfilFormSocialValue) => Promise<string | void>;
};

const ProfilFormSocial = ({ data, onSubmit }: ProfilFormSocialProps) => {
  const form = useZodForm({
    schema: FormShema,
    defaultValues: {
      linkedin: data?.linkedin ?? " " ,
      github: data?.github ?? " " ,
      website: data?.website ?? " " ,
      email: data?.email ?? " " ,
    },
  });

  const router = useRouter();
// console.log(data);

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
                <Label>Linkedin</Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
            Your linkedin profile URL
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="linkedin"
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
                <Label>Github </Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
            Your github profile URL
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="github"
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
                <Label>Website  </Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
            Your personal website URL or Portfolio
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="website"
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
                <Label>Email  </Label>
              </label>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
            Your personal email address
            </p>
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="email"
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
        
        <div className="flex w-full mt-4 justify-end">
          <Button size="sm">Enregistrer</Button>
        </div>
      </div>
    </Form>
  );
};

export default ProfilFormSocial;
