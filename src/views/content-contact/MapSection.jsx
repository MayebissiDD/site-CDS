import React from 'react';
import { motion } from 'framer-motion';

function MapSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-first-color mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Localisation de Congo Digital Services
        </motion.h2>
        <motion.div
          className="w-full h-96"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426.3369008148961!2d15.263952020762598!3d-4.289193363838182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2scg!4v1724846799323!5m2!1sfr!2scg" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            title="Congo Digital Services Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426.3369008148961!2d15.263952020762598!3d-4.289193363838182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2scg!4v1724846799323!5m2!1sfr!2scg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default MapSection;
