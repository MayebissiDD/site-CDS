import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section ref={sectionRef} className="bg-white py-16" id="contact">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        NOS <span className="text-second-color">CONTACTS</span>
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-base leading-7 text-gray-600 sm:mt-6"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Contactez-nous pour toute question ou demande.
                    </motion.p>
                </div>

                <div className="flex flex-wrap items-stretch justify-center">
                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                        }}
                    >
                        {/* Bloc Informations */}
                        <motion.div variants={itemVariants} className="h-full pr-8 p-16">
                            <ul>
                                {/* Adresses */}
                                <motion.li variants={itemVariants} className="flex mb-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-first-color text-white">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Nos Adresses</h3>
                                        <p className="text-lg text-gray-900">Brazzaville</p>
                                        <p className="text-gray-600">10 Rue Constant Balou, Bacongo La Glacière</p>
                                        <p className="text-lg text-gray-900">Pointe-Noire</p>
                                        <p className="text-gray-600">10 Rue Tiackson, MPITA</p>
                                    </div>
                                </motion.li>

                                {/* Contacts */}
                                <motion.li variants={itemVariants} className="flex mb-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-first-color text-white">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Nos Contacts</h3>
                                        <p className="text-gray-900">Brazzaville :</p>
                                        <p className="text-gray-600">+242 06 751 70 70 | info@congo-digital.com</p>
                                        <p className="text-gray-900">Pointe-Noire :</p>
                                        <p className="text-gray-600"> +242 06 700 00 00 | info@congo-digital.com</p>
                                    </div>
                                </motion.li>

                                {/* Horaires */}
                                <motion.li variants={itemVariants} className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-first-color text-white">
                                        <FontAwesomeIcon icon={faClock} className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Horaires</h3>
                                        <p className="text-gray-600">Lundi - Vendredi: 08:30 - 17:00</p>
                                    </div>
                                </motion.li>
                            </ul>
                        </motion.div>

                        {/* Bloc Formulaire */}
                        <motion.div
                            variants={itemVariants}
                            className="card h-fit max-w-6xl p-5 md:p-12"
                            id="form"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">Prêt à commencer ?</h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="text"
                                            id="name"
                                            autoComplete="given-name"
                                            placeholder="Votre nom"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-700 sm:mb-0"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="email"
                                            id="email"
                                            autoComplete="email"
                                            placeholder="Votre adresse email"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-700 sm:mb-0"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <textarea
                                            id="textarea"
                                            name="textarea"
                                            cols="30"
                                            rows="5"
                                            placeholder="Écrivez votre message..."
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-700 sm:mb-0"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-first-color text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Envoyer le message
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
