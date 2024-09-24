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
              alt="Sécurité Web & Réseaux"
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
              Pourquoi Choisir Nos Solutions de Sécurité Web & Réseaux ?
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
              Nous mettons en place des solutions de sécurité robustes pour protéger vos systèmes contre les cybermenaces, en garantissant l'intégrité, la confidentialité, et la disponibilité de vos données.
            </p>
            <p className="mt-8 text-lg text-gray-700 md:text-xl font-roboto">
              Que vous ayez besoin de protection contre les attaques DDoS, de cryptage de données, ou de surveillance en temps réel de vos réseaux, notre équipe est là pour vous offrir les meilleures pratiques de sécurité.
            </p>
            <p className="mt-4 text-lg font-semibold md:text-xl text-black-color font-roboto">
              Nos solutions sont conçues pour s'adapter à vos besoins spécifiques, assurant la sécurité de vos infrastructures, où qu'elles se trouvent.
            </p>
            <blockquote className="mt-8 text-xl italic text-gray-500 font-lato">
              "La sécurité avant tout, pour un environnement numérique fiable."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;