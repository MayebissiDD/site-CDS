
import React from 'react';
import { motion } from 'framer-motion';

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Analyse des Risques',
      description: 'Nous identifions les vulnérabilités potentielles et les menaces spécifiques à votre infrastructure pour mieux les contrer.',
      icon: '🔍',
    },
    {
      title: 'Planification Stratégique',
      description: 'Nous élaborons des stratégies de sécurité adaptées à vos besoins pour garantir une protection maximale.',
      icon: '📋',
    },
    {
      title: 'Implémentation des Solutions',
      description: 'Nos experts déploient les technologies de sécurité les plus avancées pour protéger vos systèmes.',
      icon: '💻',
    },
    {
      title: 'Tests de Sécurité',
      description: 'Nous effectuons des tests rigoureux pour identifier et corriger les failles éventuelles.',
      icon: '✅',
    },
    {
      title: 'Surveillance Continue',
      description: 'Nous mettons en place une surveillance proactive pour détecter et réagir rapidement aux menaces.',
      icon: '📈',
    },
    {
      title: 'Support & Maintenance',
      description: 'Nous assurons un support constant et des mises à jour régulières pour maintenir la sécurité de vos systèmes.',
      icon: '🔧',
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
            Notre Processus de Sécurité Web & Réseaux
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous adoptons une approche complète pour sécuriser vos infrastructures, en suivant un processus structuré qui garantit la protection de vos actifs numériques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white border-t-4 rounded-lg shadow-lg border-first-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-gray-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black-color">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;