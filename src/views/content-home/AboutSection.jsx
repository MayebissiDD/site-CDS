import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img28 from './../../assets/images/img28.jpg';
import img25 from './../../assets/images/img25.jpg';
import img27 from './../../assets/images/img27.jpg';

const AboutSection = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const gallery = [
        {
            image: img28,
            alt: 'Image 1',
            description: 'Notre équipe de développement en formation.',
        },
        {
            image: img25,
            alt: 'Image 2',
            description: 'Notre équipe en plein projet Web.',
        },
        {
            image: img27,
            alt: 'Image 3',
            description: 'Une équipe technique jeune et pleine de potentiel.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [gallery.length]);

    return (
        <section className="py-16 relative font-lato">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
                <motion.div
                    className="grid items-center grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold leading-tight text-gray-900 font-montserrat">
                            À propos de <span className="text-second-color">Congo Digital Services</span>
                        </h2>
                        <p className="max-w-lg mt-4 text-lg leading-relaxed text-gray-700">
                            Nous sommes une équipe passionnée qui offre des solutions numériques innovantes pour propulser votre entreprise, en vous accompagnant dans votre transformation digitale grâce à notre expertise en développement web et mobile, marketing digital, infrastructures réseau, et archivage numérique.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="w-full h-64 md:h-72 lg:h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src={gallery[selectedImageIndex].image}
                                alt={gallery[selectedImageIndex].alt}
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            {gallery.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className="focus:outline-none"
                                >
                                    <img
                                        className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-lg shadow-md transition-transform transform hover:scale-110 ${selectedImageIndex === index ? 'border-4 border-second-color' : 'border-none'}`}
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                </button>
                            ))}
                        </div>
                        <p className="mt-4 text-center text-gray-700">
                            {gallery[selectedImageIndex].description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
