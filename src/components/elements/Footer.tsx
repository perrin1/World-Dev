import React from "react";
import { Section } from "./Section";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-accent/25 bottom-0 " >
      <Section>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Tarification
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      className="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      href="/pricing"
                    >
                      Nos Tarifs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Touver un job
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      className="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      href="https://www.threejs-job.com?ref=vue-developers.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Creative Developer jobs
                      <span className="i-heroicons-arrow-up-right-20-solid w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

<hr className="p-2 font-bold  mt-2 " />

          <div className="mt-10     bort flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <span className=""> Copyright © 2024 - All rights reserved</span>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
