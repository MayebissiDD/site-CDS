import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'React.js', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Bibliothèque JavaScript pour des interfaces utilisateur dynamiques.', 
      color: '#61DAFB' 
    },
    { 
      name: 'React Native', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Framework pour développer des applications mobiles natives.', 
      color: '#3B5998' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Environnement d’exécution pour exécuter du code JavaScript côté serveur.', 
      color: '#339933' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Base de données NoSQL flexible et évolutive.', 
      color: '#47A248' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Framework CSS utilitaire pour des designs réactifs.', 
      color: '#38B2AC' 
    },
    { 
      name: 'Docker', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Plateforme de conteneurisation pour déployer et gérer des applications.', 
      color: '#2496ED' 
    },
    { 
      name: 'AWS', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Suite de services cloud pour l’hébergement, le stockage, et l’analyse.', 
      color: '#FF9900' 
    },
    { 
      name: 'Flutter', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Framework pour développer des applications mobiles multiplateformes.', 
      color: '#02569B' 
    },
    { 
      name: 'Laravel', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Framework PHP pour le développement d’applications web robustes.', 
      color: '#FF2D20' 
    },
    { 
      name: 'MySQL', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système de gestion de base de données relationnelle.', 
      color: '#4479A1' 
    },
    { 
      name: 'Hostinger', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Service d’hébergement web pour vos sites et applications.', 
      color: '#FF4F5A' 
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système de gestion de base de données relationnelle avancé.', 
      color: '#336791' 
    },
    { 
      name: 'Firebase', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Plateforme mobile et web pour le développement d’applications.', 
      color: '#FFCA28' 
    },
    { 
      name: 'Kubernetes', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système d’orchestration pour la gestion des conteneurs.', 
      color: '#326CE5' 
    },
  ];

  const items = technologies.map((tech, index) => (
    <motion.div
      key={index}
      className="p-4 mx-2 text-center bg-white rounded-lg shadow-lg"
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
      <h3 style={{ color: tech.color }} className="mb-2 text-lg font-semibold ">{tech.name}</h3>
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
            Technologies Utilisées
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous utilisons une large gamme de technologies de pointe pour vous offrir des solutions performantes, évolutives, et sécurisées.
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
