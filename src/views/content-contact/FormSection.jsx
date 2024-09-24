import React from 'react';
import { motion } from 'framer-motion';

function FormSection() {
  return (
    <section id='contact-form' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-first-color mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            border: '4px solid',
            borderRadius: '16px',
            borderImage: 'linear-gradient(to right, #0B519B, #EA5B0C) 1',
            animation: 'borderAnimation 5s infinite linear',
          }}
        >
          <style>
            {`
              @keyframes borderAnimation {
                0% { border-image-source: linear-gradient(to right, #0B519B, #EA5B0C); }
                50% { border-image-source: linear-gradient(to right, #EA5B0C, #0B519B); }
                100% { border-image-source: linear-gradient(to right, #0B519B, #EA5B0C); }
              }

              textarea {
                resize: none; /* Empêche le redimensionnement de la zone de texte */
              }
            `}
          </style>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-semibold text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-first-color"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-first-color"
                  placeholder="Votre email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="mb-2 block font-semibold text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-first-color"
                placeholder="Sujet de votre message"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-first-color"
                placeholder="Votre message"
                required
              />
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-3 bg-first-color hover:bg-second-color text-white font-semibold rounded-md transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer le message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default FormSection;
