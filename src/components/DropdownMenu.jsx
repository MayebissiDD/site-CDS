import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => setIsOpen(false), 200);
    };

    const handleMouseMove = (e) => {
        if (dropdownRef.current) {
            dropdownRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
            dropdownRef.current.style.marginLeft = `${e.currentTarget.offsetWidth / 2}px`;
        }
    };

    return (
        <div className="relative" onMouseLeave={handleMouseLeave}>
            <button
                className={`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ${isOpen ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
            >
                <span>{label}</span>
                <FontAwesomeIcon icon={faChevronDown} className={`ml-1 transform transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={dropdownRef}
                        className="absolute top-0 pt-3 duration-200 ease-out -translate-x-1/2 translate-y-11"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <div className="bg-white border rounded-md shadow-sm border-neutral-200/70">
                            <div className="flex justify-center w-full p-6 space-x-3">
                                {items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="block mb-1 font-medium text-black">{item.title}</span>
                                        <span className="block text-sm leading-5 opacity-50">{item.description}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;
