import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels types de solutions réseaux proposez-vous ?",
    answer:
      "Nous offrons une gamme complète de solutions réseaux, incluant la conception d'architectures réseau, la sécurité, la virtualisation, et les infrastructures de data centers.",
  },
  {
    question: "Combien de temps faut-il pour déployer une infrastructure réseau ?",
    answer:
      "Le temps de déploiement varie en fonction de la complexité du projet. Cela peut aller de quelques semaines pour une infrastructure simple à plusieurs mois pour des projets plus complexes.",
  },
  {
    question: "Quelles technologies réseau utilisez-vous ?",
    answer:
      "Nous utilisons des technologies de pointe comme Cisco, Juniper, VMware, et des solutions cloud telles que AWS et Azure, adaptées à vos besoins spécifiques.",
  },
  {
    question: "Offrez-vous un support après la mise en place de l'infrastructure réseau ?",
    answer:
      "Oui, nous fournissons un support continu et des services de maintenance pour garantir que votre infrastructure réseau reste performante et sécurisée.",
  },
  {
    question: "Quels sont les coûts associés à vos services ?",
    answer:
      "Les coûts dépendent de la portée du projet. Nous proposons des solutions sur mesure, adaptées à vos besoins et à votre budget.",
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
            Voici les réponses aux questions que nos clients nous posent le plus souvent au sujet de nos solutions réseau.
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
