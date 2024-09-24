import React from 'react';
import { motion, useInView } from 'framer-motion';

function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative flex items-center justify-center w-full h-[70vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="https://v3.cdnpk.net/videvo_files/video/free/2020-06/small_preview/introBusinessEtEconomySansText_1591434698.mp4?token=exp=1725039187~hmac=fa0d11b9279672da4dc0a9864e313e8ea94aee7e43ecc2d9e3145d7beb74fb45" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Notre{' '}
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
            Histoire
          </motion.span>
          , Votre{' '}
          <motion.span
            initial={{ backgroundPosition: '-200% 0' }}
            animate={{
              backgroundPosition: isInView ? ['-200% 0', '200% 0'] : '-200% 0',
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-second-color to-first-color"
          >
            Réussite
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Depuis notre création, nous nous engageons à transformer vos idées en solutions numériques innovantes et impactantes.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-first-color hover:bg-second-color">
            Découvrez notre parcours
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
