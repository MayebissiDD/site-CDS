import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'Quels services propose Congo Digital Services ?',
      answer:
        'Congo Digital Services offre une gamme complète de services numériques, incluant le développement Web & Mobile, le marketing digital, la gestion des infrastructures réseaux, l’archivage numérique, la formation ainsi que des services de recrutement et consulting.',
    },
    {
      question: 'Comment puis-je contacter Congo Digital Services pour un projet ?',
      answer:
        'Vous pouvez nous contacter via notre formulaire de contact en ligne ou nous appeler directement au +242 06 7517070. Nous serons ravis de discuter de votre projet.',
    },
    {
      question: 'Proposez-vous des solutions sur mesure ?',
      answer:
        'Oui, nous travaillons en étroite collaboration avec nos clients pour créer des solutions sur mesure qui répondent précisément à leurs besoins et objectifs.',
    },
    {
      question: 'Quels sont les avantages de l’archivage numérique avec Congo Digital Services ?',
      answer:
        'L’archivage numérique avec Congo Digital Services vous permet de sécuriser vos documents, d’améliorer leur accessibilité, et de garantir leur intégrité à long terme, tout en réduisant les coûts liés à la gestion des archives papier.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          {/* Image d'illustration */}
          <motion.div
            className="md:w-1/3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://img.freepik.com/vecteurs-libre/illustration-haussement-epaules-design-plat-dessine-main_23-2149363474.jpg?t=st=1725984632~exp=1725988232~hmac=2d0c978551e160074e4e38f8f04473e5eb43e3ecb816237e74c5dec7ee7769bf&w=740" // Image d'interrogation plus impactante
              alt="FAQ Illustration"
              className="mx-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Contenu de la FAQ */}
          <motion.div
            className="mt-8 md:w-2/3 md:pl-12 md:mt-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="mb-12 text-4xl font-bold md:text-5xl text-first-color">
              Foire Aux Questions
            </h2>
            {/* Liste des questions */}
            <div className="max-w-2xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-8">
                  <motion.div
                    className={`cursor-pointer p-4 rounded-lg shadow-lg bg-first-color text-white flex items-center justify-between ${
                      activeIndex === index ? 'bg-second-color' : ''
                    }`}
                    onClick={() => toggleAccordion(index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                  </motion.div>
                  {activeIndex === index && (
                    <motion.div
                      className="p-4 mt-4 text-gray-700 bg-white rounded-lg shadow-lg"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
