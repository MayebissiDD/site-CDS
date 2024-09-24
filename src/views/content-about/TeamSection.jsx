import React from 'react';
import { motion } from 'framer-motion';
import PicGeoffroy from './../../assets/images/teams/geofroy_dibakala1.jpg';
import PicFred from './../../assets/images/teams/fred_kaya1.jpg';
import PicStev from './../../assets/images/teams/stevie-tathy.jpg';
import PicGloire from './../../assets/images/teams/gloire.jpg';
import PicDasylya from './../../assets/images/teams/dib.jpg';
import PicSylvia from './../../assets/images/teams/sylvia.jpg';
import PicClodlin from './../../assets/images/teams/clodlin.jpg';
import PicGespere from './../../assets/images/teams/gespere.jpg'

function TeamSection() {
  const executives = [
    {
      name: 'Geoffroy DIBAKALA',
      role: 'Président',
      photo: PicGeoffroy,
    },
    {
      name: 'Fred KAYA',
      role: 'Directeur Général',
      photo: PicFred,
    },
  ];

  const managers = [
    {
      name: 'Stevie TATHY',
      role: 'Chef d\'agence Principal de Brazzaville',
      photo: PicStev,
    },
    {
      name: 'Pierre YEBAS',
      role: 'Chef d\'agence de Pointe-Noire',
      photo: "https://via.placeholder.com/150",
    },
  ];

  const employees = [
    {
      name: 'Dorianne BOUKANZII',
      role: 'Responsable Archivage',
      photo: "https://via.placeholder.com/150",
    },
    {
      name: 'Dasylya DIB',
      role: 'Développeur FullStack',
      photo: PicDasylya,
    },
    {
      name: 'Gloire NSINGOULOU',
      role: 'Assistante de Direction',
      photo: PicGloire,
    },
    {
      name: 'Sylvia NGASSAKI',
      role: 'Développeuse FullStack',
      photo: PicSylvia,
    },
    {
      name: 'Clodlin MANTSILA',
      role: 'Développeur FullStack',
      photo: PicClodlin,
    },
    {
      name: 'Gespere BONAZEBI',
      role: 'Développeur FullStack',
      photo: PicGespere,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Introduction à l'équipe */}
        <div className="container relative z-20 px-4 py-16 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black-color mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Notre <span className="text-first-color">Equipe</span>
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-600 md:text-xl font-lato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Découvrez l'équipe qui propulse notre entreprise vers l'innovation et l'excellence.
        </motion.p>
        </div>

        {/* Section des Dirigeants */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-second-color mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dirigeants
          </motion.h3>
          <div className="flex flex-col items-center md:flex-row justify-center gap-8">
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-48 h-48 mx-auto">
                  <motion.img
                    src={exec.photo}
                    alt={exec.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-black-color mt-4">{exec.name}</h3>
                <p className="text-md text-gray-600">{exec.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section des Chefs d'agence */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-second-color mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Chefs d'agence
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-8">
            {managers.map((manager, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-40 h-40 mx-auto">
                  <motion.img
                    src={manager.photo}
                    alt={manager.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-black-color mt-4">{manager.name}</h4>
                <p className="text-md text-gray-600">{manager.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section des Membres de l'équipe */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-second-color mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Membres de l'Équipe
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-8">
            {employees.map((employee, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-36 h-36 mx-auto">
                  <motion.img
                    src={employee.photo}
                    alt={employee.name}
                    className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <h4 className="text-md font-bold text-black-color mt-4">{employee.name}</h4>
                <p className="text-sm text-gray-600">{employee.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <motion.button
            className="px-8 py-4 bg-first-color text-white text-lg font-bold rounded-lg shadow-lg hover:bg-second-color transition-all duration-300"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            Nous contacter
          </motion.button>
        </div> */}

<div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Jumbotron Title */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rejoignez <span className="text-first-color">Congo Digital</span> !
        </motion.h1>

        {/* Jumbotron Text */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nous sommes toujours à la recherche de talents passionnés et motivés pour rejoindre notre équipe.
          Venez travailler avec nous et façonnez l'avenir du numérique au Congo !
        </motion.p>

        {/* Jumbotron Button */}
        <motion.button
          className="px-8 py-4 bg-first-color text-white text-lg font-bold rounded-lg shadow-lg hover:bg-second-color transition-all duration-300"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Postuler
        </motion.button>
      </div>
    </div>

      </div>
    </section>
  );
}

export default TeamSection;
