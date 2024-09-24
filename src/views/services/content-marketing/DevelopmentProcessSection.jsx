import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaPen, FaLightbulb, FaTools, FaBullhorn } from 'react-icons/fa'; // Import FontAwesome icons

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Analyse de Marché',
      description: 'Nous commençons par une analyse approfondie de votre marché, de vos concurrents, et de votre audience pour identifier les meilleures opportunités.',
      icon: <FaChartLine />, // Utilisation de FontAwesome
    },
    {
      title: 'Stratégie de Contenu',
      description: 'Nous élaborons une stratégie de contenu ciblée pour engager votre audience et renforcer votre présence en ligne.',
      icon: <FaPen />, // Utilisation de FontAwesome
    },
    {
      title: 'Campagnes Publicitaires',
      description: 'Nous mettons en place des campagnes publicitaires sur les plateformes les plus adaptées à votre audience pour maximiser votre retour sur investissement.',
      icon: <FaBullhorn />, // Utilisation de FontAwesome
    },
    {
      title: 'Optimisation SEO/SEA',
      description: 'Nous optimisons votre site web pour les moteurs de recherche (SEO) et gérons vos campagnes publicitaires (SEA) pour améliorer votre visibilité.',
      icon: <FaSearch />, // Utilisation de FontAwesome
    },
    {
      title: 'Analyse et Reporting',
      description: 'Nous analysons les performances de vos campagnes et fournissons des rapports détaillés pour ajuster et améliorer continuellement les résultats.',
      icon: <FaChartLine />, // Utilisation de FontAwesome
    },
    {
      title: 'Support et Optimisation Continue',
      description: 'Nous assurons un suivi et une optimisation continue de vos stratégies marketing pour garantir un succès durable.',
      icon: <FaTools />, // Utilisation de FontAwesome
    },
  ];

  return (
    <section className="py-16 bg-gray-100"> {/* Fond gris */ }
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-second-color font-montserrat">
            Notre Processus Marketing Digital
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous suivons un processus structuré et efficace pour vous aider à atteindre vos objectifs marketing et à maximiser votre retour sur investissement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> {/* Amélioration des colonnes */ }
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg" // Suppression de 'border-t-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-gray-200 text-second-color rounded-full">
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
