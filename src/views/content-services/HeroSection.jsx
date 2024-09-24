import React from 'react';
import { motion, useInView } from 'framer-motion';

function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative w-full h-[70vh] flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-walking-towards-a-new-project-9906-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Des{' '}
          <motion.span
            initial={{ backgroundPosition: '200% 0' }}
            animate={{
              backgroundPosition: isInView ? ['200% 0', '-200% 0'] : '200% 0',
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-first-color to-second-color"
          >
            Solutions Numériques
          </motion.span>
          {' '}sur Mesure
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Découvrez comment nous pouvons transformer vos idées en réalité grâce à notre expertise en développement numérique et en gestion de projet.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 bg-first-color hover:bg-second-color text-white font-semibold rounded-md transition duration-300">
            Explorez nos services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
