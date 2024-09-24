import React from 'react';
import { motion } from 'framer-motion';

function FeaturesSection() {
  const features = [
    {
      title: 'Formateurs Experts',
      description: 'Nos formations sont dispensées par des professionnels expérimentés, experts dans leurs domaines.',
      icon: '🎓',
    },
    {
      title: 'Accès à Distance',
      description: 'Suivez nos formations où que vous soyez, grâce à une plateforme en ligne intuitive et réactive.',
      icon: '🌐',
    },
    {
      title: 'Certifications Reconnaissantes',
      description: 'Obtenez des certifications reconnues qui attestent de vos compétences et vous ouvrent de nouvelles opportunités.',
      icon: '📜',
    },
    {
      title: 'Supports Pédagogiques Complets',
      description: 'Accédez à des supports de cours détaillés et des ressources complémentaires pour approfondir vos connaissances.',
      icon: '📚',
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
            Caractéristiques Clés de Nos Formations
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez les atouts de nos programmes de formation qui vous permettront de développer vos compétences et d'atteindre vos objectifs professionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-black-color">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;


