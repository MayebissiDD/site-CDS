import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock, faChartLine, faTools } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Connectivité Haute Performance',
      description: 'Des réseaux rapides et fiables, conçus pour répondre aux besoins de votre entreprise en toute efficacité.',
      icon: faGlobe,
    },
    {
      title: 'Sécurité Réseau Avancée',
      description: 'Des solutions de sécurité robustes pour protéger vos infrastructures contre toutes menaces cybernétiques.',
      icon: faLock,
    },
    {
      title: 'Évolutivité',
      description: 'Nos infrastructures s’adaptent à la croissance de votre entreprise et accueillent facilement de nouvelles technologies.',
      icon: faChartLine,
    },
    {
      title: 'Support Continu',
      description: 'Un support technique proactif et constant pour garantir la performance optimale de votre réseau.',
      icon: faTools,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"> {/* Effet dégradé pour le fond */}
      <div className="container px-6 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-first-color font-montserrat">
            Caractéristiques Clés
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700 md:text-xl font-lato">
            Nos solutions réseau sont conçues pour être performantes, évolutives et sécurisées, afin de répondre à vos besoins en constante évolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="mb-5 text-5xl text-first-color">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black-color">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
