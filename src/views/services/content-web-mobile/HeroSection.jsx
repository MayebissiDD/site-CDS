import React from 'react';
import { motion } from 'framer-motion';
import picimg6 from './../../../assets/images/service/web.jpg';

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center w-full h-[70vh] bg-gradient-to-r from-first-color to-second-color"
      style={{
        backgroundImage: `url(${picimg6})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-first-color to-second-color opacity-80"></div> {/* Dégradé avec opacité ajustée */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Développement Web & Mobile
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Créez des applications performantes et des sites web sur mesure pour répondre aux besoins spécifiques de votre entreprise.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold transition duration-300 bg-white rounded-md text-black-color hover:bg-second-color hover:text-white">
            Découvrez nos réalisations
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
