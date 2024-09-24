import React from 'react';
import { motion, useInView } from 'framer-motion';

function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center w-full h-[70vh] bg-gradient-to-r from-first-color to-second-color"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-technology-31530-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Découvrez Notre{' '}
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
            className="text-transparent bg-clip-text bg-gradient-to-r from-second-color to-first-color"
          >
            Portefolio
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explorez nos réalisations les plus récentes et découvrez comment nous transformons les idées en réalité numérique.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold transition duration-300 bg-white rounded-md text-black-color hover:bg-second-color hover:text-white">
            En savoir plus
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;