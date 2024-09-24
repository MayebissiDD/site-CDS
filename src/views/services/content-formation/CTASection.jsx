import React from 'react';
import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section className="py-16 bg-first-color">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl font-montserrat">
            Inscrivez-vous à Nos Formations Aujourd'hui !
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-white md:text-xl font-lato">
            Vous souhaitez acquérir des compétences essentielles et vous préparer pour l'avenir ? Contactez-nous dès maintenant pour vous inscrire à nos programmes de formation et démarrez votre parcours vers le succès.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="px-8 py-4 font-semibold text-white transition duration-300 rounded-md shadow-lg bg-second-color hover:bg-second-color-2"
          >
            Contactez-Nous pour Vous Inscrire
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
