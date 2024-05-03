import { FlameIcon, Tv, User } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="py-8 sm:py-16 lg:py-24">
      <div className="gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our Developers
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Find the best Vue.js developers perfectly suited for your project.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
            <a
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              href="/pricing"
            >
              <FlameIcon className="text-amber-500" />
              <span className="">Faites vôtre souscription</span>
            </a>
            <a
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              href="/profile"
            >
              <User />
              <span className="">Check your profile</span>
            </a>
          </div>
        </div>
        <div className="lg:pl-10">
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            type="button"
            className="relative block w-full group rounded-xl hover:bg-gray-100 border border-gray-300 dak:border-gray-800 dark:hover:bg-gray-800 p-12 hover:border-gray-400 focus:outline-none"
          >
            <span className="i-ph-megaphone-duotone text-3xl"></span>
            <span className="absolute items-center justify-center hidden text-lg group-hover:flex right-4 top-4">
              <Tv />
            </span>
            <h3 className="mt-2 block text-lg font-semibold text-primary-500">
              Ne ratez pas les infos
            </h3>
            <p>
              Obtenez directement des conseils de haute qualité et du contenu
              soigneusement sélectionné dans votre boîte de réception.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
