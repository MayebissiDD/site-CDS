import React from 'react';
import { motion } from 'framer-motion';

function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Campagne SEO Réussie',
      description: 'Augmentation du trafic organique de 150% pour une entreprise de services grâce à une stratégie SEO personnalisée.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Publicité Ciblée sur les Réseaux Sociaux',
      description: 'Optimisation d\'une campagne publicitaire sur Facebook et Instagram, générant un ROI de 300%.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Stratégie de Contenu Engageante',
      description: 'Développement d\'une stratégie de contenu qui a doublé l\'engagement sur les réseaux sociaux d\'une marque de mode.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Automatisation du Marketing par Email',
      description: 'Mise en place d\'une campagne d\'emailing automatisée, augmentant les conversions de 40%.',
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
            Découvrez comment nos stratégies de marketing digital ont permis à nos clients d'atteindre et de dépasser leurs objectifs commerciaux.
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
