import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSyncAlt, faLock, faBook } from '@fortawesome/free-solid-svg-icons';

function SupportSection() {
  const supportItems = [
    {
      title: 'Support Réseau 24/7',
      description: 'Nous sommes disponibles à tout moment pour répondre à vos besoins en matière de réseau, que ce soit par téléphone, chat ou email.',
      icon: faPhone, // Icône Font Awesome
    },
    {
      title: 'Mises à jour et maintenance',
      description: 'Nous assurons des mises à jour régulières et une maintenance proactive pour maintenir votre infrastructure réseau performante.',
      icon: faSyncAlt, // Icône Font Awesome
    },
    {
      title: 'Sécurité réseau avancée',
      description: 'Nous appliquons les meilleures pratiques en matière de sécurité pour protéger votre infrastructure réseau contre les menaces.',
      icon: faLock, // Icône Font Awesome
    },
    {
      title: 'Documentation technique',
      description: 'Accédez à une documentation technique complète pour gérer et optimiser votre infrastructure réseau.',
      icon: faBook, // Icône Font Awesome
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-first-color font-montserrat">
            Un Support Réseau Dédié Pour Vous Accompagner
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Nous restons à vos côtés bien après la mise en place de votre infrastructure réseau, avec un support continu et une maintenance de qualité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-gray-200 rounded-full">
                <FontAwesomeIcon icon={item.icon} className="text-first-color" /> {/* Icône Font Awesome */}
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 font-lato">
            "Le véritable service commence après la mise en place de l'infrastructure. C'est là que nous faisons la différence."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;
