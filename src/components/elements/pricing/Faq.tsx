import React from "react";
import { Section } from "../Section";

const Faq = () => {
  return (
    <Section>
      <div className="p-8">
        <div className=" p-4 rounded-lg shadow-xl py-8 mt-6ss">
          <h4 className="  font-bold      text-3xl  sm:text-4xl   md:text-[40px]   text-dark tracking-widest uppercase text-center">
            FAQ
          </h4>

          <div className="space-y-12 px-2 xl:px-16 mt-12">
            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-blue-600">
                  <span className="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400">
                  <span className="text-4xl text-dark px-4">A.</span>
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-blue-600 font-bold">
                    Puis-je annuler mon abonnement à tout moment ?
                  </span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-dark">
                    Bien sûr. Vous perdrez l'accès à notre liste de développeurs
                      à la fin de votre période de facturation.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-blue-600">
                  <span className="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400">
                  <span className="text-4xl text-dark px-4">A.</span>
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-blue-600 font-bold">
                    World Developers est-il gratuit pour les développeurs ?
                  </span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-dark">
                    Absolument! Nous savons que lorsqu'on cherche du travail, on
                    n'a pas nécessairement les ressources financières pour payer
                    les services qui peuvent nous aider. C'est pourquoi world
                    Developers est et sera toujours gratuit pour les
                    développeurs !
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
