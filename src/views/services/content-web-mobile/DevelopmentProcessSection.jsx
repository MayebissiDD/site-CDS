import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPaintBrush, FaLaptopCode, FaCheckCircle, FaRocket, FaTools } from 'react-icons/fa'; // Import des icônes FontAwesome

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Analyse des Besoins',
      description: 'Nous commençons par comprendre vos besoins spécifiques, en définissant les objectifs et les fonctionnalités clés de votre projet.',
      icon: <FaSearch className="text-3xl text-first-color" />, // Icône de recherche
    },
    {
      title: 'Conception UI/UX',
      description: 'Nous créons des maquettes et des prototypes interactifs pour garantir une expérience utilisateur optimale.',
      icon: <FaPaintBrush className="text-3xl text-first-color" />, // Icône de pinceau
    },
    {
      title: 'Développement',
      description: 'Nos développeurs utilisent les technologies les plus récentes pour transformer les designs en solutions fonctionnelles.',
      icon: <FaLaptopCode className="text-3xl text-first-color" />, // Icône de code
    },
    {
      title: 'Tests et Validation',
      description: 'Nous effectuons des tests rigoureux pour garantir la performance, la sécurité et la compatibilité de votre solution.',
      icon: <FaCheckCircle className="text-3xl text-first-color" />, // Icône de validation
    },
    {
      title: 'Lancement',
      description: 'Nous vous accompagnons dans le déploiement de votre projet, en assurant une transition fluide et réussie.',
      icon: <FaRocket className="text-3xl text-first-color" />, // Icône de lancement
    },
    {
      title: 'Support Continu',
      description: 'Après le lancement, nous restons disponibles pour fournir un support technique et des mises à jour régulières.',
      icon: <FaTools className="text-3xl text-first-color" />, // Icône d'outils
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        {/* Titre de la section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Notre Processus de Développement
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous suivons un processus structuré et transparent pour garantir un produit final de haute qualité, répondant à vos attentes et aux standards de l’industrie.
          </p>
        </motion.div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icône de l'étape */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                {step.icon}
              </div>
              {/* Titre de l'étape */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
              {/* Description de l'étape */}
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
