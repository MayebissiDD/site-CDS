import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaLock, FaSyncAlt } from 'react-icons/fa'; // Import des icônes FontAwesome

function FeaturesSection() {
  const features = [
    {
      title: 'Performance Optimale',
      description: 'Nos applications sont conçues pour offrir une performance maximale, garantissant une expérience utilisateur fluide et réactive.',
      icon: <FaRocket className="text-5xl text-first-color" />, // Icône de fusée
    },
    {
      title: 'Design Réactif',
      description: 'Des designs modernes et réactifs qui s’adaptent à tous les appareils, pour une expérience utilisateur optimale sur mobile, tablette et desktop.',
      icon: <FaMobileAlt className="text-5xl text-first-color" />, // Icône de mobile
    },
    {
      title: 'Sécurité Renforcée',
      description: 'Nous intégrons les dernières technologies de sécurité pour protéger vos données et celles de vos utilisateurs.',
      icon: <FaLock className="text-5xl text-first-color" />, // Icône de cadenas
    },
    {
      title: 'Mise à Jour Continue',
      description: 'Nos solutions évoluent avec votre entreprise grâce à des mises à jour régulières et des améliorations continues.',
      icon: <FaSyncAlt className="text-5xl text-first-color" />, // Icône de synchronisation
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        {/* Section Title */}
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
            Découvrez les caractéristiques qui rendent nos solutions uniques et adaptées à vos besoins.
          </p>
        </motion.div>

        {/* Features Grid */}
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
              {/* Feature Icon */}
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              {/* Feature Title */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              {/* Feature Description */}
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
