import React from 'react';
import { motion } from 'framer-motion';

function SupportSection() {
  const supportItems = [
    {
      title: 'Accompagnement Personnalisé',
      description: 'Nos formateurs vous guident à chaque étape pour vous assurer une progression continue.',
      icon: '🎓',
    },
    {
      title: 'Mises à Jour du Contenu',
      description: 'Accédez aux dernières informations et aux pratiques actuelles avec des mises à jour régulières.',
      icon: '📚',
    },
    {
      title: 'Ressources en Ligne',
      description: 'Des supports de cours, vidéos et exercices pratiques disponibles à tout moment.',
      icon: '💻',
    },
    {
      title: 'Support Technique',
      description: 'Bénéficiez d’un support technique pour résoudre tous les problèmes que vous pourriez rencontrer durant votre apprentissage.',
      icon: '🛠️',
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
            Un Support Complet Pour Votre Réussite
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous sommes dédiés à vous offrir un accompagnement et des ressources qui maximisent vos chances de succès dans votre parcours de formation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-black-color">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
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
            "Votre réussite est notre priorité."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;
