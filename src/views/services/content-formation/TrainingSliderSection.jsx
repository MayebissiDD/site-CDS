import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Exemple d'images (tu peux remplacer par tes propres images)
const images = {
  'Marketing digital': 'https://via.placeholder.com/400x300?text=Marketing+Digital',
  'Programmation web': 'https://via.placeholder.com/400x300?text=Programmation+Web',
  'Initiation au réseaux IT': 'https://via.placeholder.com/400x300?text=Réseaux+IT',
  'Transformation digital': 'https://via.placeholder.com/400x300?text=Transformation+Digitale',
  'Gestion de projets informatiques': 'https://via.placeholder.com/400x300?text=Projets+Informatiques',
  'Nouvelles approches RH': 'https://via.placeholder.com/400x300?text=Approches+RH',
  'Intégration de l\'IA dans le monde Professionnel': 'https://via.placeholder.com/400x300?text=IA+dans+le+Monde+Pro'
};

function TrainingSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Données des formations
  const trainings = [
    {
      title: 'Marketing digital',
      description: 'Découvrez les stratégies pour promouvoir votre marque en ligne.',
      status: 'En cours',
    },
    {
      title: 'Programmation web',
      description: 'Maîtrisez les langages du web et créez des sites interactifs.',
      status: 'Terminé',
    },
    {
      title: 'Initiation au réseaux IT',
      description: 'Apprenez les bases des réseaux et la gestion des infrastructures IT.',
      status: 'En cours',
    },
    {
      title: 'Transformation digital',
      description: 'Explorez les processus de transformation numérique dans les entreprises.',
      status: 'En cours',
    },
    {
      title: 'Gestion de projets informatiques',
      description: 'Comprenez les outils et méthodes pour mener à bien des projets IT.',
      status: 'Terminé',
    },
    {
      title: 'Nouvelles approches RH',
      description: 'Adaptez-vous aux nouvelles méthodes de gestion des ressources humaines.',
      status: 'En cours',
    },
    {
      title: 'Intégration de l\'IA dans le monde Professionnel',
      description: 'Découvrez comment l\'IA change le paysage professionnel.',
      status: 'En cours',
    },
  ];

  // Fonction pour aller au slide suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trainings.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour aller au slide précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trainings.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* En-tête de section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl text-first-color font-montserrat">
            Nos Formations Professionnalisantes
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 md:text-xl font-lato">
            Que vous soyez étudiant ou professionnel, découvrez nos formations conçues pour vous permettre de progresser dans votre carrière.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {trainings.map((training, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="p-6 bg-white text-center rounded-lg shadow-lg">
                  <div className="relative mb-4">
                    <img
                      src={images[training.title]} // Utilisation de l'image correspondante
                      alt={training.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-second-color">{training.title}</h3>
                  <p className="mt-2 text-gray-600">{training.description}</p>
                  <p className="mt-2 font-semibold">
                    Statut : <span className="text-green-500">{training.status}</span>
                  </p>
                  <a
                    href="/inscription"
                    className="mt-4 inline-block px-6 py-2 text-white bg-second-color rounded-md hover:bg-second-color-2 transition duration-300"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton précédent */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
          >
            ◀
          </button>

          {/* Bouton suivant */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrainingSliderSection;
