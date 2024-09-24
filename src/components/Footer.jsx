import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './../assets/images/logo/logo.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="w-full bg-gray-100 bg-opacity-90 shadow-md backdrop-blur-md dark:bg-[#0b1727]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-4 lg:grid-cols-6 md:gap-8 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="flex flex-col items-center justify-center mb-10 col-span-full lg:col-span-2 lg:mb-0">
            <Link to="/" className="">
              <motion.img
                src={Logo}
                alt="Congo Digital Services"
                className="w-auto h-10"
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </Link>
            <p className="py-8 text-sm text-center text-gray-500 dark:text-gray-300 lg:max-w-xs">
              Le partenaire privilégié pour transcender votre présence digitale. <br /> <br /> Vous avez des questions ?
            </p>
            <Link
              smooth
              to="/contact#top"
              className="py-2.5 px-5 h-9 block w-fit bg-second-color rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-second-color-2 lg:mx-0"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Pages */}
          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-7">Pages</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link to="/#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Accueil
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/about#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  À propos
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/services#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Services
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/portfolio#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Portefolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-7">Services</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link to="/services/web-mobile#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Développement Web & Mobile
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/services/marketing-digital#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Marketing Digital
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/services/infrastructures#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Développement d'Infrastructures Réseaux
                </Link>
              </li>
              <li>
                <Link to="/services/archives-numeriques#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Archives Numériques
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Continued */}
          <div className="text-left lg:mx-auto">
            <div className="md:pt-14 "></div>
            <ul className="text-sm transition-all duration-500">
             
             
              <li className="mb-6">
                <Link to="/services/recrutement#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Recrutement avec Congo Digital Job
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/services/formation#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-7">Contact</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="mailto:info@congo-digital.com" className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  info@congo-digital.com
                </a>
              </li>
              <li className="mb-6">
                <Link to="/contact#top" smooth className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  Formulaire de Contact
                </Link>
              </li>
              {/* Agences */}
              <li className="mb-6">
                <span className="block font-semibold text-gray-700 dark:text-gray-300">Agence de Brazzaville</span>
                10 rue Balou Constant, Bacongo la glacière <br />
                <a href="tel:+242067517070" className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  +242 06 751 70 70
                </a>
              </li>
              <li className="mb-6">
                <span className="block font-semibold text-gray-700 dark:text-gray-300">Agence de Pointe-Noire</span>
                10 rue Tiackson, MPITA <br />
                <a href="tel:+242067000000" className="text-gray-700 dark:text-gray-300 hover:text-first-color dark:hover:text-second-color">
                  +242 06 700 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 py-7 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 lg:justify-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ©<Link to="/#top" smooth>Congo Digital Services</Link> 2024, Tous droits réservés.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61561873021962"
                className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 dark:bg-gray-600 hover:bg-second-color"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/congo-digital-services/posts/?feedView=all"
                className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 dark:bg-gray-600 hover:bg-second-color"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
