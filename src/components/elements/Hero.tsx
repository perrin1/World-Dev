import React from "react";
import { Section } from "./Section";
import Link from "next/link";
import { User2, Users } from "lucide-react";

const Hero = () => {
  return (
    <Section>
      <div className="py-24 sm:py-32 md:py-40 relative">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="text-center">
            <div className="mb-10">
              
                <img
                  
                  src="https://img.freepik.com/vecteurs-libre/logo-code-degrade-creatif_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713139200&semt=ais"
                  alt="Uneed POTW2 Badge" 
                 className="h-12 w-30 mx-auto inline-block"
                />
              
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h1>
            <p className="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
               {/* Developers connects Vue.js rockstars with their dream jobs and
              helps companies discover their perfect match. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
              <Link
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                href="/profile"
              >
               <User2 size={12} />
                <span className="">Check your profile</span>
              </Link>
              <Link
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                href="/developers"
              >
                <Users size={12} />
                <span className="">See the developers</span>
              </Link>
            </div>
          </div>
          <div
            
            className="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          ></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
