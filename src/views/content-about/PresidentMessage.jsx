import React from 'react';
import { motion } from 'framer-motion';
import PicGeoffroy from './../../assets/images/teams/geofroy_dibakala1.jpg';

function PresidentMessage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
      <motion.h2
          className="text-3xl md:text-4xl font-bold text-black-color mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Mot du <span className="text-first-color">Président</span>
      </motion.h2>

        {/* Jumbotron avec texte à gauche et image à droite */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 rounded-md shadow-sm max-w-4xl mx-auto">
          {/* Texte à gauche */}
          <motion.div
            className="md:w-1/2 md:pr-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              C'est avec un immense honneur et une profonde gratitude que je vous adresse ce message.
              Depuis nos débuts, notre engagement à innover et à offrir des solutions numériques de
              qualité a été inébranlable. Rejoignez-nous dans cette aventure et partagez cette passion
              pour l'excellence.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-800 font-semibold">
              Geoffroy Michel DIBAKALA <br /> Président
            </p>
            <blockquote className="mt-6 text-sm italic text-gray-500">
              "L'innovation distingue les leaders des suiveurs, et notre mission est d'être toujours à
              l'avant-garde pour vous."
            </blockquote>
          </motion.div>

          {/* Image à droite avec mêmes proportions que celle du Directeur Général */}
          <motion.div
            className="md:w-1/2 flex-shrink-0 mb-6 md:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={PicGeoffroy}
              alt="Président"
              className="w-65 h-150 object-cover border-2 mx-auto md:mr-0 shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PresidentMessage;
