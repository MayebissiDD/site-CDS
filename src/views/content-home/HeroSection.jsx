import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-[70vh] bg-first-color-2 dark:bg-black-color">
            <div id="particles-js" className="absolute inset-0 z-10" />
            <motion.div
                className="z-20 text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1 className="mb-4 text-5xl font-bold">
                    Bienvenue chez <span className="text-second-color">Congo Digital</span>{' '}
                    <span className="text-white">Services</span>
                </h1>
                <p className="mb-8 text-xl text-gray-300">
                    Transcendez votre présence digitale avec nos solutions innovantes.
                </p>
                <motion.a
                    href="#services"
                    className="inline-block px-8 py-3 text-lg text-white transition-colors duration-300 rounded-full bg-second-color hover:bg-second-color-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    Nos Services
                </motion.a>
            </motion.div>
        </div>
    );
};

export default HeroSection