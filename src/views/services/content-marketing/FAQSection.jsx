import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels services de marketing digital proposez-vous ?",
    answer:
      "Nous proposons une gamme complète de services de marketing digital, incluant le SEO, le marketing de contenu, la gestion des réseaux sociaux, les campagnes publicitaires en ligne, et l'email marketing.",
  },
  {
    question: "Combien de temps faut-il pour voir les résultats d'une campagne de marketing digital ?",
    answer:
      "Les résultats peuvent varier en fonction des objectifs et des stratégies employées. En général, vous pouvez commencer à voir des améliorations notables après 3 à 6 mois de campagnes cohérentes.",
  },
  {
    question: "Comment mesurez-vous le succès des campagnes de marketing digital ?",
    answer:
      "Nous utilisons des indicateurs clés de performance (KPI) tels que le taux de conversion, le trafic sur le site web, l'engagement sur les réseaux sociaux, et le retour sur investissement (ROI) pour mesurer le succès des campagnes.",
  },
  {
    question: "Offrez-vous un support continu après le lancement d'une campagne ?",
    answer:
      "Oui, nous offrons un support continu pour optimiser vos campagnes en fonction des performances et ajuster les stratégies pour obtenir les meilleurs résultats possibles.",
  },
  {
    question: "Quels sont les coûts associés à vos services de marketing digital ?",
    answer:
      "Les coûts varient en fonction de la portée des services et des objectifs spécifiques. Nous proposons des solutions sur mesure adaptées à divers budgets, tout en garantissant un impact maximal.",
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
            Voici les réponses aux questions les plus courantes concernant nos services de marketing digital.
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
