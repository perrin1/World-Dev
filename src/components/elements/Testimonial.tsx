import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Vous êtes développeur...
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Ajouter votre profil à World Developers ne vous coûte rien et peut
              vous aider à trouver de nouvelles opportunités
            </p>
            <dl className="mt-6 leading-7 space-y-4">
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-money-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Gratuit</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leading-6">
                  Être répertorié sur World Developers est totalement gratuit !
                </dd>
              </div>
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-gear-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Réglable</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leader-6">
                  Quel que soit le type de travail que vous souhaitez, vous
                  pouvez le préciser.
                </dd>
              </div>
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-star-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Contact uniquement si besoin</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leader-6">
                  Notre liste est payante pour les recruteurs, ce qui signifie
                  qu'ils ne contacteront pas à moins qu'ils n'aient vraiment
                  besoin de vous.
                </dd>
              </div>
            </dl>
          </div>
          <img src="illu1.png" />
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
          <div className="lg:order-last">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Vous êtes recruteur
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Économisez des dizaines d'heures de recherche en recrutant vos
              experts dans n'import domaine du developpement web et mobile
            </p>
            <dl className="mt-6 leading-7 space-y-4">
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-rocket-launch-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Rapide</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leading-6">
                  Tous vos experts au même endroit
                </dd>
              </div>
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-currency-eur-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Abordable</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leader-6">
                  Nous ne prenons pas de commission, seulement un abonnement.
                </dd>
              </div>
              <div className="relative pl-8">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  <span
                    className="i-ph-fire-duotone absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  ></span>
                  <span>Efficace</span>
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 leader-6">
                  Quels que soient vos besoins, vous pouvez filtrer les profils
                  de nos développeurs.
                </dd>
              </div>
            </dl>
          </div>
          <img src="illu2.png" />
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow relative bg-gray-100/50 dark:bg-gray-800/50">
            <div className="flex flex-col gap-16 sm:gap-y-24 px-4 sm:p-6 py-24 sm:py-32 sm:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Commencez maintenant
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Que vous soyez recruteur ou développeur, créez votre compte en
                  cliquant ici
                </p>
                <div className="mt-10 flex items-center gap-x-6 justify-center">
                  <a
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                    href="/signup"
                  >
                    <span
                      className="i-ph-plus flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    ></span>
                    <span className="">Create an account</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
