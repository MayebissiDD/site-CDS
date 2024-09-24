import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels types de support proposez-vous ?",
    answer:
      "Nous offrons un support technique complet incluant la surveillance, la maintenance préventive, les mises à jour de sécurité, et une assistance 24/7 pour résoudre tous vos problèmes techniques.",
  },
  {
    question: "Comment fonctionne votre service de maintenance ?",
    answer:
      "Notre service de maintenance inclut des vérifications régulières, des mises à jour système, et la surveillance en temps réel pour prévenir toute défaillance. Nous intervenons rapidement en cas de besoin.",
  },
  {
    question: "Pouvez-vous gérer la sécurité de nos systèmes ?",
    answer:
      "Oui, nous mettons en place des solutions de sécurité avancées pour protéger vos systèmes contre les cybermenaces, et nous assurons une surveillance continue pour réagir rapidement en cas d'incident.",
  },
  {
    question: "Offrez-vous un support pour les mises à jour des systèmes ?",
    answer:
      "Absolument, nous nous chargeons de toutes les mises à jour nécessaires pour vos systèmes, garantissant ainsi qu'ils restent sécurisés et fonctionnent de manière optimale.",
  },
  {
    question: "Quels sont les coûts associés à vos services de maintenance et support ?",
    answer:
      "Les coûts varient en fonction des besoins spécifiques de votre infrastructure. Nous offrons des solutions personnalisées pour s'adapter à vos budgets tout en garantissant un service de qualité.",
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
            Voici les réponses aux questions que nos clients nous posent le plus souvent à propos de notre service de maintenance et support.
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
