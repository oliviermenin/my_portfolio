import React from 'react';
import { motion } from 'framer-motion';
import CV from './../../assets/CV/CV.pdf';

export default function Hero() {
  return (
    <section id="accueil" className="h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Bonjour, je suis <span className="text-orange-300">Olivier Bazou MENIN</span></h1>
        <p className="text-xl md:text-2xl mb-8">Développeur Web Full Stack</p>
        
        <div className="flex space-x-4 justify-center">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.button>
          
          <motion.a
            href={CV}
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Télécharger mon CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
