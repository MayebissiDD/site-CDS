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
            <h2 className="text-2xl font-bold md:text-4xl text-first-color font-montserrat">
            Pourquoi Opter pour la Gestion Électronique de Documents ?
            </h2>
            <p className="mt-6 text-base text-gray-700 md:text-lg font-roboto">
            La gestion électronique de documents (GED) permet de centraliser, sécuriser et accéder rapidement à toutes vos archives numériques. Nos formations vous préparent à optimiser ces systèmes pour une efficacité maximale.</p>
            <p className="mt-6 text-base text-gray-700 md:text-lg font-roboto">
            Que vous soyez un administrateur GED ou un gestionnaire d'archives, nos programmes de formation couvrent toutes les compétences essentielles pour gérer efficacement vos documents numériques. </p>
            <p className="mt-4 text-base font-semibold md:text-lg text-black font-roboto">
            Nos formateurs sont des experts en gestion de documents, prêts à vous former avec des pratiques actuelles et des outils de pointe. </p>
            <blockquote className="mt-8 text-xl italic text-gray-500 font-lato">
            "Maîtrisez vos archives aujourd'hui pour mieux gérer demain."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>



   
  );
}

export default IntroductionSection;
