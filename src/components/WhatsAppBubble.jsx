import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppQR from './../assets/images/whatsppqr.jpg'; // Importation de l'image du QR code

function WhatsAppBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setShowMessage(true);
        }, 3000);

        const hideMessageTimer = setTimeout(() => {
            setShowMessage(false);
        }, 9000);

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(messageTimer);
            clearTimeout(hideMessageTimer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/242067517070', '_blank'); // Numéro WhatsApp avec code pays
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed z-50 flex flex-col items-end space-y-4 bottom-14 right-8">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col justify-between h-auto p-4 text-gray-800 bg-white rounded-lg shadow-lg w-80"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Bonjour{' '}👋</h2>
                            <button onClick={handleToggle} className="text-gray-600">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className="flex-grow mt-4 overflow-auto">
                            <p className="text-sm">
                                Comment pouvons-nous vous aider ? Envoyez-nous un message et nous vous répondrons dès que possible.
                            </p>
                        </div>
                        <img
                            src={WhatsAppQR} // Ajout de l'image du QR code
                            alt="QR code WhatsApp"
                            className="w-full h-auto mt-4 rounded-md"
                        />
                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full p-3 mt-4 font-semibold text-center text-white duration-300 rounded-md hover:bg-second-color bg-first-color"
                        >
                            Envoyer un message WhatsApp
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showMessage && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 text-gray-800 transition-opacity duration-300 ease-in-out bg-white rounded-lg shadow-lg"
                    >
                        Cliquez pour discuter avec nous
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center space-x-4">
                <AnimatePresence>
                    {showScrollToTop && (
                        <motion.button
                            onClick={handleScrollToTop}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out rounded-full shadow-lg bg-first-color hover:bg-first-color-2 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white" />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={handleToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-14 h-14 transition duration-300 ease-in-out bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl text-white" />
                </motion.button>
            </div>
        </div>
    );
}

export default WhatsAppBubble;
