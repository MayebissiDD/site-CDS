import React from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Laura Roreal',
      role: 'CEO, Lorem Ipsum',
      testimony: 'Congo Digital Services a transformé notre façon de travailler. Leur expertise est inégalée et leur dévouement à notre projet a été exceptionnel.',
      photo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Michael Jackson',
      role: 'Manager, Dolor Sit',
      testimony: 'Travailler avec Congo Digital Services a été une expérience formidable. Leur approche innovante a permis de répondre parfaitement à nos besoins.',
      photo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Karim Markova',
      role: 'Founder, Amet Inc.',
      testimony: 'Ils ont su comprendre nos défis et apporter des solutions efficaces et pérennes. Je recommande vivement leurs services.',
      photo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jean Dupuis',
      role: 'CTO, Consectetur',
      testimony: 'Leur expertise en transformation numérique est incomparable. Grâce à Congo Digital Services, nous avons pu franchir un cap important dans notre développement.',
      photo: 'https://via.placeholder.com/100',
    },
  ];

  const items = testimonials.map((testimonial, index) => (
    <motion.div
      key={index}
      className="relative p-6 mx-4 transition-all duration-200 bg-white border-t-4 rounded-lg shadow-lg border-second-color hover:border-first-color"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-20 h-20 mx-auto mb-4 border-4 rounded-full border-first-color"
        />
        <span className="absolute top-[-20px] left-[-10px] text-5xl text-second-color font-bold">“</span>
      </div>
      <p className="mb-4 italic text-gray-700 font-lato">
        {testimonial.testimony.length > 80 ? `${testimonial.testimony.slice(0, 80)}...` : testimonial.testimony}
      </p>
      <span className="absolute bottom-[-20px] right-[10px] text-5xl text-second-color font-bold">”</span>
      <div className="mt-4">
        <h4 className="mb-1 text-xl font-bold text-black-color font-poppins">{testimonial.name}</h4>
        <p className="text-sm text-gray-500 font-roboto">{testimonial.role}</p>
      </div>
    </motion.div>
  ));

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          className="mb-12 text-4xl font-bold md:text-5xl text-first-color"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ce que disent nos clients
        </motion.h2>
        <AliceCarousel
          items={items}
          autoPlay
          infinite
          autoPlayInterval={2000}
          animationDuration={600}
          disableDotsControls={false}
          disableButtonsControls={true}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1280: { items: 4 },
          }}
          mouseTracking
          touchTracking
          controlsStrategy="alternate"
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
