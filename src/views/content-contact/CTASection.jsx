import React from 'react';
import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section className="bg-first-color py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Prêt à faire passer votre entreprise au niveau supérieur ?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contactez-nous dès aujourd'hui pour discuter de vos besoins numériques et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-second-color hover:bg-second-color-2 text-white font-semibold rounded-full transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Demander un devis
        </motion.button>
      </div>
    </section>
  );
}

export default CTASection;
