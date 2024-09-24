import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 text-white bg-gray-800 shadow-lg"
        >
          <div className="container flex items-center justify-between mx-auto">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-6 h-6 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
              <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter ou refuser les cookies.
              </p>
            </div>
            <div className="flex gap-4">
              <motion.button
                className="px-4 py-2 text-sm font-semibold rounded-md bg-first-color"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAccept}
              >
                Accepter
              </motion.button>
              <motion.button
                className="px-4 py-2 text-sm font-semibold bg-red-500 rounded-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReject}
              >
                Refuser
              </motion.button>
            </div>
          </div>
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-first-color to-second-color"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
