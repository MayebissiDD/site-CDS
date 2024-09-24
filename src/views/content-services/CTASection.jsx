import React from 'react';
import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section className="py-16 text-white bg-first-color">
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-8 text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Prêt à Transformer Votre Entreprise ?
        </motion.h2>
        <motion.p
          className="mb-8 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos services peuvent vous aider à atteindre vos objectifs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-second-color hover:bg-second-color-2">
            Demandez un Devis Gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
