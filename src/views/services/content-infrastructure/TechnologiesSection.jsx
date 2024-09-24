import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Importation des images locales
import vmwareImg from './../../../assets/images/techno/vmware.png';
import mikrotikImg from './../../../assets/images/techno/mikrotik.png';
import arubaImg from './../../../assets/images/techno/aruba.png';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'Cisco', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1280px-Cisco_logo.svg.png', 
      description: 'Solutions de réseau d’entreprise pour une connectivité fiable et sécurisée.', 
      color: '#1BA0D7' 
    },
    { 
      name: 'VMware', 
      icon: vmwareImg, // Image locale
      description: 'Virtualisation et cloud pour optimiser l’infrastructure réseau.', 
      color: '#607078' 
    },
    { 
      name: 'AWS', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 
      description: 'Services cloud pour l’hébergement et la gestion d’infrastructures réseaux.', 
      color: '#FF9900' 
    },
    { 
      name: 'MikroTik', 
      icon: mikrotikImg, // Image locale
      description: 'Solutions réseau flexibles pour une large gamme d’applications.', 
      color: '#8B6C9A' 
    },
    { 
      name: 'Aruba Networks', 
      icon: arubaImg, // Image locale
      description: 'Réseaux sans fil fiables et performants pour l’entreprise.', 
      color: '#FF7300' 
    }
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
          className={`w-10 h-10 ${tech.icon === vmwareImg || tech.icon === mikrotikImg || tech.icon === arubaImg ? 'w-16' : ''}`}
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
            Nous utilisons une large gamme de technologies de pointe pour offrir des infrastructures réseau performantes et sécurisées.
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
