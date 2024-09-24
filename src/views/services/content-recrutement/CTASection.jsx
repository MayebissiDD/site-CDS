import React from 'react';
import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section className="py-16 bg-first-color">
      <div className="container px-4 mx-auto text-center">
        {/* Texte de l'appel à l'action */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl font-montserrat">
            Recrutez Aujourd'hui les Talents qui Façonneront Demain
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-white md:text-xl font-lato">
            Ne laissez pas passer l'opportunité de renforcer votre équipe avec des talents qualifiés. Prenez contact avec nous pour publier vos offres ou explorez notre plateforme pour découvrir nos services.
          </p>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="px-8 py-4 font-semibold text-white transition duration-300 rounded-md shadow-lg bg-second-color hover:bg-second-color-2"
          >
            Contactez-Nous
          </a>
          <a
            href="/platform"
            className="px-8 py-4 font-semibold text-first-color bg-white transition duration-300 rounded-md shadow-lg hover:bg-gray-200"
          >
            Visitez Notre Plateforme
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
