import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaLock, FaFolderOpen } from 'react-icons/fa'; // Import des icônes

function AwardsRecognitionSection() {
  const awards = [
    {
      title: "Prix d'Excellence en Innovation",
      description: 'Récompense pour nos solutions numériques innovantes.',
      year: 2022,
      icon: <FaTrophy className="text-second-color" />, // Icône de trophée
    },
    {
      title: 'Meilleure Startup Digitale',
      description: 'Distinction pour notre croissance et impact.',
      year: 2021,
      icon: <FaMedal className="text-second-color" />, // Icône de médaille
    },
    {
      title: 'Prix de la Sécurité Informatique',
      description: 'Reconnaissance de notre expertise en sécurité.',
      year: 2020,
      icon: <FaLock className="text-second-color" />, // Icône de cadenas
    },
    {
      title: 'Leader en Archivage Numérique',
      description: 'Appréciation pour nos solutions d’archivage avancées.',
      year: 2023,
      icon: <FaFolderOpen className="text-second-color" />, // Icône de dossier
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Reconnaissance
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato max-w-3xl mx-auto">
            Nous avons été reconnus pour notre excellence dans divers domaines du numérique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative p-6 text-center bg-white border-t-4 rounded-lg shadow-lg border-second-color hover:bg-gray-100 transition duration-500 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <div className="relative z-10">
                <div className="text-5xl mb-4 flex justify-center">{award.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-black-color">{award.title}</h3>
                <h4 className="text-lg font-semibold text-second-color mb-2">{award.year}</h4>
                <p className="text-gray-600">{award.description}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsRecognitionSection;
