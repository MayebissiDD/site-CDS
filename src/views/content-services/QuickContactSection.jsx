import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function QuickContactSection() {
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
          Contactez-nous Rapidement
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

        {/* Google Maps Embed */}
        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <iframe
            title="Congo Digital Services Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div> */}

        {/* Quick Contact Form */}
        {/* <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <form className="p-6 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Votre Nom" className="p-3 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Votre Email" className="p-3 border border-gray-300 rounded-md" />
            </div>
            <textarea placeholder="Votre Message" className="w-full p-3 mt-4 border border-gray-300 rounded-md" rows="4"></textarea>
            <button className="px-6 py-3 mt-4 font-semibold text-white transition duration-300 rounded-md bg-first-color hover:bg-second-color">
              Envoyer
            </button>
          </form>
        </motion.div> */}

        {/* Inspirational Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 font-lato">
            "Votre avenir numérique commence ici, avec nous."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default QuickContactSection;
