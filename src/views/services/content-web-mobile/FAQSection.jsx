import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels types de projets développez-vous ?",
    answer:
      "Nous développons une large gamme de projets, y compris des sites web, des applications mobiles, des plateformes e-commerce, et des solutions sur mesure pour répondre aux besoins spécifiques de nos clients.",
  },
  {
    question: "Combien de temps faut-il pour développer une application ?",
    answer:
      "Le délai de développement varie en fonction de la complexité du projet. En moyenne, un projet de développement peut prendre entre 3 à 6 mois.",
  },
  {
    question: "Quels langages de programmation utilisez-vous ?",
    answer:
      "Nous utilisons une variété de technologies, y compris React.js, Node.js, MongoDB, Laravel, React Native, et bien d'autres, en fonction des besoins du projet.",
  },
  {
    question: "Offrez-vous un support après la mise en production ?",
    answer:
      "Oui, nous offrons un support continu et des services de maintenance pour garantir que vos solutions restent performantes et sécurisées.",
  },
  {
    question: "Quels sont les coûts associés à vos services ?",
    answer:
      "Les coûts varient en fonction de la portée du projet. Nous proposons des solutions adaptées à tous les budgets, tout en garantissant une qualité supérieure.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Questions Fréquemment Posées
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Voici les réponses aux questions que nos clients nous posent le plus souvent.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6 border-b-2 border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-700 font-roboto">
                  {faq.question}
                </span>
                <motion.span
                  className="ml-2 text-first-color"
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? '-' : '+'}
                </motion.span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mb-4 text-gray-600 font-roboto">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
