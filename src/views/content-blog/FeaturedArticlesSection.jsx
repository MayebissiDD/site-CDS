import React from 'react';
import { motion } from 'framer-motion';

function FeaturedArticlesSection() {
  const articles = [
    {
      title: "Les Tendances du Marketing Digital en 2024",
      description: "Découvrez les dernières tendances du marketing digital pour rester compétitif dans un marché en constante évolution.",
      image: "https://via.placeholder.com/400",
      link: "/blog/tendances-marketing-digital-2024",
    },
    {
      title: "Les Meilleures Pratiques en Développement Web",
      description: "Apprenez les meilleures pratiques en développement web pour créer des sites performants et sécurisés.",
      image: "https://via.placeholder.com/400",
      link: "/blog/meilleures-pratiques-developpement-web",
    },
    {
      title: "Comment Optimiser la Sécurité de Votre Réseau",
      description: "Découvrez des stratégies efficaces pour protéger votre réseau contre les cyberattaques.",
      image: "https://via.placeholder.com/400",
      link: "/blog/optimiser-securite-reseau",
    },
  ];

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
            Articles en Vedette
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Explorez nos articles les plus récents et pertinents pour vous tenir informé des dernières tendances et meilleures pratiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <a href={article.link}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-black-color">{article.title}</h3>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticlesSection;
