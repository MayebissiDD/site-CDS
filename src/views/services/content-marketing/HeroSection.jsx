import React from 'react';
import { motion } from 'framer-motion';
import marketingImg from './../../../assets/images/service/marketing.jpg';

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center w-full h-[70vh] bg-gradient-to-r from-first-color to-second-color"
      style={{
        backgroundImage: `url(${marketingImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-first-color to-second-color opacity-80"></div> {/* Dégradé avec opacité */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Marketing Digital
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Boostez votre visibilité en ligne et atteignez vos objectifs commerciaux grâce à des stratégies marketing innovantes et ciblées.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold transition duration-300 bg-white rounded-md text-black-color hover:bg-second-color hover:text-white">
            Découvrez nos services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
