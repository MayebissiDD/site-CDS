import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'React.js', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 
      description: 'Bibliothèque JavaScript pour des interfaces utilisateur dynamiques.', 
      color: '#61DAFB' 
    },
    { 
      name: 'React Native', 
      icon: 'https://reactnative.dev/img/header_logo.svg', 
      description: 'Framework pour développer des applications mobiles natives.', 
      color: '#3B5998' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', 
      description: 'Environnement d’exécution pour exécuter du code JavaScript côté serveur.', 
      color: '#339933' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', 
      description: 'Base de données NoSQL flexible et évolutive.', 
      color: '#47A248' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', 
      description: 'Framework CSS utilitaire pour des designs réactifs.', 
      color: '#38B2AC' 
    },
    { 
      name: 'Docker', 
      icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', 
      description: 'Plateforme de conteneurisation pour déployer et gérer des applications.', 
      color: '#2496ED' 
    },
    { 
      name: 'AWS', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 
      description: 'Suite de services cloud pour l’hébergement, le stockage, et l’analyse.', 
      color: '#FF9900' 
    },
    { 
      name: 'Flutter', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png', 
      description: 'Framework pour développer des applications mobiles multiplateformes.', 
      color: '#02569B' 
    },
    { 
      name: 'Laravel', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg', 
      description: 'Framework PHP pour le développement d’applications web robustes.', 
      color: '#FF2D20' 
    },
    { 
      name: 'MySQL', 
      icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', 
      description: 'Système de gestion de base de données relationnelle.', 
      color: '#4479A1' 
    },
    { 
      name: 'Firebase', 
      icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', 
      description: 'Plateforme mobile et web pour le développement d’applications.', 
      color: '#FFCA28' 
    },
    { 
      name: 'Kubernetes', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', 
      description: 'Système d’orchestration pour la gestion des conteneurs.', 
      color: '#326CE5' 
    },
  ];

  const items = technologies.map((tech, index) => (
    <motion.div
      key={index}
      className="p-4 mx-2 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-16 h-16"
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
