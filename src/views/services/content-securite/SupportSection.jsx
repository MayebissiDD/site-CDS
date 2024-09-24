import React from 'react';
import { motion } from 'framer-motion';

function SupportSection() {
  const supportItems = [
    {
      title: 'Surveillance en Temps Réel',
      description: 'Nous surveillons vos systèmes 24/7 pour détecter et prévenir les menaces avant qu’elles n’affectent vos opérations.',
      icon: '📡',
    },
    {
      title: 'Mises à Jour de Sécurité',
      description: 'Nous appliquons les dernières mises à jour de sécurité pour garantir que vos systèmes restent à jour face aux nouvelles menaces.',
      icon: '🔄',
    },
    {
      title: 'Tests de Pénétration',
      description: 'Nous effectuons des tests de pénétration réguliers pour identifier les vulnérabilités et renforcer la sécurité de vos systèmes.',
      icon: '🔐',
    },
    {
      title: 'Formation en Cybersécurité',
      description: 'Nous proposons des sessions de formation pour sensibiliser vos équipes aux bonnes pratiques en matière de sécurité.',
      icon: '🎓',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Un Support de Sécurité Dédié
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous sommes là pour vous accompagner à chaque étape, en vous offrant un support de sécurité complet et proactif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white border-t-4 rounded-lg shadow-lg border-first-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-black-color">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 font-lato">
            "La sécurité n'est pas une option, c'est une nécessité."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;