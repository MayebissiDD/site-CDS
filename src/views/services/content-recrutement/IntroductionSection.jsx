import React from 'react';
import { motion } from 'framer-motion';
import jobImage from './../../../assets/images/service/job.png'; // Import de l'image

function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mt-12 md:flex-row">
          {/* Image de recrutement optimisée */}
          <motion.div
            className="md:w-1/3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={jobImage}
              alt="Recrutement Congo Digital Job"
              className="w-64 h-64 mx-auto rounded-full" // Suppression de shadow-lg
            />
          </motion.div>

          {/* Texte amélioré */}
          <motion.div
            className="mt-8 md:w-2/3 md:pl-12 md:mt-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h4 className="text-2xl font-bold md:text-3xl text-first-color font-montserrat">
              Recrutez les meilleurs talents avec Congo Digital Job 
            </h4>
            <h4 className="text-2xl font-bold md:text-3xl text-second-color font-montserrat">
              Trouvez le meilleur emploi avec Congo Digital Job 
            </h4>
            <p className="mt-4 text-lg text-gray-600 md:text-xl font-lato">
              Une plateforme intuitive et fiable pour connecter entreprises et candidats. Nous aidons les entreprises à trouver les talents parfaits, et les candidats à découvrir des opportunités prometteuses.
            </p>
            <p className="mt-4 text-lg font-semibold md:text-xl text-black-color font-roboto">
              Simplifiez votre recrutement, et trouvez les bons profils, rapidement et efficacement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
