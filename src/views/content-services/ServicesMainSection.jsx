import React from 'react';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
// Importation des images
import picimg1 from './../../assets/images/service/img1.jpg';
import picimg2 from './../../assets/images/service/img2.jpg';
import picimg3 from './../../assets/images/service/img3.jpg';
import picimg4 from './../../assets/images/service/img4.jpg';
import picimg5 from './../../assets/images/service/img5.jpg';
import picimg6 from './../../assets/images/service/img6.jpg';

// Suppression de la deuxième importation redondante de picimg5

function ServicesMainSection() {
  const services = [
    {
      title: 'Développement Web & Mobile',
      description: 'Créez des applications performantes et des sites web sur mesure pour répondre aux besoins spécifiques de votre entreprise.',
      examples: 'Exemples : Sites e-commerce, applications mobiles personnalisées, portails d’entreprise.',
      image: picimg1,
      route: '/services/web-mobile#top',
    },
    {
      title: 'Marketing Digital',
      description: 'Boostez votre visibilité en ligne avec des stratégies marketing innovantes et ciblées.',
      examples: 'Exemples : Campagnes publicitaires sur les réseaux sociaux, optimisation SEO, email marketing.',
      image: picimg2,
      route: '/services/marketing-digital#top',
    },
    {
      title: 'Développement d\'Infrastructures Réseaux',
      description: 'Déployez et gérez des réseaux robustes et sécurisés pour assurer la continuité de vos opérations.',
      examples: 'Exemples : Installation de réseaux LAN, solutions VPN, déploiement de Wi-Fi sécurisé.',
      image: picimg3,
      route: '/services/infrastructures#top',
    },
    {
      title: 'Archives Numériques',
      description: 'Sécurisez et organisez vos documents avec des solutions d’archivage numérique avancées.',
      examples: 'Exemples : Gestion électronique de documents, archivage cloud sécurisé, numérisation de documents.',
      image: picimg4,
      route: '/services/archives-numeriques#top',
    },
    {
      title: 'Recrutement & Consulting',
      description: 'Nous vous aidons à trouver les talents qu’il vous faut tout en vous apportant des conseils stratégiques.',
      examples: 'Exemples : Recrutement IT, conseil en organisation, chasse de tête.',
      image: picimg5,  // Remplacez ceci par une autre image si nécessaire
      route: '/services/recrutement#top',
    },
    {
      title: 'Formations',
      description: 'Développez les compétences de votre équipe grâce à nos programmes de formation spécialisés.',
      examples: 'Exemples : Formations en développement web, certifications réseau, ateliers de marketing digital.',
      image: picimg6,  // Image associée à ce service ou changez-la si besoin
      route: '/services/formation#top',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-4xl font-bold md:text-5xl text-first-color">
            Nos Services Professionnels
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nos services peuvent transformer votre activité et vous permettre d'atteindre vos objectifs plus rapidement.
          </p>
        </motion.div>

        {/* Cards for services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Service Details */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-sm text-gray-500 mt-2 italic">
                  {service.examples}
                </p>
              </div>

              {/* Button to details */}
              <div className="p-6 pt-0">
                <Link smooth to={service.route}>
                  <button className="w-full px-6 py-2 text-white bg-first-color rounded-full hover:bg-second-color transition-colors">
                    Voir les détails
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesMainSection;
