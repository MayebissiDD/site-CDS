import React from 'react';
import { motion } from 'framer-motion';
import PicFred from './../../assets/images/teams/fred_kaya1.jpg';

function DirectorMessage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black-color mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Message du <span className="text-first-color">Directeur Général</span>
        </motion.h2>

        {/* Jumbotron plus petit avec image et texte */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 rounded-md shadow-sm max-w-4xl mx-auto">
          {/* Image à gauche */}
          <motion.div
            className="md:w-1/2 flex-shrink-0 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={PicFred}
              alt="Directeur Général"
              className="w-full h-auto object-cover border-2 shadow-md"
            />
          </motion.div>

          {/* Texte à droite */}
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              En tant que Directeur Général, je suis fier de la direction que prend notre entreprise.
              Chaque jour, nous relevons de nouveaux défis pour rester à la pointe de l'innovation et
              offrir à nos clients des solutions qui répondent à leurs besoins les plus exigeants.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-800 font-semibold">
              Fred Arly KAYA <br /> Directeur Général
            </p>
            <blockquote className="mt-6 text-sm italic text-gray-500">
              "Le succès repose sur notre capacité à anticiper les besoins futurs tout en restant
              connectés aux réalités actuelles."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DirectorMessage;
