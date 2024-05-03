import Hero from "@/components/devComponent/Hero";
import { Section } from "@/components/elements/Section";
import UserElement from "@/components/elements/UserElement";
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
        <Hero />
      </div>

      <div className="flex max-md:flex-col items-start gap-4 ">
        <div className="flex-[3] w-full gap-4">
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
          <div className="mb-4">
            <UserElement />
          </div>
        </div>

        <div className="flex-[2] gap-4 flex flex-col w-full ">
          <div className="p-2 hidden sm:block">
            <Badge className="px-2 py-2 mx-2 mt-1  ">Lorem </Badge>
            <div className="p-2 grid grid-cols-2 gap-4">
              <div className="flex ml-4 items-baseline">
                <Boxes />
                <span className="text-sm font-bold text-purple-800 dark:text-purple-500 mx-1 px-1">
                  DeV
                </span>
              </div>
{/* 
              <div className="hidden lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4 overflow-visible">
                <div className="relative">
                  <div>
                    <div className="border-t border-gray-200 py-6">
                      <div className="-mx-2 -my-3 flow-root">
                        <button
                          type="button"
                          aria-expanded="true"
                          className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500 text-sm"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-medium light:text-gray-900">
                              Role levels
                            </span>
                          </div>
                          <span className="ml-6 flex items-center">
                            <span className="i-ph-minus h-5 w-5"></span>
                          </span>
                        </button>
                      </div>
                      <div>
                        <div className="space-y-4 pt-6">
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="npsRueP3QKv_0"
                                type="checkbox"
                                className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                              />
                            </div>
                            <div className="ms-3 flex flex-col">
                              <label
                                htmlFor="npsRueP3QKv_0"
                                className="text-sm font-medium text-gray-700 dark:text-gray-200"
                              >
                                Junior
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="npsRueP3QKv_1"
                                type="checkbox"
                                className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                              />
                            </div>
                            <div className="ms-3 flex flex-col">
                              <label
                                htmlFor="npsRueP3QKv_1"
                                className="text-sm font-medium text-gray-700 dark:text-gray-200"
                              >
                                Mid-level
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="npsRueP3QKv_2"
                                type="checkbox"
                                className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                              />
                            </div>
                          </div>
                          <div className="ms-3 flex flex-col">
                            <label
                              htmlFor="npsRueP3QKv_2"
                              className="text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                              Senior
                            </label>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="npsRueP3QKv_3"
                              type="checkbox"
                              className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                            />
                          </div>
                          <div className="ms-3 flex flex-col" />
                          <label
                            htmlFor="npsRueP3QKv_3"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            C-Level
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      aria-expanded="true"
                      className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500 text-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-medium light:text-gray-900">
                          Work preferences
                        </span>
                      </div>
                      <span className="ml-6 flex items-center">
                        <span className="i-ph-plus h-5 w-5"></span>
                      </span>
                    </button>
                  </h3>
                  <div style={{ display: "none" }}>
                    <div className="space-y-4 pt-6">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_4"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_4"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            Freelance
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_5"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_5"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            Employment
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_6"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_6"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            On site
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_7"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_7"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            Remote
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_8"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_8"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            Part-Time
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="npsRueP3QKv_9"
                            type="checkbox"
                            className="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
                          />
                        </div>
                        <div className="ms-3 flex flex-col">
                          <label
                            htmlFor="npsRueP3QKv_9"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200"
                          >
                            Full-Time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      aria-expanded="true"
                      className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500 text-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-medium light:text-gray-900">
                          Location
                        </span>
                      </div>
                      <span className="ml-6 flex items-center">
                        <span className="i-ph-plus h-5 w-5"></span>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6 z-20" style={{ display: "none" }}>
                    <div className="flex flex-wrap gap-1 mb-2"></div>
                    <div className="relative" data-headlessui-state="">
                      <div
                        id="headlessui-combobox-button-nZDtdaSPC0J_10"
                        tabIndex="-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        data-headlessui-state=""
                        role="button"
                        className="flex items-center w-full"
                      >
                        <button
                          className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-9"
                          type="button"
                          option-value="name"
                        >
                          <span className="block truncate">
                            Select countries
                          </span>
                          <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2.5">
                            <span
                              className="i-heroicons-chevron-down-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
