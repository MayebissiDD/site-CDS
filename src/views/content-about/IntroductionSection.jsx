import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 font-montserrat"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-black-color">Présentation</span>{' '}
          <span className="text-first-color">de l'entreprise</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed font-lato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Depuis notre création, nous avons pour mission de transformer des idées novatrices en solutions numériques impactantes. Notre engagement est de fournir une expertise exceptionnelle, en alignant chaque projet sur les besoins et les objectifs de nos clients.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4">🎯</div> {/* Émoji pour la Mission */}
              <h3 className="text-xl font-bold text-first-color font-poppins">
                Notre Mission
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 font-roboto">
                Apporter des solutions sur mesure, adaptées aux besoins spécifiques de chaque client.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4">💡</div> {/* Émoji pour les Valeurs */}
              <h3 className="text-xl font-bold text-second-color font-poppins">
                Nos Valeurs
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 font-roboto">
                Intégrité, innovation et excellence dans tout ce que nous faisons.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4">🚀</div> {/* Émoji pour la Vision */}
              <h3 className="text-xl font-bold text-first-color font-poppins">
                Notre Vision
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 font-roboto">
                Devenir un leader incontournable dans le domaine des solutions numériques.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default IntroductionSection;
