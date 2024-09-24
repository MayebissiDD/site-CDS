import React from 'react';
import { motion } from 'framer-motion';

function SupportSection() {
  const supportItems = [
    {
      title: 'Support 24/7',
      description: 'Bénéficiez d’un support continu pour gérer vos offres et candidatures, à tout moment.',
      number: '1',
    },
    {
      title: 'Mises à jour régulières',
      description: 'Notre plateforme évolue constamment pour garantir une expérience optimale aux utilisateurs.',
      number: '2',
    },
    {
      title: 'Sécurité des Données',
      description: 'Vos données sont protégées selon les standards de sécurité les plus élevés.',
      number: '3',
    },
    {
      title: 'Documentation Complète',
      description: 'Consultez nos guides et tutoriels pour tirer pleinement parti de nos outils de recrutement.',
      number: '4',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Un Support Dédié Pour Optimiser Vos Recrutements
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Notre équipe vous soutient à chaque étape pour garantir un processus de recrutement fluide et efficace.
          </p>
        </motion.div>

        {/* Support Items */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white border-t-4 rounded-lg shadow-lg border-first-color hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="mb-6 w-16 h-16 mx-auto flex items-center justify-center text-4xl font-bold text-white bg-first-color rounded-full">
                {item.number}
              </div>
              {/* Step Title */}
              <h3 className="mb-4 text-xl font-semibold text-black-color">
                {item.title}
              </h3>
              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 font-lato">
            "Votre réussite commence avec le bon recrutement."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;
