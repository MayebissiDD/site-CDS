import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

function InformationSection() {
  const locations = [
    {
      city: 'Brazzaville',
      address: '10 Rue Constant Balou, Bacongo La Glacière',
      phone: '+242 06 751 70 70',
      email: 'info@congo-digital.com',
      hours: 'Lundi - Vendredi: 08:30 - 17:00',
    },
    {
      city: 'Pointe-Noire',
      address: '10 Rue Tiackson, MPITA',
      phone: '+242 06 700 00 00',
      email: 'info@congo-digital.com',
      hours: 'Lundi - Vendredi: 08:30 - 17:00',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-first-color text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nos Contacts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:bg-first-color hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center mb-4">{location.city}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-second-color" />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl text-second-color" />
                  <p>{location.phone}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-second-color" />
                  <p>{location.email}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-second-color" />
                  <p>{location.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
