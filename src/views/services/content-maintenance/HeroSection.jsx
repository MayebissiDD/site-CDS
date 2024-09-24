import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r from-first-color to-second-color">
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Maintenance et Support Technique
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Assurez la pérennité et la performance de vos systèmes avec nos services de maintenance proactive et de support 24/7.
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
