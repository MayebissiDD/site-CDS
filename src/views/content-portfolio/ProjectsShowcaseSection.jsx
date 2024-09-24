import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hwapic from './../../assets/images/portefolio/hwa.png';

function ProjectsShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Développement Web', 'Applications Mobiles', 'Branding', 'Archivage Numérique', 'Infrastructures Réseaux'];

  const projects = [
    {
      title: 'Projet Web A',
      description: 'Développement d\'un site e-commerce performant.',
      category: 'Développement Web',
      details: 'Détails du projet Web A : Création d\'un site e-commerce avec une intégration complète des paiements et une interface utilisateur moderne.',
      image: hwapic,
    },
    {
      title: 'Application Mobile B',
      description: 'Création d\'une application mobile native.',
      category: 'Applications Mobiles',
      details: 'Détails de l\'application Mobile B : Une application mobile native avec des fonctionnalités avancées telles que la géolocalisation et les notifications push.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Campagne Marketing C',
      description: 'Stratégie marketing digitale pour accroître la visibilité.',
      category: 'Branding',
      details: 'Détails de la Campagne Marketing C : Campagne complète incluant le SEO, les réseaux sociaux, et le marketing par email pour augmenter la visibilité.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Infrastructure Réseau D',
      description: 'Mise en place d\'un réseau sécurisé pour une entreprise.',
      category: 'Infrastructures Réseaux',
      details: 'Détails de l\'Infrastructure Réseau D : Déploiement d\'une infrastructure réseau sécurisée avec des VPN et des firewalls, assurant une connectivité stable et sécurisée.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Archivage Numérique E',
      description: 'Mise en place d\'un système d\'archivage numérique sécurisé.',
      category: 'Archivage Numérique',
      details: 'Détails du projet Archivage Numérique E : Numérisation des documents physiques et déploiement d\'une solution d\'archivage cloud sécurisée avec des accès contrôlés.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Solution de Backup F',
      description: 'Implémentation d\'un système de sauvegarde automatique des données.',
      category: 'Infrastructures Réseaux',
      details: 'Détails de la Solution de Backup F : Mise en place d\'une solution de sauvegarde en temps réel avec des points de restauration, assurant la protection continue des données critiques.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Archivage Numérique G',
      description: 'Système de gestion électronique de documents pour une entreprise.',
      category: 'Archivage Numérique',
      details: 'Détails du projet Archivage Numérique G : Développement et déploiement d\'un système GED permettant la gestion, le partage et la sécurisation des documents en entreprise.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Optimisation Réseau H',
      description: 'Optimisation des performances réseau d\'une grande entreprise.',
      category: 'Infrastructures Réseaux',
      details: 'Détails de l\'Optimisation Réseau H : Audit et optimisation des réseaux LAN/WAN, intégration de QoS pour prioriser le trafic critique, et amélioration de la sécurité réseau.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
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
            Présentation du Portfolio
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Découvrez nos derniers projets et succès.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mr-2 mb-2 ${
                activeCategory === category
                  ? 'bg-first-color text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-first-color hover:text-white'
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveProject(null); // Reset selected project when changing category
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid or Detailed View */}
        {activeProject === null ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group portfolio-item hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => handleProjectClick(index)}
              >
                <a href="#0">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-60"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 ease-in-out opacity-0 bg-gradient-to-r from-first-color to-second-color group-hover:opacity-70"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-between p-4">
                    <h3 className="text-lg font-medium text-black-color group-hover:text-gray-dark">
                      {project.title}
                    </h3>
                    <span className="text-sm font-bold text-second-color group-hover:text-first-color">
                      {project.category}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex">
            {/* Sidebar - Projects List */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`p-4 mb-4 border rounded-md cursor-pointer transition-all duration-300 ${
                    activeProject === index ? 'bg-first-color text-white' : 'bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(index)}
                >
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  {activeProject === index && (
                    <p className="mt-2 text-sm">{project.description}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Main Content - Project Details */}
            <div className="w-full pl-8 md:w-2/3 lg:w-3/4">
              <motion.div
                className="p-8 border rounded-md shadow-md bg-gray-50"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="mb-4 rounded-md shadow-md"
                />
                <h2 className="mb-4 text-2xl font-bold text-first-color">
                  {projects[activeProject].title}
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                  {projects[activeProject].details}
                </p>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 mt-4 text-sm text-white transition-all duration-300 rounded-full bg-second-color hover:bg-first-color"
                >
                  Fermer
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsShowcaseSection;
