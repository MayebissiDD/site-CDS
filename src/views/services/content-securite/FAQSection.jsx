import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quelles sont les menaces que vous pouvez détecter ?",
    answer:
      "Nous sommes capables de détecter et de prévenir une large gamme de menaces, y compris les attaques DDoS, les intrusions réseau, le phishing, et les malwares.",
  },
  {
    question: "Comment garantissez-vous la confidentialité des données ?",
    answer:
      "Nous appliquons des techniques de chiffrement avancées et des politiques strictes de gestion des accès pour protéger la confidentialité de vos données.",
  },
  {
    question: "Offrez-vous des audits de sécurité ?",
    answer:
      "Oui, nous réalisons des audits de sécurité complets pour évaluer les vulnérabilités de vos systèmes et vous proposer des recommandations.",
  },
  {
    question: "Quel est le délai de réponse en cas d'incident ?",
    answer:
      "Nous avons une équipe dédiée pour répondre aux incidents de sécurité, avec des délais de réponse rapides pour minimiser les impacts.",
  },
  {
    question: "Proposez-vous des formations en cybersécurité ?",
    answer:
      "Oui, nous proposons des formations personnalisées pour sensibiliser vos équipes aux meilleures pratiques en matière de cybersécurité.",
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
            Questions Fréquemment Posées sur la Sécurité Web & Réseaux
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Voici les réponses aux questions les plus fréquentes concernant nos services de sécurité web et réseaux.
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