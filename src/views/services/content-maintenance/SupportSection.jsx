import React from 'react';
import { motion } from 'framer-motion';

function SupportSection() {
  const supportItems = [
    {
      title: 'Support 24/7',
      description: 'Nous sommes disponibles à tout moment pour répondre à vos besoins, que ce soit par téléphone, chat ou email.',
      icon: '📞',
    },
    {
      title: 'Mises à jour régulières',
      description: 'Profitez des dernières mises à jour et améliorations pour maintenir vos systèmes à jour et sécurisés.',
      icon: '🔄',
    },
    {
      title: 'Sécurité renforcée',
      description: 'Nous mettons en place les meilleures pratiques pour sécuriser vos infrastructures et protéger vos données.',
      icon: '🔐',
    },
    {
      title: 'Documentation complète',
      description: 'Accédez à une documentation détaillée pour comprendre et exploiter toutes les fonctionnalités de vos systèmes.',
      icon: '📚',
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
            Un Support Dédié Pour Assurer Votre Tranquillité d'Esprit
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Notre engagement ne s'arrête pas à la livraison de votre projet. Nous vous offrons un support continu pour garantir la pérennité et la sécurité de vos infrastructures.
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
            "Le véritable service commence après la livraison. C'est là que nous faisons la différence."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;
