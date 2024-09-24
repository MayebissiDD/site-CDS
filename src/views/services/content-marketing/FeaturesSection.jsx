import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBullseye, FaSearch, FaComments } from 'react-icons/fa'; // Import des icônes FontAwesome

function FeaturesSection() {
  const features = [
    {
      title: 'Visibilité Accrue',
      description: 'Augmentez votre visibilité en ligne avec des stratégies de marketing digital ciblées et efficaces.',
      icon: <FaChartLine className="text-5xl text-second-color" />, // Icône de graphique
    },
    {
      title: 'Publicité Ciblée',
      description: 'Atteignez votre audience idéale grâce à des campagnes publicitaires précises et bien segmentées.',
      icon: <FaBullseye className="text-5xl text-second-color" />, // Icône de cible
    },
    {
      title: 'Optimisation SEO',
      description: 'Améliorez votre positionnement sur les moteurs de recherche pour attirer plus de trafic qualifié.',
      icon: <FaSearch className="text-5xl text-second-color" />, // Icône de recherche
    },
    {
      title: 'Engagement sur les Réseaux Sociaux',
      description: 'Renforcez votre présence sur les réseaux sociaux avec du contenu engageant et une interaction continue.',
      icon: <FaComments className="text-5xl text-second-color" />, // Icône de commentaires
    },
  ];

  return (
    <section className="py-16 bg-gray-100"> {/* Ajout du fond gris */}
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-second-color font-montserrat">
            Caractéristiques Clés
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez les fonctionnalités qui rendent notre service de marketing digital incontournable pour atteindre vos objectifs commerciaux.
          </p>
        </motion.div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icône de la fonctionnalité */}
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              {/* Titre et description */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
