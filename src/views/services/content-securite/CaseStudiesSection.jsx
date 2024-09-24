import React from 'react';
import { motion } from 'framer-motion';

function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Protection Contre les Attaques DDoS',
      description: 'Mise en place d\'un système de défense robuste contre les attaques DDoS pour une entreprise de commerce en ligne.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Sécurisation des Données Sensibles',
      description: 'Implémentation d\'une solution de chiffrement des données pour une société de services financiers.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Surveillance de Réseau en Temps Réel',
      description: 'Déploiement d\'un système de surveillance de réseau pour une entreprise technologique de pointe.',
      image: 'https://via.placeholder.com/400',
      link: '#',
    },
    {
      title: 'Réponse Rapide aux Incidents',
      description: 'Intervention rapide suite à une violation de données pour limiter les impacts sur une organisation publique.',
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
            Études de Cas en Sécurité Web & Réseaux
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez comment nos solutions de sécurité ont protégé nos clients contre les menaces numériques à travers ces études de cas.
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


