import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Comment fonctionne le parsing de CV ?",
    answer:
      "Le parsing de CV permet d'extraire automatiquement les informations clés des CV, telles que les compétences, les expériences professionnelles, et les formations, afin de faciliter le processus de sélection.",
  },
  {
    question: "En quoi consiste le matching CV-Job ?",
    answer:
      "Le matching CV-Job utilise des algorithmes avancés pour comparer les CV des candidats aux exigences des offres d’emploi, garantissant ainsi une adéquation optimale entre les profils et les postes.",
  },
  {
    question: "Quelles mesures prenez-vous pour assurer la sécurité des données ?",
    answer:
      "Nous appliquons des protocoles de sécurité rigoureux, incluant le chiffrement des données, pour protéger les informations personnelles des candidats et des entreprises.",
  },
  {
    question: "Puis-je intégrer vos services à mon système RH existant ?",
    answer:
      "Oui, nos solutions peuvent être intégrées à vos systèmes RH existants via nos API, vous permettant de centraliser et d’automatiser vos processus de recrutement.",
  },
  {
    question: "Quels sont les coûts associés à vos services ?",
    answer:
      "Les coûts varient en fonction des services et des fonctionnalités que vous souhaitez utiliser. Nous proposons des options flexibles pour s’adapter à différents besoins et budgets.",
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