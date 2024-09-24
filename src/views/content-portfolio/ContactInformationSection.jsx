import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function ContactInformationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-3xl font-bold text-center md:text-5xl text-first-color"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Restons en Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            className="p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="mb-4 text-4xl text-first-color" />
            <h3 className="mb-2 text-xl font-semibold text-black">Téléphone</h3>
            <p className="text-lg text-gray-600">+242 06 751 70 70</p>
          </motion.div>
          
          <motion.div
            className="p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mb-4 text-4xl text-first-color" />
            <h3 className="mb-2 text-xl font-semibold text-black">Email</h3>
            <p className="text-lg text-gray-600">info@congo-digital.com</p>
          </motion.div>
          
          <motion.div
            className="p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-4 text-4xl text-first-color" />
            <h3 className="mb-2 text-xl font-semibold text-black">Adresse</h3>
            <p className="text-lg text-gray-600">10 Rue Canstant Balou Case De Gaulle, Brazzaville, Congo</p>
          </motion.div>
        </div>

        {/* Citation Inspirante */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 font-lato">
            "C'est avec passion et détermination que nous façonnons votre avenir numérique."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInformationSection;
