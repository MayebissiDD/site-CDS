import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck as circleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faGaugeHigh as gauge } from '@fortawesome/free-solid-svg-icons/faGaugeHigh';
import { faBrain as brain } from '@fortawesome/free-solid-svg-icons/faBrain';

export default function WhyChooseSection() {
    const choose = [
        {
            title: "Service de haute qualité",
            icon: circleCheck,
            desc: "Nous offrons des services de qualité, répondant aux attentes clients avec professionnalisme.",
        },
        {
            title: "Style de travail agile et rapide",
            icon: gauge,
            desc: "Notre approche est agile pour des solutions rapides et adaptées.",
        },
        {
            title: "Nous sommes experts",
            icon: brain,
            desc: "Nous utilisons des meilleures technologies web pour concrétiser vos idées.",
        },
    ];

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="choose" className="bg-white py-10 md:py-20">
            <div className="px-6 mx-auto max-w-7xl">
                <div className="text-center">
                    <span className="text-second-color my-3 font-medium uppercase tracking-wider">
                        Pourquoi nous choisir ?
                    </span>
                    <motion.h2
                        className="block w-full bg-gradient-to-b from-first-color-2 to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Parce que nous offrons des solutions numériques sur mesure, taillées pour votre succès
                    </motion.h2>
                    <motion.p
                        className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Nous visons à redéfinir le développement numérique en offrant des solutions sur mesure alliant créativité, innovation, et excellence technique.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"
                    ref={sectionRef}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {choose.map((item, index) => (
                        <motion.div
                            key={index}
                            className="rounded-md border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-first-color-2 text-white">
                                <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="mt-4 text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
