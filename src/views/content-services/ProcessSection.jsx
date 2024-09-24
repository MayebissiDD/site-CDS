import React from 'react';
import { motion } from 'framer-motion';

function ProcessSection() {
  const steps = [
    {
      title: 'Analyse des Besoins',
      description: 'Nous commençons par une analyse approfondie des besoins de votre entreprise pour bien comprendre vos objectifs et défis.',
      image: 'https://img.freepik.com/free-photo/analysis-banking-finance-graph-chart-report_1418-2135.jpg?w=826&t=st=1694049614~exp=1694050214~hmac=bd48d9783b3ba63da52d52637f0d1949005ad1f1d12112365d4ff89d83ae689f',
    },
    {
      title: 'Planification Stratégique',
      description: 'Nous élaborons un plan stratégique sur mesure pour aligner les solutions numériques avec vos objectifs.',
      image: 'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?w=740&t=st=1694605816~exp=1694606416~hmac=ce47a33b2f1dcfdb742a16a5f396a249a3387dbf0b3129e2fd6d07e961329f14',
    },
    {
      title: 'Développement et Implémentation',
      description: 'Nos experts développent et mettent en œuvre des solutions performantes, tout en garantissant la qualité et la fiabilité.',
      image: 'https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=740&t=st=1694049680~exp=1694050280~hmac=4e228387e71ba8be54f50418b284c0ad13c6af265e44b1e4b544a47ed9db611e',
    },
    {
      title: 'Suivi et Optimisation',
      description: 'Nous assurons un suivi continu et optimisons les solutions pour garantir une performance maximale.',
      image: 'https://img.freepik.com/photos-gratuite/employes-bureau-utilisant-graphiques-financiers_23-2150408674.jpg?t=st=1725983405~exp=1725987005~hmac=d57f1bad3af0bd5e19cebd1221f273d7bfec6a2eaf044fb1e50761771fcb5404&w=900', // Nouvelle image
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-4xl font-bold md:text-5xl text-first-color">
          Notre Processus de Travail
            </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Suivez notre méthode éprouvée pour transformer vos idées en solutions concrètes.
          </p>
        </motion.div>

        {/* Chain Layout */}
        <div className="relative"> 
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-16">
              {/* Image Section */}
              <motion.div
                className={`md:w-1/2 overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }} // Animation correcte au survol
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 md:mt-0">
                  <div className="w-1 bg-first-color h-16"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
