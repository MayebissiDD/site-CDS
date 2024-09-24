import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'React.js', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Apprenez à créer des interfaces utilisateur dynamiques avec React.js, la bibliothèque JavaScript incontournable.', 
      color: '#61DAFB' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Maîtrisez le développement backend avec Node.js et construisez des applications performantes.', 
      color: '#339933' 
    },
    { 
      name: 'Python', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Explorez le langage Python, idéal pour l’analyse de données, l’automatisation et le développement web.', 
      color: '#306998' 
    },
    { 
      name: 'SQL', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Apprenez à interroger et gérer des bases de données relationnelles avec SQL.', 
      color: '#4479A1' 
    },
    { 
      name: 'Docker', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Découvrez comment containeriser vos applications pour une meilleure portabilité et déploiement.', 
      color: '#2496ED' 
    },
    { 
      name: 'AWS', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Maîtrisez les services cloud avec AWS pour gérer l’hébergement, le stockage et l’analyse de vos données.', 
      color: '#FF9900' 
    },
    { 
      name: 'Machine Learning', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Plongez dans l’apprentissage automatique et construisez des modèles prédictifs efficaces.', 
      color: '#FFA500' 
    },
    { 
      name: 'Cybersécurité', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Apprenez à protéger vos systèmes et données grâce aux meilleures pratiques en cybersécurité.', 
      color: '#FF4500' 
    },
  ];

  const items = technologies.map((tech, index) => (
    <motion.div
      key={index}
      className="flex flex-col justify-center h-full p-4 mx-2 text-center bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div
        className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10"
        />
      </div>
      <h3 style={{ color: tech.color }} className="mb-2 text-lg font-semibold">{tech.name}</h3>
      <p className="text-sm text-gray-600">{tech.description}</p>
    </motion.div>
  ));

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
            Technologies et Compétences Enseignées
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez les technologies et compétences clés que vous maîtriserez à travers nos programmes de formation.
          </p>
        </motion.div>

        <AliceCarousel
          items={items}
          autoPlay
          infinite
          autoPlayInterval={3000}
          animationDuration={800}
          disableButtonsControls
          disableDotsControls
          responsive={{
            0: { items: 2 },
            768: { items: 3 },
            1024: { items: 4 },
          }}
          mouseTracking
        />
      </div>
    </section>
  );
}

export default TechnologiesSection;
