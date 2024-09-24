import React from 'react';
import { motion } from 'framer-motion';

function WhyChooseUsSection() {
  const points = [
    { text: 'Expertise Technique Avancée', color: '#0B519B' },
    { text: 'Équipe Créative', color: '#EA5B0C' },
    { text: 'Tarification Abordable', color: '#2E7D32' },
    { text: 'Assurance Qualité', color: '#C62828' },
    { text: 'Support Rapide', color: '#FFB300' },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* <motion.h2
          className="text-3xl md:text-5xl font-bold text-first-color mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pourquoi Nous Choisir ?
        </motion.h2> */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="flex flex-col items-center md:w-1/4">
            <div className="w-40 h-40 p-3 bg-first-color rounded-full flex items-center justify-center mb-4">
              <motion.span
                className="text-white text-xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Pourquoi Nous Choisir ?
              </motion.span>
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ backgroundColor: point.color }}
              >
                <div className="py-4 px-6 flex items-center text-white">
                  <span className="text-lg md:text-xl font-semibold">{point.text}</span>
                </div>
                <div className="bg-white text-second-color py-4 px-6">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
