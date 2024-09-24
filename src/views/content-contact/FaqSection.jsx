import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que Congo Digital Services ?",
      answer: "Congo Digital Services est une entreprise dédiée à la transformation numérique au Congo, offrant des solutions innovantes pour aider les entreprises à prospérer dans l'économie digitale.",
    },
    {
      question: "Quels services offrez-vous ?",
      answer: "Nous offrons une large gamme de services, y compris le développement de logiciels, la gestion de projets numériques, la sécurité informatique, et l'archivage numérique.",
    },
    {
      question: "Qu'est-ce que l'archivage numérique ?",
      answer: "L'archivage numérique consiste à stocker des documents électroniques de manière sécurisée pour garantir leur accessibilité à long terme. Nous proposons des solutions d'archivage conformes aux normes internationales.",
    },
    {
      question: "Comment puis-je demander un devis ?",
      answer: "Vous pouvez demander un devis en nous contactant directement via notre formulaire de contact ou en utilisant le bouton 'Demander un devis' sur notre site.",
    },
    {
      question: "Pourquoi choisir Congo Digital Services ?",
      answer: "Nous sommes une équipe d'experts passionnés par la technologie et engagés à fournir des solutions sur mesure pour répondre aux besoins spécifiques de nos clients.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          Foire Aux Questiions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-700 hover:text-first-color transition-colors duration-300 focus:outline-none"
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="py-2 text-gray-600 font-lato">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
