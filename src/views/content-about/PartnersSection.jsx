import React from 'react';
import { motion } from 'framer-motion';
import kaylenbLogo from './../../assets/images/partner/kaylen.png';  // Logo de Kaylen
import wymeebLogo from './../../assets/images/partner/wymee.png';   // Logo de Wymee

function PartnersSection() {
  const partners = [
    { 
      name: 'Kaylen', 
      logo: kaylenbLogo
    },
    { 
      name: 'Wymee', 
      logo: wymeebLogo
    },
  ];

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container relative z-20 px-4 py-16 mx-auto text-center">
      <motion.h2
          className="text-3xl md:text-4xl font-bold text-black-color mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         Nos <span className="text-first-color">Partenaires</span>
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-600 md:text-xl font-lato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nous collaborons avec des entreprises leaders dans leur secteur pour offrir des solutions innovantes et fiables.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-auto h-20 max-w-xs mx-auto mb-4 transition-transform duration-300 transform hover:scale-110"
              />
              <h4 className="text-lg font-bold transition-colors duration-300 text-black-color font-poppins hover:text-first-color">
                {partner.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
