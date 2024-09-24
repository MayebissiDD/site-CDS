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
              src="https://img.freepik.com/free-vector/programmer-working-computer-flat-design_23-2148223198.jpg"
              alt="Développement Web & Mobile"
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
            <h2 className="text-2xl font-bold md:text-4xl text-first-color font-montserrat">
              Pourquoi Choisir Notre Service de Développement Web & Mobile ?
            </h2>
          
            <p className="mt-6 text-base text-gray-700 md:text-lg font-roboto">
            Nous transformons vos idées en <span className="font-bold">applications web et mobiles</span> performantes, adaptées aux besoins spécifiques de votre entreprise.
              Que vous souhaitiez développer un site e-commerce, une application mobile, ou un portail d’entreprise, notre équipe vous accompagne à chaque étape, de la conception à la mise en production, en utilisant les technologies les plus récentes et les meilleures pratiques de l’industrie.
            </p>
            <p className="mt-4 text-base font-semibold md:text-lg text-black font-roboto">
              Nos solutions sont conçues pour offrir une expérience optimale sur toutes les plateformes, assurant la qualité, la performance et l'esthétique de chaque projet.
            </p>
            <blockquote className="mt-6 text-lg italic text-gray-500 font-lato">
              "L'innovation au service de votre succès digital."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
