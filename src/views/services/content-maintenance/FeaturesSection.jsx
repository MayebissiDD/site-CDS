import React from 'react';
import { motion } from 'framer-motion';

function FeaturesSection() {
  const features = [
    {
      title: 'Support 24/7',
      description: 'Notre équipe est disponible à toute heure pour vous assister et répondre à vos besoins techniques.',
      icon: '📞',
    },
    {
      title: 'Surveillance Proactive',
      description: 'Nous surveillons vos systèmes en temps réel pour détecter et résoudre les problèmes avant qu’ils n’affectent vos opérations.',
      icon: '👁️',
    },
    {
      title: 'Mises à Jour Régulières',
      description: 'Nous assurons la mise à jour continue de vos systèmes pour garantir leur performance et sécurité.',
      icon: '🔄',
    },
    {
      title: 'Sécurité Renforcée',
      description: 'Nos pratiques de sécurité protègent vos données sensibles contre les menaces et les cyberattaques.',
      icon: '🔒',
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
            Nos Services de Maintenance et Support
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez les fonctionnalités qui rendent notre service de maintenance et support indispensable pour la pérennité de vos systèmes.
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
