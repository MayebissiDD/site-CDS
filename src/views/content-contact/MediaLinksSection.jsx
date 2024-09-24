import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function MediaLinksSection() {
  const mediaLinks = [
    {
      name: 'Facebook',
      icon: faFacebookF,
      link: 'https://www.facebook.com/profile.php?id=61561873021962',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      link: 'https://www.linkedin.com/company/congo-digital-services/posts/?feedView=all',
    },
    // {
    //   name: 'Instagram',
    //   icon: faInstagram,
    //   link: 'https://www.instagram.com',
    // },
    // {
    //   name: 'YouTube',
    //   icon: faYoutube,
    //   link: 'https://www.youtube.com',
    // },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-first-color mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Suivez-nous sur les réseaux sociaux
        </motion.h2>
        <div className="flex justify-center gap-8">
          {mediaLinks.map((media, index) => (
            <motion.a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-first-color text-white text-3xl w-16 h-16 flex items-center justify-center rounded-full border-4 border-white shadow-lg hover:bg-second-color hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FontAwesomeIcon icon={media.icon} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaLinksSection;
