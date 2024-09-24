

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels types de formations proposez-vous ?",
    answer:
      "Nous proposons une large gamme de formations, allant du développement web à la gestion de projet, en passant par le marketing digital et la cybersécurité.",
  },
  {
    question: "Puis-je suivre les formations à distance ?",
    answer:
      "Oui, toutes nos formations sont disponibles en ligne, vous permettant de suivre les cours à votre propre rythme, où que vous soyez.",
  },
  {
    question: "Quelles sont les qualifications des formateurs ?",
    answer:
      "Nos formateurs sont des professionnels expérimentés dans leurs domaines respectifs, avec une solide expérience pédagogique.",
  },
  {
    question: "Offrez-vous des certifications à l'issue de la formation ?",
    answer:
      "Oui, toutes nos formations sont certifiées, et vous recevrez un certificat de compétence à l'issue du programme.",
  },
  {
    question: "Comment puis-je m'inscrire à une formation ?",
    answer:
      "Vous pouvez vous inscrire directement sur notre site web. Si vous avez des questions, n'hésitez pas à nous contacter pour plus d'informations.",
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
            Voici les réponses aux questions que nos apprenants nous posent le plus souvent concernant nos programmes de formation.
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