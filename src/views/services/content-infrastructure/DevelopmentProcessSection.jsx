import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDraftingCompass, faLaptopCode, faCheckCircle, faRocket, faTools } from '@fortawesome/free-solid-svg-icons';

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Évaluation des Besoins Réseau',
      description: 'Nous analysons vos besoins en infrastructure réseau pour définir les objectifs et les fonctionnalités clés.',
      icon: faSearch, // Remplace l'émoji par une icône Font Awesome
    },
    {
      title: 'Conception de l’Architecture Réseau',
      description: 'Nous concevons une architecture réseau sur mesure, garantissant une connectivité et une sécurité optimales.',
      icon: faDraftingCompass, // Remplace l'émoji par une icône Font Awesome
    },
    {
      title: 'Implémentation',
      description: 'Nos ingénieurs réseau déploient les solutions choisies en utilisant les technologies les plus avancées.',
      icon: faLaptopCode, // Remplace l'émoji par une icône Font Awesome
    },
    {
      title: 'Tests et Validation',
      description: 'Nous effectuons des tests rigoureux pour assurer la performance, la sécurité et la fiabilité de l’infrastructure réseau.',
      icon: faCheckCircle, // Remplace l'émoji par une icône Font Awesome
    },
    {
      title: 'Déploiement',
      description: 'Nous vous accompagnons dans le déploiement de votre infrastructure réseau, assurant une transition fluide et réussie.',
      icon: faRocket, // Remplace l'émoji par une icône Font Awesome
    },
    {
      title: 'Support Continu',
      description: 'Après le déploiement, nous restons disponibles pour fournir un support technique et des mises à jour régulières.',
      icon: faTools, // Remplace l'émoji par une icône Font Awesome
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-first-color font-montserrat">
            Notre Processus de Développement Réseau
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous suivons un processus structuré pour assurer une infrastructure réseau performante et adaptée à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200">
                <FontAwesomeIcon icon={step.icon} className="text-3xl text-first-color" /> {/* Utilisation de Font Awesome */}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
