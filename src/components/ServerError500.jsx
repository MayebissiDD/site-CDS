import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo/logo.png';

function ServerError500() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <motion.img
          src={Logo}
          alt="Congo Digital Services"
          className="w-24 h-24 mx-auto mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.h1
          className="mb-4 text-5xl font-bold text-first-color"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          500
        </motion.h1>
        <motion.p
          className="mb-6 text-lg text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Oups ! Une erreur est survenue sur le serveur.
        </motion.p>
        <motion.div
          className="relative flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-16 h-16">
            <motion.div
              className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full animate-pulse"
            >
              <span className="text-2xl font-bold">💥</span>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">500</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/"
            className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-first-color hover:bg-second-color"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ServerError500;
