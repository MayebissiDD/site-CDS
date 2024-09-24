import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFileAlt, FaBullseye, FaCheckCircle, FaRocket, FaTools } from 'react-icons/fa'; // FontAwesome

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Analyse des Besoins',
      description: 'Nous analysons vos exigences en recrutement afin de trouver les talents les mieux adaptés à vos objectifs.',
      icon: <FaSearch className="text-first-color w-10 h-10" />,
    },
    {
      title: 'Publication de l’Offre',
      description: 'Rédigez et diffusez des offres d’emploi attractives avec des critères adaptés pour attirer les candidats idéaux.',
      icon: <FaFileAlt className="text-first-color w-10 h-10" />,
    },
    {
      title: 'Sélection des Candidats',
      description: 'Grâce à nos outils avancés de filtrage, identifiez rapidement les candidats les plus qualifiés.',
      icon: <FaBullseye className="text-first-color w-10 h-10" />,
    },
    {
      title: 'Entretien et Validation',
      description: 'Nous vous accompagnons dans l’organisation d’entretiens efficaces et la validation des compétences des candidats.',
      icon: <FaCheckCircle className="text-first-color w-10 h-10" />,
    },
    {
      title: 'Intégration des Talents',
      description: 'Facilitez l’intégration de vos nouveaux talents grâce à un suivi personnalisé et des conseils d’intégration.',
      icon: <FaRocket className="text-first-color w-10 h-10" />,
    },
    {
      title: 'Support Continu',
      description: 'Nous assurons un suivi continu après l’embauche pour garantir la satisfaction des talents et de votre équipe.',
      icon: <FaTools className="text-first-color w-10 h-10" />,
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
            Notre Processus de Recrutement
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Un processus structuré, rapide et efficace pour trouver les meilleurs talents et garantir leur intégration réussie dans votre équipe.
          </p>
        </motion.div>

        {/* Grid des étapes du processus */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white border-t-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-first-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icône et étape */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100">
                {step.icon} {/* Icône FontAwesome */}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-black-color">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
