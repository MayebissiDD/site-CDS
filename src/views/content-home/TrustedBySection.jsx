import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import img9 from './../../assets/images/comment/img9.jpg';
import img7 from './../../assets/images/comment/img7.jpg';
import kaylenbLogo from './../../assets/images/partner/kaylenb.png';
import wymeebLogo from './../../assets/images/partner/wymeeb.png';

export default function CompleteSection() {
    const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: partnersRef, inView: partnersInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const testimonials = [
        {
            title: "MEILLEURE ENTREPRISE",
            quote: "Une équipe à l'écoute, avec des solutions innovantes qui ont transformé notre entreprise. Je recommande vivement !",
            name: "Aristide MATIAS",
            company: "Commerciant",
            image: img9,
        },
        {
            title: "EXCELLENT SUPPORT",
            quote: "Nous avons apprecié de travailler avec vous. Je recommande vivement !",
            name: "Alfred MABIALA",
            company: "",
            image: img7,
        },
        {
            title: "RAPIDE ET FIABLE",
            quote: "Une équipe à l'écoute, avec des solutions innovantes qui ont transformé notre entreprise. Je recommande vivement !",
            name: "KARIM MARKOVA",
            company: "Lorem Company",
            image: img9,
        },
    ];

    const partners = [
        { name: 'Kaylen', image: kaylenbLogo, link: 'https://www.kaylen.fr' },
        { name: 'Wymee', image: wymeebLogo, link: 'https://www.wymee.xyz' },
    ];

    return (
        <div>
            {/* Testimonials Section */}
            {/* <section ref={testimonialsRef} className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-2"
                        initial="initial"
                        animate={testimonialsInView ? "animate" : "initial"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        CE QUE NOS CLIENTS <span className="text-first-color">DISENT</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mb-12"
                        initial="initial"
                        animate={testimonialsInView ? "animate" : "initial"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Voici quelques témoignages de nos clients satisfaits
                    </motion.p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg p-6 rounded-lg max-w-sm mx-auto"
                                variants={fadeInUp}
                                initial="initial"
                                animate={testimonialsInView ? "animate" : "initial"}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                            >
                                <div className="text-left">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="text-first-color text-2xl" />
                                    <p className="text-gray-700 mt-4">{testimonial.quote}</p>
                                    <FontAwesomeIcon icon={faQuoteRight} className="text-first-color text-2xl float-right" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Partners Section */}
            <section ref={partnersRef} className="bg-second-color py-16 text-white">
                <div className="container mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-bold text-white-900 mb-8"
                        initial="initial"
                        animate={partnersInView ? "animate" : "initial"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        Nos partenaires de confiance
                    </motion.h2>
                    <motion.p
                        className="text-white-600 mb-12"
                        initial="initial"
                        animate={partnersInView ? "animate" : "initial"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Nous collaborons avec des entreprises leaders dans leur secteur pour offrir des solutions innovantes et fiables.
                    </motion.p>
                    <div className="flex justify-center flex-wrap gap-8">
                        {partners.map((partner, index) => (
                            <motion.a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="transition duration-300 ease-in-out hover:text-white" // Modification : suppression de la couleur bleu de hover
                                initial="initial"
                                animate={partnersInView ? "animate" : "initial"}
                                variants={fadeInUp}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <img src={partner.image} alt={partner.name} className="h-16" />
                                <p className="mt-2">{partner.name}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
