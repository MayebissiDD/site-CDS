import React from 'react';
import { motion } from 'framer-motion';

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Analyse des Besoins',
      description: 'Nous commençons par évaluer vos besoins en maintenance pour adapter nos services à votre infrastructure.',
      icon: '🔍',
    },
    {
      title: 'Planification de la Maintenance',
      description: 'Nous élaborons un plan de maintenance préventive pour minimiser les interruptions et maximiser la disponibilité de vos systèmes.',
      icon: '📝',
    },
    {
      title: 'Mise en Œuvre',
      description: 'Nos experts mettent en œuvre les solutions de maintenance selon le plan établi pour garantir une continuité optimale de vos opérations.',
      icon: '🔧',
    },
    {
      title: 'Surveillance et Tests',
      description: 'Nous surveillons vos systèmes en temps réel et effectuons des tests réguliers pour garantir leur bon fonctionnement.',
      icon: '👁️',
    },
    {
      title: 'Optimisation Continue',
      description: 'Nous ajustons continuellement nos services pour répondre à l’évolution de vos besoins et des technologies.',
      icon: '🚀',
    },
    {
      title: 'Support Continu',
      description: 'Nous restons à vos côtés pour fournir un support technique et des mises à jour régulières, assurant ainsi la pérennité de vos systèmes.',
      icon: '💼',
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
            Notre Processus de Maintenance et Support
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous suivons un processus structuré pour vous assurer un service de maintenance et support de la plus haute qualité.
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
