"use client";
import { Preference } from "@prisma/client";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "../ui/form";
import { useRouter } from "next/navigation";
import { Section } from "../elements/Section";
import { Card } from "../ui/card";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


const FormShema = z.object({
  visible: z.boolean().default(false),
  emploi: z.boolean().default(false),
  remote: z.boolean().default(false),
  onsite: z.boolean().default(false),
  leveljunior: z.boolean().default(false),
  levelmid: z.boolean().default(false),
  levelsenior: z.boolean().default(false),
  levelhith: z.boolean().default(false),
  type: z.string().nullable().default(null),
  model: z.string().nullable().default(null),
  montant: z.string().nullable().default(null),
});

export type ProfilFormPreferenceValue = z.infer<typeof FormShema>;

type ProfilFormPreferenceProps = {
  data: Preference;
  onSubmit: (values: ProfilFormPreferenceValue) => Promise<string | void>;
};

const ProfilFormPreference = ({
  data,
  onSubmit,
}: ProfilFormPreferenceProps) => {
  const form = useZodForm({
    schema: FormShema,
    defaultValues: {
      visible: data?.visible ?? false,
      emploi: data?.emploi ?? false,
      remote: data?.remote ?? false,
      onsite: data?.onsite ?? false,
      leveljunior: data?.leveljunior ?? false,
      levelmid: data?.levelmid ?? false,
      levelsenior: data?.levelsenior ?? false,
      levelhith: data?.levelhith ?? false,

      type: data?.type ?? " ",
      model: data?.model ?? " ",
      montant: data?.montant ?? " ",
    },
  });

  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
      <Section>
        <div className="grid lg:grid-cols-3 items-start first:*:col-span-2 lg:first:*:col-span-1 last:*:col-span-2 gap-6 px-4 py-6">
          <div className="p-2  ">
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold  p-1"> Work preferences</span> <br />
              Are you looking for work? What kind?
            </p>
          </div>
          <Card className="p-2  divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col px-4 py-5 sm:p-6 ">
            <div>
              <FormField
                control={form.control}
                name="visible"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Availability</FormLabel>
                      <FormDescription>
                        {" "}
                        You're available for new opportunities and would like to
                        appear in our listings.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mx-1 px-1">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="  rounded-lg  p-3 shadow-sm">
                    <FormLabel>Time commitment</FormLabel>
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
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Indicate if you are available for part-time (less than 35
                      hours per week) and/or full-time (35+ hours per week)
                      jobs/contracts.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="emploi"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Employment</FormLabel>
                      <FormDescription>
                        Are you open to employment?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row items-center      justify-between rounded-lg  p-3 shadow-sm">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">
                  <Label>Freelance contracts </Label>
                </label>
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>

            {isChecked && (
            <div className="grip gap-4 grid-cols-2" >
                <div>
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                        <FormItem className="  rounded-lg  p-3 shadow-sm">
                            <FormLabel>Time commitment</FormLabel>
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
                                <SelectItem value="Part-time">Part-time</SelectItem>
                                <SelectItem value="Full-time">Full-time</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormDescription>
                            Indicate if you are available for part-time (less than 35
                            hours per week) and/or full-time (35+ hours per week)
                            jobs/contracts.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            
                <div className="">
                    <FormField
                        control={form.control}
                        name="montant"
                        render={({ field }) => (
                            <FormItem>

                            <FormLabel>Montant</FormLabel>
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
              
            )}

            <div>
              <FormField
                control={form.control}
                name="remote"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Remote</FormLabel>
                      <FormDescription>
                        Are you open to work remotely?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="onsite"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>On site</FormLabel>
                      <FormDescription>
                        Are you open to work on site?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="leveljunior"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Role level Junior</FormLabel>
                      <FormDescription>
                        Experience levels you would consider taking
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="levelmid"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Mid-level</FormLabel>
                      <FormDescription>
                        Experience levels you would consider taking
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="levelsenior"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Senior</FormLabel>
                      <FormDescription>
                        Experience levels you would consider taking
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="levelhith"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>C-Level</FormLabel>
                      <FormDescription>
                        Experience levels you would consider taking
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full mt-4 justify-end">
                <Button size="sm">Enregistrer</Button>
            </div>
          </Card>
        </div>
      </Section>
    </Form>
  );
};

export default ProfilFormPreference;
