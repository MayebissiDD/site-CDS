import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPen, faLaptop, faCheck, faTrophy, faTools } from '@fortawesome/free-solid-svg-icons';

function DevelopmentProcessSection() {
  const steps = [
    {
      title: 'Évaluation des Besoins',
      description: 'Nous analysons vos objectifs pour proposer une formation adaptée à vos besoins et à votre niveau.',
      icon: faClipboardList, // Icône Font Awesome
    },
    {
      title: 'Conception du Programme',
      description: 'Nos formateurs élaborent un programme sur mesure, intégrant des exercices pratiques et des études de cas.',
      icon: faPen, // Icône Font Awesome
    },
    {
      title: 'Formation en Ligne ou en Présentiel',
      description: 'Nous proposons des sessions en ligne ou en présentiel, selon vos préférences et vos disponibilités.',
      icon: faLaptop, // Icône Font Awesome
    },
    {
      title: 'Évaluation & Feedback',
      description: 'Nous évaluons vos progrès à chaque étape pour vous offrir un retour d’information constructif.',
      icon: faCheck, // Icône Font Awesome
    },
    {
      title: 'Certification',
      description: 'À l’issue de la formation, vous recevez une certification attestant de vos compétences nouvellement acquises.',
      icon: faTrophy, // Icône Font Awesome
    },
    {
      title: 'Support & Suivi',
      description: 'Nous continuons de vous accompagner après la formation avec des conseils et des ressources supplémentaires.',
      icon: faTools, // Icône Font Awesome
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
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Notre Processus de Formation
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez comment nous concevons et dispensons nos formations pour vous garantir un apprentissage efficace et personnalisé.
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
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-gray-200 rounded-full">
                <FontAwesomeIcon icon={step.icon} className="text-first-color" /> {/* Icône Font Awesome */}
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
