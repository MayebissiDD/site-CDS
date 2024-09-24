import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, faArchive, faServer, faUserTie, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'; // Import des nouvelles icônes
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const services = [
    {
      title: 'Développement Web & Mobile',
      description: 'Nous créons des sites web et des applications mobiles performants et adaptés à vos besoins.',
      icon: faLaptopCode,
      bgColor: 'bg-teal-200',
    },
    {
      title: 'Marketing Digital',
      description: 'Optimisez votre présence en ligne grâce à nos stratégies de marketing digital sur mesure.',
      icon: faChartLine,
      bgColor: 'bg-teal-200',
    },
    {
      title: 'Développement d\'Infrastructures Réseaux',
      description: 'Nous concevons et mettons en place des infrastructures réseaux robustes et sécurisées.',
      icon: faServer,
      bgColor: 'bg-teal-200',
    },
    {
      title: 'Archives Numériques',
      description: 'Conservez vos documents en toute sécurité grâce à nos solutions d’archivage numérique.',
      icon: faArchive,
      bgColor: 'bg-red-200',
    },
    {
      title: 'Recrutement et Consulting',
      description: 'Nous vous accompagnons dans la recherche de talents et le conseil stratégique pour vos projets.',
      icon: faUserTie, // Icône pour Recrutement & Consulting
      bgColor: 'bg-red-200',
    },
    {
      title: 'Formation',
      description: 'Formations professionnelles sur mesure, adaptées à vos besoins et exigences.',
      icon: faChalkboardTeacher, // Icône pour la Formation
      bgColor: 'bg-red-200',
    },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="py-8 bg-white sm:py-10 lg:py-16"
      ref={sectionRef}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            NOS <span className="text-second-color">SERVICES</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-7 text-gray-600 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez nos services et comment nous pouvons vous aider à atteindre vos objectifs.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 xl:mt-16"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center text-center"
              variants={itemVariants}
            >
              <div className={`w-16 h-16 rounded-full ${service.bgColor} flex justify-center items-center`}>
                <FontAwesomeIcon icon={service.icon} className="text-3xl text-gray-900" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
