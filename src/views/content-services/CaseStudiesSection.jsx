import React from 'react';
import { motion } from 'framer-motion';

function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Transformation Digitale d\'une Entreprise Locale',
      description: 'Comment nous avons aidé une PME locale à passer au numérique, augmentant ainsi sa productivité de 50%.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY1ODR8MHwxfGFsbHwxfHx8fHx8fHwxNjk0NjExOTAw&ixlib=rb-4.0.3&q=80&w=400',
      link: '/case-study-1',
    },
    {
      title: 'Développement d\'une Application Mobile Innovante',
      description: 'Découvrez comment nous avons créé une application mobile qui a révolutionné l\'industrie de la livraison au Congo.',
      image: 'https://i.pinimg.com/564x/2f/6e/84/2f6e84689e5581e694b8f5e34228d384.jpg',
      link: '/case-study-2',
    },
    {
      title: 'Sécurisation des Données pour une Institution Bancaire',
      description: 'Étude de cas sur la mise en place d\'un système de sécurité des données robuste pour une grande banque congolaise.',
      image: 'https://i.pinimg.com/564x/4e/6b/e6/4e6be6c679e5edfc48c2cefcdac553bc.jpg',
      link: '/case-study-3',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-first-color font-montserrat">
            Études de Cas Récentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 font-lato max-w-3xl mx-auto leading-relaxed">
            Découvrez comment Congo Digital Services a transformé les défis en opportunités pour nos clients à travers des solutions numériques innovantes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black-color mb-2 font-montserrat">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700 text-base font-roboto">
                  {caseStudy.description}
                </p>
                <a
                  href={caseStudy.link}
                  className="text-second-color font-bold mt-4 inline-block transition duration-300 hover:underline"
                >
                  Lire l'étude de cas
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
