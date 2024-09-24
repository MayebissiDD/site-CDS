import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'Nagios', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Outil de surveillance open-source pour surveiller les systèmes, les réseaux et les infrastructures.', 
      color: '#4C8CEF' 
    },
    { 
      name: 'Zabbix', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système de surveillance pour les serveurs, les réseaux et les services.', 
      color: '#E93B3B' 
    },
    { 
      name: 'Ansible', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Outil open-source pour l\'automatisation des configurations, du déploiement d\'applications et de la gestion des tâches.', 
      color: '#EE0000' 
    },
    { 
      name: 'Puppet', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Outil d\'automatisation informatique pour la gestion des configurations.', 
      color: '#FFB800' 
    },
    { 
      name: 'Jenkins', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Serveur d\'intégration continue open-source pour l\'automatisation du déploiement.', 
      color: '#D24939' 
    },
    { 
      name: 'AWS', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Suite de services cloud pour l’hébergement, le stockage, et l’analyse, intégrant des solutions de gestion et de support.', 
      color: '#FF9900' 
    },
    { 
      name: 'Docker', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Plateforme de conteneurisation pour déployer et gérer des applications de manière flexible.', 
      color: '#2496ED' 
    },
    { 
      name: 'Kubernetes', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système d’orchestration pour la gestion des conteneurs, essentiel pour le déploiement et la maintenance des services.', 
      color: '#326CE5' 
    },
    { 
      name: 'Linux', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Système d\'exploitation open-source, base pour la plupart des serveurs et services en production.', 
      color: '#FCC624' 
    },
    { 
      name: 'Grafana', 
      icon: 'https://via.placeholder.com/100', 
      description: 'Outil de visualisation et de surveillance des données pour l’analyse des systèmes et des réseaux.', 
      color: '#F46800' 
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
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10"
        />
      </div>
      <h3 style={{ color: tech.color }} className="mb-2 text-lg font-semibold">
        {tech.name}
      </h3>
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
            Technologies Utilisées pour la Maintenance et le Support
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous utilisons des technologies avancées pour garantir la fiabilité, la sécurité et l'efficacité de vos infrastructures. Voici les outils que nous employons pour assurer un support de qualité.
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
