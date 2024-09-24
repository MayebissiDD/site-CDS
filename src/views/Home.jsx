import React, { useEffect } from 'react';
import 'particles.js/particles';
import AppBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from './content-home/ServiceSection';
import HeroSection from './content-home/HeroSection';
import AboutSection from './content-home/AboutSection';
import WhyChooseSection from './content-home/WhyChooseSection';
import TrustedPartnersSection from './content-home/TrustedBySection';
import ContactSection from './content-home/ContactSection';



const Home = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        color: {
          value: ['#0B519B', '#EA5B0C'],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          out_mode: 'out',
        },
        line_linked: {
          enable: true,
          distance: 50,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
            duration : 0.4,
            distance: 10,
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <>
      <AppBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection/>
      <TrustedPartnersSection/>
      <ContactSection/>
      <Footer />
    </>
  );
};

export default Home;
