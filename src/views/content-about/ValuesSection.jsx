import React from 'react';
import { motion } from 'framer-motion';

function ValuesSection() {
  const values = [
    {
      title: 'Intégrité',
      description: 'Nous croyons en la transparence et l’honnêteté dans toutes nos interactions.',
      icon: 'https://via.placeholder.com/100',
    },
    {
      title: 'Innovation',
      description: 'Nous sommes passionnés par la création de nouvelles solutions et l’amélioration continue.',
      icon: 'https://via.placeholder.com/100',
    },
    {
      title: 'Excellence',
      description: 'Nous visons l’excellence dans chaque projet que nous entreprenons.',
      icon: 'https://via.placeholder.com/100',
    },
    {
      title: 'Respect',
      description: 'Nous valorisons chaque personne et chaque idée, en respectant les contributions de chacun.',
      icon: 'https://via.placeholder.com/100',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 font-montserrat text-black-color"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nos Valeurs
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed font-lato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nos valeurs sont au cœur de tout ce que nous faisons. Elles guident nos décisions, nos actions et notre engagement envers nos clients.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <img src={value.icon} alt={value.title} className="w-20 h-20 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-first-color font-poppins">
                {value.title}
              </h3>
              <p className="text-gray-600 mt-2 font-roboto">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
