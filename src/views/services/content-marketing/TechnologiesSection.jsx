import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TechnologiesSection() {
  const technologies = [
    { 
      name: 'Google Analytics', 
      icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg', 
      description: 'Outil de suivi et d’analyse du trafic de votre site web.', 
      color: '#E37400' 
    },
    { 
      name: 'Facebook Ads', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', 
      description: 'Plateforme de publicité pour atteindre votre audience sur Facebook.', 
      color: '#1877F2' 
    },
    // { 
    //   name: 'Google Ads', 
    //   icon: 'https://cdn.worldvectorlogo.com/logos/google-ads.svg', 
    //   description: 'Plateforme publicitaire pour promouvoir vos services sur Google.', 
    //   color: '#4285F4' 
    // },
    { 
      name: 'Mailchimp', 
      icon: 'https://logo.clearbit.com/mailchimp.com', 
      description: 'Service d’email marketing pour gérer vos campagnes d’emailing.', 
      color: '#FFE01B' 
    },
    { 
      name: 'SEMrush', 
      icon: 'https://logo.clearbit.com/semrush.com', 
      description: 'Outil de marketing digital pour le SEO, SEA, et l’analyse concurrentielle.', 
      color: '#EB3C00' 
    },
    { 
      name: 'Hootsuite', 
      icon: 'https://logo.clearbit.com/hootsuite.com', 
      description: 'Plateforme de gestion des réseaux sociaux.', 
      color: '#FF4500' 
    },
    { 
      name: 'WordPress', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg', 
      description: 'CMS pour la création et la gestion de sites web.', 
      color: '#21759B' 
    },
    // { 
    //   name: 'Yoast SEO', 
    //   icon: 'https://seeklogo.com/images/Y/yoast-seo-logo-6F6F6EBF6F-seeklogo.com.png', // Nouveau lien pour Yoast SEO
    //   description: 'Plugin WordPress pour optimiser votre site pour les moteurs de recherche.', 
    //   color: '#A4286A' 
    // },
    { 
      name: 'Canva', 
      icon: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg', 
      description: 'Outil de conception graphique pour créer du contenu visuel attractif.', 
      color: '#00C4CC' 
    },
    { 
      name: 'Buffer', 
      icon: 'https://logo.clearbit.com/buffer.com', 
      description: 'Plateforme de gestion des réseaux sociaux pour planifier et publier du contenu.', 
      color: '#168EEA' 
    },
    { 
      name: 'Ahrefs', 
      icon: 'https://logo.clearbit.com/ahrefs.com', 
      description: 'Outil d’analyse SEO pour améliorer votre visibilité en ligne.', 
      color: '#FF5E72' 
    },
    { 
      name: 'Moz', 
      icon: 'https://logo.clearbit.com/moz.com', 
      description: 'Outil SEO pour optimiser le classement de votre site sur les moteurs de recherche.', 
      color: '#25CCF7' 
    },
    { 
      name: 'HubSpot', 
      icon: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg', 
      description: 'Plateforme CRM et marketing pour automatiser vos processus marketing.', 
      color: '#FF7A59' 
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
          <h2 className="text-3xl font-bold md:text-5xl text-second-color font-montserrat">
            Technologies Utilisées
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous utilisons les meilleures technologies de marketing digital pour vous offrir des campagnes performantes et des analyses approfondies.
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
