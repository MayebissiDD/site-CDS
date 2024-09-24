import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mt-12 md:flex-row text-center">
          <motion.div
            className="md:w-full"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
              L'Importance de la Formation Professionnelle
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
              Se former est essentiel dans un monde en constante évolution. Que vous soyez étudiant ou professionnel, 
              acquérir de nouvelles compétences est la clé pour rester compétitif et faire progresser votre carrière.
            </p>
            <p className="mt-8 text-lg text-gray-700 md:text-xl font-roboto">
              Nous proposons une gamme complète de formations professionnalisantes adaptées à tous les niveaux, que vous soyez en début de carrière ou un professionnel expérimenté cherchant à se perfectionner. Nos formations couvrent divers domaines, de la technologie aux soft skills, en passant par le management.
            </p>
            <p className="mt-4 text-lg font-semibold md:text-xl text-black-color font-roboto">
              En plus de notre catalogue de formations, nous sommes également ouverts aux formations sur demande, adaptées à vos besoins spécifiques. Que ce soit pour une équipe ou un projet particulier, nous mettons en place des solutions sur mesure pour vous accompagner dans votre développement.
            </p>
            <blockquote className="mt-8 text-xl italic text-gray-500 font-lato">
              "La formation est un investissement pour un avenir professionnel prospère."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
