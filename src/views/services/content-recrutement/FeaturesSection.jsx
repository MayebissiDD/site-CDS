import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFilter, faLock, faHeadset } from '@fortawesome/free-solid-svg-icons';

function FeaturesSection() {
  const features = [
    {
      title: 'Grande Base de Talents',
      description: 'Explorez une base de candidats diversifiés, prêts à répondre aux besoins de votre entreprise.',
      icon: <FontAwesomeIcon icon={faUsers} className="w-12 h-12 text-first-color" />,
    },
    {
      title: 'Filtrage Efficace',
      description: 'Trouvez les candidats idéaux rapidement grâce à nos outils avancés de filtrage et de sélection.',
      icon: <FontAwesomeIcon icon={faFilter} className="w-12 h-12 text-first-color" />,
    },
    {
      title: 'Sécurité Maximale',
      description: 'Protégez les données de vos candidats et de votre entreprise avec nos solutions de sécurité renforcées.',
      icon: <FontAwesomeIcon icon={faLock} className="w-12 h-12 text-first-color" />,
    },
    {
      title: 'Support 24/7',
      description: 'Bénéficiez d’une assistance continue à chaque étape du processus de recrutement.',
      icon: <FontAwesomeIcon icon={faHeadset} className="w-12 h-12 text-first-color" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
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
            Nos Atouts Majeurs
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez pourquoi Congo Digital Job est l'allié idéal pour le recrutement de vos futurs collaborateurs.
          </p>
        </motion.div>

        {/* Grid des fonctionnalités */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-gray-100 rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-6">
                {feature.icon}
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
}

export default FeaturesSection;
