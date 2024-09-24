import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'Firewalls', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Systèmes de protection pour contrôler et sécuriser le trafic réseau.', 
      color: '#E44D26' 
    },
    { 
      name: 'Antivirus/Antimalware', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Protection contre les logiciels malveillants et les attaques.', 
      color: '#4A90E2' 
    },
    { 
      name: 'Encryption Tools', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Chiffrement des données pour assurer la confidentialité.', 
      color: '#34A853' 
    },
    { 
      name: 'VPNs', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Réseaux privés virtuels pour des connexions sécurisées à distance.', 
      color: '#F7C223' 
    },
    { 
      name: 'SIEM Solutions', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Surveillance et analyse en temps réel des événements de sécurité.', 
      color: '#E91E63' 
    },
    { 
      name: 'Intrusion Detection Systems (IDS)', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Détection proactive des intrusions et des menaces.', 
      color: '#673AB7' 
    },
    { 
      name: 'Endpoint Security', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Protection des terminaux pour sécuriser tous les points d\'accès.', 
      color: '#3F51B5' 
    },
    { 
      name: 'Cloud Security', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Sécurisation des services et données dans le cloud.', 
      color: '#00BCD4' 
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
            Technologies Utilisées en Sécurité Web & Réseaux
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous utilisons des technologies de pointe pour sécuriser vos infrastructures web et réseaux, vous protégeant contre les menaces et garantissant la confidentialité de vos données.
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


