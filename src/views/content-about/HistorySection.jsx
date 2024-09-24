import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'particles.js';

function HistorySection() {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        color: {
          value: ['#0B519B', '#EA5B0C'],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          out_mode: 'out',
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#0B519B',
          opacity: 0.5,
          width: 1,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full h-[70vh] bg-white flex items-center justify-center">
      <div id="particles-js" className="absolute inset-0 z-0"></div> {/* Particles.js Container */}

      <div className="relative z-20 max-w-3xl mx-auto text-center p-4 md:p-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black-color mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Congo Digital Services : <span className="text-first-color">Une Alliance Visionnaire</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-base md:text-xl text-black-color max-w-3xl mx-auto leading-relaxed"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fondée en 2024, <span className="text-second-color">Congo Digital Services</span> est le fruit de l'union entre <strong className="text-first-color">WyMee</strong> et <strong className="text-second-color">GEOMID</strong>. Ensemble, Fred Arly Kaya et Geoffroy Michel Dibakala ont créé cette structure pour catalyser la transformation numérique en Afrique.
        </motion.p>
      </div>
    </section>
  );
}

export default HistorySection;
