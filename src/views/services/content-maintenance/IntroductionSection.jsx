import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mt-12 md:flex-row">
          <motion.div
            className="md:w-1/3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Maintenance et Support"
              className="w-64 h-64 mx-auto rounded-full shadow-lg"
            />
          </motion.div>

          <motion.div
            className="mt-8 md:w-2/3 md:pl-12 md:mt-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold md:text-5xl text-black-color font-montserrat">
              Pourquoi Choisir Notre Service de Maintenance et Support ?
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
              Notre service de maintenance et support technique garantit que vos systèmes fonctionnent de manière optimale et sans interruption.
            </p>
            <p className="mt-8 text-lg text-gray-700 md:text-xl font-roboto">
              Que vous ayez besoin de surveillance 24/7, de mises à jour régulières ou d'un support technique dédié, notre équipe est là pour vous aider à chaque étape. Nous utilisons les meilleures pratiques de l'industrie pour prévenir les problèmes avant qu'ils ne surviennent et assurer une résolution rapide en cas de besoin.
            </p>
            <p className="mt-4 text-lg font-semibold md:text-xl text-black-color font-roboto">
              Notre objectif est de garantir que vos opérations restent fluides, sécurisées et efficaces à tout moment.
            </p>
            <blockquote className="mt-8 text-xl italic text-gray-500 font-lato">
              "Le support proactif pour une performance optimale."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
