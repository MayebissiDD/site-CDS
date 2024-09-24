import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-3xl font-bold md:text-5xl text-first-color">
            Un Portefolio Unique
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl">
            Bienvenue dans notre portefolio, où chaque projet est une démonstration de notre expertise, de notre créativité et de notre engagement envers l'excellence. Explorez les solutions que nous avons développées pour nos clients et voyez comment nous avons transformé leurs idées en réalités numériques innovantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default IntroductionSection;
