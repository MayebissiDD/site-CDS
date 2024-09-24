import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faThumbsUp, faBullseye, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function KeyMetricsSection() {
  const metrics = [
    {
      title: 'Projets Réalisés',
      value: 150,
      description: 'Projets menés à bien avec succès pour nos clients.',
      icon: faChartLine,
    },
    {
      title: 'Clients Satisfaits',
      value: 100,
      description: 'Clients satisfaits de nos services dans différents secteurs.',
      icon: faThumbsUp,
    },
    {
      title: "Années d'Expérience",
      value: 10,
      description: "Une décennie d'expertise dans le domaine du numérique.",
      icon: faBullseye,
    },
    {
      title: 'Taux de Retention',
      value: 95,
      description: 'Clients qui continuent de collaborer avec nous.',
      icon: faBriefcase,
    },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      metrics.forEach((metric, index) => {
        const end = metric.value;
        const incrementTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < end) {
              newCounts[index] = newCounts[index] + 1;
            } else {
              clearInterval(timer);
            }
            return newCounts;
          });
        }, incrementTime);
      });
    }
  }, [isInView, metrics]);

  return (
    <section ref={ref} className="py-16 bg-first-color relative overflow-hidden">
      {/* Animation de fond diagonal */}
      <motion.div
        className="absolute inset-0 bg-first-color"
        initial={{ x: '-100%', y: '-100%' }}
        animate={{ x: '0%', y: '0%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{ zIndex: -1 }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-white font-montserrat">
            Indicateurs Clés
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-white md:text-xl font-lato">
            Découvrez les chiffres qui illustrent notre succès et notre impact.
          </p>
        </motion.div>

        {/* Conteneur des indicateurs */}
        <motion.div
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Zoom plus lent sur l'icône uniquement au survol
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="mb-2 text-5xl text-second-color">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }} // Animation de zoom lent sur l'icône
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    <FontAwesomeIcon icon={metric.icon} />
                  </motion.div>
                </div>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {counts[index]}
                  {metric.title === 'Taux de Retention' ? '%' : '+'}
                </h3>
                <h4 className="mb-1 text-lg font-semibold text-white">
                  {metric.title}
                </h4>
                <p className="text-white text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default KeyMetricsSection;
