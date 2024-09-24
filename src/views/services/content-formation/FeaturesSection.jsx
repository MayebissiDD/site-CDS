import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLaptop, FaLock, FaSyncAlt } from 'react-icons/fa'; // FontAwesome icons

function FeaturesSection() {
  const features = [
    {
      title: 'Performance Optimale',
      description: 'Nos applications sont conçues pour offrir une performance maximale, garantissant une expérience utilisateur fluide et réactive.',
      icon: <FaRocket className="text-5xl text-second-color" />, // Icône FontAwesome
    },
    {
      title: 'Design Réactif',
      description: 'Des designs modernes et réactifs qui s’adaptent à tous les appareils, pour une expérience utilisateur optimale sur mobile, tablette et desktop.',
      icon: <FaLaptop className="text-5xl text-second-color" />, // Icône FontAwesome
    },
    {
      title: 'Sécurité Renforcée',
      description: 'Nous intégrons les dernières technologies de sécurité pour protéger vos données et celles de vos utilisateurs.',
      icon: <FaLock className="text-5xl text-second-color" />, // Icône FontAwesome
    },
    {
      title: 'Mise à Jour Continue',
      description: 'Nos solutions évoluent avec votre entreprise grâce à des mises à jour régulières et des améliorations continues.',
      icon: <FaSyncAlt className="text-5xl text-second-color" />, // Icône FontAwesome
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* En-tête de section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Nos Caractéristiques Clés
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez les éléments qui distinguent nos solutions, alliant performance, sécurité et adaptabilité pour une expérience optimale.
          </p>
        </motion.div>

        {/* Grid des fonctionnalités */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white border-t-4 border-second-color rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icône centrée */}
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-black-color">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
