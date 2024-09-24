import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from './../assets/images/logo/logo.png';

const routes = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Portefolio", href: "/portfolio" },
    //{ name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

// const languageOptions = [
//     { code: "fr", name: "FR", flag: "https://flagcdn.com/w20/fr.png" },
//     { code: "en", name: "EN", flag: "https://flagcdn.com/w20/gb.png" },
//     // Ajoutez d'autres langues ici
// ];

const NavMenu = ({ routes, isMobile, closeMenu }) => {
    const location = useLocation();

    return (
        <motion.ul
            initial={{ opacity: 0, x: isMobile ? "-100%" : 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isMobile ? "-100%" : 0 }}
            transition={{ duration: 0.5 }}
            className={`${
                isMobile
                    ? "flex flex-col justify-center items-center text-2xl gap-6 fixed inset-0 bg-white dark:bg-[#0b1727] z-10"
                    : "flex flex-row gap-6 items-center"
            }`}
        >
            {isMobile && (
                <li className="absolute right-2 top-3">
                    <button onClick={closeMenu} className="text-3xl text-gray-800 dark:text-gray-200">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </li>
            )}
            {routes.map((route, i) => (
                <motion.li
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`${
                        location.pathname === route.href
                            ? "text-first-color dark:text-second-color font-semibold"
                            : "text-gray-800 dark:text-gray-200 hover:text-first-color dark:hover:text-second-color transition-colors duration-300"
                    }`}
                >
                    <Link
                        smooth
                        to={`${route.href}#top`}
                        onClick={isMobile ? closeMenu : undefined}
                    >
                        {route.name}
                    </Link>
                </motion.li>
            ))}
            {/* <LanguageSelector /> */}
        </motion.ul>
    );
};

// const LanguageSelector = () => {
//     const [selectedLang, setSelectedLang] = useState(languageOptions[0]);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const handleLanguageChange = (lang) => {
//         setSelectedLang(lang);
//         setDropdownOpen(false);
//         // Ici vous pouvez ajouter une logique pour changer la langue de l'application
//     };

//     return (
//         <div className="relative">
//             <button
//                 className="flex items-center gap-2 focus:outline-none"
//                 onClick={() => setDropdownOpen(!isDropdownOpen)}
//             >
//                 <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-5" />
//                 <span className="text-gray-800 dark:text-gray-200">{selectedLang.name}</span>
//             </button>
//             <AnimatePresence>
//                 {isDropdownOpen && (
//                     <motion.ul
//                         initial={{ opacity: 0, y: -10, x: 0 }}
//                         animate={{ opacity: 1, y: 0, x: '-15%' }}
//                         exit={{ opacity: 0, y: -10, x: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute z-50 mt-2 bg-white dark:bg-[#0b1727] shadow-lg pe-3 items-center flex flex-col justify-center rounded-md"
//                     >
//                         {languageOptions.map((lang) => (
//                             <li
//                                 key={lang.code}
//                                 onClick={() => handleLanguageChange(lang)}
//                                 className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
//                             >
//                                 <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
//                                 <span className="text-gray-800 dark:text-gray-200">{lang.name}</span>
//                             </li>
//                         ))}
//                     </motion.ul>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

const AppBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <header className="z-50 bg-white dark:bg-[#0b1727] shadow-md">
            <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
                <Link smooth to="/" className="flex items-center">
                    <motion.img
                        src={Logo}
                        alt="Congo Digital Services"
                        className="w-auto h-10"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <div className="flex flex-col items-center ml-3">
                        <span className="text-lg font-bold text-second-color dark:text-first-color">
                            Congo Digital
                        </span>
                        <span className="text-lg font-bold text-first-color dark:text-second-color">
                            Services
                        </span>
                    </div>
                </Link>
                <div className="flex items-center">
                    <div className="hidden lg:flex">
                        <NavMenu routes={routes} isMobile={false} />
                    </div>
                    <button
                        className="ml-4 lg:hidden focus:outline-none"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <FontAwesomeIcon
                            icon={isMobileMenuOpen ? faTimes : faBars}
                            className="text-2xl text-gray-800 dark:text-gray-200"
                        />
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed z-[52] top-0 left-0 w-full h-screen bg-white dark:bg-[#0b1727] lg:hidden"
                    >
                        <NavMenu routes={routes} isMobile={true} closeMenu={closeMenu} />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default AppBar;
