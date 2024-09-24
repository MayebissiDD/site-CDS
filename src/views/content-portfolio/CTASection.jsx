import React from 'react';
import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          className="mb-8 text-3xl font-bold md:text-5xl text-first-color"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Prêt à Transformer Votre Entreprise ?
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-12 text-lg text-gray-600 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à atteindre vos objectifs numériques.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-first-color hover:bg-second-color">
            Demander un Devis Gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
