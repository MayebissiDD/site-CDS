import React from 'react';
import { motion } from 'framer-motion';

function FeaturesSection() {
  const features = [
    {
      title: 'Protection Proactive',
      description: 'Nous mettons en place des solutions de sécurité avancées pour détecter et neutraliser les menaces avant qu\'elles ne causent des dommages.',
      icon: '🛡️',
    },
    {
      title: 'Surveillance Continue',
      description: 'Nos systèmes surveillent vos réseaux 24/7 pour identifier et réagir rapidement aux anomalies et activités suspectes.',
      icon: '🔍',
    },
    {
      title: 'Sécurisation des Données',
      description: 'Nous appliquons les meilleures pratiques en cryptographie et gestion des accès pour garantir la confidentialité de vos informations.',
      icon: '🔒',
    },
    {
      title: 'Mises à Jour de Sécurité',
      description: 'Nous assurons que vos systèmes sont toujours protégés avec les dernières mises à jour et correctifs de sécurité.',
      icon: '🔄',
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
            Caractéristiques Clés en Sécurité Web & Réseaux
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nos solutions de sécurité sont conçues pour offrir une protection complète et évolutive à vos infrastructures numériques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-black-color">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
