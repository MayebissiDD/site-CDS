import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row mt-8">
          {/* Image Section */}
          <motion.div
            className="md:w-1/3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://img.freepik.com/free-vector/digital-marketing-concept-landing-page_52683-19706.jpg" // Image adaptée au marketing digital
              alt="Marketing Digital"
              className="w-64 h-64 mx-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="mt-8 md:w-2/3 md:pl-12 md:mt-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl text-second-color font-montserrat">
              Pourquoi Choisir Notre Service de Marketing Digital ?
            </h2>
            <p className="mt-6 text-base text-gray-700 md:text-lg font-roboto">
              Nous boostons votre présence en ligne grâce à des stratégies de marketing digital personnalisées et efficaces, adaptées aux besoins spécifiques de votre entreprise.
            </p>
            <p className="mt-6 text-base text-gray-700 md:text-lg font-roboto">
              Que vous souhaitiez augmenter votre visibilité sur les réseaux sociaux, améliorer votre référencement naturel (SEO), ou lancer des campagnes publicitaires ciblées, notre équipe vous accompagne à chaque étape pour maximiser votre retour sur investissement.
            </p>
            <p className="mt-4 text-base font-semibold md:text-lg text-black font-roboto">
              Nos solutions sont conçues pour atteindre vos objectifs commerciaux en utilisant les dernières technologies et les meilleures pratiques de l’industrie.
            </p>
            <blockquote className="mt-6 text-lg italic text-gray-500 font-lato">
              "Le marketing digital est la clé de votre succès en ligne."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
