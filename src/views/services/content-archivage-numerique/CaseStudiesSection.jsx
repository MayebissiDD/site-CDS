import React from 'react';
import { motion } from 'framer-motion';

function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Formation en Développement Web pour les Débutants',
      description: 'Un programme intensif de 6 mois pour acquérir les bases du développement web et se préparer à un emploi dans le secteur.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Programme Avancé en Sécurité Informatique',
      description: 'Formation spécialisée pour les professionnels en cybersécurité, couvrant les dernières techniques de protection des systèmes.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Formation en Gestion de Projet Agile',
      description: 'Un programme de certification en gestion de projet Agile, conçu pour les managers et chefs d’équipe.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Cours de Marketing Digital',
      description: 'Formation complète en marketing digital, incluant SEO, SEM, réseaux sociaux et analytics, pour booster votre carrière.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Études de Cas
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez comment nos programmes de formation ont permis à nos apprenants de transformer leurs compétences et d’atteindre leurs objectifs professionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-white border-t-4 rounded-lg shadow-lg border-first-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-black-color">
                  {caseStudy.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {caseStudy.description}
                </p>
                <a
                  href={caseStudy.link}
                  className="font-semibold text-first-color hover:text-second-color"
                >
                  En savoir plus
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
