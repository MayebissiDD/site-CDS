import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaChartLine, FaLock, FaFileAlt } from 'react-icons/fa'; // Importation des icônes FontAwesome

function SupportSection() {
  const supportItems = [
    {
      title: 'Assistance en Temps Réel',
      description: 'Nous sommes disponibles pour répondre à vos questions et ajuster vos campagnes en temps réel, 24/7.',
      icon: <FaComments />, // Icône FontAwesome
    },
    {
      title: 'Optimisation Continue',
      description: 'Nous analysons et ajustons régulièrement vos campagnes pour garantir des performances maximales.',
      icon: <FaChartLine />, // Icône FontAwesome
    },
    {
      title: 'Sécurité des Données',
      description: 'Nous veillons à ce que vos données soient protégées grâce à des pratiques de sécurité de pointe.',
      icon: <FaLock />, // Icône FontAwesome
    },
    {
      title: 'Rapports Détailés',
      description: 'Recevez des rapports détaillés et compréhensibles pour suivre l’efficacité de vos campagnes marketing.',
      icon: <FaFileAlt />, // Icône FontAwesome
    },
  ];

  return (
    <section className="py-16 bg-gray-100"> {/* Fond gris léger pour l'arrière-plan */}
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-second-color font-montserrat">
            Un Support Dédié Pour Vos Campagnes de Marketing Digital
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Notre accompagnement ne se limite pas à la mise en place de vos campagnes. Nous assurons un suivi continu pour maximiser leur impact et garantir votre succès.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> {/* Amélioration de la grille */}
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" // Suppression de la bordure colorée
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl text-second-color bg-gray-200 rounded-full">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-black-color">{item.title}</h3>
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
            "Le succès de votre campagne est notre priorité, bien au-delà de sa mise en ligne."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default SupportSection;
