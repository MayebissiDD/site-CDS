import React from 'react';
import { motion, useInView } from 'framer-motion';
import contactImage from './../../assets/images/service/contact.jpg'; // Import de l'image

function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  const handleScrollToContactForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative flex items-center justify-center w-full h-[70vh]"> {/* Hauteur réduite */}
      {/* Image de fond à la place de la vidéo */}
      <img
        src={contactImage}
        alt="Contact"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous pour{' '}
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
            vos projets
          </motion.span>{' '}
          de{' '}
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
            transformation digitale
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nous sommes ici pour vous accompagner dans chaque étape de votre projet numérique.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-first-color hover:bg-second-color"
            onClick={handleScrollToContactForm}
          >
            En savoir plus
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
